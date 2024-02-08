import { SectionTitle } from '@/app/components/sectionTitles'
import { TbBrandNextjs } from 'react-icons/tb'
import { KnowTech } from './knowTech'

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle
        title="Conhecimento"
        subtitle="Competências"
        className={''}
      />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next js',
              startDate: '2024-02-01',
            }}
            key={index}
          />
        ))}
      </ul>
    </section>
  )
}
