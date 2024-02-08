import { Divider } from '@/app/components/divider'
import { SectionTitle } from '@/app/components/sectionTitles'
import { HighProjectCard } from './hightProjectCard'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const HighLightProjects = () => {
  return (
    <section className="container">
      <SectionTitle
        subtitle="Destaques"
        title="Projetos em destaque"
        className={''}
      />
      <Divider className="mb-16" />
      <HighProjectCard />
      <Divider className="my-16" />
      <HighProjectCard />
      <Divider className="mt-16" />
      <p className="flex items-center gap-1.5">
        <span className="text-gray-400">Se interessou?</span>
        <Link href="/projects" className="inline-flex">
          Ver todos
          <HiArrowNarrowRight />
        </Link>
      </p>
    </section>
  )
}
