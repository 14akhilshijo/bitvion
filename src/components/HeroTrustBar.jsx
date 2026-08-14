import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { label: 'India', path: '/company/about' },
  { label: 'Bangalore', path: '/company/about' },
  { label: 'International Markets', path: '/global' },
  { label: 'AI & Software', path: '/solutions' },
  { label: 'YatrikERP', path: '/products/yatrikerp' },
]

const HeroTrustBar = () => (
  <div
    className='relative z-[1] mt-12 sm:mt-14 pt-8 border-t border-white/[0.06]'
    aria-label='Bitvion global technology focus'
  >
    <p className='font-poppins text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-secondary mb-4'>
      Global technology enterprise
    </p>
    <ul className='flex flex-wrap gap-2 sm:gap-3' role='list'>
      {items.map((item) => (
        <li key={item.label}>
          <Link
            to={item.path}
            className='hero-trust-pill inline-flex items-center px-3.5 py-2 rounded-full font-poppins text-[12px] sm:text-[13px] text-dimWhite hover:text-white hover:border-secondary/40 transition-colors'
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default HeroTrustBar
