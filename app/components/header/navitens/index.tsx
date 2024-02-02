import { cn } from '@/app/lib/util'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DiCode } from 'react-icons/di'

type NavItensProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItensProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-500 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-400',
      )}
    >
      <span className="text-orange-600">
        <DiCode size={30} color="#dd6b20" />
      </span>
      {label}
    </Link>
  )
}
