export const workLocations = [
  {
    id: 'kerala',
    title: 'KERALA',
    subtitle: 'Kerala',
    description: 'Build with Bitvion from Kerala, India.',
  },
  {
    id: 'bengaluru',
    title: 'BENGALURU',
    subtitle: 'Bengaluru, Karnataka',
    description: 'Work availability across Bengaluru and Karnataka.',
  },
  {
    id: 'remote',
    title: 'REMOTE',
    subtitle: 'Remote / India',
    description: 'Contribute remotely across India.',
  },
]

export const filterOptions = {
  departments: ['Engineering', 'AI & Data', 'Frontend', 'Backend', 'Data'],
  employmentTypes: ['Full-time', 'Internship'],
  locations: ['Kerala', 'Bengaluru', 'Remote'],
  experienceLevels: ['Internship', 'Entry Level', '1–3 Years'],
}

export const jobOpenings = [
  {
    id: 'full-stack-software-engineer',
    slug: 'full-stack-software-engineer',
    title: 'Full-Stack Software Engineer',
    department: 'Engineering',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Full-time',
    experience: '1–3 Years',
    description:
      'Build scalable web applications, APIs, business systems and cloud-connected software for Bitvion products and technology projects.',
    responsibilities: [
      'Design and develop full-stack web applications and REST APIs',
      'Build cloud-connected business systems for Bitvion products',
      'Collaborate on architecture, code quality and deployment workflows',
      'Integrate databases, authentication and third-party services',
    ],
    requiredSkills: ['React', 'Node.js', 'TypeScript', 'REST APIs', 'Git'],
    preferredSkills: ['Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    skills: ['React', 'Node.js', 'Python', 'TypeScript', 'REST APIs', 'MongoDB', 'PostgreSQL', 'AWS', 'Git'],
    stack: ['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'ai-ml-engineer',
    slug: 'ai-ml-engineer',
    title: 'AI / ML Engineer',
    department: 'AI & Data',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Full-time',
    experience: '1–3 Years',
    description:
      'Design and integrate practical AI and machine-learning systems across software products, automation workflows and intelligent business applications.',
    responsibilities: [
      'Design and implement ML models for product and client use cases',
      'Integrate LLM APIs, NLP and computer vision where appropriate',
      'Build AI automation workflows connected to business systems',
      'Evaluate model performance and production reliability',
    ],
    requiredSkills: ['Python', 'Machine Learning', 'API Integration', 'Git'],
    preferredSkills: ['Generative AI', 'NLP', 'LLM APIs', 'Computer Vision', 'AI Automation'],
    skills: ['Python', 'Machine Learning', 'Generative AI', 'NLP', 'LLM APIs', 'Computer Vision', 'AI Automation'],
    stack: ['Python', 'Machine Learning', 'Generative AI', 'NLP', 'LLM APIs'],
  },
  {
    id: 'frontend-engineer',
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Full-time',
    experience: '1–3 Years',
    description:
      'Build high-quality interfaces and digital experiences across Bitvion products and web applications.',
    responsibilities: [
      'Develop responsive, accessible React interfaces',
      'Implement premium UI with strong performance discipline',
      'Integrate frontend systems with APIs and product workflows',
      'Collaborate on design systems and component architecture',
    ],
    requiredSkills: ['React', 'JavaScript', 'Responsive Design', 'Git'],
    preferredSkills: ['TypeScript', 'Tailwind CSS', 'UI/UX', 'API Integration', 'Framer Motion'],
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'UI/UX', 'Responsive Design', 'API Integration'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 'software-development-intern',
    slug: 'software-development-intern',
    title: 'Software Development Intern',
    department: 'Engineering',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Internship',
    experience: 'Internship',
    duration: '3–6 Months',
    description:
      'Gain practical experience by contributing to software projects under mentorship from the Bitvion engineering team.',
    responsibilities: [
      'Support development of web applications and APIs',
      'Learn structured engineering practices in a product environment',
      'Collaborate on features, testing and documentation',
    ],
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'Git'],
    preferredSkills: ['React', 'Python', 'APIs', 'Databases'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git', 'APIs', 'Databases'],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  },
  {
    id: 'ai-ml-engineering-intern',
    slug: 'ai-ml-engineering-intern',
    title: 'AI / ML Engineering Intern',
    department: 'AI & Data',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Internship',
    experience: 'Internship',
    duration: '3–6 Months',
    description:
      'Learn practical AI engineering by contributing to intelligent systems, data workflows and automation experiments.',
    responsibilities: [
      'Support AI feature development and data processing tasks',
      'Experiment with ML models and AI APIs under guidance',
      'Document findings and assist integration into software products',
    ],
    requiredSkills: ['Python', 'Git'],
    preferredSkills: ['Machine Learning', 'Generative AI', 'NLP', 'AI APIs', 'Data Processing'],
    skills: ['Python', 'Machine Learning', 'Generative AI', 'NLP', 'AI APIs', 'Data Processing'],
    stack: ['Python', 'Machine Learning', 'Generative AI', 'NLP'],
  },
  {
    id: 'frontend-development-intern',
    slug: 'frontend-development-intern',
    title: 'Frontend Development Intern',
    department: 'Engineering',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Internship',
    experience: 'Internship',
    duration: '3–6 Months',
    description:
      'Build responsive interfaces and learn modern frontend engineering within Bitvion product projects.',
    responsibilities: [
      'Implement UI components and responsive layouts',
      'Support design-to-code workflows and accessibility improvements',
      'Integrate frontend views with APIs and product data',
    ],
    requiredSkills: ['HTML', 'CSS', 'JavaScript'],
    preferredSkills: ['React', 'TypeScript', 'Responsive UI', 'Git'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive UI'],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    id: 'backend-development-intern',
    slug: 'backend-development-intern',
    title: 'Backend Development Intern',
    department: 'Engineering',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Internship',
    experience: 'Internship',
    duration: '3–6 Months',
    description:
      'Learn backend engineering by contributing to APIs, databases and server-side systems.',
    responsibilities: [
      'Support REST API development and database integrations',
      'Assist with authentication, validation and backend testing',
      'Collaborate on deployment and system documentation',
    ],
    requiredSkills: ['Python', 'Git'],
    preferredSkills: ['Node.js', 'REST APIs', 'Databases', 'Authentication'],
    skills: ['Python', 'Node.js', 'REST APIs', 'Databases', 'Authentication', 'Git'],
    stack: ['Python', 'Node.js', 'REST APIs', 'Databases'],
  },
  {
    id: 'data-ai-intern',
    slug: 'data-ai-intern',
    title: 'Data & AI Intern',
    department: 'AI & Data',
    location: 'Kerala / Bengaluru / Remote',
    locations: ['Kerala', 'Bengaluru', 'Remote'],
    type: 'Internship',
    experience: 'Internship',
    duration: '3–6 Months',
    description:
      'Work on data analysis, ML experiments and AI integrations across Bitvion technology projects.',
    responsibilities: [
      'Support data collection, cleaning and analysis workflows',
      'Assist with ML experiments and AI API integrations',
      'Create data visualizations and technical summaries',
    ],
    requiredSkills: ['Python'],
    preferredSkills: ['Data Analysis', 'SQL', 'Machine Learning', 'AI APIs', 'Data Visualization'],
    skills: ['Python', 'Data Analysis', 'SQL', 'Machine Learning', 'AI APIs', 'Data Visualization'],
    stack: ['Python', 'SQL', 'Machine Learning', 'Data Analysis'],
  },
]

export const fullTimeRoles = jobOpenings.filter((job) => job.type === 'Full-time')
export const internshipRoles = jobOpenings.filter((job) => job.type === 'Internship')

export const getJobBySlug = (slug) => jobOpenings.find((job) => job.slug === slug || job.id === slug)

export const getJobByTitle = (title) => jobOpenings.find((job) => job.title === title)
