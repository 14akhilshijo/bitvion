import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../assets'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[420px] aspect-square mx-auto md:mx-0'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      <div className='group relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105'>
        <div className='hero-logo-glow absolute inset-0 pointer-events-none' aria-hidden='true' />
        <div
          className='absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-cyan-500/10'
          aria-hidden='true'
        />

        <div className='relative z-[1] flex flex-col items-center justify-center text-center w-full h-full min-h-0'>
          <div className='flex flex-1 items-center justify-center w-full min-h-0 max-h-[58%] mb-6 sm:mb-8'>
            <img
              src={bitvionMark}
              alt=''
              width={568}
              height={458}
              draggable={false}
              decoding='async'
              className={`max-w-full max-h-full w-auto h-auto object-contain select-none ${reduceMotion ? '' : 'hero-logo-animated'}`}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className='flex-shrink-0 w-full'>
            <p className='font-poppins font-semibold text-white text-[28px] xs:text-[32px] sm:text-[36px] leading-none tracking-[0.14em]'>
              BIT<span className='text-gradient'>V</span>ION
            </p>
            <div className='flex items-center justify-center gap-3 mt-4 w-full max-w-[240px] mx-auto'>
              <span className='h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/20' aria-hidden='true' />
              <p className='font-poppins font-medium text-dimWhite uppercase text-[10px] sm:text-[11px] tracking-[0.32em] whitespace-nowrap'>
                Technologies
              </p>
              <span className='h-px flex-1 bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/20' aria-hidden='true' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLogo
