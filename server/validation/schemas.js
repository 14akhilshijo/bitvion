import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(200).optional(),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  country: z.string().min(1).max(100),
  projectType: z.string().min(1).max(50),
  budgetRange: z.string().max(50).optional(),
  message: z.string().min(10).max(5000),
  privacyConsent: z.literal(true),
})

export const proposalSchema = z.object({
  company: z.string().min(2).max(200),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email().max(200),
  country: z.string().min(1).max(100),
  projectType: z.string().min(1).max(50),
  estimatedBudget: z.string().max(100).optional(),
  timeline: z.string().max(200).optional(),
  requirements: z.string().min(20).max(10000),
  privacyConsent: z.literal(true),
})

export const demoSchema = z.object({
  product: z.string().min(1).max(50),
  company: z.string().min(2).max(200),
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  preferredDate: z.string().max(20).optional(),
  preferredTime: z.string().max(50).optional(),
  message: z.string().max(5000).optional(),
  privacyConsent: z.literal(true),
})

export const careersSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  role: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
  privacyConsent: z.literal(true),
})

export const sanitize = (str) => {
  if (typeof str !== 'string') return str
  return str.replace(/<[^>]*>/g, '').trim()
}

export const sanitizeObject = (obj) => {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = typeof value === 'string' ? sanitize(value) : value
  }
  return result
}
