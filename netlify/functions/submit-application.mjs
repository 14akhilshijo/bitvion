import Busboy from 'busboy'
import { processApplicationSubmission } from '../../shared/submit-handler.js'

const parseMultipart = (event) =>
  new Promise((resolve, reject) => {
    const contentType = event.headers['content-type'] || event.headers['Content-Type']
    if (!contentType?.includes('multipart/form-data')) {
      reject(new Error('Expected multipart/form-data'))
      return
    }

    const fields = {}
    let cvFile = null
    const chunks = []

    const busboy = Busboy({
      headers: { 'content-type': contentType },
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

    const body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : Buffer.from(event.body || '', 'utf8')
    busboy.end(body)
  })

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const clientIp =
      event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      event.headers['client-ip'] ||
      'unknown'

    const { fields, cvFile } = await parseMultipart(event)

    if (fields.privacyConsent === 'true') fields.privacyConsent = true

    const result = await processApplicationSubmission({
      fields,
      cvFile,
      clientIp,
    })

    return {
      statusCode: result.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.body),
    }
  } catch (err) {
    console.error('[submit-application]', err)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: "We couldn't complete your application submission. Please try again.",
      }),
    }
  }
}
