import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from './FormField'
import CTAButton from '../CTAButton'
import { demoSchema, validateForm } from '../../utils/validation'
import { submitForm } from '../../utils/api'
import { trackEvent } from '../../utils/analytics'

const products = [
  { value: '', label: 'Select product' },
  { value: 'yatrikerp', label: 'YatrikERP' },
]

const DemoForm = () => {
  const [form, setForm] = useState({
    product: 'yatrikerp', company: '', name: '', email: '', phone: '',
    preferredDate: '', preferredTime: '', message: '', website: '', privacyConsent: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const validation = validateForm(demoSchema, { ...form, privacyConsent: form.privacyConsent || undefined })
    if (!validation.success) { setErrors(validation.errors); return }

    setStatus('loading')
    trackEvent('demo_submit', { product: form.product })

    try {
      await submitForm('demo', validation.data)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className='p-8 rounded-[20px] bg-black-gradient border border-secondary/20 text-center' role='status'>
        <h3 className='font-poppins font-semibold text-white text-[24px] mb-3'>Demo Request Received</h3>
        <p className='font-poppins text-dimWhite text-[16px]'>
          Thank you. We will contact you to schedule your demonstration.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='relative flex flex-col gap-5' noValidate>
      <div className='absolute -left-[9999px] h-0 w-0 overflow-hidden' aria-hidden='true'>
        <label htmlFor='demo-website'>Website</label>
        <input id='demo-website' type='text' name='website' tabIndex={-1} autoComplete='off' value={form.website} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <FormField label='Product' name='product' value={form.product} onChange={handleChange} error={errors.product} required options={products} />
        <FormField label='Company' name='company' value={form.company} onChange={handleChange} error={errors.company} required />
        <FormField label='Name' name='name' value={form.name} onChange={handleChange} error={errors.name} required />
        <FormField label='Email' name='email' type='email' value={form.email} onChange={handleChange} error={errors.email} required />
        <FormField label='Phone' name='phone' type='tel' value={form.phone} onChange={handleChange} />
        <FormField label='Preferred Date' name='preferredDate' type='date' value={form.preferredDate} onChange={handleChange} />
        <FormField label='Preferred Time' name='preferredTime' value={form.preferredTime} onChange={handleChange} placeholder='e.g. 10:00 AM IST' />
      </div>
      <FormField label='Message' name='message' value={form.message} onChange={handleChange} rows={4} placeholder='Optional notes' />

      <label className='flex items-start gap-3 cursor-pointer'>
        <input type='checkbox' name='privacyConsent' checked={form.privacyConsent} onChange={handleChange} className='mt-1 accent-secondary' />
        <span className='font-poppins text-dimWhite text-[14px]'>
          I agree to the <Link to='/privacy-policy' className='text-secondary hover:underline'>Privacy Policy</Link>.
        </span>
      </label>
      {errors.privacyConsent && <p className='font-poppins text-[13px] text-red-400' role='alert'>{errors.privacyConsent}</p>}
      {serverError && <p className='font-poppins text-[14px] text-red-400' role='alert'>{serverError}</p>}

      <CTAButton type='submit' variant='primary' styles={`w-full sm:w-auto text-center ${status === 'loading' ? 'opacity-70 pointer-events-none' : ''}`}>
        {status === 'loading' ? 'Submitting...' : 'Request Demo'}
      </CTAButton>
    </form>
  )
}

export default DemoForm
