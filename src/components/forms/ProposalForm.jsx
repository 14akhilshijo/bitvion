import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from './FormField'
import CTAButton from '../CTAButton'
import { proposalSchema, validateForm } from '../../utils/validation'
import { submitForm } from '../../utils/api'
import { trackEvent } from '../../utils/analytics'

const projectTypes = [
  { value: '', label: 'Select project type' },
  { value: 'software', label: 'Software' },
  { value: 'ai', label: 'AI' },
  { value: 'automation', label: 'Automation' },
  { value: 'erp', label: 'ERP' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'web', label: 'Web' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'other', label: 'Other' },
]

const ProposalForm = () => {
  const [form, setForm] = useState({
    company: '', contactPerson: '', email: '', country: '',
    projectType: '', estimatedBudget: '', timeline: '', requirements: '', website: '', privacyConsent: false,
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
    const validation = validateForm(proposalSchema, { ...form, privacyConsent: form.privacyConsent || undefined })
    if (!validation.success) { setErrors(validation.errors); return }

    setStatus('loading')
    trackEvent('proposal_submit')

    try {
      await submitForm('proposal', validation.data)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className='p-8 rounded-[20px] bg-black-gradient border border-secondary/20 text-center' role='status'>
        <h3 className='font-poppins font-semibold text-white text-[24px] mb-3'>Proposal Request Received</h3>
        <p className='font-poppins text-dimWhite text-[16px]'>
          Thank you. Our team will review your requirements and respond with next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='relative flex flex-col gap-5' noValidate onFocus={() => trackEvent('proposal_start')}>
      <div className='absolute -left-[9999px] h-0 w-0 overflow-hidden' aria-hidden='true'>
        <label htmlFor='proposal-website'>Website</label>
        <input id='proposal-website' type='text' name='website' tabIndex={-1} autoComplete='off' value={form.website} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <FormField label='Company' name='company' value={form.company} onChange={handleChange} error={errors.company} required />
        <FormField label='Contact Person' name='contactPerson' value={form.contactPerson} onChange={handleChange} error={errors.contactPerson} required />
        <FormField label='Business Email' name='email' type='email' value={form.email} onChange={handleChange} error={errors.email} required />
        <FormField label='Country' name='country' value={form.country} onChange={handleChange} error={errors.country} required />
        <FormField label='Project Type' name='projectType' value={form.projectType} onChange={handleChange} error={errors.projectType} required options={projectTypes} />
        <FormField label='Estimated Budget' name='estimatedBudget' value={form.estimatedBudget} onChange={handleChange} placeholder='Optional' />
        <FormField label='Timeline' name='timeline' value={form.timeline} onChange={handleChange} placeholder='Optional' />
      </div>
      <FormField label='Requirements' name='requirements' value={form.requirements} onChange={handleChange} error={errors.requirements} required rows={6} placeholder='Describe what you want to build' />

      <label className='flex items-start gap-3 cursor-pointer'>
        <input type='checkbox' name='privacyConsent' checked={form.privacyConsent} onChange={handleChange} className='mt-1 accent-secondary' />
        <span className='font-poppins text-dimWhite text-[14px]'>
          I agree to the <Link to='/privacy-policy' className='text-secondary hover:underline'>Privacy Policy</Link>.
        </span>
      </label>
      {errors.privacyConsent && <p className='font-poppins text-[13px] text-red-400' role='alert'>{errors.privacyConsent}</p>}
      {serverError && <p className='font-poppins text-[14px] text-red-400' role='alert'>{serverError}</p>}

      <CTAButton type='submit' variant='primary' styles={`w-full sm:w-auto text-center ${status === 'loading' ? 'opacity-70 pointer-events-none' : ''}`}>
        {status === 'loading' ? 'Submitting...' : 'Request Proposal'}
      </CTAButton>
    </form>
  )
}

export default ProposalForm
