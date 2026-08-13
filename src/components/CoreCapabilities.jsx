import React from 'react'
import { capabilities } from '../constants'
import styles from '../style'
import SectionHeading from './SectionHeading'
import CapabilityCard from './CapabilityCard'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'

const CoreCapabilities = () => {
  return (
    <section id='capabilities' className={`${styles.paddingY}`} aria-labelledby='capabilities-heading'>
      <AnimateIn>
        <SectionHeading
          eyebrow='Core Capabilities'
          title={
            <>
              ENGINEERING <span className='text-gradient'>EXCELLENCE</span> <br className='sm:block hidden' />
              ACROSS TECHNOLOGY.
            </>
          }
          subtitle='Comprehensive technology capabilities designed to solve complex business challenges.'
          align='center'
          className='mb-12 sm:mb-16'
        />
      </AnimateIn>

      <StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6' stagger={0.08}>
        {capabilities.map((cap, index) => (
          <StaggerItem key={cap.id}>
            <CapabilityCard {...cap} index={index} slug={cap.slug} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}

export default CoreCapabilities
