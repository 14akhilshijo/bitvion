import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema, buildServiceSchema } from '../../components/seo/StructuredData'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import CTAButton from '../../components/CTAButton'
import { getIndustryBySlug, industriesList } from '../../data/industries'
import CardGrid from '../../components/layout/CardGrid'

const IndustryDetailPage = () => {
  const { slug } = useParams()
  const industry = getIndustryBySlug(slug)
  if (!industry) return <Navigate to='/industries' replace />

  const path = `/industries/${slug}`
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }, { name: industry.title, path }]

  return (
    <PageShell>
      <PageMeta title={industry.meta.title} description={industry.meta.description} path={path} />
      <StructuredData data={[buildBreadcrumbSchema(breadcrumbs), buildServiceSchema(industry.title, industry.description, path)]} />
      <PageHero eyebrow='Industries' title={industry.headline} subtitle={industry.description} breadcrumbs={breadcrumbs} />
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10' role='list'>
        {industry.capabilities.map((item) => (
          <li key={item} className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5'>
            <div className='w-[6px] h-[6px] rounded-full bg-secondary' aria-hidden='true' />
            <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
          </li>
        ))}
      </ul>
      <CTAButton to='/contact' variant='primary'>Discuss Your Industry Needs</CTAButton>
    </PageShell>
  )
}

export const IndustriesOverview = () => {
  const items = industriesList.map((i) => ({ ...i, path: `/industries/${i.slug}`, cardDescription: i.description }))
  return (
    <PageShell>
      <PageMeta title='Industries | Bitvion Technologies' description='Technology solutions for transportation, logistics, enterprise, education, healthcare and financial services.' path='/industries' />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }])} />
      <PageHero
        eyebrow='Industries'
        title={<>TECHNOLOGY <br className='sm:block hidden' />FOR COMPLEX <br className='sm:block hidden' /><span className='text-gradient'>INDUSTRIES.</span></>}
        subtitle='Target solution areas where Bitvion applies engineering, AI and automation capabilities.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }]}
      />
      <CardGrid items={items} columns={3} />
    </PageShell>
  )
}

export default IndustryDetailPage
