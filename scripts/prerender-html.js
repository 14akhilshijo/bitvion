import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, '..', 'dist')
const site = 'https://bitvion.in'

const pages = [
  ['/', 'Bitvion Technologies | AI, Software & Intelligent Technology', 'Bitvion Technologies engineers intelligent software, AI solutions, automation systems and digital products. Building intelligence for the real world — founded and owned by Akhil Shijo.', 'Building Intelligence for the Real World.'],
  ['/solutions', 'Custom Software Development & AI Automation | Bitvion Technologies', 'Bitvion Technologies builds custom software and AI automation for businesses — web applications, intelligent workflows, cloud systems and digital products.', 'Custom Software and AI Automation.'],
  ['/solutions/artificial-intelligence', 'AI & Machine Learning Solutions | Bitvion Technologies', 'Bitvion Technologies delivers AI and machine learning solutions including NLP, computer vision, generative AI and intelligent automation for businesses.', 'Intelligence Designed for Real-World Outcomes.'],
  ['/solutions/software-development', 'Custom Software Development Company | Bitvion Technologies', 'Bitvion Technologies builds custom software for businesses — web applications, mobile apps, APIs, SaaS and enterprise systems. Start a project with the Bitvion team.', 'Custom Software Development.'],
  ['/solutions/intelligent-automation', 'AI Automation Solutions | Bitvion Technologies', 'AI automation solutions from Bitvion Technologies for workflow automation, document processing, system integration and business process software.', 'AI Automation Solutions.'],
  ['/solutions/cloud-technology', 'Cloud Technology Services | Bitvion Technologies', 'Cloud architecture, AWS infrastructure, CI/CD, Docker, Kubernetes and serverless solutions from Bitvion Technologies.', 'Cloud Infrastructure Built for Scale.'],
  ['/solutions/digital-transformation', 'Digital Transformation Services | Bitvion Technologies', 'Legacy modernization, cloud migration, process digitization and AI integration from Bitvion Technologies.', 'Modernize. Connect. Automate. Intelligently.'],
  ['/solutions/data-analytics', 'Data & Analytics Services | Bitvion Technologies', 'Data engineering, business intelligence, dashboards and predictive analytics from Bitvion Technologies.', 'Turn Data into Decisions.'],
  ['/solutions/ui-ux', 'UI/UX Engineering Services | Bitvion Technologies', 'Product design, UX research, UI design, design systems and responsive interface engineering from Bitvion Technologies.', 'Interfaces People Want to Use.'],
  ['/products', 'Products | Bitvion Technologies', 'Software products engineered by Bitvion Technologies for real-world operational environments.', 'Products Built by Bitvion.'],
  ['/products/yatrikerp', 'YatrikERP | AI-Powered Business Operations Platform | Bitvion Technologies', 'YatrikERP is an AI-powered modular operations platform developed by Bitvion Technologies for transportation, hospital and school operations.', 'YatrikERP'],
  ['/industries', 'Industries | Bitvion Technologies', 'Technology solutions for transportation, logistics, enterprise, education, healthcare and financial services.', 'Technology for Complex Industries.'],
  ['/industries/transportation', 'Transportation Technology Solutions | Bitvion Technologies', 'Software, AI and automation solutions for transportation operations from Bitvion Technologies.', 'Technology for Transportation Operations.'],
  ['/industries/logistics', 'Logistics Technology Solutions | Bitvion Technologies', 'Software and automation solutions for logistics and supply chain operations from Bitvion Technologies.', 'Intelligent Systems for Logistics.'],
  ['/industries/enterprise', 'Enterprise Technology Solutions | Bitvion Technologies', 'Enterprise software, integrations and digital systems from Bitvion Technologies.', 'Enterprise Software Systems.'],
  ['/industries/education', 'Education Technology Solutions | Bitvion Technologies', 'Software and digital systems for educational institutions from Bitvion Technologies.', 'Digital Systems for Education.'],
  ['/industries/healthcare', 'Healthcare Technology Solutions | Bitvion Technologies', 'Software and workflow systems for healthcare operations from Bitvion Technologies.', 'Technology for Healthcare Operations.'],
  ['/industries/financial-services', 'Financial Services Technology | Bitvion Technologies', 'Software engineering and automation for financial services operations from Bitvion Technologies.', 'Engineering for Financial Services.'],
  ['/global', 'Global Technology | Bitvion Technologies', 'Global technology capabilities engineered from Kerala, India for international markets.', 'Global Technology. Engineered from India.'],
  ['/global/netherlands', 'Technology Company Netherlands | Software & AI | Bitvion', 'Software development, AI solutions, automation and digital transformation for businesses in the Netherlands from Bitvion Technologies.', 'Engineering for the Dutch Digital Economy.'],
  ['/global/united-kingdom', 'Software Engineering for UK Businesses | Bitvion Technologies', 'AI, software development, automation and cloud solutions for UK businesses from Bitvion Technologies.', 'Software Engineering for UK Businesses.'],
  ['/global/scotland', 'Technology Partnership for Scottish Businesses | Bitvion', 'Software, AI, automation and cloud solutions for Scottish businesses from Bitvion Technologies.', 'Technology Partnership for Scottish Businesses.'],
  ['/global/europe', 'Technology Across Europe | Bitvion Technologies', 'Engineering, AI, automation, cloud and enterprise software for European organizations from Bitvion Technologies.', 'Building Technology Across Europe.'],
  ['/company', 'Company | Bitvion Technologies', 'Learn about Bitvion Technologies, a Kerala-based technology business, its founder Akhil Shijo, and products including YatrikERP.', 'We Build Technology with Purpose.'],
  ['/company/about', 'About Bitvion Technologies | Founded by Akhil Shijo', 'Bitvion Technologies is a proprietary technology enterprise founded and owned by Akhil Shijo, focused on software engineering, AI, automation, cloud technology and digital products.', 'About Bitvion Technologies'],
  ['/company/founder', 'Akhil Shijo | Founder & Proprietor of Bitvion Technologies', 'Akhil Shijo is the Founder and Proprietor of Bitvion Technologies.', 'Akhil Shijo'],
  ['/company/technology', 'Technology | Bitvion Technologies', 'Modern technology capabilities including frontend, backend, AI/ML, cloud and DevOps from Bitvion Technologies.', 'Engineered with Modern Technology.'],
  ['/company/careers', 'Careers at Bitvion Technologies | Jobs & Internships', 'Build what comes next at Bitvion Technologies. Explore software engineering, AI/ML and internship opportunities across Kerala, Bengaluru and remote India.', "Build What's Next."],
  ['/insights', 'Insights | Bitvion Technologies', 'Technology perspectives on AI, software engineering, automation and digital transformation from Bitvion Technologies.', 'Technology Perspectives.'],
  ['/insights/engineering-ai-into-business-workflows', 'Engineering AI Into Business Workflows | Bitvion Insights', 'How to integrate AI into existing business workflows for practical operational outcomes.', 'Engineering AI Into Business Workflows'],
  ['/insights/software-architecture-for-growing-teams', 'Software Architecture for Growing Teams | Bitvion Insights', 'Architecture principles for building software that scales with teams and business requirements.', 'Software Architecture for Growing Teams'],
  ['/insights/from-manual-process-to-automation', 'From Manual Process to Intelligent Automation | Bitvion Insights', 'A structured approach to business process automation and AI integration.', 'From Manual Process to Intelligent Automation'],
  ['/contact', 'Contact Bitvion Technologies | Technology & Software Solutions', 'Contact Bitvion Technologies to discuss AI, software, automation and digital transformation projects.', "Let's Build Something Intelligent."],
  ['/request-proposal', 'Request a Proposal | Bitvion Technologies', 'Tell us what you want to build and receive a tailored technology proposal from Bitvion.', 'Tell Us What You Want to Build.'],
  ['/request-demo', 'Request a Demo | Bitvion Technologies', 'Schedule a demonstration of YatrikERP and Bitvion products.', 'See Bitvion in Action.'],
  ['/privacy-policy', 'Privacy Policy | Bitvion Technologies', 'Privacy Policy for Bitvion Technologies website and services.', 'Privacy Policy'],
  ['/terms', 'Terms & Conditions | Bitvion Technologies', 'Terms and Conditions for use of the Bitvion Technologies website.', 'Terms & Conditions'],
  ['/cookie-policy', 'Cookie Policy | Bitvion Technologies', 'Cookie Policy for Bitvion Technologies website.', 'Cookie Policy'],
  ['/disclaimer', 'Disclaimer | Bitvion Technologies', 'Disclaimer for Bitvion Technologies website content.', 'Disclaimer'],
]

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) return html
  return html.replace(pattern, replacement)
}

const shell = readFileSync(path.join(dist, 'index.html'), 'utf8')

for (const [route, title, description, heading] of pages) {
  const canonical = route === '/' ? `${site}/` : `${site}${route}`
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)
  const safeHeading = escapeHtml(heading)
  const safeCanonical = escapeHtml(canonical)

  let html = shell
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${safeDescription}" />`,
  )
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${safeCanonical}" />`,
  )
  html = replaceTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${safeCanonical}" />`)
  html = replaceTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${safeTitle}" />`)
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${safeDescription}" />`,
  )
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${safeTitle}" />`)
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${safeDescription}" />`,
  )

  const fallback = `<div id="root"><main><h1>${safeHeading}</h1><p>${safeDescription}</p><p><a href="${safeCanonical}">Bitvion Technologies</a></p></main></div>`
  html = html.replace('<div id="root"></div>', fallback)

  const outfile = route === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, route.slice(1), 'index.html')

  mkdirSync(path.dirname(outfile), { recursive: true })
  writeFileSync(outfile, html)
}

console.log(`Prerendered ${pages.length} pages with crawlable H1 headings.`)
