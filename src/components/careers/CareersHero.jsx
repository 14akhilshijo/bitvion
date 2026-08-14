import React from 'react'
import { motion } from 'framer-motion'
import EngineeringCore from './EngineeringCore'

const CareersHero = () => (
  <section className='careers-hero relative overflow-hidden' aria-labelledby='careers-hero-heading'>
    <div className='hero-bg absolute inset-0 pointer-events-none' aria-hidden='true'>
      <div className='hero-bg-grid absolute inset-0 opacity-70' />
      <div className='hero-bg-glow absolute inset-0' />
    </div>

    <div className='relative z-[1] max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 pt-[calc(84px+env(safe-area-inset-top,0px))] pb-10 lg:pb-14'>
      <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,52%)_minmax(0,48%)] gap-8 lg:gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='hero-eyebrow inline-flex items-center gap-2.5 py-2 px-4 rounded-full mb-5'>
            <span className='hero-eyebrow-dot w-[7px] h-[7px] rounded-full bg-secondary shrink-0' aria-hidden='true' />
            <span className='font-poppins text-[11px] uppercase tracking-[0.18em] text-dimWhite'>Careers at Bitvion</span>
          </div>

          <h1 id='careers-hero-heading' className='careers-hero-title font-poppins font-extrabold text-white tracking-[-0.02em] leading-[0.92]'>
            <span className='block'>BUILD WHAT&apos;S</span>
            <span className='block text-gradient'>NEXT.</span>
          </h1>

          <p className='font-poppins text-dimWhite text-[15px] sm:text-[16px] leading-[1.65] max-w-[560px] mt-5'>
            Join Bitvion Technologies and contribute to intelligent software, AI systems,
            automation technologies and digital products.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 mt-7 w-full max-w-[340px] sm:max-w-none'>
            <a href='#open-positions' className='hero-cta-primary inline-flex items-center justify-center gap-2 px-6 min-h-[52px] rounded-[11px] font-poppins font-medium text-[15px] text-primary w-full sm:w-auto'>
              Explore Open Positions <span aria-hidden='true'>→</span>
            </a>
            <a href='#internship-program' className='hero-cta-secondary inline-flex items-center justify-center gap-2 px-6 min-h-[52px] rounded-[11px] font-poppins font-medium text-[15px] text-white border border-white/15 bg-white/[0.03] backdrop-blur-sm w-full sm:w-auto'>
              Explore Internships <span aria-hidden='true'>→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className='lg:flex justify-center lg:justify-end'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='lg:hidden mt-2'>
            <EngineeringCore variant='mobile' />
          </div>
          <div className='hidden lg:block'>
            <EngineeringCore variant='desktop' />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default CareersHero
