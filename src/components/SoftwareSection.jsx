import React from 'react'
import { motion } from 'framer-motion'
import { softwareCapabilities } from '../constants'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'

const archLayers = [
  'Frontend',
  'API',
  'Backend',
  'Database',
  'Cloud',
  'Business System',
]

const SoftwareSection = () => {
  return (
    <section id='software' className={layout.section} aria-labelledby='software-heading'>
      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='Software Engineering'
          title={
            <>
              SOFTWARE ENGINEERED <br className='sm:block hidden' />
              FOR <span className='text-gradient'>REAL-WORLD IMPACT.</span>
            </>
          }
          subtitle='End-to-end software development from frontend interfaces to cloud infrastructure and business system integrations.'
        />

        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8' role='list'>
          {softwareCapabilities.map((item) => (
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

      <div className={`${layout.sectionImg} relative min-h-[350px]`}>
        <div className='relative w-full flex flex-col items-center gap-2 py-4'>
          {archLayers.map((layer, i) => (
            <React.Fragment key={layer}>
              <motion.div
                className='w-full max-w-[300px] px-8 py-4 rounded-xl bg-black-gradient border border-secondary/20 text-center font-poppins font-medium text-white text-[15px] hover:border-secondary/40 transition-colors'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                style={{ marginLeft: `${(i % 3) * 8}px` }}
              >
                {layer}
              </motion.div>
              {i < archLayers.length - 1 && (
                <div className='text-secondary text-[12px]' aria-hidden='true'>↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='absolute z-[0] w-[60%] h-[60%] right-0 top-0 blue__gradient' aria-hidden='true' />
      </div>
    </section>
  )
}

export default SoftwareSection
