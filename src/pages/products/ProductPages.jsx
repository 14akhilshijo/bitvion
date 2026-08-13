import React from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema, yatrikSoftwareSchema, buildFAQSchema } from '../../components/seo/StructuredData'
import EntityNav from '../../components/seo/EntityNav'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import FlowDiagram from '../../components/layout/FlowDiagram'
import CTAButton from '../../components/CTAButton'
import { trackEvent } from '../../utils/analytics'
import styles from '../../style'

const yatrikFeatures = [
  'AI-assisted bus scheduling',
  'GPS/tracking integration',
  'Automated ticket collection',
  'Spare parts procurement',
  'Inventory management',
  'AI-assisted bill settlement',
  'Duty assignment',
]

const yatrikArchitecture = [
  'Operations', 'Scheduling', 'Tracking', 'Ticketing',
  'Inventory', 'Finance', 'Duty Management', 'Analytics',
]

const yatrikFaqs = [
  { question: 'What is YatrikERP?', answer: 'YatrikERP is an AI-powered modular business platform designed for transportation operations, covering scheduling, tracking, ticketing, inventory and duty management.' },
  { question: 'Is YatrikERP a standalone product?', answer: 'Yes. YatrikERP is developed by Bitvion Technologies as a modular platform that can be configured for transportation operation requirements.' },
  { question: 'How can I see a demonstration?', answer: 'Submit a demo request through our website and our team will schedule a walkthrough of YatrikERP capabilities.' },
]

export const ProductsOverview = () => {
  React.useEffect(() => { trackEvent('product_view', { page: 'overview' }) }, [])

  return (
    <PageShell>
      <PageMeta title='Products | Bitvion Technologies' description='Products built by Bitvion Technologies including YatrikERP for transportation operations.' path='/products' />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }])} />
      <PageHero
        eyebrow='Products'
        title={<>PRODUCTS <br className='sm:block hidden' /><span className='text-gradient'>BUILT BY BITVION.</span></>}
        subtitle='Software products engineered by Bitvion Technologies for real-world operational environments.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]}
      />
      <Link to='/products/yatrikerp' className='group block p-8 sm:p-10 rounded-[20px] bg-black-gradient-2 border border-white/10 hover:border-secondary/30 transition-all'>
        <span className='font-poppins text-secondary text-[14px] uppercase tracking-widest'>Primary Product</span>
        <h2 className='font-poppins font-semibold text-white text-[32px] mt-3 group-hover:text-gradient transition-colors'>YatrikERP</h2>
        <p className={`${styles.paragraph} mt-4 max-w-[600px]`}>AI-powered modular business platform designed for transportation operations.</p>
        <span className='inline-block mt-6 font-poppins text-secondary group-hover:translate-x-2 transition-transform'>Explore YatrikERP →</span>
      </Link>
    </PageShell>
  )
}

export const YatrikERPPage = () => {
  React.useEffect(() => { trackEvent('product_view', { product: 'yatrikerp' }) }, [])

  return (
    <PageShell>
      <PageMeta
        title='YatrikERP | AI-Powered Transportation Operations Platform'
        description='YatrikERP is an AI-powered modular operations platform developed by Bitvion Technologies for transportation businesses.'
        path='/products/yatrikerp'
      />
      <StructuredData data={[yatrikSoftwareSchema, buildFAQSchema(yatrikFaqs), buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: 'YatrikERP', path: '/products/yatrikerp' }])]} />

      <PageHero
        eyebrow='YatrikERP'
        title={<>BUILT FOR <br className='sm:block hidden' /><span className='text-gradient'>REAL-WORLD OPERATIONS.</span></>}
        subtitle='YatrikERP is an AI-powered modular operations platform developed by Bitvion Technologies for transportation businesses.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: 'YatrikERP', path: '/products/yatrikerp' }]}
      />

      <section className='grid md:grid-cols-2 gap-10 mb-12'>
        <div>
          <h2 className='font-poppins font-semibold text-white text-[24px] mb-4'>Product Overview</h2>
          <p className={styles.paragraph}>YatrikERP is a technology product developed by Bitvion Technologies. It brings together scheduling, tracking, ticketing, inventory, finance and duty management into a unified platform designed for transportation operations. AI-assisted capabilities help operators plan routes, manage resources and streamline daily workflows.</p>
        </div>
        <FlowDiagram steps={yatrikArchitecture} />
      </section>

      <section className='mb-12'>
        <h2 className='font-poppins font-semibold text-white text-[24px] mb-6'>Features</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3' role='list'>
          {yatrikFeatures.map((f) => (
            <li key={f} className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5'>
              <div className='w-[6px] h-[6px] rounded-full bg-secondary' aria-hidden='true' />
              <span className='font-poppins text-dimWhite text-[15px]'>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='mb-12'>
        <h2 className='font-poppins font-semibold text-white text-[24px] mb-6'>FAQ</h2>
        <div className='space-y-4'>
          {yatrikFaqs.map((faq) => (
            <details key={faq.question} className='p-5 rounded-xl bg-black-gradient border border-white/5 group'>
              <summary className='font-poppins font-medium text-white cursor-pointer list-none flex justify-between items-center'>
                {faq.question}
                <span className='text-secondary ml-4 group-open:rotate-45 transition-transform' aria-hidden='true'>+</span>
              </summary>
              <p className={`${styles.paragraph} mt-4 text-[15px]`}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <EntityNav
        className='mb-8'
        label='Related to YatrikERP'
        links={[
          { name: 'Bitvion Technologies', path: '/company/about' },
          { name: 'Founder', path: '/company/founder' },
          { name: 'Request Demo', path: '/request-demo' },
        ]}
      />

      <div className='flex flex-wrap gap-4'>
        <CTAButton to='/request-demo' variant='primary' onClick={() => trackEvent('yatrikerp_demo_click')}>Request a YatrikERP Demo</CTAButton>
        <CTAButton to='/contact?type=erp' variant='secondary'>Talk to Bitvion</CTAButton>
      </div>
    </PageShell>
  )
}
