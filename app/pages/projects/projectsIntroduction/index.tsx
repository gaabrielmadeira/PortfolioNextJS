import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/sectionTitles'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        title="Meus Projetos"
        subtitle="Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div>
        <p className="text-gray-600 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você pode ver alguns projetos criados por mim. Navegue e explore
          a vontade!
        </p>
      </div>
      <Link href="/">
        <HiArrowNarrowLeft size={20} />
        Voltar para Home
      </Link>
    </section>
  )
}
