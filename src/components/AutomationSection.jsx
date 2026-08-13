import React from 'react'
import { motion } from 'framer-motion'
import { automationCapabilities } from '../constants'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'

const workflowSteps = [
  'Manual Process',
  'Digital Workflow',
  'Automation',
  'AI Intelligence',
  'Business Outcome',
]

const AutomationSection = () => {
  return (
    <section id='automation' className={layout.sectionReverse} aria-labelledby='automation-heading'>
      <div className={`${layout.sectionImgReverse} relative min-h-[350px]`}>
        <div className='relative w-full flex flex-col items-center gap-3 py-6'>
          {workflowSteps.map((step, i) => (
            <React.Fragment key={step}>
              <motion.div
                className='w-full max-w-[300px] px-6 py-4 rounded-xl bg-black-gradient border border-white/10 hover:border-secondary/30 transition-colors text-center cursor-default'
                whileHover={{ scale: 1.02, borderColor: 'rgba(92, 225, 230, 0.4)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className='font-poppins text-white text-[14px] sm:text-[15px]'>{step}</span>
              </motion.div>
              {i < workflowSteps.length - 1 && (
                <motion.div
                  className='text-secondary text-[14px]'
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  aria-hidden='true'
                >
                  ↓
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 blue__gradient' aria-hidden='true' />
      </div>

      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='Intelligent Automation'
          title={
            <>
              AUTOMATE THE <br className='sm:block hidden' />
              WORK THAT SLOWS <br className='sm:block hidden' />
              <span className='text-gradient'>BUSINESS DOWN.</span>
            </>
          }
          subtitle='Transform manual processes into intelligent automated workflows that integrate with your existing systems and deliver measurable efficiency gains.'
        />

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8' role='list'>
          {automationCapabilities.map((item) => (
            <li
              key={item}
              className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 hover:border-secondary/20 transition-colors duration-300'
            >
              <div className='w-[6px] h-[6px] rounded-full bg-secondary flex-shrink-0' aria-hidden='true' />
              <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AutomationSection
