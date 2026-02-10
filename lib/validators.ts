import { z } from 'zod';

export const walkthroughFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  propertyType: z.enum(
    ['residential', 'condo', 'medical', 'restaurant', 'warehouse', 'retail', 'office', 'other'],
    { errorMap: () => ({ message: 'Please select a property type' }) }
  ),
  squareFootage: z.enum(
    ['under-10k', '10k-50k', '50k-100k', '100k-500k', 'over-500k'],
    { errorMap: () => ({ message: 'Please select square footage' }) }
  ),
  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
    .or(z.literal('')),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Invalid submission').optional(),
});

export type WalkthroughFormData = z.infer<typeof walkthroughFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().or(z.literal('')),
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  // Honeypot
  website: z.string().max(0, 'Invalid submission').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  propertyType: z.enum(
    ['residential', 'condo', 'medical', 'restaurant', 'warehouse', 'retail', 'office', 'other'],
    { errorMap: () => ({ message: 'Please select a property type' }) }
  ),
  tier: z.enum(['essential', 'professional', 'enterprise'], {
    errorMap: () => ({ message: 'Please select a tier' }),
  }),
  // Honeypot
  website: z.string().max(0, 'Invalid submission').optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
