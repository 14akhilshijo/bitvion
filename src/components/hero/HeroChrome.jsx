import React from 'react'
import { useReducedMotion } from 'framer-motion'

const items = ['AI', 'SOFTWARE', 'AUTOMATION', 'CLOUD', 'DIGITAL PRODUCTS']

const HeroTechStrip = () => (
  <div
    className='relative z-10 w-full border-t border-white/[0.06] py-5 sm:py-6'
    aria-label='Bitvion technology focus areas'
  >
    <ul className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 max-w-[900px] mx-auto px-4' role='list'>
      {items.map((item, i) => (
        <li key={item} className='flex items-center gap-x-4 sm:gap-x-6'>
          <span className='font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-dimWhite/70'>
            {item}
          </span>
          {i < items.length - 1 && (
            <span className='hidden sm:inline w-1 h-1 rounded-full bg-secondary/40' aria-hidden='true' />
          )}
        </li>
      ))}
    </ul>
  </div>
)

const HeroScrollIndicator = () => {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none' aria-hidden='true'>
      <span className='font-poppins text-[10px] uppercase tracking-[0.24em] text-dimWhite/50'>
        Scroll to explore
      </span>
      <span className='hero-scroll-line block w-px h-8 bg-gradient-to-b from-secondary/60 to-transparent' />
    </div>
  )
}

export { HeroTechStrip, HeroScrollIndicator }
