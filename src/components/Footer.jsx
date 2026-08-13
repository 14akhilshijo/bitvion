import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style'
import BrandLogo from './BrandLogo'

const footerSections = [
  {
    title: 'Technology',
    links: [
      { name: 'Solutions', path: '/solutions' },
      { name: 'AI & Machine Learning', path: '/solutions/artificial-intelligence' },
      { name: 'Software Development', path: '/solutions/software-development' },
      { name: 'Intelligent Automation', path: '/solutions/intelligent-automation' },
      { name: 'Cloud Technology', path: '/solutions/cloud-technology' },
      { name: 'Digital Transformation', path: '/solutions/digital-transformation' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'YatrikERP', path: '/products/yatrikerp' },
      { name: 'All Products', path: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', path: '/company/about' },
      { name: 'Founder', path: '/company/founder' },
      { name: 'Technology', path: '/company/technology' },
      { name: 'Careers', path: '/careers' },
      { name: 'Insights', path: '/insights' },
    ],
  },
  {
    title: 'Global',
    links: [
      { name: 'Netherlands', path: '/global/netherlands' },
      { name: 'United Kingdom', path: '/global/united-kingdom' },
      { name: 'Scotland', path: '/global/scotland' },
      { name: 'Europe', path: '/global/europe' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Talk to Bitvion', path: '/contact' },
      { name: 'Request Proposal', path: '/request-proposal' },
      { name: 'Request Demo', path: '/request-demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ],
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`} role='contentinfo'>
      <div className='w-full mb-8'>
        <BrandLogo variant='footer' className='mb-4' />
        <p className={`${styles.paragraph} max-w-[400px] text-[15px] mb-2`}>
          Bitvion Technologies is a technology business based in Kerala, India.
        </p>
        <p className='font-poppins text-dimWhite text-[14px] mb-2'>
          <Link to='/company/founder' className='hover:text-secondary transition-colors'>
            Akhil Shijo
          </Link>
          {' '}is the Founder &amp; Proprietor of Bitvion Technologies.
        </p>
        <p className='font-poppins text-dimWhite text-[14px]'>
          <a href='https://bitvion.in/' className='hover:text-secondary transition-colors'>bitvion.in</a>
          {' · '}
          <a href='mailto:info@bitvion.in' className='hover:text-secondary transition-colors'>info@bitvion.in</a>
        </p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-8'>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className='font-poppins font-medium text-[14px] text-white mb-4 uppercase tracking-wider'>
              {section.title}
            </h4>
            <ul className='list-none space-y-2'>
              {section.links.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className='font-poppins text-[13px] text-dimWhite hover:text-secondary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='w-full pt-6 border-t border-white/10 text-center'>
        <p className='font-poppins text-dimWhite text-[14px]'>
          &copy; {currentYear} Bitvion Technologies. All Rights Reserved.
        </p>
        <p className='font-poppins text-dimWhite/50 text-[12px] mt-2'>
          We don&apos;t just build software. We engineer intelligent systems.
        </p>
      </div>
    </footer>
  )
}

export default Footer
