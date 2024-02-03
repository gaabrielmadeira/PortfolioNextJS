import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/techBagde'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_ICONS = [
  {
    url: 'https://github.com/gaabrielmadeira',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/gabriel-madeira-aab40b200/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: '',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-orange-600">Olá, Meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gabriel Madeira</h2>

          <p className="text-gray-500 my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            accumsan urna vitae est molestie bibendum. Vivamus nec tortor
            fermentum, scelerisque mi non, bibendum nisi. Duis quis dictum
            dolor. Integer laoreet semper blandit. at.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]:">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next js" key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_ICONS.map((element, index) => (
                <a
                  href={element.url}
                  key={index}
                  target="_blanck"
                  className="hover:text-gray-400 transition-colors"
                >
                  {element.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={430}
          height={450}
          src="/images/profile.png"
          alt="Foto de perfil do Gabriel Madeira"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[404px] mb-6 lg:mb-0 object-contain"
        />
      </div>
    </section>
  )
}
