import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { jobOpenings } from '../data/careers'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'
import CTAButton from './CTAButton'
import styles from '../style'

const JobOpenings = ({ showAll = false, className = '' }) => {
  const jobs = showAll ? jobOpenings : jobOpenings.slice(0, 3)

  return (
    <section id='careers-openings' className={`${styles.paddingY} ${className}`} aria-labelledby='openings-heading'>
      <AnimateIn>
        <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10'>
          <div>
            <span className='font-poppins font-medium text-secondary text-[14px] uppercase tracking-[3px] mb-3 block'>
              Careers
            </span>
            <h2 id='openings-heading' className={styles.heading2}>
              OPEN <span className='text-gradient'>POSITIONS.</span>
            </h2>
            <p className={`${styles.paragraph} max-w-[560px] mt-4`}>
              Join Bitvion Technologies and help build intelligent software, AI systems and digital products.
            </p>
          </div>
          {!showAll && (
            <CTAButton to='/careers' variant='secondary'>
              View All Roles
            </CTAButton>
          )}
        </div>
      </AnimateIn>

      <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 gap-5' stagger={0.12}>
        {jobs.map((job) => (
          <StaggerItem key={job.id}>
            <motion.article
              className='group h-full p-6 sm:p-8 rounded-[20px] bg-black-gradient border border-white/5 hover:border-secondary/30 transition-all duration-500 feature-card'
              whileHover={{ y: -4 }}
            >
              <div className='flex flex-wrap items-center gap-2 mb-4'>
                <span className='px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[12px] font-poppins font-medium'>
                  {job.type}
                </span>
                <span className='px-3 py-1 rounded-full bg-dimBlue text-dimWhite text-[12px] font-poppins'>
                  {job.department}
                </span>
              </div>
              <h3 className='font-poppins font-semibold text-white text-[20px] mb-2 group-hover:text-gradient transition-colors'>
                {job.title}
              </h3>
              <p className='font-poppins text-dimWhite/70 text-[13px] mb-3'>{job.location}</p>
              <p className='font-poppins text-dimWhite text-[15px] leading-[26px] mb-5'>{job.description}</p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {job.skills.map((skill) => (
                  <span key={skill} className='px-3 py-1 rounded-full bg-primary border border-white/10 text-[12px] font-poppins text-dimWhite'>
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                to={`/careers?role=${encodeURIComponent(job.title)}`}
                className='inline-flex items-center gap-2 font-poppins font-medium text-secondary text-[14px] group-hover:translate-x-1 transition-transform'
              >
                Apply for this role →
              </Link>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}

export default JobOpenings
