import React from 'react'
import { useLocation } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema } from '../components/seo/StructuredData'
import PageShell from '../components/layout/PageShell'
import PageHero from '../components/layout/PageHero'
import { legalPages, LEGAL_LAST_UPDATED } from '../data/legal'
import styles from '../style'

const LegalPage = () => {
  const { pathname } = useLocation()
  const type = pathname.replace('/', '')
  const page = legalPages[type]

  if (!page) {
    return (
      <PageShell>
        <PageHero title='Page Not Found' />
      </PageShell>
    )
  }

  return (
    <PageShell>
      <PageMeta title={page.meta.title} description={page.meta.description} path={pathname} />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.title, path: pathname }])} />
      <PageHero
        eyebrow='Legal'
        title={page.title.toUpperCase()}
        subtitle={`Last Updated: ${LEGAL_LAST_UPDATED}`}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: page.title, path: pathname }]}
      />
      <div className='max-w-[800px] space-y-8'>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className='font-poppins font-semibold text-white text-[20px] mb-3'>{section.heading}</h2>
            <p className={`${styles.paragraph} text-[16px]`}>{section.content}</p>
          </section>
        ))}
        <p className='font-poppins text-dimWhite text-[14px] italic border-t border-white/10 pt-6'>
          This document is provided as a template. For final production use, we recommend legal review.
        </p>
      </div>
    </PageShell>
  )
}

export default LegalPage
