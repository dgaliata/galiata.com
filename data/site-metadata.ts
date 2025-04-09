export const SITE_METADATA = {
  title: `David's tech blog – stories, insights, and ideas`,
  author: 'Leo Huynh',
  headerTitle: `David's tech blog`,
  description:
    'A personal space where I share security insights, perspectives, and tech reflections from my journey in the industry.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.galiata.com',
  siteRepo: 'https://github.com/dgaliata/galiata.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'david@galiata.com',
  github: 'https://github.com/dgaliata',
  //x: 'https://x.com/hta218_',
  //facebook: 'https://facebook.com/hta218',
  //youtube: 'https://www.youtube.com/@hta218_',
  linkedin: 'https://www.linkedin.com/in/dgaliata',
  //threads: 'https://www.threads.net/hta218_',
  //instagram: 'https://www.instagram.com/hta218_',
  locale: 'en-US',
  stickyNav: true,
  //goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  //goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  //imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
  },
}
