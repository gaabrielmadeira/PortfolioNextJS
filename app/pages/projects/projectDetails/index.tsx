import { Button } from '@/app/components/button'
import { SectionTitle } from '@/app/components/sectionTitles'
import { TechBadge } from '@/app/components/techBagde'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowLeft } from 'react-icons/hi'

export const ProjectDetails = () => {
  return (
    <section className="w-full h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hiden">
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{
          background: 'url(/images/background.png) no-repeat center/cover',
        }}
      ></div>
      <div
        className="absolute inset-0 z-[-2] opacity-5"
        style={{
          background: 'url(/images/fundoconnecthub.png) no-repeat center/cover',
        }}
      ></div>
      <SectionTitle
        subtitle="Projetos"
        title="ConnectHub"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Este projeto foi concebido com o propósito de aprimorar minhas
        habilidades tanto no desenvolvimento Back End quanto Front End,
        resultando em uma aplicação FullStack.
      </p>
      <div className="w-full m-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
        <TechBadge name="React.js" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/gaabrielmadeira/ConnectHubFullStack"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://projeto-full-stack-m6-front-end.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Deploy
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
