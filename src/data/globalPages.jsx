export const globalMarketsList = [
  {
    slug: 'netherlands',
    title: 'Netherlands',
    headline: <>ENGINEERING FOR <br className='sm:block hidden' />THE DUTCH DIGITAL <br className='sm:block hidden' /><span className='text-gradient'>ECONOMY.</span></>,
    description: 'Bitvion Technologies is building software engineering, AI, automation and cloud capabilities for organizations in India and international markets, including the Netherlands, through remote engineering and structured project delivery.',
    capabilities: ['AI solutions', 'Software engineering', 'Intelligent automation', 'Cloud architecture', 'Enterprise systems', 'Digital products'],
    focus: 'International market focus — exploring technology partnerships in the Netherlands through remote engineering and project-based delivery.',
    meta: {
      title: 'Technology Company Netherlands | Software & AI | Bitvion',
      description: 'Software development, AI solutions, automation and digital transformation for businesses in the Netherlands from Bitvion Technologies.',
      keywords: 'technology company Netherlands, software development Netherlands, AI solutions Netherlands, digital transformation Netherlands',
    },
    cta: { label: 'Talk to Bitvion Netherlands', path: '/contact?region=netherlands' },
  },
  {
    slug: 'united-kingdom',
    title: 'United Kingdom',
    headline: <>SOFTWARE ENGINEERING <br className='sm:block hidden' />FOR <span className='text-gradient'>UK BUSINESSES.</span></>,
    description: 'Bitvion Technologies is building AI, software development, automation and cloud capabilities for organizations in India and international markets, including the United Kingdom.',
    capabilities: ['AI development', 'Software development', 'Automation systems', 'Cloud infrastructure', 'Digital transformation'],
    focus: 'Exploring technology opportunities with UK organizations through remote engineering partnerships.',
    meta: {
      title: 'Software Engineering for UK Businesses | Bitvion Technologies',
      description: 'AI, software development, automation and cloud solutions for UK businesses from Bitvion Technologies.',
    },
    cta: { label: 'Start a UK Project', path: '/contact?region=uk' },
  },
  {
    slug: 'scotland',
    title: 'Scotland',
    headline: <>TECHNOLOGY PARTNERSHIP <br className='sm:block hidden' />FOR <span className='text-gradient'>SCOTTISH BUSINESSES.</span></>,
    description: 'Bitvion Technologies is building software engineering, AI, automation and digital product capabilities for organizations in India and international markets, including Scotland.',
    capabilities: ['Software engineering', 'AI integration', 'Automation', 'Cloud systems', 'Digital products'],
    focus: 'Exploring technology partnerships in Scotland through remote engineering delivery.',
    meta: {
      title: 'Technology Partnership for Scottish Businesses | Bitvion',
      description: 'Software, AI, automation and cloud solutions for Scottish businesses from Bitvion Technologies.',
    },
    cta: { label: 'Talk to Bitvion', path: '/contact?region=scotland' },
  },
  {
    slug: 'europe',
    title: 'Europe',
    headline: <>BUILDING <br className='sm:block hidden' />TECHNOLOGY <br className='sm:block hidden' /><span className='text-gradient'>ACROSS EUROPE.</span></>,
    description: 'Bitvion Technologies is building engineering, AI, automation, cloud and enterprise software capabilities for organizations in India and international markets across Europe, delivered from Kerala, India.',
    capabilities: ['Engineering services', 'AI systems', 'Automation platforms', 'Cloud architecture', 'Digital products', 'Enterprise software'],
    focus: 'International market focus — building technology capabilities for organizations in India and across European markets.',
    meta: {
      title: 'Technology Across Europe | Bitvion Technologies',
      description: 'Engineering, AI, automation, cloud and enterprise software for European organizations from Bitvion Technologies.',
    },
    cta: { label: 'Start a European Project', path: '/contact?region=europe' },
  },
]

export const getGlobalMarketBySlug = (slug) => globalMarketsList.find((m) => m.slug === slug)
