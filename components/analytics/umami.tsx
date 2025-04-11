// Path: ~/components/analytics/umami.tsx (adjust path if necessary)

import Script from 'next/script';
// Ensure this path correctly points to your site metadata file
import { SITE_METADATA } from '~/data/site-metadata';

export function UmamiAnalytics() {
  // Directly get the website ID from your metadata config
  // Using optional chaining (?.) in case analytics or umamiAnalytics is missing
  const websiteId = SITE_METADATA.analytics?.umamiAnalytics?.websiteId;

  // Standard Umami Cloud script source (or your self-hosted URL if applicable)
  const umamiScriptSrc = 'https://cloud.umami.is/script.js';

  // Don't render the script if the website ID is missing in your config
  if (!websiteId) {
    // Log a warning in the browser console during development
    if (process.env.NODE_ENV === 'development') {
       console.warn('Umami Analytics: websiteId is missing in SITE_METADATA. Skipping script render.');
    }
    return null;
  }

  return (
    <Script
      id="umami-analytics-script" // Added an ID for easier selection in DevTools
      async
      defer
      src={umamiScriptSrc}
      data-website-id={websiteId}
      // Uses Next.js strategy to load the script after the page is interactive
      strategy="afterInteractive"
      // NOTE: data-cache and data-domains have been removed for simplicity
      // Consider adding data-domains back later for security/accuracy:
      // data-domains={SITE_METADATA.siteUrl.replace(/(^\w+:|^)\/\//, '')}
    />
  );
}