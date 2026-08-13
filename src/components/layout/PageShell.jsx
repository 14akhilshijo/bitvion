import React from 'react'
import styles from '../../style'

const PageShell = ({ children, className = '' }) => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart} pb-16 ${className}`}>
      <div className={`${styles.boxWidth} w-full`}>{children}</div>
    </div>
  )
}

export default PageShell
