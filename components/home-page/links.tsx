import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { SITE_METADATA } from '~/data/site-metadata'

const LINKS = [
  {
    title: `Skills`,
    href: `/projects`,
    emoji: 'man-technologist',
    event: 'home-link-projects',
  },
  {
    title: `My blog`,
    href: `/blog`,
    emoji: 'memo',
    event: 'home-link-blog',
  },
  {
    title: `About me & this blog`,
    href: `/about`,
    emoji: 'smiling-face-with-sunglasses',
    event: 'home-link-about',
  },
]
export function BlogLinks() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3">
      {LINKS.map(({ title, href, emoji, event }) => (
        <Link key={title} href={href} className="flex items-center gap-1.5">
          <Twemoji emoji={emoji} />
          <GrowingUnderline data-umami-event={event} className="leading-6">
            {title}
          </GrowingUnderline>
        </Link>
      ))}
    </div>
  )
}
