import Script from 'next/script'
import { SITE_METADATA } from '~/data/site-metadata'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ 
  websiteId = SITE_METADATA.analytics.umamiAnalytics.websiteId,
  src = 'https://cloud.umami.is/script.js' 
}: UmamiAnalyticsProps) {
  return (
    <Script 
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  )
}