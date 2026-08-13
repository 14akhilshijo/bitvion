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
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
        className={`fixed top-0 left-0 right-0 z-40 overflow-visible transition-all duration-500 ${
          scrolled
            ? 'bg-primary/85 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className='w-full flex py-3 sm:py-5 justify-between items-center gap-3 max-w-[1280px] mx-auto sm:px-16 px-4 xs:px-6' aria-label='Main navigation'>
          <BrandLogo variant='header' className='min-w-0 shrink' />

          <ul className='list-none md:flex hidden justify-end items-center flex-1 ml-8'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[15px] ${i === navLinks.length - 1 ? 'mr-6' : 'mr-8'}`}
              >
                <Link
                  to={nav.path}
                  className='text-dimWhite hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-secondary rounded px-1 py-1 relative group'
                >
                  {nav.title}
                  <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full' aria-hidden='true' />
                </Link>
              </li>
            ))}
            <li>
              <CTAButton to='/contact' variant='primary' styles='py-3 px-5 text-[15px]'>
                Talk to Bitvion
              </CTAButton>
            </li>
          </ul>

          <button
            type='button'
            className='md:hidden flex p-2 min-w-[44px] min-h-[44px] items-center justify-center focus-visible:ring-2 focus-visible:ring-secondary rounded'
            onClick={() => setToggle(true)}
            aria-label='Open menu'
            aria-expanded={toggle}
          >
            <img src={menu} alt='' className='w-[28px] h-[28px] object-contain' />
          </button>
        </nav>
      </motion.header>

      <MobileMenu isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  )
}

export default Header
