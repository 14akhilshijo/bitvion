import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { bitvion3d } from '../assets'

const BRAND_CYAN = '#5CE1E6'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[250px] xs:max-w-[330px] sm:max-w-[430px] md:max-w-[470px] flex items-center justify-center py-2 md:py-4'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      {/* Soft ambient bloom — diffused brand cyan, no sharp hotspots */}
      <div
        className='absolute inset-[-12%] pointer-events-none'
        aria-hidden='true'
        style={{
          background: `radial-gradient(ellipse 72% 68% at 50% 50%, rgba(92, 225, 230, 0.11) 0%, rgba(92, 225, 230, 0.04) 42%, transparent 70%)`,
        }}
      />
      <div
        className='absolute inset-[8%] pointer-events-none blur-[72px] opacity-70'
        aria-hidden='true'
        style={{
          background: `radial-gradient(circle at 50% 55%, rgba(92, 225, 230, 0.09) 0%, transparent 62%)`,
        }}
      />

      <motion.div
        className='relative z-[2] w-[78%] opacity-[0.84]'
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={bitvion3d}
          alt='Bitvion Technologies'
          width={1316}
          height={1108}
          draggable={false}
          decoding='async'
          className='relative w-full h-auto object-contain select-none'
          style={{
            imageRendering: 'auto',
            filter:
              'brightness(0.86) contrast(0.90) saturate(0.82) drop-shadow(0 10px 24px rgba(92, 225, 230, 0.10))',
          }}
        />
        {/* Tame baked-in specular highlights */}
        <div
          className='absolute inset-0 pointer-events-none'
          aria-hidden='true'
          style={{
            background:
              'linear-gradient(165deg, rgba(0, 4, 15, 0.06) 0%, rgba(0, 4, 15, 0.14) 55%, rgba(0, 4, 15, 0.22) 100%)',
          }}
        />
        {/* Subtle cyan harmonization toward brand accent */}
        <div
          className='absolute inset-0 pointer-events-none mix-blend-mode-soft-light opacity-40'
          aria-hidden='true'
          style={{ backgroundColor: BRAND_CYAN }}
        />
      </motion.div>
    </div>
  )
}

export default HeroLogo
