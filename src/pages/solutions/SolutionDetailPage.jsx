import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema, buildServiceSchema } from '../../components/seo/StructuredData'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import FlowDiagram from '../../components/layout/FlowDiagram'
import CTAButton from '../../components/CTAButton'
import { getSolutionBySlug } from '../../data/solutions'
import styles, { layout } from '../../style'

const SolutionDetailPage = () => {
  const { slug } = useParams()
  const solution = getSolutionBySlug(slug)

  if (!solution) return <Navigate to='/solutions' replace />

  const path = `/solutions/${slug}`
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: solution.title, path },
  ]

  return (
    <PageShell>
      <PageMeta title={solution.meta.title} description={solution.meta.description} path={path} />
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildServiceSchema(solution.title, solution.description, path),
        ]}
      />

      <PageHero eyebrow={solution.title} title={solution.headline} subtitle={solution.description} breadcrumbs={breadcrumbs} />

      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className='font-poppins font-semibold text-white text-[28px] mb-6'>Capabilities</h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3' role='list'>
            {solution.capabilities.map((item) => (
              <li key={item} className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5'>
                <div className='w-[6px] h-[6px] rounded-full bg-secondary' aria-hidden='true' />
                <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={layout.sectionImg}>
          <FlowDiagram steps={solution.flow} />
        </div>
      </section>

      {solution.useCases && (
        <section className='py-10'>
          <h2 className='font-poppins font-semibold text-white text-[28px] mb-6'>Use Cases</h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4' role='list'>
            {solution.useCases.map((item) => (
              <li key={item} className='p-5 rounded-xl bg-black-gradient border border-white/5 font-poppins text-dimWhite text-[15px]'>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {solution.techStack && (
        <section className='py-10'>
          <h2 className='font-poppins font-semibold text-white text-[28px] mb-3'>Technology Stack</h2>
          {solution.techNote && <p className={`${styles.paragraph} mb-6 max-w-[600px]`}>{solution.techNote}</p>}
          <div className='flex flex-wrap gap-3'>
            {solution.techStack.map((tech) => (
              <span key={tech} className='px-4 py-2 rounded-full bg-dimBlue border border-secondary/20 font-poppins text-[14px] text-white'>{tech}</span>
            ))}
          </div>
        </section>
      )}

      <section className={`${styles.flexCenter} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow border border-white/5 mt-10`}>
        <div className='flex-1'>
          <h2 className='font-poppins font-semibold text-white text-[28px]'>Ready to get started?</h2>
          <p className={`${styles.paragraph} mt-3 max-w-[480px]`}>Discuss your requirements with the Bitvion engineering team.</p>
        </div>
        <CTAButton to={solution.cta.path} variant='primary' styles='mt-6 sm:mt-0'>{solution.cta.label}</CTAButton>
      </section>
    </PageShell>
  )
}

export default SolutionDetailPage
