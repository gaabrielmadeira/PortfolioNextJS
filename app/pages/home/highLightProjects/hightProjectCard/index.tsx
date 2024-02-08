import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/techBagde'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const HighProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/connecthub.png"
          alt="Thumbnail do projeto ConnectHub"
          className="w-full h-[200px] sm:h-[300px] lg:w-[520px] lg:min-h-full object-cover rounded-lg"
          unoptimized
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image width={50} height={50} alt="" src="/images/icons/Icon.png" />
          ConnectHub
        </h3>
        <p className="text-gray-400 my-6">
          Este projeto foi concebido com o propósito de aprimorar minhas
          habilidades tanto no desenvolvimento Back End quanto Front End,
          resultando em uma aplicação FullStack.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="React.js" />
          <TechBadge name="React.js" />
          <TechBadge name="React.js" />
          <TechBadge name="React.js" />
          <TechBadge name="React.js" />
        </div>
        <Link href="#">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
