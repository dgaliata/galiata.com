export const SITE_METADATA = {
  title: `David's tech blog – stories, insights, and ideas`,
  author: 'David Galiata',
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
      websiteId: 'b69c27ce-feac-45db-a6ce-ab7da3c62126',
      shareUrl: 'https://cloud.umami.is/share/eFPdpFk3fNDufAOb/galiata.com',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
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