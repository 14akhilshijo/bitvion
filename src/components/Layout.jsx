import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import styles from '../style'

const Layout = () => {
  return (
    <div className='bg-primary w-full overflow-x-hidden min-h-screen'>
      <Header />
      <main id='main-content'>
        <Outlet />
      </main>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default Layout
