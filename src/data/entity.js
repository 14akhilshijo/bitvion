export const SITE_URL = 'https://bitvion.in'

export const IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  person: `${SITE_URL}/company/founder#person`,
  yatrikerp: `${SITE_URL}/products/yatrikerp#software`,
}

export const entity = {
  organization: {
    name: 'Bitvion Technologies',
    alternateName: 'Bitvion',
    legalName: 'Bitvion Technologies',
    url: `${SITE_URL}/`,
    email: 'info@bitvion.in',
    logo: `${SITE_URL}/bitvion-logo.jpeg`,
    image: `${SITE_URL}/bitvion-logo.jpeg`,
    foundingDate: '2026-01-24',
    organizationType: 'Proprietary enterprise',
    majorActivity: 'Services',
    primaryActivity: 'Computer programming, consultancy and related activities',
    location: {
      locality: 'Kerala',
      region: 'Kerala',
      country: 'IN',
      countryName: 'India',
    },
    locations: [
      { locality: 'Kerala', region: 'Kerala', country: 'IN' },
      { locality: 'Bangalore', region: 'Karnataka', country: 'IN' },
    ],
  },
  person: {
    name: 'Akhil Shijo',
    jobTitle: 'Founder & Proprietor',
    url: `${SITE_URL}/company/founder`,
    image: `${SITE_URL}/founder.jpeg`,
  },
  product: {
    name: 'YatrikERP',
    url: `${SITE_URL}/products/yatrikerp`,
    description:
      'YatrikERP is an AI-powered modular operations platform developed by Bitvion Technologies for transportation businesses.',
  },
}

export const HOME_TITLE = 'Bitvion Technologies | AI, Software & Digital Technology'
export const HOME_DESCRIPTION =
  'Bitvion Technologies is a Kerala, India-based technology business building intelligent software, AI solutions, automation systems and digital products for organizations in India and international markets.'

export const FOUNDER_STATEMENT =
  'Akhil Shijo is the Founder & Proprietor of Bitvion Technologies.'

export const COMPANY_STATEMENT =
  'Bitvion Technologies is a technology business based in Kerala, India.'

export const PRODUCT_STATEMENT =
  'YatrikERP is a technology product developed by Bitvion Technologies.'

export const INTERNATIONAL_STATEMENT =
  'Building technology capabilities for organizations in India and international markets.'

export const CAPABILITIES = [
  'Software Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'Intelligent Automation',
  'Cloud Technology',
  'Digital Transformation',
  'Data & Analytics',
  'UI/UX Engineering',
  'Digital Products',
]
