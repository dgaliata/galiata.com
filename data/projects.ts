import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Cloud & Infrastructure',
    description: ``,
    imgSrc: '/static/images/icloud.png',
    url: 'https://www.weaverse.io?ref=leohuynh.dev',
    builtWith: ['Shopify', 'Remix', 'TailwindCSS', 'Prisma', 'OpenAI'],
    links: [
      { title: 'Website', url: 'https://www.weaverse.io?ref=leohuynh.dev' },
      { title: 'GitHub Org', url: 'https://github.com/weaverse' },
    ],
  },
  {
    type: 'work',
    title: 'Weaverse SDKs',
    description:
      'Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.',
    imgSrc: '/static/images/shield.png',
    repo: 'weaverse/weaverse',
    builtWith: ['Turborepo', 'Hydrogen', 'React', 'Typescript'],
  },
  {
    type: 'work',
    title: 'Pilot - Shopify Hydrogen theme',
    description:
      'A fully-featured Shopify Hydrogen theme crafted to help you launch modern, high-performing headless storefronts in minutes.',
    imgSrc: '/static/images/linux.png',
    repo: 'weaverse/pilot',
    url: 'https://pilot.weaverse.io/',
    builtWith: ['Hydrogen', 'Remix', 'TailwindCSS', 'HeadlessUI'],
  },
  {
    type: 'work',
    title: 'Minimog - Next-gen Shopify theme',
    description: `The Next Generation of highest-converting and extensible Shopify theme (Weekly bestseller & Top trending in Themeforest eCommerce category).`,
    imgSrc: '/static/images/devbox.png',
    url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968?ref=leohuynh.dev',
    builtWith: ['ThemeKit', 'Liquid', 'Webpack', 'TailwindCSS'],
    links: [
      { title: 'Demo site', url: 'https://demo.minimog.co' },
      {
        title: 'Envato item',
        url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968',
      },
    ],
  },
  {
    type: 'work',
    title: 'FoxKit AIO Upsell Cross‑sell',
    description: `The upsells and boost conversion tools that is built to support Minimog theme.`,
    imgSrc: '/static/images/jira.png',
    url: 'https://apps.shopify.com/foxkit?ref=leohuynh.dev',
    builtWith: ['KoaJS', 'JWT', 'MongoDB', 'Polaris'],
    links: [
      { title: 'App store', url: 'https://apps.shopify.com/foxkit' },
      {
        title: 'Product site',
        url: 'https://foxecom.com/products/foxkit-shopify-app',
      },
    ],
  },
  {
    type: 'self',
    title: 'leohuynh.dev',
    imgSrc: '/static/images/writer-96.png',
    repo: 'hta218/leohuynh.dev',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Drizzle', 'Umami'],
  },
  {
    type: 'self',
    title: 'Shopify theme starter',
    imgSrc: '/static/images/liquid-96.png',
    repo: 'hta218/shopify-theme-starter',
    builtWith: ['ThemeKit', 'Liquid', 'Webpack', 'TailwindCSS'],
  },
]
