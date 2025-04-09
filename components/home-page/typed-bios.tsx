'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>I'm a leader, learner, and builder.</li>
        <li>I live in the SF Bay Area. <Twemoji emoji="bridge at night" /></li>
        <li>I was born in beautiful Sonoma County.</li>
        <li>I fell in love with technology in 1994.<Twemoji emoji="desktop-computer" /></li>
        <li>I love cybersecurity.</li>
        <li>I'm focusing on building secure, resilient solutions.<Twemoji emoji="hammer-and-wrench" /></li>
        <li>I work mostly with cloud technologies.</li>
        <li>I'm Brooke's husband and Ben, Preston, and Reid's dad.</li>
        <li>
          I'm a wannabe farmer. <Twemoji emoji="farmer" />
        </li>
        <li>
          I'm a sports-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="football" />,
            <Twemoji emoji="baseball" />,
            <Twemoji emoji="basketball" />
          </span>
        </li>
        <li>
          I love listening to music. <Twemoji emoji="headphones" />
        </li>
        <li>
          I love playing chess. <Twemoji emoji="chess-pawn" />
        </li>
        <li>
          Above all else, I enjoy spending time with my family. <Twemoji emoji="family" />.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
