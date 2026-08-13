import { useEffect } from 'react'
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL, entity } from '../../data/entity'

const PageMeta = ({ title, description, path, type = 'website', noindex = false, image }) => {
  const fullTitle = title || HOME_TITLE
  const desc = description || HOME_DESCRIPTION
  const canonical = path === '/' || !path ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const ogImage = image || entity.organization.image

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', desc)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:site_name', entity.organization.name, 'property')
    setMeta('og:image', ogImage, 'property')
    setMeta('og:image:alt', `${entity.organization.name} logo`, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image', ogImage)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }, [fullTitle, desc, canonical, type, noindex, ogImage])

  return null
}

export default PageMeta
