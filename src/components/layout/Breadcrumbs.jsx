import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ items }) => {
  if (!items?.length) return null

  return (
    <nav aria-label='Breadcrumb' className='mb-6'>
      <ol className='flex flex-wrap items-center gap-2 font-poppins text-[13px] text-dimWhite'>
        {items.map((item, i) => (
          <li key={item.path} className='flex items-center gap-2'>
            {i > 0 && <span aria-hidden='true' className='text-white/30'>/</span>}
            {i === items.length - 1 ? (
              <span className='text-secondary' aria-current='page'>{item.name}</span>
            ) : (
              <Link to={item.path} className='hover:text-white transition-colors'>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
