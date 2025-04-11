import Script from 'next/script'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ 
  websiteId = "b69c27ce-feac-45db-a6ce-ab7da3c62126", 
  src = 'https://cloud.umami.is/script.js' 
}: UmamiAnalyticsProps) {
  if (!websiteId) return null;
  
  return (
    <Script 
      async 
      defer 
      data-website-id={websiteId} 
      src={src}
      strategy="afterInteractive"
    />
  )
}