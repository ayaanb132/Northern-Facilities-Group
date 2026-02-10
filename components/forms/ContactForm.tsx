'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export function ContactForm() {
  const [result, setResult] = React.useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  } | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const response = await submitContactForm(formData);
    setResult(response);

    if (response.success) {
      formRef.current?.reset();
    }
  }

  if (result?.success) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-navy-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground">{result.message}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-contact">Website</label>
        <input
          type="text"
          name="website"
          id="website-contact"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {result && !result.success && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          {result.message}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          name="name"
          required
          error={!!result?.errors?.name}
        />
        {result?.errors?.name && (
          <p className="text-sm text-red-500">{result.errors.name[0]}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email-contact">Email *</Label>
          <Input
            id="email-contact"
            name="email"
            type="email"
            required
            error={!!result?.errors?.email}
          />
          {result?.errors?.email && (
            <p className="text-sm text-red-500">{result.errors.email[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone-contact">Phone</Label>
          <Input id="phone-contact" name="phone" type="tel" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          required
          error={!!result?.errors?.subject}
        />
        {result?.errors?.subject && (
          <p className="text-sm text-red-500">{result.errors.subject[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message-contact">Message *</Label>
        <Textarea
          id="message-contact"
          name="message"
          required
          placeholder="How can we help you?"
          rows={5}
          error={!!result?.errors?.message}
        />
        {result?.errors?.message && (
          <p className="text-sm text-red-500">{result.errors.message[0]}</p>
        )}
      </div>

      <SubmitButton />

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-primary">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
