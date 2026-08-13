import React from 'react'
import { motion } from 'framer-motion'

const FlowDiagram = ({ steps, className = '' }) => {
  if (!steps?.length) return null

  return (
    <div className={`flex flex-col items-center gap-2 py-4 ${className}`} role='list' aria-label='Process flow'>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <motion.div
            role='listitem'
            className='w-full max-w-[300px] px-6 py-4 rounded-xl bg-black-gradient border border-secondary/20 text-center font-poppins text-[14px] sm:text-[15px] text-white hover:border-secondary/40 transition-colors'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <span className='text-secondary text-[14px]' aria-hidden='true'>↓</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default FlowDiagram
