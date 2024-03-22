import { getRelativeTimeString } from '@/app/utils/getRealativeTime'
import { ReactNode } from 'react'

type KnowTechProps = {
  icon: ReactNode
  name: string
  startDate: string
}

export const KnowTech = ({ icon, name, startDate }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(startDate),
    'pt-BR',
  ).replace('há', ' ')
  return (
    <li className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-orange-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        {icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </li>
  )
}
