import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'Aquia',
    url: 'https://aquia.us',
    logo: '/static/images/aq.png',
    start: 'Dec 2021',
    end: 'Present',
    title: 'Director, Security Engineering',
    icon: 'briefcase',
    event: 'career-weaverse',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Director and Principal Security Engineer leading the design and implementation of security solutions for both enterprise clients and the US Government. Responsible for cloud security architecture, regulatory compliance, and ensuring adherence to security standards while enabling advanced technological capabilities.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Cobaltix',
    url: 'https://cobaltix.com/',
    logo: '/static/images/cb.jpeg',
    start: 'Jun 2021',
    end: 'Dec 2021',
    title: 'Senior Enterprise Network and Systems Consultant',
    icon: 'man-technologist',
    event: 'career-foxecom',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Senior IT Consultant responsible for implementing technological solutions to solve business problems for clients throughout the Bay Area, serving as technical lead and project manager.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Nims & Associates',
    url: 'https://nimsassociates.com/',
    logo: '/static/images/nims.jpeg',
    start: 'Nov 2017',
    end: 'Jun 2021',
    title: 'Senior IT Systems Engineer',
    icon: 'man-technologist',
    event: 'career-coc-coc',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Senior IT Consultant responsible for planning and executing successful IT deployments and fostering strong client relationships, developing and supporting technology needs for clients.
            </li>
        </ul>
      )
    },
  },
  {
    org: 'KLH Consulting',
    url: 'https://klhconsulting.com/',
    logo: '/static/images/klh.jpeg',
    start: 'Apr 2013',
    end: 'Nov 2017',
    title: 'Senior Network Engineer',
    icon: 'man-technologist',
    event: 'career-bravebits',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li> Designed, implemented, analyzed, and maintained IT Infrastructure of internal and external customer environments, serving as principal IT Engineer for clients throughout the Bay Area.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Portola Systems',
    url: 'https://portolasystems.net/',
    logo: '/static/images/psi.png',
    start: 'Dec 2010',
    end: 'Apr 2013',
    title: 'Engineer',
    icon: 'man-technologist',
    event: 'career-bravebits',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li> Served small and medium businesses in all facets of technology, designing and implementing Windows server environments and configuring various networking technologies.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'MindX - Technology School',
    url: 'https://mindx.edu.vn/',
    logo: '/static/images/mindx-logo.jpeg',
    start: 'May 2017',
    end: 'Jul 2018',
    title: 'Instructor and Developer',
    icon: 'man-technologist',
    event: 'career-mindx',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Built{' '}
            <a target="_blank" rel="noopener noreferrer" href="http://lok.vn/">
              Love of Knowledge
            </a>{' '}
            (Front-end Developer)
          </li>
          <li>
            Built{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hta218.github.io/get-a-room-api-docs/"
            >
              Room Finder APIs
            </a>{' '}
            (Back-end Developer)
          </li>
          <li>
            Built{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hta218/Travel_Egypt"
            >
              Travel Egypt
            </a>{' '}
            - a picture puzzle game made by pygame (Python)
          </li>
          <li>Mentored Python fundamentals and Python web development for newbies</li>
        </ul>
      )
    },
  },
  {
    org: 'Hanoi University of Science and Technology',
    url: 'https://www.hust.edu.vn/en/',
    logo: '/static/images/hust-logo.png',
    start: 'Sep 2013',
    end: 'Feb 2019',
    title: 'Student at SEEE (School of Electrical & Electronic Engineering)',
    icon: 'man-student',
    event: 'career-hust',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at <strong>School of Electrical & Electronic Engineering</strong>
          </li>
          <li>
            And yeah! My major subject was <strong>Electronics and Telecommunications</strong>, but
            I couldn't find interest in that field. So I learned Software Engineering instead, and
            became what I am today.
          </li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
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
