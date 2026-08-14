import React from 'react'
import { Link } from 'react-router-dom'
import GlobalOrbit from './GlobalOrbit'

const HeroVisual = () => (
  <div className='relative w-full max-w-[440px] lg:max-w-[480px] mx-auto md:mx-0' aria-hidden='true'>
    <div
      className='absolute inset-[6%] rounded-full blur-[80px] opacity-70 pointer-events-none'
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.14) 0%, transparent 68%)',
      }}
    />
    <GlobalOrbit linked className='relative z-[1]' />
    <p className='relative z-[1] mt-4 text-center font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-dimWhite'>
      Engineering from India · Delivering globally
    </p>
  </div>
)

export default HeroVisual
