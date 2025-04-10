import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '~/components/cards/project'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { PROJECTS } from '~/data/projects'

export let metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  let workProjects = PROJECTS.filter(({ type }) => type === 'work')
  let sideProjects = PROJECTS.filter(({ type }) => type === 'self')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Skills"
        description="Explore my technical skills and specialized knowledge areas."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
          Work
        </h3>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {workProjects.map((pro) => (
            <ProjectCard key={pro.title} project={pro} />
          ))}
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 py-5 dark:border-gray-700 md:mt-10 md:py-10">
        <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-8 md:text-3xl">
          Side projects
        </h3>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {sideProjects.map((pro) => (
            <ProjectCard key={pro.title} project={pro} />
          ))}
        </div>
      </div>
    </Container>
  )
}
