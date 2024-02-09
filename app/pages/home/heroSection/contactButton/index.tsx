'use client'

import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ContactButton = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Button onClick={handleContact} className="w-max shadow-button">
      Entre em contato
      <HiArrowNarrowRight size={18} />
    </Button>
  )
}
