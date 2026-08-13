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
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} pt-28 sm:pt-32`} aria-labelledby='hero-heading'>
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-0`}
        initial={reduceMotion ? false : 'hidden'}
        animate='visible'
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
        }}
      >
        <motion.div
          className='flex flex-row items-center py-[6px] px-3 xs:px-4 bg-discount-gradient rounded-[10px] mb-5 sm:mb-6 border border-white/5 max-w-full'
          variants={layer}
        >
          <div className='w-[8px] h-[8px] rounded-full bg-secondary mr-3 shrink-0 animate-pulse-glow' aria-hidden='true' />
          <p className={`${styles.paragraph} text-[13px] xs:text-[14px] sm:text-[16px]`}>
            Engineering intelligent technology for a connected future.
          </p>
        </motion.div>

        <h1
          id='hero-heading'
          className='font-poppins font-semibold text-[30px] leading-[38px] xs:text-[42px] xs:leading-[52px] ss:text-[64px] ss:leading-[84px] md:text-[72px] md:leading-[100.8px] text-white break-words'
        >
          <RevealText>
            INTELLIGENCE <br className='xs:block hidden' />
            BUILT FOR <br className='xs:block hidden' />
            <span className='text-gradient'>WHAT&apos;S NEXT.</span>
          </RevealText>
        </h1>

        <motion.p
          className={`${styles.paragraph} max-w-[520px] mt-5 sm:mt-8`}
          variants={layer}
        >
          Bitvion Technologies is a technology business based in Kerala, India,
          building intelligent software, AI solutions, automation systems and
          digital products. {' '}
          <Link to='/company/founder' className='text-secondary hover:text-white transition-colors'>
            Akhil Shijo
          </Link>
          {' '}is the Founder &amp; Proprietor of Bitvion Technologies.
        </motion.p>

        <motion.div variants={layer} className='mt-5'>
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

        <motion.div className='flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-10 w-full' variants={layer}>
          <CTAButton to='/solutions' variant='primary' styles='w-full xs:w-auto text-center'>
            Explore Solutions
          </CTAButton>
          <CTAButton to='/contact' variant='secondary' styles='w-full xs:w-auto text-center'>
            Talk to Bitvion
          </CTAButton>
        </motion.div>
      </motion.div>

      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 mt-8 mb-2 relative w-full max-w-[420px] md:max-w-none mx-auto`}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 28 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroLogo />
      </motion.div>
    </section>
  )
}

export default Hero
