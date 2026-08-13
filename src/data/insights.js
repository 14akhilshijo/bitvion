export const insightCategories = [
  'AI',
  'Software Engineering',
  'Automation',
  'Cloud',
  'Digital Transformation',
  'Business Technology',
  'YatrikERP',
]

export const articles = [
  {
    slug: 'engineering-ai-into-business-workflows',
    title: 'Engineering AI Into Business Workflows',
    excerpt: 'How to integrate AI capabilities into existing business operations without disrupting core systems.',
    category: 'AI',
    date: '2026-02-15',
    readTime: '6 min',
    author: 'Bitvion Technologies',
    content: `Artificial intelligence delivers value when it is embedded into the workflows people already use — not when it exists as a standalone experiment.

At Bitvion Technologies, we approach AI integration by mapping existing business processes, identifying decision points where intelligence adds measurable value, and designing systems that connect AI outputs to operational actions.

This means building reliable data pipelines, choosing appropriate model architectures and ensuring human oversight where decisions carry business risk. The result is AI that works within your organization rather than beside it.`,
    meta: {
      title: 'Engineering AI Into Business Workflows | Bitvion Insights',
      description: 'How to integrate AI into existing business workflows for practical operational outcomes.',
    },
  },
  {
    slug: 'software-architecture-for-growing-teams',
    title: 'Software Architecture for Growing Teams',
    excerpt: 'Principles for building software systems that scale with your team and your business requirements.',
    category: 'Software Engineering',
    date: '2026-02-01',
    readTime: '7 min',
    author: 'Bitvion Technologies',
    content: `Good architecture is not about using every modern framework — it is about creating systems that your team can understand, extend and maintain as requirements evolve.

We focus on clear module boundaries, well-defined APIs, consistent data models and deployment practices that support iterative development. Whether building a SaaS platform or an internal enterprise tool, the goal is the same: software engineered to scale.`,
    meta: {
      title: 'Software Architecture for Growing Teams | Bitvion Insights',
      description: 'Architecture principles for building software that scales with teams and business requirements.',
    },
  },
  {
    slug: 'from-manual-process-to-automation',
    title: 'From Manual Process to Intelligent Automation',
    excerpt: 'A structured approach to identifying and automating repetitive business processes.',
    category: 'Automation',
    date: '2026-01-20',
    readTime: '5 min',
    author: 'Bitvion Technologies',
    content: `Automation projects fail when teams try to automate everything at once. The effective approach starts with mapping one process end-to-end, identifying bottlenecks and designing a digital workflow that can later incorporate AI intelligence.

Start with rules-based automation for predictable steps. Add AI where decisions require pattern recognition or natural language understanding. Measure outcomes before expanding to adjacent processes.`,
    meta: {
      title: 'From Manual Process to Intelligent Automation | Bitvion Insights',
      description: 'A structured approach to business process automation and AI integration.',
    },
  },
]

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug)
export const getArticlesByCategory = (category) =>
  articles.filter((a) => a.category.toLowerCase() === category.toLowerCase())
