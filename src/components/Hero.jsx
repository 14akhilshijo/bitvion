import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import HeroBackground from './hero/HeroBackground'
import BitvionCore from './hero/BitvionCore'
import { HeroScrollIndicator, HeroTechStrip } from './hero/HeroChrome'
import RevealText from './RevealText'

const layer = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const visualY = useTransform(scrollY, [0, 400], [0, reduceMotion ? 0 : -40])
  const visualOpacity = useTransform(scrollY, [0, 350], [1, reduceMotion ? 1 : 0.65])

  return (
    <section
      id='home'
      className='hero-viewport relative min-h-[92vh] lg:min-h-[96vh] flex flex-col overflow-hidden bg-primary'
      aria-labelledby='hero-heading'
    >
      <HeroBackground />

      <div className='relative z-[1] flex-1 flex flex-col max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-10 pt-[88px] sm:pt-[92px] pb-4 lg:pb-6'>
        <div className='flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] gap-10 lg:gap-8 xl:gap-12 items-center'>
          <motion.div
            className='order-1 lg:order-none'
            initial={reduceMotion ? false : 'hidden'}
            animate='visible'
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
            }}
          >
            <motion.div
              className='hero-eyebrow inline-flex items-center gap-2.5 py-2 px-4 rounded-full mb-6 sm:mb-8'
              variants={layer}
            >
              <span className='hero-eyebrow-dot w-[7px] h-[7px] rounded-full bg-secondary shrink-0' aria-hidden='true' />
              <span className='font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-dimWhite'>
                Intelligent Technology Systems
              </span>
            </motion.div>

            <h1
              id='hero-heading'
              className='font-poppins font-extrabold text-white tracking-[-0.02em] leading-[0.92] text-[40px] xs:text-[48px] sm:text-[56px] md:text-[64px] lg:text-[76px] xl:text-[88px] 2xl:text-[96px]'
            >
              <RevealText>
                <span className='block'>BUILDING</span>
                <span className='block'>INTELLIGENCE</span>
                <span className='block'>FOR THE REAL</span>
                <span className='block'>
                  <span className='text-gradient'>WORLD.</span>
                </span>
              </RevealText>
            </h1>

            <motion.p
              className='hero-tags font-poppins text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-secondary/90 mt-6 sm:mt-7'
              variants={layer}
            >
              AI · SOFTWARE · AUTOMATION · DIGITAL SYSTEMS
            </motion.p>

            <motion.p
              className='font-poppins text-dimWhite text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65] max-w-[620px] mt-5 sm:mt-6'
              variants={layer}
            >
              Bitvion Technologies engineers intelligent software, AI-powered products and
              automation systems for businesses building what comes next.
            </motion.p>

            <motion.p className='font-poppins text-[13px] sm:text-[14px] text-dimWhite/60 mt-3' variants={layer}>
              Founded and owned by{' '}
              <Link to='/company/founder' className='text-secondary/90 hover:text-secondary transition-colors'>
                Akhil Shijo
              </Link>
              .
            </motion.p>

            <motion.div
              className='flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10'
              variants={layer}
            >
              <Link
                to='/company/about'
                className='hero-cta-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[11px] font-poppins font-medium text-[15px] sm:text-[16px] text-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
              >
                Explore Bitvion
                <span aria-hidden='true'>→</span>
              </Link>
              <Link
                to='/products/yatrikerp'
                className='hero-cta-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[11px] font-poppins font-medium text-[15px] sm:text-[16px] text-white border border-white/15 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/5 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
              >
                Explore YatrikERP
                <span aria-hidden='true'>→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className='order-3 lg:order-none flex justify-center lg:justify-end items-center'
            style={reduceMotion ? undefined : { y: visualY, opacity: visualOpacity }}
          >
            <div className='hidden lg:block w-full max-w-[520px]'>
              <BitvionCore />
            </div>
          </motion.div>

          <motion.div className='order-2 lg:hidden flex justify-center' variants={layer} initial='hidden' animate='visible'>
            <BitvionCore compact />
          </motion.div>
        </div>
      </div>

      <HeroTechStrip />
      <HeroScrollIndicator />
    </section>
  )
}

export default Hero
