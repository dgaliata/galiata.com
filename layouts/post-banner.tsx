import type { Blog } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { ReactNode } from 'react'
import { BannerInfo } from '~/components/BannerInfo'
import Comments from '~/components/Comments'
import Container from '~/components/Container'
import Image from '~/components/Image'
import PageTitle from '~/components/PageTitle'
import ScrollTopAndComment from '~/components/ScrollTopAndComment'
import { SocialShareButtons } from '~/components/SocialShareButtons'
import { BackToPosts } from '~/components/blog/back-to-posts'
import { BlogMeta } from '~/components/blog/blog-meta'
import { BlogTags } from '~/components/blog/blog-tags'
import siteMetadata from '~/data/siteMetadata'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function PostBanner({ content, next, prev, children }: LayoutProps) {
  let {
    slug,
    type,
    title,
    images,
    bannerAuthor,
    bannerUrl,
    date,
    readingTime,
    tags,
    filePath,
    path,
  } = content
  let displayImage = images?.[0] || siteMetadata.socialBanner
  let postUrl = `${siteMetadata.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <Container className="sm:pt-4 lg:pt-10">
      <ScrollTopAndComment />
      <article className="space-y-6 pt-6 lg:space-y-16">
        <div className="space-y-4">
          <BlogTags tags={tags} />
          <PageTitle>{title}</PageTitle>
          <dl>
            <div>
              <dt className="sr-only">Published on</dt>
              <BlogMeta date={date} slug={slug} readingTime={readingTime} />
            </div>
          </dl>
          <div className="space-y-4 pt-4 md:pt-10">
            <div className="lg:-mx-8 xl:-mx-36 2xl:-mx-52">
              <Image
                src={displayImage}
                alt={title}
                width={1600}
                height={900}
                className="aspect-video h-auto w-full rounded-xl object-cover object-center"
              />
            </div>
            <BannerInfo author={bannerAuthor} photoURL={bannerUrl} />
          </div>
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>
        <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pb-10 md:pt-10">
          <div id="comment">
            <Comments slug={slug} />
          </div>
          <SocialShareButtons postUrl={postUrl} title={title} filePath={filePath} />
        </div>
        {/* <footer>
          <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
            {prev && prev.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${prev.path}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Previous post: ${prev.title}`}
                >
                  &larr; {prev.title}
                </Link>
              </div>
            )}
            {next && next.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${next.path}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Next post: ${next.title}`}
                >
                  {next.title} &rarr;
                </Link>
              </div>
            )}
          </div>
        </footer> */}
      </article>
    </Container>
  )
}
