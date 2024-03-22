'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../button'
import { useCallback, useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {show && (
        <div className="fixed right-4 bottom-4 z-20">
          <Button
            className="shadow-lg shadow-orange-400/20"
            onClick={scrollToTop}
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </div>
      )}
    </>
  )
}
