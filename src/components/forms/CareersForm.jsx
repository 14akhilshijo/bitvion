import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FormField from './FormField'
import CTAButton from '../CTAButton'
import { careersSchema, validateForm } from '../../utils/validation'
import { submitForm } from '../../utils/api'
import { trackEvent } from '../../utils/analytics'
import { jobOpenings } from '../../data/careers'

const CareersForm = () => {
  const [searchParams] = useSearchParams()
  const roleFromUrl = searchParams.get('role') || ''

  const [form, setForm] = useState({
    name: '', email: '', phone: '', role: roleFromUrl, message: '', website: '', privacyConsent: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    if (roleFromUrl) {
      setForm((prev) => ({ ...prev, role: roleFromUrl }))
    }
  }, [roleFromUrl])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const validation = validateForm(careersSchema, { ...form, privacyConsent: form.privacyConsent || undefined })
    if (!validation.success) { setErrors(validation.errors); return }

    setStatus('loading')
    trackEvent('careers_apply')

    try {
      await submitForm('careers', validation.data)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className='p-8 rounded-[20px] bg-black-gradient border border-secondary/20 text-center' role='status'>
        <h3 className='font-poppins font-semibold text-white text-[24px] mb-3'>Application Received</h3>
        <p className='font-poppins text-dimWhite text-[16px]'>
          Thank you for your interest in Bitvion Technologies. We will review your profile and contact you if there is a suitable opportunity.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='relative flex flex-col gap-5' noValidate>
      <div className='absolute -left-[9999px] h-0 w-0 overflow-hidden' aria-hidden='true'>
        <label htmlFor='careers-website'>Website</label>
        <input id='careers-website' type='text' name='website' tabIndex={-1} autoComplete='off' value={form.website} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <FormField label='Name' name='name' value={form.name} onChange={handleChange} error={errors.name} required />
        <FormField label='Email' name='email' type='email' value={form.email} onChange={handleChange} error={errors.email} required />
        <FormField label='Phone' name='phone' type='tel' value={form.phone} onChange={handleChange} />
        <div className='flex flex-col w-full'>
          <label htmlFor='role' className='font-poppins font-normal text-dimWhite text-[14px] mb-2'>
            Role of Interest
          </label>
          <select
            id='role'
            name='role'
            value={form.role}
            onChange={handleChange}
            className='font-poppins text-white bg-primary border border-white/10 rounded-lg px-4 py-3 text-[16px] min-h-[48px] w-full focus:border-secondary/50 focus:outline-none transition-colors'
          >
            <option value=''>Select a role (optional)</option>
            {jobOpenings.map((job) => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
            <option value='Other'>Other / Future Opportunity</option>
          </select>
          {errors.role && <p className='font-poppins text-[13px] text-red-400 mt-1' role='alert'>{errors.role}</p>}
        </div>
      </div>
      <FormField label='About You' name='message' value={form.message} onChange={handleChange} error={errors.message} required rows={5} placeholder='Tell us about your skills and experience' />

      <label className='flex items-start gap-3 cursor-pointer'>
        <input type='checkbox' name='privacyConsent' checked={form.privacyConsent} onChange={handleChange} className='mt-1 accent-secondary' />
        <span className='font-poppins text-dimWhite text-[14px]'>
          I agree to the <Link to='/privacy-policy' className='text-secondary hover:underline'>Privacy Policy</Link>.
        </span>
      </label>
      {errors.privacyConsent && <p className='font-poppins text-[13px] text-red-400' role='alert'>{errors.privacyConsent}</p>}
      {serverError && <p className='font-poppins text-[14px] text-red-400' role='alert'>{serverError}</p>}

      <CTAButton type='submit' variant='primary' styles={`w-full sm:w-auto text-center ${status === 'loading' ? 'opacity-70 pointer-events-none' : ''}`}>
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
      </CTAButton>
    </form>
  )
}

export default CareersForm
