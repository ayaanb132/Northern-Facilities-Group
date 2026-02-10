'use server';

import { contactFormSchema, walkthroughFormSchema, quoteFormSchema, type ContactFormData, type WalkthroughFormData, type QuoteFormData } from '@/lib/validators';
import { sendToDealsPipeline } from '@/lib/dealsPipeline';
import { sendFormEmail } from '@/lib/email';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([ip, record]) => {
    if (now - record.timestamp > RATE_LIMIT_WINDOW * 10) {
      rateLimitMap.delete(ip);
    }
  });
}, RATE_LIMIT_WINDOW * 10);

interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  formData: FormData,
  ip: string = 'unknown'
): Promise<ActionResult> {
  // Rate limiting
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  // Parse and validate
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    website: formData.get('website'), // Honeypot
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data: ContactFormData = result.data;

  // Honeypot check
  if (data.website && data.website.length > 0) {
    // Silently succeed to not alert bots
    return {
      success: true,
      message: 'Thank you for your message. We will be in touch soon.',
    };
  }

  const emailResult = await sendFormEmail({
    replyTo: data.email,
    subject: `Contact Form: ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
    `.trim(),
  });
  if (!emailResult.ok) {
    if (emailResult.error?.includes('No email service')) {
      console.log('Contact form submission (no email service configured):', JSON.stringify(data, null, 2));
    } else {
      return { success: false, message: 'Failed to send message. Please try again later.' };
    }
  }

  return {
    success: true,
    message: 'Thank you for your message. We will be in touch within one business day.',
  };
}

export async function submitWalkthroughForm(
  formData: FormData,
  ip: string = 'unknown'
): Promise<ActionResult> {
  // Rate limiting
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  // Parse and validate
  const rawData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    propertyType: formData.get('propertyType'),
    squareFootage: formData.get('squareFootage'),
    message: formData.get('message'),
    website: formData.get('website'), // Honeypot
  };

  const result = walkthroughFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data: WalkthroughFormData = result.data;

  // Honeypot check
  if (data.website && data.website.length > 0) {
    return {
      success: true,
      message: 'Thank you! We will contact you within 24 hours to schedule your walkthrough.',
    };
  }

  const emailResult = await sendFormEmail({
    replyTo: data.email,
    subject: `Walkthrough Request: ${data.company}`,
    text: `
New Walkthrough Request

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Company: ${data.company}

Property Details:
- Type: ${data.propertyType}
- Size: ${data.squareFootage}

Additional Notes:
${data.message || 'None provided'}
    `.trim(),
  });
  if (!emailResult.ok) {
    if (emailResult.error?.includes('No email service')) {
      console.log('Walkthrough form submission (no email service configured):', JSON.stringify(data, null, 2));
    } else {
      return { success: false, message: 'Failed to submit request. Please try again later.' };
    }
  }

  // Send to deals pipeline (your app / webhook)
  const pipelinePayload = {
    source: 'walkthrough' as const,
    submittedAt: new Date().toISOString(),
    name: `${data.firstName} ${data.lastName}`.trim(),
    email: data.email,
    phone: data.phone || undefined,
    company: data.company,
    propertyType: data.propertyType,
    squareFootage: data.squareFootage,
    message: data.message || undefined,
  };
  const pipelineResult = await sendToDealsPipeline(pipelinePayload);
  if (!pipelineResult.ok) {
    console.error('Deals pipeline (walkthrough):', pipelineResult.error);
    // Don't fail the form — pipeline is secondary
  }

  return {
    success: true,
    message: 'Thank you! We will contact you within 24 hours to schedule your walkthrough.',
  };
}

export async function submitQuoteForm(
  formData: FormData,
  ip: string = 'unknown'
): Promise<ActionResult> {
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  const rawData = {
    email: formData.get('email'),
    propertyType: formData.get('propertyType'),
    tier: formData.get('tier'),
    website: formData.get('website'),
  };

  const result = quoteFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data: QuoteFormData = result.data;

  if (data.website && data.website.length > 0) {
    return {
      success: true,
      message: "We'll send you pricing information shortly.",
    };
  }

  const emailResult = await sendFormEmail({
    replyTo: data.email,
    subject: `Quote Request: ${data.propertyType} / ${data.tier}`,
    text: `Quote request\n\nEmail: ${data.email}\nProperty type: ${data.propertyType}\nTier: ${data.tier}`,
  });
  if (!emailResult.ok) {
    if (emailResult.error?.includes('No email service')) {
      console.log('Quote form submission (no email service configured):', JSON.stringify(data, null, 2));
    } else {
      return { success: false, message: 'Failed to submit. Please try again later.' };
    }
  }

  const pipelinePayload = {
    source: 'quote' as const,
    submittedAt: new Date().toISOString(),
    email: data.email,
    propertyType: data.propertyType,
    tier: data.tier,
  };
  const pipelineResult = await sendToDealsPipeline(pipelinePayload);
  if (!pipelineResult.ok) {
    console.error('Deals pipeline (quote):', pipelineResult.error);
  }

  return {
    success: true,
    message: "We'll send you pricing information shortly. For a custom proposal, schedule a walkthrough.",
  };
}
