/**
 * Send form notification emails via Zoho Mail (SMTP) or Resend.
 * Set Zoho env vars to use your Zoho account; otherwise Resend is used if configured.
 */

import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/site';

const TO_EMAIL = process.env.CONTACT_EMAIL || siteConfig.links.email;
const FROM_NAME = 'NFG Website';
const FROM_ADDRESS = process.env.ZOHO_EMAIL || 'noreply@northernfacilitiesgroup.ca';

export interface SendEmailOptions {
  to?: string;
  replyTo: string;
  subject: string;
  text: string;
}

function isZohoConfigured(): boolean {
  return !!(process.env.ZOHO_EMAIL && process.env.ZOHO_APP_PASSWORD);
}

function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}

export async function sendFormEmail(options: SendEmailOptions): Promise<{ ok: boolean; error?: string }> {
  const { to = TO_EMAIL, replyTo, subject, text } = options;

  // 1) Zoho SMTP (if you use Zoho Mail)
  if (isZohoConfigured()) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
        port: parseInt(process.env.ZOHO_SMTP_PORT || '465', 10),
        secure: true,
        auth: {
          user: process.env.ZOHO_EMAIL,
          pass: process.env.ZOHO_APP_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_ADDRESS}>`,
        to,
        replyTo,
        subject,
        text,
      });
      return { ok: true };
    } catch (err) {
      console.error('Zoho email send failed:', err);
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'Failed to send email',
      };
    }
  }

  // 2) Resend (alternative)
  if (isResendConfigured()) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to,
        reply_to: replyTo,
        subject,
        text,
      });
      return { ok: true };
    } catch (err) {
      console.error('Resend email send failed:', err);
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'Failed to send email',
      };
    }
  }

  return { ok: false, error: 'No email service configured (set Zoho or Resend env vars)' };
}

export function isEmailConfigured(): boolean {
  return isZohoConfigured() || isResendConfigured();
}
