import React from 'react'

const getText = (node) => {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getText).join('')
  if (React.isValidElement(node)) return getText(node.props.children)
  return ''
}

/**
 * Headings stay as real text in the DOM.
 * Letter-by-letter animation previously wrapped the only copy in aria-hidden,
 * so crawlers reported the page as having no H1.
 */
const RevealText = ({ children, className = '' }) => (
  <span className={className} data-text={getText(children)}>
    {children}
  </span>
)

export default RevealText
