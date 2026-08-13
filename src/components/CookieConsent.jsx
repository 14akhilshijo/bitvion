import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent, initAnalytics } from '../utils/analytics'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false })

  useEffect(() => {
    if (!getConsent()) setVisible(true)
    else initAnalytics()
  }, [])

  const save = (consent) => {
    setConsent(consent)
    setVisible(false)
    if (consent.analytics) initAnalytics()
  }

  if (!visible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-3 xs:p-4 sm:p-6 pb-[max(0.75rem,env(safe-area-inset-bottom))]' role='dialog' aria-label='Cookie consent'>
      <div className='max-w-[900px] mx-auto p-4 sm:p-6 rounded-[16px] bg-primary/95 backdrop-blur-xl border border-white/10 shadow-2xl'>
        {!showPrefs ? (
          <>
            <p className='font-poppins text-dimWhite text-[14px] sm:text-[15px] mb-4'>
              We use cookies to ensure basic functionality and, with your consent, analytics cookies to understand website usage.{' '}
              <Link to='/cookie-policy' className='text-secondary hover:underline'>Cookie Policy</Link>
            </p>
            <div className='flex flex-col xs:flex-row flex-wrap gap-3'>
              <button type='button' onClick={() => save({ necessary: true, analytics: true, marketing: false })} className='py-3 px-5 min-h-[44px] bg-blue-gradient text-primary font-poppins font-medium text-[14px] rounded-[8px]'>Accept All</button>
              <button type='button' onClick={() => save({ necessary: true, analytics: false, marketing: false })} className='py-3 px-5 min-h-[44px] border border-white/20 text-white font-poppins text-[14px] rounded-[8px] hover:border-secondary/40 transition-colors'>Necessary Only</button>
              <button type='button' onClick={() => setShowPrefs(true)} className='py-3 px-5 min-h-[44px] text-secondary font-poppins text-[14px] hover:text-white transition-colors'>Manage Preferences</button>
            </div>
          </>
        ) : (
          <>
            <h3 className='font-poppins font-semibold text-white text-[16px] mb-4'>Cookie Preferences</h3>
            <div className='space-y-3 mb-4'>
              <label className='flex items-center justify-between font-poppins text-[14px] text-dimWhite'>
                <span>Necessary (required)</span>
                <input type='checkbox' checked disabled className='accent-secondary' />
              </label>
              <label className='flex items-center justify-between font-poppins text-[14px] text-dimWhite cursor-pointer'>
                <span>Analytics</span>
                <input type='checkbox' checked={prefs.analytics} onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })} className='accent-secondary' />
              </label>
              <label className='flex items-center justify-between font-poppins text-[14px] text-dimWhite cursor-pointer'>
                <span>Marketing</span>
                <input type='checkbox' checked={prefs.marketing} onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })} className='accent-secondary' />
              </label>
            </div>
            <button type='button' onClick={() => save({ ...prefs, necessary: true })} className='py-2 px-5 bg-blue-gradient text-primary font-poppins font-medium text-[14px] rounded-[8px]'>Save Preferences</button>
          </>
        )}
      </div>
    </div>
  )
}

export default CookieConsent
