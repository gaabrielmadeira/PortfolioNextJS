import { SectionTitle } from '@/app/components/sectionTitles'
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from 'react-icons/tb'
import { SiStyledcomponents, SiPostgresql, SiDocker } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { KnowTech } from './knowTech'

const MockKnowTechs = [
  {
    icon: <TbBrandHtml5 />,
    name: 'HTML',
    startDate: '2023-01-14',
  },
  {
    icon: <TbBrandCss3 />,
    name: 'CSS',
    startDate: '2023-01-14',
  },
  {
    icon: <TbBrandTypescript />,
    name: 'TypeScript',
    startDate: '2023-08-01',
  },
  {
    icon: <TbBrandReact />,
    name: 'React.js',
    startDate: '2023-08-01',
  },
  {
    icon: <TbBrandNextjs />,
    name: 'Next.js',
    startDate: '2024-01-01',
  },
  {
    icon: <SiStyledcomponents />,
    name: 'Styled Components',
    startDate: '2023-08-01',
  },
  {
    icon: <TbBrandTailwind />,
    name: 'Tailwind CSS',
    startDate: '2024-01-01',
  },
  {
    icon: <FaNode />,
    name: 'Node.js',
    startDate: '2023-11-01',
  },
  {
    icon: <SiPostgresql />,
    name: 'PostgreSQL',
    startDate: '2023-11-01',
  },
  {
    icon: <SiDocker />,
    name: 'Docker',
    startDate: '2023-12-01',
  },
]

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle
        title="Conhecimento"
        subtitle="Competências"
        className={''}
      />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5 mt-[60px]">
        {MockKnowTechs.map((element, index) => (
          <KnowTech
            icon={element.icon}
            name={element.name}
            startDate={element.startDate}
            key={index}
          />
        ))}
      </ul>
    </section>
  )
}
