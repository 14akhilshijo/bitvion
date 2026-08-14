import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import styles from '../style'
import CTAButton from './CTAButton'
import HeroLogo from './HeroLogo'
import RevealText from './RevealText'
import EntityNav from './seo/EntityNav'

const layer = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id='home'
      className={`relative ${styles.paddingY} pt-28 sm:pt-32 pb-10 sm:pb-14 md:pb-16`}
      aria-labelledby='hero-heading'
    >
      <div
        className='pointer-events-none absolute right-0 top-[18%] hidden md:block w-[42%] max-w-[520px] h-[62%] opacity-70'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 70% 45%, rgba(92, 225, 230, 0.07) 0%, transparent 68%)',
        }}
      />

      <div className='relative z-[1] flex flex-col md:flex-row md:items-center md:justify-between gap-12 lg:gap-16 xl:gap-20'>
        <motion.div
          className='flex-1 min-w-0 max-w-[640px]'
          initial={reduceMotion ? false : 'hidden'}
          animate='visible'
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
          }}
        >
          <motion.div
            className='inline-flex flex-row items-center py-[6px] px-3 xs:px-4 bg-discount-gradient rounded-[10px] mb-5 sm:mb-6 border border-white/5 max-w-full'
            variants={layer}
          >
            <div className='w-[8px] h-[8px] rounded-full bg-secondary mr-3 shrink-0 animate-pulse-glow' aria-hidden='true' />
            <p className={`${styles.paragraph} text-[13px] xs:text-[14px] sm:text-[16px] mb-0`}>
              Engineering intelligent technology for a connected future.
            </p>
          </motion.div>

          <h1
            id='hero-heading'
            className='font-poppins font-semibold text-[30px] leading-[38px] xs:text-[42px] xs:leading-[52px] ss:text-[64px] ss:leading-[84px] md:text-[68px] md:leading-[96px] lg:text-[72px] lg:leading-[100px] text-white break-words'
          >
            <RevealText>
              INTELLIGENCE <br className='xs:block hidden' />
              BUILT FOR <br className='xs:block hidden' />
              <span className='text-gradient'>WHAT&apos;S NEXT.</span>
            </RevealText>
          </h1>

          <motion.p
            className={`${styles.paragraph} max-w-[520px] mt-5 sm:mt-7 lg:mt-8`}
            variants={layer}
          >
            Bitvion Technologies is a proprietary technology enterprise based in Kerala, India,
            building intelligent software, AI solutions, automation systems and
            digital products. {' '}
            <Link to='/company/founder' className='text-secondary hover:text-white transition-colors'>
              Akhil Shijo
            </Link>
            {' '}is the Founder &amp; Proprietor of Bitvion Technologies.
          </motion.p>

          <motion.div variants={layer} className='mt-5 sm:mt-6'>
            <EntityNav
              label='Explore Bitvion Technologies'
              links={[
                { name: 'About', path: '/company/about' },
                { name: 'Founder', path: '/company/founder' },
                { name: 'YatrikERP', path: '/products/yatrikerp' },
                { name: 'Solutions', path: '/solutions' },
              ]}
            />
          </motion.div>

          <motion.div className='flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 w-full' variants={layer}>
            <CTAButton to='/solutions' variant='primary' styles='w-full xs:w-auto text-center'>
              Explore Solutions
            </CTAButton>
            <CTAButton to='/contact' variant='secondary' styles='w-full xs:w-auto text-center'>
              Talk to Bitvion
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end items-center'
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroLogo />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
