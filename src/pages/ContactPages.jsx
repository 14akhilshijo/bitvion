import React from 'react'
import PageMeta from '../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema } from '../components/seo/StructuredData'
import PageShell from '../components/layout/PageShell'
import PageHero from '../components/layout/PageHero'
import ContactForm from '../components/forms/ContactForm'
import ProposalForm from '../components/forms/ProposalForm'
import DemoForm from '../components/forms/DemoForm'
import CareersForm from '../components/forms/CareersForm'
import JobOpenings from '../components/JobOpenings'
import AnimateIn from '../components/AnimateIn'
import styles from '../style'

const ContactPage = () => (
  <PageShell>
    <PageMeta title='Contact Bitvion Technologies | Technology & Software Solutions' description='Contact Bitvion Technologies to discuss AI, software, automation and digital transformation projects.' path='/contact' />
    <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
    <PageHero
      eyebrow='Contact'
      title={<>LET&apos;S BUILD <br className='sm:block hidden' />SOMETHING <br className='sm:block hidden' /><span className='text-gradient'>INTELLIGENT.</span></>}
      subtitle='Reach out to discuss your technology requirements with the Bitvion team.'
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
    />
    <div className='grid md:grid-cols-5 gap-10'>
      <div className='md:col-span-3'>
        <ContactForm />
      </div>
      <aside className='md:col-span-2 space-y-6'>
        <div className='p-6 rounded-xl bg-black-gradient border border-white/10'>
          <h2 className='font-poppins font-semibold text-white text-[18px] mb-4'>Email</h2>
          <ul className='space-y-2 font-poppins text-[14px] text-dimWhite' role='list'>
            <li><a href='mailto:info@bitvion.in' className='hover:text-secondary transition-colors'>info@bitvion.in</a> — General</li>
            <li><a href='mailto:business@bitvion.in' className='hover:text-secondary transition-colors'>business@bitvion.in</a> — Business</li>
          </ul>
        </div>
        <div className='p-6 rounded-xl bg-black-gradient border border-white/10'>
          <h2 className='font-poppins font-semibold text-white text-[18px] mb-3'>Locations</h2>
          <ul className='space-y-2 font-poppins text-[14px] text-dimWhite' role='list'>
            <li>Kerala, India</li>
            <li>Bangalore, India</li>
          </ul>
        </div>
      </aside>
    </div>
  </PageShell>
)

export const RequestProposalPage = () => (
  <PageShell>
    <PageMeta title='Request a Proposal | Bitvion Technologies' description='Tell us what you want to build and receive a tailored technology proposal from Bitvion.' path='/request-proposal' />
    <PageHero eyebrow='Proposal' title={<>TELL US WHAT <br className='sm:block hidden' />YOU WANT TO <span className='text-gradient'>BUILD.</span></>} subtitle='Share your project requirements and we will prepare a tailored proposal.' breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Request Proposal', path: '/request-proposal' }]} />
    <div className='max-w-[800px]'><ProposalForm /></div>
  </PageShell>
)

export const RequestDemoPage = () => (
  <PageShell>
    <PageMeta title='Request a Demo | Bitvion Technologies' description='Schedule a demonstration of YatrikERP and Bitvion products.' path='/request-demo' />
    <PageHero eyebrow='Demo' title={<>SEE BITVION <span className='text-gradient'>IN ACTION.</span></>} subtitle='Schedule a product demonstration with our team.' breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Request Demo', path: '/request-demo' }]} />
    <div className='max-w-[700px]'><DemoForm /></div>
  </PageShell>
)

export const CareersPage = () => (
  <PageShell>
    <PageMeta title='Careers | Bitvion Technologies' description='Build the future with Bitvion Technologies. Submit your profile for engineering opportunities.' path='/careers' />
    <PageHero eyebrow='Careers' title={<>BUILD THE FUTURE <br className='sm:block hidden' /><span className='text-gradient'>WITH BITVION.</span></>} subtitle='Engineering culture focused on AI, software and product development.' breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }]} />
    <section className='mb-10 grid sm:grid-cols-3 gap-6'>
      {[
        ['Why Bitvion', 'Work on meaningful engineering projects spanning AI, software and automation.'],
        ['Engineering Culture', 'Structured development practices with focus on quality and continuous learning.'],
        ['Technology', 'Modern technology stack including Python, React, cloud and AI frameworks.'],
      ].map(([title, desc]) => (
        <AnimateIn key={title}>
          <div className='p-6 rounded-xl bg-black-gradient border border-white/5 h-full'>
            <h2 className='font-poppins font-semibold text-white text-[18px] mb-3'>{title}</h2>
            <p className='font-poppins text-dimWhite text-[14px]'>{desc}</p>
          </div>
        </AnimateIn>
      ))}
    </section>
    <JobOpenings showAll />
    <AnimateIn className='mt-16'>
      <h2 className='font-poppins font-semibold text-white text-[24px] mb-3'>Apply Now</h2>
      <p className={`${styles.paragraph} mb-8 max-w-[600px]`}>Submit your profile for any open role or for future opportunities at Bitvion Technologies.</p>
      <div className='max-w-[700px]'><CareersForm /></div>
    </AnimateIn>
  </PageShell>
)

export default ContactPage
