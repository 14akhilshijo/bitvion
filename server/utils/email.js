const EMAIL_ROUTES = {
  contact: process.env.EMAIL_INFO || 'info@bitvion.in',
  proposal: process.env.EMAIL_BUSINESS || 'business@bitvion.in',
  demo: process.env.EMAIL_BUSINESS || 'business@bitvion.in',
  careers: process.env.EMAIL_HR || 'hr@bitvion.in',
}

export const getRecipient = (formType) => EMAIL_ROUTES[formType] || process.env.EMAIL_INFO || 'info@bitvion.in'

export const sendEmail = async ({ to, subject, text, replyTo }) => {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    console.log(`[email:mock] To: ${to} | Subject: ${subject}`)
    console.log(`[email:mock] Body preview: ${text.slice(0, 200)}...`)
    return { success: true, mocked: true }
  }

  const nodemailer = await import('nodemailer')
  const transporter = nodemailer.default.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  })

  const html = `<pre style="font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#111">${text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')}</pre>`

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'Bitvion Technologies <info@bitvion.in>',
    to,
    replyTo: replyTo || process.env.EMAIL_INFO || 'info@bitvion.in',
    subject,
    text,
    html,
  })

  return { success: true, mocked: false }
}

export const formatSubmission = (type, data) => {
  const lines = [`Form: ${type}`, `Submitted: ${new Date().toISOString()}`, '---']
  for (const [key, value] of Object.entries(data)) {
    if (key !== 'privacyConsent') lines.push(`${key}: ${value}`)
  }
  return lines.join('\n')
}
