import { TechBadge } from '@/app/components/techBagde'
import Image from 'next/image'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { ContactButton } from './contactButton'
import { IoDocumentText } from 'react-icons/io5'

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
    url: 'https://wa.me/53997090585',
    icon: <TbBrandWhatsapp />,
  },
  {
    url: 'https://drive.google.com/file/d/1c0VodbyHyKEWh7j5HetUKtiGlAuuiLEw/view?usp=drive_link',
    icon: <IoDocumentText />,
  },
]

const MOCK_TECHS = [
  {
    name: 'Html',
  },
  {
    name: 'CSS',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React.js',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'Styled Components',
  },
  {
    name: 'Tailwind.CSS',
  },
  {
    name: 'Express.js',
  },
  {
    name: 'PostgreSQL',
  },
  {
    name: 'Docker',
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-orange-600">Olá, Meu nome é</p>
          <h2 className="text-4xl font-medium font-mono mt-2">
            Gabriel Madeira
          </h2>

          <p className="text-gray-500 my-6 text-sm sm:text-base">
            Olá! Meu nome é <strong>Gabriel Madeira</strong> sou um
            desenvolvedor web com foco no desenvolvimento tanto Front End,
            quanto em Back End. Adoro criar interfaces de usuários bonitas e
            funcionais, assim como criar APIs para facilitar a integração entre
            sistemas e dar vida a aplicações incriveis. Busco fazer a diferença
            no mercado com as minhas habilidades e qualidades, acredito que o
            conhecimento tenha que ser posto em prática no dia a dia para
            melhorar a vida das pessoas.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]:">
            {MOCK_TECHS.map((element, index) => (
              <TechBadge name={element.name} key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <ContactButton />
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
          src="/images/zyro-profile.png"
          alt="Foto de perfil do Gabriel Madeira"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[404px] mb-6 lg:mb-0 object-contain"
        />
      </div>
    </section>
  )
}
