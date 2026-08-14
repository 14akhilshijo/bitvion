import React from 'react'
import AnimateIn, { StaggerContainer, StaggerItem } from '../AnimateIn'
import { workLocations } from '../../data/careers'

const WorkingLocations = () => (
  <section className='py-14 sm:py-16' aria-labelledby='work-locations-heading'>
    <AnimateIn>
      <h2 id='work-locations-heading' className='font-poppins font-bold text-white text-[28px] sm:text-[34px] tracking-[-0.02em] mb-3'>
        WHERE YOU CAN <span className='text-gradient'>BUILD</span>
      </h2>
      <p className='font-poppins text-dimWhite text-[15px] max-w-[640px] mb-8'>
        Hiring and work availability across Kerala, Bengaluru and remote opportunities in India.
      </p>
    </AnimateIn>

    <StaggerContainer className='grid grid-cols-1 md:grid-cols-3 gap-5' stagger={0.08}>
      {workLocations.map((location) => (
        <StaggerItem key={location.id}>
          <article className='careers-glass-card h-full p-6 sm:p-7 rounded-[18px] border border-white/8 hover:border-secondary/25 transition-colors duration-300'>
            <h3 className='font-poppins font-semibold text-secondary text-[14px] tracking-[0.18em] uppercase mb-2'>
              {location.title}
            </h3>
            <p className='font-poppins text-white text-[20px] font-medium mb-2'>{location.subtitle}</p>
            <p className='font-poppins text-dimWhite text-[14px] leading-relaxed'>{location.description}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </section>
)

export default WorkingLocations
