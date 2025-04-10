import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { EducationTimeline } from '~/components/author/education' // Add this import
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing behind the scenes."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Hi there <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                I'm <strong>David Galiata</strong>, a Security Engineering Director based in <strong>Petaluma, California</strong>. I have a passion for all things <strong>cybersecurity</strong> and <strong>cloud engineering</strong>. With over <strong>15 years</strong> of IT experience, I've built and operated secure, large-scale systems for enterprise environments.
              </p>
              <p>
                My expertise spans <strong>cloud infrastructure</strong>, <strong>network security</strong>, and <strong>systems consulting</strong>. I hold several industry certifications including <strong>CISM</strong>, <strong>CCSP</strong>, <strong>CCAK</strong>, and multiple <strong>AWS credentials</strong>.
              </p>
              <p>
                This blog serves as a platform for sharing insights and knowledge I've gained throughout my career in cybersecurity. I believe that writing and sharing technical concepts is not only beneficial for others but also helps solidify my own understanding.
              </p>
              <p>
                My superpower is learning new technologies quickly, allowing me to adapt to security challenges and provide effective solutions.
              </p>
              <p>
                I greatly appreciate comments and thoughts on my posts{' '}
                <Twemoji emoji="clinking-beer-mugs" />.
              </p>
            </div>
            
            {/* Education Section - Added BEFORE Career */}
            <div>
              <div className="mb-[1em] mt-[2em] flex items-center justify-between [&>h2]:my-0">
                <h2>My education</h2>
              </div>
              <EducationTimeline />
            </div>
            
            <div>
              <div className="mb-[1em] mt-[2em] flex items-center justify-between [&>h2]:my-0">
                <h2>My career</h2>
                <Button as="a" href="/static/resume.pdf" target="_blank">
                  <span>Resume</span>
                  <Twemoji emoji="page-facing-up" />
                </Button>
              </div>
              <CareerTimeline />
            </div>
            
            <div>
              <h2>Contact</h2>
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> or find me on
                social media:
              </p>
              <SocialAccounts />
            </div>
            {/* Removed the Support section */}
          </div>
        </div>
      </div>
    </Container>
  )
}