import Script from 'next/script'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ 
  websiteId = "b69c27ce-feac-45db-a6ce-ab7da3c62126",
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