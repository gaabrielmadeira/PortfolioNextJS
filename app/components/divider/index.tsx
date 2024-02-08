import { cn } from '@/app/lib/util'

type DividerProps = {
  className: string
}

export const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
