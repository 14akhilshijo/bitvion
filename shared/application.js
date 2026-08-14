const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

const ALLOWED_EXT = new Set(['.pdf', '.doc', '.docx'])
const BLOCKED_EXT = new Set(['.exe', '.bat', '.js', '.msi', '.cmd', '.com', '.scr', '.vbs', '.ps1'])

export const MAX_CV_BYTES = 10 * 1024 * 1024

export const sanitizeText = (value, max = 500) =>
  String(value ?? '')
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .slice(0, max)

export const validateApplication = (data) => {
  const errors = []

  const name = sanitizeText(data.name, 100)
  const email = sanitizeText(data.email, 200)
  const phone = sanitizeText(data.phone, 30)
  const age = Number(data.age)
  const position = sanitizeText(data.position, 120)
  const preferredLocation = sanitizeText(data.preferredLocation, 40)
  const currentLocation = sanitizeText(data.currentLocation, 120)

  if (name.length < 2) errors.push({ field: 'name', message: 'Full name is required' })
  if (!Number.isFinite(age) || age < 16 || age > 80) errors.push({ field: 'age', message: 'Valid age is required' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push({ field: 'email', message: 'Valid email is required' })
  if (phone.length < 8) errors.push({ field: 'phone', message: 'Phone number is required' })
  if (!position) errors.push({ field: 'position', message: 'Position is required' })
  if (!preferredLocation) errors.push({ field: 'preferredLocation', message: 'Preferred location is required' })
  if (!currentLocation) errors.push({ field: 'currentLocation', message: 'Current location is required' })
  if (data.website) errors.push({ field: 'website', message: 'Spam detected' })

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name,
      age,
      gender: sanitizeText(data.gender, 30) || 'Not provided',
      email,
      phone,
      currentLocation,
      position,
      employmentType: sanitizeText(data.employmentType, 30),
      preferredLocation,
      qualification: sanitizeText(data.qualification, 120),
      college: sanitizeText(data.college, 160),
      graduationYear: sanitizeText(data.graduationYear, 8),
      experience: sanitizeText(data.experience, 60),
      currentRole: sanitizeText(data.currentRole, 120),
      noticePeriod: sanitizeText(data.noticePeriod, 60),
      skills: sanitizeText(data.skills, 500),
      linkedin: sanitizeText(data.linkedin, 300),
      github: sanitizeText(data.github, 300),
      portfolio: sanitizeText(data.portfolio, 300),
      message: sanitizeText(data.message, 5000),
      privacyConsent: data.privacyConsent === true || data.privacyConsent === 'true',
    },
  }
}

export const validateCvFile = (file) => {
  if (!file) return { valid: false, message: 'CV upload is required' }

  const filename = sanitizeText(file.filename || file.originalname || 'resume', 200)
  const ext = filename.includes('.') ? `.${filename.split('.').pop().toLowerCase()}` : ''

  if (BLOCKED_EXT.has(ext)) return { valid: false, message: 'Executable files are not allowed' }
  if (!ALLOWED_EXT.has(ext)) return { valid: false, message: 'Only PDF, DOC and DOCX files are accepted' }
  if (file.mimetype && !ALLOWED_MIME.has(file.mimetype)) {
    return { valid: false, message: 'Invalid file type. Upload PDF, DOC or DOCX only' }
  }
  if (file.size > MAX_CV_BYTES) return { valid: false, message: 'File must be 10 MB or smaller' }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_')
  return { valid: true, filename: safeName, ext }
}

export const buildApplicationId = (counter) => {
  const year = new Date().getFullYear()
  return `BITVION-APP-${year}-${String(counter).padStart(4, '0')}`
}

export const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
