import { clsx } from 'clsx'
import { AreaChart, Rss } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
   <div className="flex items-center">
        {/* Uncomment these if you want to restore the RSS and Analytics links 
        <Link href="/feed.xml" aria-label="RSS Feed" data-umami-event="rss-feed" prefetch={false}>
          <Rss strokeWidth={1.5} size={20} />
        </Link>
        <Link
          href={SITE_METADATA.analytics.umamiAnalytics.shareUrl}
          aria-label="Open analytics"
          data-umami-event="footer-analytics"
          className="ml-2"
        >
          <AreaChart strokeWidth={1.5} size={22} />
        </Link> */}
      </div>
    </div>
  )
}