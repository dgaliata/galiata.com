'use client'

import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Twemoji } from '~/components/ui/twemoji'

const MAX_REACTIONS = 10

const REACTIONS: Array<{ emoji: string; key: string }> = [
  {
    emoji: 'sparkling-heart',
    key: 'loves',
  },
  {
    emoji: 'clapping-hands',
    key: 'applauses',
  },
  {
    emoji: 'bullseye',
    key: 'bullseyes',
  },
  {
    emoji: 'light-bulb',
    key: 'ideas',
  },
]

export function Reactions({
  type,
  slug,
  className,
}: {
  type: string  // Simplified to 'string' since you aren't using a database
  slug: string
  className?: string
}) {
  const [stats, setStats] = useState<{ [key: string]: number }>({
    loves: 0,
    applauses: 0,
    bullseyes: 0,
    ideas: 0,
  })
  const [reactions, setReactions] = useState<{ [key: string]: number }>({})
  const [initialReactions, setInitialReactions] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(`${type}/${slug}`) || '{}')
      setInitialReactions(data)
      setReactions(data)
    } catch (e) {
      console.error('Error reading from localStorage:', e)
    }
  }, [type, slug])

  function handleChange(key: string) {
    const updatedReactions = { ...reactions, [key]: stats[key] + reactions[key] - initialReactions[key] }
    setReactions(updatedReactions)
    localStorage.setItem(`${type}/${slug}`, JSON.stringify(updatedReactions))
  }

  return (
    <div className={clsx('flex items-center gap-6', className)}>
      {REACTIONS.map(({ key, emoji }) => (
        <Reaction
          key={key}
          path={`${type}/${slug}`}
          react={{ emoji, key }}
          value={stats[key] + (reactions[key] || 0) - (initialReactions[key] || 0)}
          reactions={reactions[key] || 0}
          onReact={(v) => setReactions((r) => ({ ...r, [key]: v }))}
          onSave={() => handleChange(key)}
        />
      ))}
    </div>
  )
}

function Reaction({
  path,
  react,
  value,
  reactions,
  onReact,
  onSave,
}: {
  path: string
  react: { emoji: string; key: string }
  value: string | number
  reactions: number
  onReact: (v: number) => void
  onSave: () => void
}) {
  const { emoji, key } = react
  const [reacting, setReacting] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)
  let reactingTimeoutId: ReturnType<typeof setTimeout> | undefined

  function handleReact() {
    if (typeof value === 'number') {
      if (reactingTimeoutId) {
        clearTimeout(reactingTimeoutId)
      }
      setReacting(true)
      const newReactions = reactions >= MAX_REACTIONS ? MAX_REACTIONS : reactions + 1
      onReact(newReactions)
      if (countRef.current) {
        if (reactions >= MAX_REACTIONS) {
          countRef.current.classList.add('animate-scale-up')
          setTimeout(() => {
            if (countRef.current) {
              countRef.current.classList.remove('animate-scale-up')
            }
          }, 150)
        }
      }
    }
  }

  function handleMouseLeave() {
    if (typeof value === 'number') {
      if (reacting) {
        reactingTimeoutId = setTimeout(() => {
          setReacting(false)
          onSave()
        }, 1000)
      }
    }
  }

  return (
    <button
      onClick={handleReact}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center gap-1.5"
      data-umami-event="post-reaction"
      data-umami-event-post={path}
      data-umami-event-react={key}
    >
      <Twemoji emoji={emoji} size="2x" />
      <span className="relative h-6 w-8 overflow-hidden">
        <span
          className={clsx(
            'absolute inset-0',
            'font-semibold text-gray-600 dark:text-gray-300',
            'transition-all',
            reacting ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          {typeof value === 'string' ? '--' : value}
        </span>
        <span
          ref={countRef}
          className={clsx(
            'absolute inset-0',
            'text-gray-500 dark:text-gray-400',
            'transition-all',
            reacting ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          +{reactions}
        </span>
      </span>
    </button>
  )
}
