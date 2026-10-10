import React, { useEffect, useId, useState } from 'react'
import bitvionAi from '../assets/bitvion-ai.jpg'
import { entity } from '../data/entity'

const chatUrl = (text) =>
  `${entity.organization.whatsappUrl}?text=${encodeURIComponent(text)}`

const answers = [
  {
    test: /yatrik/i,
    reply: 'YatrikERP is Bitvion’s operations platform for transportation, hospital, and school work. I can connect you on WhatsApp for a walkthrough.',
  },
  {
    test: /career|job|intern|hiring/i,
    reply: 'Open roles and internships are on the Careers page. If you want to ask about a role, continue with me on WhatsApp.',
  },
  {
    test: /automat|ai\b|machine learning|ml\b/i,
    reply: 'Bitvion builds AI automation into real business workflows, including documents, approvals, and connected systems.',
  },
  {
    test: /software|app|website|develop|build/i,
    reply: 'Bitvion builds custom software: web apps, APIs, and business systems. Tell me what you want to build and I’ll take it to WhatsApp.',
  },
  {
    test: /where|location|kerala|bangalore|bengaluru|office|remote/i,
    reply: 'Bitvion Technologies is based in Kerala, India, with work available in Bengaluru and remotely.',
  },
  {
    test: /who|founder|akhil|owner/i,
    reply: 'Bitvion Technologies is founded and owned by Akhil Shijo.',
  },
  {
    test: /contact|phone|whatsapp|email|call|number/i,
    reply: `You can reach Bitvion at ${entity.organization.phoneDisplay} on WhatsApp, or at info@bitvion.in.`,
  },
  {
    test: /price|cost|quote|budget|proposal/i,
    reply: 'Pricing depends on the project. Share what you need and the team will continue with you directly on WhatsApp.',
  },
]

const replyFor = (question) => {
  const match = answers.find((item) => item.test.test(question))
  if (match) return match.reply
  return 'I can help with software, AI, YatrikERP, and careers. For anything more specific, I’ll send your question straight to the Bitvion team on WhatsApp.'
}

const faceClass = 'object-cover object-[76%_16%]'

const WhatsAppButton = () => {
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [thread, setThread] = useState([
    {
      from: 'agent',
      text: 'Hello, I’m here. Ask me about software, AI, YatrikERP, or careers, and I’ll answer. If you want to talk it through, we continue on WhatsApp.',
    },
  ])

  useEffect(() => {
    const seen = sessionStorage.getItem('bitvion-support-seen')
    if (seen) return undefined
    const timer = window.setTimeout(() => setOpen(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    sessionStorage.setItem('bitvion-support-seen', '1')
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const ask = (event) => {
    event.preventDefault()
    const text = question.trim()
    if (!text) return
    setThread((current) => [
      ...current,
      { from: 'visitor', text },
      { from: 'agent', text: replyFor(text) },
    ])
    setQuestion('')
  }

  const latestVisitor = [...thread].reverse().find((item) => item.from === 'visitor')
  const handoff = latestVisitor
    ? `Hello Bitvion. ${latestVisitor.text}`
    : 'Hello Bitvion. I need support.'

  return (
    <div className='fixed z-[55] bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 sm:right-8 flex flex-col items-end gap-3 max-w-[calc(100vw-1.5rem)]'>
      {open && (
        <section
          className='w-[min(100%,360px)] rounded-2xl border border-cyan-400/20 bg-[#030912]/95 text-white shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden'
          role='dialog'
          aria-labelledby={titleId}
        >
          <header className='flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[radial-gradient(ellipse_at_left,rgba(92,225,230,0.16),transparent_60%)]'>
            <span className='relative shrink-0'>
              <img src={bitvionAi} alt='' className={`h-11 w-11 rounded-full border border-cyan-400/30 ${faceClass}`} />
              <span className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary border-2 border-[#030912]' aria-hidden='true' />
            </span>
            <div className='min-w-0 flex-1'>
              <p id={titleId} className='font-poppins font-semibold text-[15px] leading-tight'>Bitvion AI</p>
              <p className='font-poppins text-[12px] text-secondary'>Active now</p>
            </div>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='min-w-[44px] min-h-[44px] rounded-full text-dimWhite hover:text-white focus-visible:ring-2 focus-visible:ring-secondary'
              aria-label='Close support'
            >
              ✕
            </button>
          </header>

          <div className='px-4 py-4 max-h-[46vh] overflow-y-auto flex flex-col gap-2'>
            {thread.map((item, index) => (
              <p
                key={`${item.from}-${index}`}
                className={`font-poppins text-[14px] leading-relaxed px-3.5 py-3 max-w-[92%] ${
                  item.from === 'agent'
                    ? 'self-start rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] text-white'
                    : 'self-end rounded-2xl rounded-tr-md bg-secondary/15 text-white'
                }`}
              >
                {item.text}
              </p>
            ))}
          </div>

          <form onSubmit={ask} className='px-4 pb-4 flex flex-col gap-2'>
            <label htmlFor='bitvion-support-question' className='sr-only'>Your question</label>
            <div className='flex gap-2'>
              <input
                id='bitvion-support-question'
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder='Ask a question'
                className='flex-1 min-h-[48px] px-3 rounded-[11px] bg-[#00040f] border border-white/10 font-poppins text-[14px] text-white placeholder:text-dimWhite/50 focus:border-secondary/50 focus:outline-none'
              />
              <button
                type='submit'
                className='min-h-[48px] min-w-[48px] px-3 rounded-[11px] border border-cyan-400/30 text-secondary font-poppins text-[14px] focus-visible:ring-2 focus-visible:ring-secondary'
              >
                Ask
              </button>
            </div>
            <a
              href={chatUrl(handoff)}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-full items-center justify-center gap-2 min-h-[48px] px-4 rounded-[11px] font-poppins font-medium text-[14px] text-primary hero-cta-primary focus-visible:ring-2 focus-visible:ring-secondary'
            >
              Continue on WhatsApp
              <span aria-hidden='true'>→</span>
            </a>
            <p className='font-poppins text-[11px] text-dimWhite/70 text-center'>
              {entity.organization.phoneDisplay}
            </p>
          </form>
        </section>
      )}

      <button
        type='button'
        onClick={() => setOpen((value) => !value)}
        className='relative inline-flex flex-col items-end bg-transparent border-0 p-0 focus-visible:ring-2 focus-visible:ring-secondary rounded-2xl'
        aria-expanded={open}
        aria-label={open ? 'Hide Bitvion AI' : 'Ask Bitvion AI'}
      >
        {!open && (
          <span className='mb-1 px-3.5 py-2 rounded-2xl rounded-br-md border border-cyan-400/35 bg-[#030912]/95 font-poppins text-[14px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]'>
            Hi, I’m here
          </span>
        )}
        {open ? (
          <img src={bitvionAi} alt='' className={`h-14 w-14 rounded-full border border-cyan-400/40 ${faceClass}`} />
        ) : (
          <span className='support-person relative block'>
            <span className='support-floor pointer-events-none absolute bottom-2 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-secondary/60 blur-md' aria-hidden='true' />
            <img
              src={bitvionAi}
              alt=''
              className='support-agent relative h-[200px] w-[120px] sm:h-[390px] sm:w-[230px]'
            />
            <span className='absolute bottom-8 right-2 h-3.5 w-3.5 rounded-full border-2 border-[#030912] bg-secondary' aria-hidden='true' />
          </span>
        )}
      </button>
    </div>
  )
}

export default WhatsAppButton
