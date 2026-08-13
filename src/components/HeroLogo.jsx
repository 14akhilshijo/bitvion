import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { bitvion3d } from '../assets'

const HeroLogo = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className='relative w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[520px] md:max-w-[580px] flex items-center justify-center'
      role='img'
      aria-label='Bitvion Technologies logo'
    >
      <div
        className='absolute inset-[20%] rounded-full bg-[#00E5FF]/14 blur-[80px]'
        aria-hidden='true'
      />
      <div
        className='absolute right-[10%] bottom-[12%] w-[42%] h-[38%] blue__gradient opacity-40'
        aria-hidden='true'
      />

      <motion.div
        className='relative z-[2] w-[96%]'
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
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
            filter: 'drop-shadow(0 18px 32px rgba(0, 180, 255, 0.2)) contrast(1.04) saturate(1.05)',
          }}
        />
      </motion.div>
    </div>
  )
}

export default HeroLogo
