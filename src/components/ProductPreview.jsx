import React from 'react'
import { yatrikFeatures } from '../constants'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'
import CTAButton from './CTAButton'
import YatrikBackdrop from './YatrikBackdrop'
import { StaggerContainer, StaggerItem } from './AnimateIn'

const ProductPreview = () => {
  return (
    <section
      id='products-preview'
      className={`${layout.section} relative overflow-hidden rounded-[20px] px-6 sm:px-10 my-8 border border-white/10`}
      aria-labelledby='product-heading'
    >
      <YatrikBackdrop />

      <div className={`${layout.sectionInfo} relative z-[1]`}>
        <SectionHeading
          eyebrow='YatrikERP'
          title={
            <>
              BUILT FOR <br className='sm:block hidden' />
              <span className='text-gradient'>REAL-WORLD OPERATIONS.</span>
            </>
          }
          subtitle='YatrikERP is a technology product developed by Bitvion Technologies — an AI-powered modular operations platform for transportation businesses.'
        />

        <div className='flex flex-wrap gap-2 mt-6'>
          {['Transportation', 'Hospitals', 'Schools'].map((item) => (
            <span
              key={item}
              className='px-3 py-1.5 rounded-full border border-secondary/30 bg-[#00040f]/40 font-poppins text-[12px] tracking-[0.12em] uppercase text-secondary'
            >
              {item}
            </span>
          ))}
        </div>

        <StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8' stagger={0.05}>
          {yatrikFeatures.map((item) => (
            <StaggerItem key={item}>
              <div className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-[#00040f]/40 backdrop-blur-sm'>
                <div className='w-[6px] h-[6px] rounded-full bg-secondary flex-shrink-0' aria-hidden='true' />
                <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className='flex flex-row flex-wrap gap-4 mt-8'>
          <CTAButton to='/products/yatrikerp' variant='primary'>
            Explore YatrikERP
          </CTAButton>
          <CTAButton to='/request-demo' variant='secondary'>
            Request Demo
          </CTAButton>
        </div>
      </div>

      <div className={`${layout.sectionImg} relative z-[1] min-h-[280px]`}>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div className='w-full max-w-[320px] p-6 rounded-2xl bg-[#00040f]/80 border border-secondary/25 shadow-[0_0_40px_rgba(0,229,255,0.12)] backdrop-blur-md'>
            <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>
              <div className='w-[40px] h-[40px] rounded-lg bg-secondary/20 flex items-center justify-center'>
                <span className='font-poppins font-bold text-secondary text-[14px]'>Y</span>
              </div>
              <div>
                <h3 className='font-poppins font-semibold text-white text-[16px]'>YatrikERP</h3>
                <p className='font-poppins text-dimWhite text-[12px]'>Operations Platform</p>
              </div>
            </div>
            <div className='space-y-3'>
              {['Scheduling', 'Tracking', 'Inventory'].map((mod) => (
                <div key={mod} className='flex items-center justify-between px-4 py-3 rounded-lg bg-dimBlue/50'>
                  <span className='font-poppins text-white text-[13px]'>{mod}</span>
                  <div className='w-[8px] h-[8px] rounded-full bg-secondary' aria-hidden='true' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPreview
