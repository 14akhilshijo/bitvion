import React from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import PageShell from '../components/layout/PageShell'
import CTAButton from '../components/CTAButton'
import styles from '../style'

const NotFoundPage = () => (
  <PageShell>
    <PageMeta title='Page Not Found | Bitvion Technologies' description='The requested page could not be found.' path='/404' noindex />
    <div className='pt-32 sm:pt-40 pb-20 text-center'>
      <span className='font-poppins text-secondary text-[80px] sm:text-[120px] font-bold opacity-20' aria-hidden='true'>404</span>
      <h1 className={`${styles.heading2} mt-4`}>PAGE NOT FOUND.</h1>
      <p className={`${styles.paragraph} max-w-[480px] mx-auto mt-4`}>
        The page you are looking for does not exist or has been moved.
      </p>
      <CTAButton to='/' variant='primary' styles='mt-8'>Return to Bitvion</CTAButton>
    </div>
  </PageShell>
)

export default NotFoundPage
