import express from 'express'
import Busboy from 'busboy'
import rateLimit from 'express-rate-limit'
import { processApplicationSubmission } from '../../shared/submit-handler.js'

const router = express.Router()

const applicationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  message: { error: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

const parseMultipartRequest = (req) =>
  new Promise((resolve, reject) => {
    const fields = {}
    let cvFile = null
    const chunks = []

    const busboy = Busboy({
      headers: req.headers,
      limits: { fileSize: 10 * 1024 * 1024, files: 1, fields: 30 },
    })

    busboy.on('field', (name, value) => {
      fields[name] = value
    })

    busboy.on('file', (name, file, info) => {
      if (name !== 'cv') {
        file.resume()
        return
      }
      file.on('data', (chunk) => chunks.push(chunk))
      file.on('end', () => {
        cvFile = {
          buffer: Buffer.concat(chunks),
          filename: info.filename,
          mimetype: info.mimeType,
          size: Buffer.concat(chunks).length,
        }
      })
    })

    busboy.on('error', reject)
    busboy.on('finish', () => resolve({ fields, cvFile }))
    req.pipe(busboy)
  })

router.post('/submit-application', applicationLimiter, async (req, res) => {
  try {
    const { fields, cvFile } = await parseMultipartRequest(req)
    if (fields.privacyConsent === 'true') fields.privacyConsent = true

    const result = await processApplicationSubmission({
      fields,
      cvFile,
      clientIp: req.ip,
    })

    res.status(result.status).json(result.body)
  } catch (err) {
    console.error('[submit-application]', err.message)
    res.status(500).json({
      error: "We couldn't complete your application submission. Please try again.",
    })
  }
})

export default router
