import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({
  children = 'Get Started',
  styles = '',
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  ariaLabel,
}) => {
  const baseClasses =
    'py-4 px-6 font-poppins font-medium text-[16px] sm:text-[18px] outline-none rounded-[10px] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'

  const variants = {
    primary: 'bg-blue-gradient text-primary hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] hover:scale-[1.02]',
    secondary:
      'bg-transparent text-white border border-secondary/40 hover:border-secondary hover:bg-secondary/10',
    ghost: 'bg-transparent text-secondary hover:text-white',
  }

  const className = `${baseClasses} ${variants[variant]} ${styles}`

  if (to) {
    return (
      <Link to={to} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export default CTAButton
