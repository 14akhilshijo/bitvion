import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const letterEase = [0.16, 1, 0.3, 1]

const letterVariants = {
  hidden: { opacity: 0, y: 18, rotateX: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.28, ease: letterEase },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: letterEase },
  },
}

const getText = (node) => {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getText).join('')
  if (React.isValidElement(node)) return getText(node.props.children)
  return ''
}

const splitLetters = (text, keyPrefix) =>
  Array.from(text).map((char, i) => (
    <motion.span
      key={`${keyPrefix}-${i}`}
      variants={letterVariants}
      className={char === ' ' ? 'inline' : 'inline-block'}
      style={{ transformOrigin: 'bottom' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ))

const splitNode = (node, keyPrefix = 'n') => {
  if (node == null || typeof node === 'boolean') return null
  if (typeof node === 'string' || typeof node === 'number') {
    return splitLetters(String(node), keyPrefix)
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={`${keyPrefix}-${i}`}>{splitNode(child, `${keyPrefix}-${i}`)}</React.Fragment>
    ))
  }
  if (React.isValidElement(node)) {
    if (node.type === 'br') return node
    const className = node.props?.className || ''
    if (String(className).includes('text-gradient')) {
      return (
        <motion.span key={keyPrefix} variants={wordVariants} className={`${className} inline-block`}>
          {node.props.children}
        </motion.span>
      )
    }
    return React.cloneElement(
      node,
      { key: keyPrefix },
      splitNode(node.props.children, keyPrefix),
    )
  }
  return node
}

const RevealText = ({
  children,
  className = '',
  delay = 0,
  mode = 'letters',
}) => {
  const reduceMotion = useReducedMotion()
  const label = getText(children)

  if (reduceMotion) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      className={`inline ${className}`}
      aria-label={label}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: mode === 'letters' ? 0.016 : 0.045,
            delayChildren: delay,
          },
        },
      }}
      style={{ perspective: 700 }}
    >
      <span aria-hidden='true'>{splitNode(children)}</span>
    </motion.span>
  )
}

export default RevealText
