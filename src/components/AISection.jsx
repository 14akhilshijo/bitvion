import React from 'react'
import { motion } from 'framer-motion'
import { aiCapabilities } from '../constants'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'

const aiFlow = [
  'Receives data',
  'Processes information',
  'Understands patterns',
  'Automates decisions',
  'Produces outcomes',
]

const AISection = () => {
  return (
    <section id='ai' className={layout.sectionReverse} aria-labelledby='ai-heading'>
      <div className={`${layout.sectionImgReverse} relative min-h-[350px]`}>
        <div className='relative w-full flex flex-col items-center gap-3 py-8'>
          {aiFlow.map((step, i) => (
            <React.Fragment key={step}>
              <motion.div
                className='w-full max-w-[280px] px-6 py-4 rounded-xl bg-black-gradient border border-secondary/20 text-center'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className='font-poppins text-[13px] text-secondary mr-2'>0{i + 1}</span>
                <span className='font-poppins text-white text-[14px]'>{step}</span>
              </motion.div>
              {i < aiFlow.length - 1 && (
                <div className='w-[2px] h-[16px] bg-gradient-to-b from-secondary/60 to-secondary/10' aria-hidden='true' />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/4 bottom-0 pink__gradient' aria-hidden='true' />
      </div>

      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='AI & Machine Learning'
          title={
            <>
              AI THAT WORKS <br className='sm:block hidden' />
              <span className='text-gradient'>FOR BUSINESS.</span>
            </>
          }
          subtitle='Practical AI systems that process data, identify patterns and automate decisions to deliver measurable business outcomes.'
        />

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8' role='list'>
          {aiCapabilities.map((item) => (
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

export default AISection
