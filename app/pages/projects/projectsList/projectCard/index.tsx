import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <li className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-orange-600 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="/images/connecthub.png"
          alt="Thumbnail do projeto connectHub"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-orange-600 transition-all">
          ConnectHub
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Este projeto foi concebido com o propósito de aprimorar minhas
          habilidades tanto no desenvolvimento Back End quanto Front End,
          resultando em uma aplicação FullStack.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-4 truncate">
          React.js, TypeScript, Styled Components, Express.js, PostgreSQL,
          Docker
        </span>
      </div>
    </li>
  )
}
