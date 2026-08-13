import React from 'react'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema } from '../../components/seo/StructuredData'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import CardGrid from '../../components/layout/CardGrid'
import { solutionsList } from '../../data/solutions'
import { trackEvent } from '../../utils/analytics'

const SolutionsOverview = () => {
  const items = solutionsList.map((s) => ({
    ...s,
    path: `/solutions/${s.slug}`,
  }))

  React.useEffect(() => { trackEvent('solution_view', { page: 'overview' }) }, [])

  return (
    <PageShell>
      <PageMeta
        title='Technology Solutions | Bitvion Technologies'
        description='AI, software engineering, intelligent automation, cloud technology, digital transformation and data analytics solutions from Bitvion Technologies.'
        path='/solutions'
      />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])} />

      <PageHero
        eyebrow='Solutions'
        title={<>TECHNOLOGY <br className='sm:block hidden' />BUILT AROUND <br className='sm:block hidden' /><span className='text-gradient'>YOUR BUSINESS.</span></>}
        subtitle='Comprehensive technology solutions designed to solve complex business challenges through engineering, AI and automation.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }]}
      />

      <CardGrid items={items} columns={3} />
    </PageShell>
  )
}

export default SolutionsOverview
