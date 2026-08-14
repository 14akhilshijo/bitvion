import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../assets'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px] flex flex-col items-center justify-center mx-auto'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      <div
        className='absolute inset-[-14%] pointer-events-none'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 72% 64% at 50% 42%, rgba(92, 225, 230, 0.16) 0%, rgba(92, 225, 230, 0.05) 45%, transparent 72%)',
        }}
      />

      <motion.div
        className='relative z-[2] flex flex-col items-center w-full'
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='relative mb-7 sm:mb-9'>
          <div
            className='absolute inset-[-24%] blur-[56px] opacity-65 pointer-events-none'
            aria-hidden='true'
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(92, 225, 230, 0.24) 0%, transparent 68%)',
            }}
          />
          <img
            src={bitvionMark}
            alt=''
            width={568}
            height={458}
            draggable={false}
            decoding='async'
            className='relative w-[200px] xs:w-[230px] sm:w-[260px] md:w-[290px] lg:w-[320px] h-auto object-contain select-none mx-auto'
            style={{
              filter:
                'drop-shadow(0 10px 32px rgba(92, 225, 230, 0.2)) saturate(0.95) brightness(0.96)',
            }}
          />
        </div>

        <div className='text-center w-full'>
          <p className='font-poppins font-semibold text-white text-[40px] xs:text-[46px] sm:text-[52px] md:text-[58px] lg:text-[64px] leading-none tracking-[0.12em] sm:tracking-[0.14em]'>
            BIT<span className='text-gradient'>V</span>ION
          </p>
          <div className='flex items-center justify-center gap-3 mt-5 sm:mt-6'>
            <span className='h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-secondary/50' aria-hidden='true' />
            <p className='font-poppins font-medium text-dimWhite uppercase text-[11px] xs:text-[12px] sm:text-[13px] tracking-[0.28em] sm:tracking-[0.32em]'>
              Technologies
            </p>
            <span className='h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-secondary/50' aria-hidden='true' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroLogo
