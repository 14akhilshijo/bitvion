import React from 'react'
import { Link } from 'react-router-dom'
import { arrowUp } from '../../assets'

const CardGrid = ({ items, columns = 3 }) => {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4 sm:gap-6`}>
      {items.map((item) => (
        <Link
          key={item.slug || item.title}
          to={item.path}
          className='group flex flex-col p-6 sm:p-8 rounded-[20px] feature-card border border-white/5 hover:border-secondary/20 transition-all duration-500'
        >
          <h3 className='font-poppins font-semibold text-white text-[18px] sm:text-[20px] mb-3 group-hover:text-gradient transition-colors'>
            {item.title}
          </h3>
          <p className='font-poppins text-dimWhite text-[15px] leading-[26px] flex-1'>
            {item.cardDescription || item.description}
          </p>
          <div className='flex items-center gap-2 mt-6 text-secondary group-hover:translate-x-2 transition-transform duration-300'>
            <span className='font-poppins font-medium text-[14px]'>Explore</span>
            <img src={arrowUp} alt='' className='w-[16px] h-[16px] rotate-45' aria-hidden='true' />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CardGrid
