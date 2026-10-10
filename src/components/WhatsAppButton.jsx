import React from 'react'
import { entity } from '../data/entity'

const WhatsAppButton = () => (
  <a
    href={entity.organization.whatsappUrl}
    target='_blank'
    rel='noopener noreferrer'
    className='fixed z-40 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-4 rounded-full bg-[#25D366] text-[#06210f] font-poppins font-semibold text-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
    aria-label={`Chat on WhatsApp at ${entity.organization.phoneDisplay}`}
  >
    WhatsApp
  </a>
)

export default WhatsAppButton
