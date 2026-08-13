import React from 'react'
import styles from '../style'
import RevealText from './RevealText'
import { motion, useReducedMotion } from 'framer-motion'

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const reduceMotion = useReducedMotion()
  const alignClass =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start text-left'

  return (
    <motion.div
      className={`flex flex-col ${alignClass} ${className}`}
      initial={reduceMotion ? false : 'hidden'}
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
      }}
    >
      {eyebrow && (
        <motion.span
          className='font-poppins font-medium text-secondary text-[14px] uppercase tracking-[3px] mb-4'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {eyebrow}
        </motion.span>
      )}
      <h2 className={`${styles.heading2} ${align === 'center' ? 'mx-auto' : ''}`}>
        <RevealText>{title}</RevealText>
      </h2>
      {subtitle && (
        <motion.p
          className={`${styles.paragraph} max-w-[570px] mt-5 ${align === 'center' ? 'mx-auto' : ''}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
