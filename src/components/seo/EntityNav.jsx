import React from 'react'
import { Link } from 'react-router-dom'

const EntityNav = ({ links, label = 'Related pages', className = '' }) => {
  if (!links?.length) return null

  return (
    <nav aria-label={label} className={className}>
      <ul className='flex flex-wrap gap-x-5 gap-y-2'>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className='font-poppins text-[14px] text-secondary hover:text-white transition-colors'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default EntityNav
