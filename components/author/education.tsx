import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EDUCATION = [
  {
    org: 'Central Washington University',
    url: 'https://www.CWU.edu/',
    logo: '/static/images/cwu.png',
    start: '2023',
    end: '2024',
    title: 'Master of Science in Cybersecurity Management',
    icon: 'man-student',
    event: 'education-ssu',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          MS-ITAM Cybersecurity program at CWU, focused on managing cybersecurity programs and policies, preparing me for leadership roles in the field.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Western Governors University',
    url: 'https://www.WGU.edu/',
    logo: '/static/images/wgu.png',
    start: '2009',
    end: '2011',
    title: 'Bachelor of Science in Information Technology',
    icon: 'man-student',
    event: 'education-ssu',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          BS-IT program at WGU, focused on core IT principles, including networking, security, and systems administration, providing a solid foundation for my career.
          </li>
        </ul>
      )
    },
  },
]
export function EducationTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EDUCATION.map((edu, idx) => (
        <li key={edu.url} className="m-0 p-0">
          <TimelineItem exp={edu} last={idx === EDUCATION.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EDUCATION)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:left-9 before:top-15',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}