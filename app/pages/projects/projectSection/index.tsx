import Image from 'next/image'

const sections = [
  {
    title: 'login',
    image: '/images/loginConnecthub.png',
  },
  {
    title: 'Register',
    image: '/images/registerConnecthub.png',
  },
]

export const ProjectSection = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1000}
            height={672}
            alt={`Imagem da seção ${section.title}`}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
