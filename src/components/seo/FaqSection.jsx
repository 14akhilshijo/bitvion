import React from 'react'

const FaqSection = ({ title = 'Frequently asked questions', faqs = [] }) => {
  if (!faqs.length) return null

  return (
    <section className='mt-14' aria-labelledby='faq-heading'>
      <h2 id='faq-heading' className='font-poppins font-semibold text-white text-[24px] mb-6'>
        {title}
      </h2>
      <div className='space-y-4'>
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className='p-5 rounded-xl bg-black-gradient border border-white/5 group'
          >
            <summary className='font-poppins font-medium text-white cursor-pointer list-none flex justify-between items-center gap-4'>
              {faq.question}
              <span className='text-secondary ml-4 group-open:rotate-45 transition-transform' aria-hidden='true'>
                +
              </span>
            </summary>
            <p className='font-poppins text-dimWhite text-[15px] leading-[26px] mt-4'>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
