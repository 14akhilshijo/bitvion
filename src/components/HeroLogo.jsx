import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../assets'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] flex flex-col items-center justify-center py-4 md:py-6'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      <div
        className='absolute inset-[-10%] pointer-events-none'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(92, 225, 230, 0.14) 0%, rgba(92, 225, 230, 0.04) 45%, transparent 72%)',
        }}
      />

      <motion.div
        className='relative z-[2] flex flex-col items-center w-full'
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='relative mb-6 sm:mb-8'>
          <div
            className='absolute inset-[-20%] blur-[48px] opacity-60 pointer-events-none'
            aria-hidden='true'
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(92, 225, 230, 0.22) 0%, transparent 68%)',
            }}
          />
          <img
            src={bitvionMark}
            alt=''
            width={568}
            height={458}
            draggable={false}
            decoding='async'
            className='relative w-[148px] xs:w-[168px] sm:w-[188px] md:w-[208px] h-auto object-contain select-none mx-auto'
            style={{
              filter:
                'drop-shadow(0 8px 28px rgba(92, 225, 230, 0.18)) saturate(0.95) brightness(0.96)',
            }}
          />
        </div>

        <div className='text-center w-full'>
          <p className='font-poppins font-semibold text-white text-[34px] xs:text-[40px] sm:text-[46px] md:text-[50px] leading-none tracking-[0.12em] sm:tracking-[0.14em]'>
            BIT<span className='text-gradient'>V</span>ION
          </p>
          <div className='flex items-center justify-center gap-3 mt-4 sm:mt-5'>
            <span className='h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-secondary/50' aria-hidden='true' />
            <p className='font-poppins font-medium text-dimWhite uppercase text-[10px] xs:text-[11px] sm:text-[12px] tracking-[0.28em] sm:tracking-[0.32em]'>
              Technologies
            </p>
            <span className='h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-secondary/50' aria-hidden='true' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroLogo
