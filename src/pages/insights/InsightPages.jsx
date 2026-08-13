import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../../components/seo/PageMeta'
import StructuredData, { buildArticleSchema, buildBreadcrumbSchema } from '../../components/seo/StructuredData'
import PageShell from '../../components/layout/PageShell'
import PageHero from '../../components/layout/PageHero'
import { articles, insightCategories, getArticleBySlug } from '../../data/insights'
import styles from '../../style'

const ArticleCard = ({ article }) => (
  <Link to={`/insights/${article.slug}`} className='group block p-6 rounded-[20px] feature-card border border-white/5 hover:border-secondary/20 transition-all'>
    <span className='font-poppins text-secondary text-[12px] uppercase tracking-widest'>{article.category}</span>
    <h3 className='font-poppins font-semibold text-white text-[18px] mt-2 mb-3 group-hover:text-gradient transition-colors'>{article.title}</h3>
    <p className='font-poppins text-dimWhite text-[14px] line-clamp-2'>{article.excerpt}</p>
    <div className='flex items-center gap-3 mt-4 font-poppins text-[12px] text-dimWhite/60'>
      <span>{article.date}</span><span aria-hidden='true'>·</span><span>{article.readTime}</span>
    </div>
  </Link>
)

export const InsightsPage = () => (
  <PageShell>
    <PageMeta title='Insights | Bitvion Technologies' description='Technology perspectives on AI, software engineering, automation and digital transformation from Bitvion Technologies.' path='/insights' />
    <StructuredData data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }])} />
    <PageHero eyebrow='Insights' title={<>TECHNOLOGY <span className='text-gradient'>PERSPECTIVES.</span></>} subtitle='Engineering insights and technology knowledge from Bitvion Technologies.' breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]} />
    <div className='flex flex-wrap gap-2 mb-8'>
      {insightCategories.map((cat) => (
        <span key={cat} className='px-3 py-1.5 rounded-full bg-dimBlue border border-white/10 font-poppins text-[12px] text-dimWhite'>{cat}</span>
      ))}
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
    </div>
  </PageShell>
)

export const InsightArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  if (!article) return <NotFoundInline />

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2)

  return (
    <PageShell>
      <PageMeta title={article.meta.title} description={article.meta.description} path={`/insights/${slug}`} type='article' />
      <StructuredData data={[buildArticleSchema(article), buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: article.title, path: `/insights/${slug}` }])]} />
      <article>
        <PageHero eyebrow={article.category} title={article.title} subtitle={article.excerpt} breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }, { name: article.title, path: `/insights/${slug}` }]} />
        <div className='flex items-center gap-3 mb-8 font-poppins text-[14px] text-dimWhite'>
          <span>{article.author}</span><span aria-hidden='true'>·</span><time dateTime={article.date}>{article.date}</time><span aria-hidden='true'>·</span><span>{article.readTime}</span>
        </div>
        <div className='max-w-[720px] space-y-5'>
          {article.content.split('\n\n').map((para, i) => (
            <p key={i} className={`${styles.paragraph} text-[16px]`}>{para}</p>
          ))}
        </div>
        {related.length > 0 && (
          <section className='mt-16'>
            <h2 className='font-poppins font-semibold text-white text-[22px] mb-6'>Related Articles</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>{related.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
          </section>
        )}
      </article>
    </PageShell>
  )
}

const NotFoundInline = () => (
  <PageShell>
    <PageHero title='Article Not Found' subtitle='The requested article could not be found.' />
    <Link to='/insights' className='font-poppins text-secondary hover:text-white'>← Back to Insights</Link>
  </PageShell>
)

export { ArticleCard }
