import { FaGrinHearts } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="text-xl sm:text-sm text-gray-400 flex items-center gap-2">
        Made By
        <strong className="text-sm text-orange-600">Gabriel Madeira</strong>
        <FaGrinHearts color={'#feff1f'} size={13} />
      </span>
    </footer>
  )
}
