import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { processSteps } from '../constants'
import styles from '../style'
import SectionHeading from './SectionHeading'

const ProcessTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id='process' className={`${styles.paddingY}`} aria-labelledby='process-heading' ref={ref}>
      <SectionHeading
        eyebrow='Development Process'
        title={
          <>
            FROM DISCOVERY <br className='sm:block hidden' />
            TO <span className='text-gradient'>EVOLUTION.</span>
          </>
        }
        subtitle='A structured engineering process that delivers quality software from initial discovery through continuous evolution.'
        align='center'
        className='mb-12 sm:mb-16'
      />

      <div className='relative'>
        <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2' aria-hidden='true' />

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6'>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className='flex flex-col items-center text-center group'
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className='w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full bg-dimBlue border border-secondary/20 flex items-center justify-center mb-4 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-300'>
                <span className='font-poppins font-semibold text-secondary text-[14px]'>
                  {step.number}
                </span>
              </div>
              <h3 className='font-poppins font-semibold text-white text-[14px] sm:text-[16px] group-hover:text-gradient transition-colors'>
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
