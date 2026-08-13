import React from 'react'
import { motion } from 'framer-motion'
import styles from '../style'
import CTAButton from './CTAButton'
import AnimateIn from './AnimateIn'

const FinalCTA = () => {
  return (
    <AnimateIn>
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow border border-white/5 relative overflow-hidden`} aria-labelledby='final-cta-heading'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5 pointer-events-none'
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          aria-hidden='true'
        />
        <div className='flex-1 flex flex-col relative z-10'>
          <h2 id='final-cta-heading' className={styles.heading2}>
            LET&apos;S BUILD <br className='sm:block hidden' />
            <span className='text-gradient'>WHAT&apos;S NEXT.</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
            Have a technology challenge, product idea or transformation initiative?
            Let&apos;s explore what we can build together.
          </p>
        </div>
        <div className='flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 sm:ml-10 ml-0 mt-6 sm:mt-0 relative z-10 w-full sm:w-auto'>
          <CTAButton to='/contact' variant='primary' styles='w-full xs:w-auto text-center'>
            Start a Conversation
          </CTAButton>
          <CTAButton to='/request-proposal' variant='secondary' styles='w-full xs:w-auto text-center'>
            Request a Proposal
          </CTAButton>
        </div>
      </section>
    </AnimateIn>
  )
}

export default FinalCTA
