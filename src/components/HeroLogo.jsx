import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../assets'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] mx-auto md:mx-0'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      <motion.div
        className='relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent px-8 py-10 sm:px-10 sm:py-12 shadow-[0_24px_80px_rgba(0,0,0,0.45)]'
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className='absolute inset-0 pointer-events-none rounded-[28px] ring-1 ring-inset ring-secondary/[0.12]'
          aria-hidden='true'
        />
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[45%] pointer-events-none opacity-80'
          aria-hidden='true'
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(92, 225, 230, 0.14) 0%, transparent 72%)',
          }}
        />

        <div className='relative flex flex-col items-center text-center'>
          <div className='relative mb-8'>
            <div
              className='absolute inset-[-30%] blur-[52px] opacity-50 pointer-events-none'
              aria-hidden='true'
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(92, 225, 230, 0.2) 0%, transparent 70%)',
              }}
            />
            <img
              src={bitvionMark}
              alt=''
              width={568}
              height={458}
              draggable={false}
              decoding='async'
              className='relative w-[168px] xs:w-[188px] sm:w-[208px] lg:w-[228px] h-auto object-contain select-none mx-auto'
              style={{
                filter:
                  'drop-shadow(0 12px 36px rgba(92, 225, 230, 0.16)) saturate(0.94) brightness(0.95)',
              }}
            />
          </div>

          <p className='font-poppins font-semibold text-white text-[30px] xs:text-[34px] sm:text-[38px] leading-none tracking-[0.14em]'>
            BIT<span className='text-gradient'>V</span>ION
          </p>
          <div className='flex items-center justify-center gap-3 mt-4 w-full max-w-[240px]'>
            <span className='h-px flex-1 bg-gradient-to-r from-transparent to-white/20' aria-hidden='true' />
            <p className='font-poppins font-medium text-dimWhite uppercase text-[10px] sm:text-[11px] tracking-[0.32em] whitespace-nowrap'>
              Technologies
            </p>
            <span className='h-px flex-1 bg-gradient-to-l from-transparent to-white/20' aria-hidden='true' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroLogo
