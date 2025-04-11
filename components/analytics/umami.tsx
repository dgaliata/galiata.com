import Script from 'next/script'
import { SITE_METADATA } from '~/data/site-metadata'

// ... (interface definition)

export function UmamiAnalytics({ /* ...props... */ }) {
  const websiteId = SITE_METADATA.analytics.umamiAnalytics.websiteId;
  const src = 'https://cloud.umami.is/script.js';
  const domains = SITE_METADATA.siteUrl.replace(/(^\w+:|^)\/\//, '');

  // --- TEMPORARY LOGGING ---
  console.log('Rendering Umami Analytics with:', { websiteId, src, domains });
  // --- END TEMPORARY LOGGING ---

  if (!websiteId) {
    console.log('Umami Analytics: No websiteId found, skipping render.'); // Add log here too
    return null;
  }

  return (
    <Script
      async
      defer
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
      data-cache="false" // Keep for now while debugging
      data-domains={domains}
      // --- Optional: Add error/load handlers for more info ---
      onLoad={() => console.log('Umami script loaded successfully.')}
      onError={(e) => console.error('Error loading Umami script:', e)}
      // --- End optional handlers ---
    />
  )
}