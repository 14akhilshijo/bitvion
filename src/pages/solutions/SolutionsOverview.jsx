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
        title='Custom Software Development & AI Automation | Bitvion Technologies'
        description='Bitvion Technologies builds custom software and AI automation for businesses — web applications, intelligent workflows, cloud systems and digital products.'
        path='/solutions'
      />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])} />

      <PageHero
        eyebrow='Solutions'
        title={<>CUSTOM SOFTWARE <br className='sm:block hidden' />AND AI <br className='sm:block hidden' /><span className='text-gradient'>AUTOMATION.</span></>}
        subtitle='Bitvion Technologies designs custom software, AI systems and automation for businesses that need technology built around real operations.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }]}
      />

      <CardGrid items={items} columns={3} />
    </PageShell>
  )
}

export default SolutionsOverview
