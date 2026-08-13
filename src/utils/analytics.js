const CONSENT_KEY = 'bitvion_cookie_consent'

export const getConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const setConsent = (consent) => {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

export const trackEvent = (name, params = {}) => {
  const consent = getConsent()
  if (!consent?.analytics) return

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }

  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, params)
  }
}

export const initAnalytics = () => {
  const consent = getConsent()
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!consent?.analytics || !gaId || typeof window.gtag === 'function') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', gaId, { anonymize_ip: true })
}
