import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { close } from '../assets'
import CTAButton from './CTAButton'
import BrandLogo from './BrandLogo'

const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    menuRef.current?.querySelector('a')?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className='fixed inset-0 z-50 md:hidden'
      role='dialog'
      aria-modal='true'
      aria-label='Navigation menu'
    >
      <div className='absolute inset-0 bg-primary/80 backdrop-blur-sm' onClick={onClose} aria-hidden='true' />
      <div className='absolute top-0 right-0 h-full w-[min(320px,88vw)] bg-black-gradient p-8 sidebar flex flex-col overflow-y-auto'>
        <div className='flex items-center justify-between mb-8'>
          <BrandLogo variant='compact' onClick={onClose} />
          <button
            type='button'
            onClick={onClose}
            className='p-2 focus-visible:ring-2 focus-visible:ring-secondary rounded'
            aria-label='Close menu'
          >
            <img src={close} alt='' className='w-[24px] h-[24px]' />
          </button>
        </div>
        <ul className='list-none flex flex-col gap-6 flex-1'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.path}
                onClick={onClose}
                className='font-poppins font-normal text-[18px] text-white hover:text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-secondary rounded px-2 py-1'
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <CTAButton to='/contact' variant='primary' styles='w-full text-center mt-8' onClick={onClose}>
          Talk to Bitvion
        </CTAButton>
      </div>
    </div>
  )
}

export default MobileMenu
