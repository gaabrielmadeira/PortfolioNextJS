import Link from 'next/link'
import { ProjectCard } from './projectCard'

export const ProjectList = () => {
  return (
    <ul className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/connectHub">
        <ProjectCard />
      </Link>
      <Link href="/projects/kenziemovies">
        <ProjectCard />
      </Link>
      <Link href="/projects/kenzieburguer">
        <ProjectCard />
      </Link>
      <Link href="/projects/apiimobiliaria">
        <ProjectCard />
      </Link>
      <Link href="/projects/financecontrol">
        <ProjectCard />
      </Link>
      <Link href="/projects/kenziehub">
        <ProjectCard />
      </Link>
    </ul>
  )
}
