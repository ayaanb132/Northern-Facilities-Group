'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';
import { submitWalkthroughForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        'Request Walkthrough'
      )}
    </Button>
  );
}

export function WalkthroughForm() {
  const [result, setResult] = React.useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  } | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const response = await submitWalkthroughForm(formData);
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
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Request Submitted!
        </h3>
        <p className="text-muted-foreground">{result.message}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {result && !result.success && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          {result.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            error={!!result?.errors?.firstName}
          />
          {result?.errors?.firstName && (
            <p className="text-sm text-red-500">{result.errors.firstName[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            error={!!result?.errors?.lastName}
          />
          {result?.errors?.lastName && (
            <p className="text-sm text-red-500">{result.errors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
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
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company / Property Name *</Label>
        <Input
          id="company"
          name="company"
          required
          error={!!result?.errors?.company}
        />
        {result?.errors?.company && (
          <p className="text-sm text-red-500">{result.errors.company[0]}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="propertyType">Property Type *</Label>
          <Select name="propertyType" required>
            <SelectTrigger error={!!result?.errors?.propertyType}>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="condo">Condo / High-Rise</SelectItem>
              <SelectItem value="medical">Medical / Healthcare</SelectItem>
              <SelectItem value="restaurant">Restaurant / Food Service</SelectItem>
              <SelectItem value="warehouse">Warehouse / Industrial</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {result?.errors?.propertyType && (
            <p className="text-sm text-red-500">{result.errors.propertyType[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFootage">Square Footage *</Label>
          <Select name="squareFootage" required>
            <SelectTrigger error={!!result?.errors?.squareFootage}>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-10k">Under 10,000 sq ft</SelectItem>
              <SelectItem value="10k-50k">10,000 - 50,000 sq ft</SelectItem>
              <SelectItem value="50k-100k">50,000 - 100,000 sq ft</SelectItem>
              <SelectItem value="100k-500k">100,000 - 500,000 sq ft</SelectItem>
              <SelectItem value="over-500k">Over 500,000 sq ft</SelectItem>
            </SelectContent>
          </Select>
          {result?.errors?.squareFootage && (
            <p className="text-sm text-red-500">{result.errors.squareFootage[0]}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your facility and any specific requirements..."
          rows={4}
        />
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
