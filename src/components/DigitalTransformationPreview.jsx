import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transformationCapabilities } from '../constants'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'
import { arrowUp } from '../assets'

const transformSteps = [
  'Legacy Systems',
  'Modern Architecture',
  'Cloud',
  'Automation',
  'AI',
  'Connected Business',
]

const DigitalTransformationPreview = () => {
  return (
    <section id='transformation' className={layout.section} aria-labelledby='transformation-heading'>
      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='Digital Transformation'
          title={
            <>
              FROM LEGACY <br className='sm:block hidden' />
              TO <span className='text-gradient'>INTELLIGENT.</span>
            </>
          }
          subtitle='A structured path from legacy infrastructure to intelligent, connected business systems powered by modern architecture, cloud and AI.'
        />

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8' role='list'>
          {transformationCapabilities.map((item) => (
            <li
              key={item}
              className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 hover:border-secondary/20 transition-colors duration-300'
            >
              <div className='w-[6px] h-[6px] rounded-full bg-secondary flex-shrink-0' aria-hidden='true' />
              <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to='/solutions'
          className='inline-flex items-center gap-2 mt-8 font-poppins font-medium text-secondary hover:text-white transition-colors group'
        >
          Explore Digital Transformation
          <img src={arrowUp} alt='' className='w-[16px] h-[16px] rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' aria-hidden='true' />
        </Link>
      </div>

      <div className={`${layout.sectionImg} relative min-h-[350px]`}>
        <div className='relative w-full flex flex-wrap justify-center gap-3 py-6'>
          {transformSteps.map((step, i) => (
            <motion.div
              key={step}
              className='px-5 py-3 rounded-xl bg-black-gradient border border-secondary/15 text-center font-poppins text-[13px] sm:text-[14px] text-white hover:border-secondary/40 transition-colors'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {i > 0 && <span className='text-secondary mr-2' aria-hidden='true'>→</span>}
              {step}
            </motion.div>
          ))}
        </div>
        <div className='absolute z-[0] w-[60%] h-[60%] right-0 bottom-0 pink__gradient' aria-hidden='true' />
      </div>
    </section>
  )
}

export default DigitalTransformationPreview
