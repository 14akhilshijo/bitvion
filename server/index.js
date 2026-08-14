import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import path from 'path'
import { existsSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import {
  contactSchema,
  proposalSchema,
  demoSchema,
  careersSchema,
  sanitizeObject,
} from './validation/schemas.js'
import submitApplicationRouter from './routes/submitApplication.js'
import { getRecipient, sendEmail, formatSubmission } from './utils/email.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const loadEnvFile = (filePath) => {
  if (!existsSync(filePath)) return
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq < 1) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

loadEnvFile(path.join(root, '.env.local'))
loadEnvFile(path.join(root, '.env'))

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}))

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || ['http://localhost:5173', 'https://bitvion.in', 'https://www.bitvion.in'],
  methods: ['GET', 'POST'],
}))

app.use('/api', submitApplicationRouter)
app.use(express.json({ limit: '100kb' }))

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

const handleForm = (schema, type, subjectPrefix) => async (req, res) => {
  try {
    const sanitized = sanitizeObject(req.body)
    const result = schema.safeParse(sanitized)

    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.issues.map((i) => ({ field: i.path[0], message: i.message })),
      })
    }

    const recipient = getRecipient(type)
    const text = formatSubmission(type, result.data)

    const sent = await sendEmail({
      to: recipient,
      subject: `${subjectPrefix} — Bitvion Website`,
      text,
      replyTo: result.data.email,
    })

    res.json({
      success: true,
      mocked: Boolean(sent.mocked),
      message: 'Submission received successfully.',
    })
  } catch (err) {
    console.error(`[${type}] error:`, err.message)
    res.status(500).json({ error: 'Unable to process submission. Please try again or email info@bitvion.in directly.' })
  }
}

app.post('/api/contact', formLimiter, handleForm(contactSchema, 'contact', 'Contact Form'))
app.post('/api/proposal', formLimiter, handleForm(proposalSchema, 'proposal', 'Proposal Request'))
app.post('/api/demo', formLimiter, handleForm(demoSchema, 'demo', 'Demo Request'))
app.post('/api/careers', formLimiter, handleForm(careersSchema, 'careers', 'Careers Application'))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'bitvion-api' })
})

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist')
  app.use(express.static(distPath))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Bitvion API server running on port ${PORT}`)
})
