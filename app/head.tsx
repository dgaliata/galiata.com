// app/head.tsx
export default function Head() {
    const basePath = process.env.BASE_PATH || ''
    return (
      <>
        <link rel="apple-touch-icon" sizes="76x76" href={`${basePath}/static/favicons/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/static/favicons/favicon.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/static/favicons/favicon.png`} />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link rel="mask-icon" href={`${basePath}/static/favicons/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      </>
    )
  }
  