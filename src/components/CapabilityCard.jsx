import React from 'react'
import { Link } from 'react-router-dom'
import { arrowUp } from '../assets'
import styles from '../style'

const CapabilityCard = ({ number, title, content, index, slug }) => {
  const to = slug ? `/solutions/${slug}` : '/solutions'
  return (
    <Link
      to={to}
      className={`group flex flex-col p-6 sm:p-8 rounded-[20px] feature-card border border-white/5 hover:border-secondary/20 transition-all duration-500 cursor-pointer ${
        index % 2 === 0 ? 'md:mt-0' : 'md:mt-8'
      }`}
      aria-label={`Learn more about ${title}`}
    >
      <span className='font-poppins font-semibold text-secondary text-[14px] mb-4'>
        {number}
      </span>
      <div className='w-[56px] h-[56px] rounded-full bg-dimBlue flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-300'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5CE1E6" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#5CE1E6" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6"/>
          <path d="M2 12L12 17L22 12" stroke="#5CE1E6" strokeWidth="1.5" strokeLinejoin="round" opacity="0.8"/>
        </svg>
      </div>
      <h3 className='font-poppins font-semibold text-white text-[20px] leading-[28px] mb-3 group-hover:text-gradient transition-colors duration-300'>
        {title}
      </h3>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[26px] flex-1'>
        {content}
      </p>
      <div className={`${styles.flexStart} flex-row mt-6 items-center gap-2 text-secondary group-hover:translate-x-2 transition-transform duration-300`}>
        <span className='font-poppins font-medium text-[14px]'>Explore</span>
        <img src={arrowUp} alt="" className='w-[16px] h-[16px] object-contain rotate-45' aria-hidden="true" />
      </div>
    </Link>
  )
}

export default CapabilityCard
