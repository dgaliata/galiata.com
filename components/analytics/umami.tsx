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
  if (!websiteId) return null;
  
  return (
    <Script 
      async
      defer
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
      data-cache="false"
      data-domains={SITE_METADATA.siteUrl.replace(/(^\w+:|^)\/\//, '')}
    />
  )
}