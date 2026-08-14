import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import styles from '../style'
import CTAButton from './CTAButton'
import HeroVisual from './HeroVisual'
import HeroTrustBar from './HeroTrustBar'
import RevealText from './RevealText'
import EntityNav from './seo/EntityNav'
import { INTERNATIONAL_STATEMENT } from '../data/entity'

const layer = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id='home'
      className={`hero-international-bg relative ${styles.paddingY} pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20 -mx-6 sm:-mx-16 px-6 sm:px-16 rounded-none`}
      aria-labelledby='hero-heading'
    >
      <div className='relative z-[1] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-10 xl:gap-16 max-w-[1280px] mx-auto'>
        <motion.div
          className='flex-1 min-w-0 max-w-[680px]'
          initial={reduceMotion ? false : 'hidden'}
          animate='visible'
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
          }}
        >
          <motion.div
            className='inline-flex flex-row items-center gap-3 py-[7px] px-4 bg-[#030912]/80 rounded-full mb-6 sm:mb-7 border border-cyan-500/20 backdrop-blur-sm'
            variants={layer}
          >
            <div className='w-[8px] h-[8px] rounded-full bg-secondary shrink-0 animate-pulse-glow' aria-hidden='true' />
            <p className='font-poppins text-[12px] xs:text-[13px] sm:text-[14px] text-dimWhite mb-0 tracking-[0.06em]'>
              Global Technology Enterprise · India
            </p>
          </motion.div>

          <h1
            id='hero-heading'
            className='font-poppins font-semibold text-[32px] leading-[40px] xs:text-[44px] xs:leading-[54px] ss:text-[58px] ss:leading-[72px] md:text-[64px] md:leading-[88px] lg:text-[70px] lg:leading-[96px] text-white break-words'
          >
            <RevealText>
              INTELLIGENCE <br className='xs:block hidden' />
              BUILT FOR <br className='xs:block hidden' />
              <span className='text-gradient'>WHAT&apos;S NEXT.</span>
            </RevealText>
          </h1>

          <motion.p
            className={`${styles.paragraph} max-w-[560px] mt-6 sm:mt-8 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px]`}
            variants={layer}
          >
            Bitvion Technologies builds intelligent software, AI solutions, automation systems
            and digital products for modern organizations. {INTERNATIONAL_STATEMENT}{' '}
            Founded and owned by{' '}
            <Link to='/company/founder' className='text-secondary hover:text-white transition-colors'>
              Akhil Shijo
            </Link>
            .
          </motion.p>

          <motion.div
            className='flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 w-full'
            variants={layer}
          >
            <CTAButton to='/solutions' variant='primary' styles='w-full xs:w-auto text-center'>
              Explore Solutions
            </CTAButton>
            <CTAButton to='/global' variant='secondary' styles='w-full xs:w-auto text-center'>
              Global Capabilities
            </CTAButton>
            <CTAButton to='/contact' variant='secondary' styles='w-full xs:w-auto text-center'>
              Talk to Bitvion
            </CTAButton>
          </motion.div>

          <motion.div variants={layer} className='mt-6 sm:mt-7'>
            <EntityNav
              label='Explore Bitvion Technologies'
              links={[
                { name: 'About', path: '/company/about' },
                { name: 'Founder', path: '/company/founder' },
                { name: 'YatrikERP', path: '/products/yatrikerp' },
                { name: 'Insights', path: '/insights' },
              ]}
            />
          </motion.div>

          <HeroTrustBar />
        </motion.div>

        <motion.div
          className='flex-shrink-0 w-full lg:w-[44%] xl:w-[42%] flex justify-center lg:justify-end items-center'
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
