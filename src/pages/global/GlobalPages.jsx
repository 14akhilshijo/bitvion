import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildBreadcrumbSchema } from '../../components/seo/StructuredData'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import CardGrid from '../../components/layout/CardGrid'
import CTAButton from '../../components/CTAButton'
import GlobalOrbit from '../../components/GlobalOrbit'
import { getGlobalMarketBySlug, globalMarketsList } from '../../data/globalPages'
import styles from '../../style'

const GlobalMarketPage = () => {
  const { slug } = useParams()
  const market = getGlobalMarketBySlug(slug)
  if (!market) return <Navigate to='/global' replace />

  const path = `/global/${slug}`
  const breadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Global', path: '/global' }, { name: market.title, path }]

  return (
    <PageShell>
      <PageMeta title={market.meta.title} description={market.meta.description} path={path} />
      <StructuredData data={buildBreadcrumbSchema(breadcrumbs)} />
      <PageHero eyebrow={`Global — ${market.title}`} title={market.headline} subtitle={market.description} breadcrumbs={breadcrumbs} />
      <p className={`${styles.paragraph} mb-8 max-w-[640px] italic text-secondary/80`}>{market.focus}</p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10' role='list'>
        {market.capabilities.map((item) => (
          <li key={item} className='flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5'>
            <div className='w-[6px] h-[6px] rounded-full bg-secondary' aria-hidden='true' />
            <span className='font-poppins text-dimWhite text-[15px]'>{item}</span>
          </li>
        ))}
      </ul>
      <CTAButton to={market.cta.path} variant='primary'>{market.cta.label}</CTAButton>
    </PageShell>
  )
}

export const GlobalOverview = () => {
  const items = globalMarketsList.map((m) => ({ ...m, path: `/global/${m.slug}`, cardDescription: m.description.slice(0, 120) + '...' }))

  return (
    <PageShell>
      <PageMeta title='Global Technology | Bitvion Technologies' description='Global technology capabilities engineered from Kerala, India for international markets.' path='/global' />
      <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Global', path: '/global' }])} />
      <PageHero
        eyebrow='Global'
        title={<>GLOBAL TECHNOLOGY. <br className='sm:block hidden' /><span className='text-gradient'>ENGINEERED FROM INDIA.</span></>}
        subtitle='Bitvion Technologies is based in Kerala, India and is building technology capabilities for organizations in India and international markets.'
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Global', path: '/global' }]}
      />

      <div className='relative mb-12'>
        <GlobalOrbit />
        <p className='font-poppins text-dimWhite text-[13px] text-center mt-4'>
          Engineered from Kerala, India — building capabilities for international markets.
        </p>
      </div>

      <CardGrid items={items} columns={2} />
    </PageShell>
  )
}

export default GlobalMarketPage
