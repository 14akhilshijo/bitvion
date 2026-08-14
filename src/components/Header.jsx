import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../constants'
import { menu } from '../assets'
import CTAButton from './CTAButton'
import MobileMenu from './MobileMenu'
import BrandLogo from './BrandLogo'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [toggle])

  return (
    <>
      <motion.header
        className='fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`max-w-[1400px] mx-auto flex items-center gap-3 sm:gap-4 h-[72px] sm:h-[76px] transition-all duration-500 ${
            scrolled ? 'glass-nav glass-nav-scrolled' : ''
          }`}
        >
          <BrandLogo variant='header' className='min-w-0 shrink z-[2]' />

          <nav
            className='glass-nav-pill hidden md:flex flex-1 items-center justify-between min-w-0 ml-2 lg:ml-4 px-4 lg:px-6 py-2.5 rounded-2xl'
            aria-label='Main navigation'
          >
            <ul className='list-none flex items-center flex-wrap gap-x-1 lg:gap-x-2'>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.path}
                    className='font-poppins font-normal text-[14px] lg:text-[15px] text-dimWhite hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-secondary rounded-lg px-2.5 py-1.5 relative group whitespace-nowrap'
                  >
                    {nav.title}
                    <span
                      className='absolute bottom-1 left-2.5 right-2.5 h-px scale-x-0 bg-secondary/70 transition-transform duration-300 group-hover:scale-x-100 origin-left'
                      aria-hidden='true'
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <CTAButton to='/contact' variant='primary' styles='py-2.5 px-5 text-[14px] shrink-0 ml-3'>
              Talk to Bitvion
            </CTAButton>
          </nav>

          <button
            type='button'
            className='md:hidden flex ml-auto p-2 min-w-[44px] min-h-[44px] items-center justify-center focus-visible:ring-2 focus-visible:ring-secondary rounded-lg glass-nav-pill'
            onClick={() => setToggle(true)}
            aria-label='Open menu'
            aria-expanded={toggle}
          >
            <img src={menu} alt='' className='w-[26px] h-[26px] object-contain' />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  )
}

export default Header
