import { genPageMetadata } from 'app/seo'
import type { Author } from 'contentlayer/generated'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import { Home } from '~/components/home-page'
import { coreContent } from '~/utils/contentlayer'

export let metadata = genPageMetadata({ title: 'Home' })

const MAX_POSTS_DISPLAY = 5

export default function HomePage() {
  const author = allAuthors.find((p) => p.slug === 'default') as Author
  const mainContent = coreContent(author)
  const posts = allCoreContent(sortPosts(allBlogs)).slice(0, MAX_POSTS_DISPLAY)

  return (
    <div>
      <Home
        posts={posts} // Only passing posts, removing snippets
      />
    </div>
  )
}
