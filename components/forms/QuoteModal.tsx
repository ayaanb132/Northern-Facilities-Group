'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { submitQuoteForm } from '@/app/actions/contact';

interface QuoteModalProps {
  trigger: React.ReactNode;
  defaultPropertyType?: string;
  defaultTier?: string;
}

export function QuoteModal({
  trigger,
  defaultPropertyType,
  defaultTier,
}: QuoteModalProps) {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState('');
  const [propertyType, setPropertyType] = React.useState(defaultPropertyType ?? '');
  const [tier, setTier] = React.useState(defaultTier ?? '');

  const resolvedPropertyType = defaultPropertyType ?? propertyType;
  const resolvedTier = defaultTier ?? tier;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resolvedPropertyType || !resolvedTier) {
      setError('Please select property type and tier.');
      return;
    }
    setError(null);
    setPending(true);
    const formData = new FormData();
    formData.set('email', email);
    formData.set('propertyType', resolvedPropertyType);
    formData.set('tier', resolvedTier);
    const result = await submitQuoteForm(formData);
    setPending(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSubmitted(false);
      setError(null);
      setEmail('');
      setPropertyType(defaultPropertyType ?? '');
      setTier(defaultTier ?? '');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <DialogHeader>
              <DialogTitle>Thank You!</DialogTitle>
              <DialogDescription>
                We'll send you more information shortly. For a detailed proposal,
                schedule a walkthrough.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-3">
              <Button asChild className="w-full">
                <Link href="/get-walkthrough">Schedule Walkthrough</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get Pricing Information</DialogTitle>
              <DialogDescription>
                Enter your email to receive general pricing information, or
                schedule a walkthrough for a custom quote.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="quick-email">Email</Label>
                <Input
                  id="quick-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>

              {!defaultPropertyType && (
                <div className="space-y-2">
                  <Label htmlFor="quick-property">Property Type</Label>
                  <Select
                    name="propertyType"
                    value={propertyType}
                    onValueChange={setPropertyType}
                    required
                  >
                    <SelectTrigger>
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
                    </SelectContent>
                  </Select>
                </div>
              )}

              {!defaultTier && (
                <div className="space-y-2">
                  <Label htmlFor="quick-tier">Interested Tier</Label>
                  <Select
                    name="tier"
                    value={tier}
                    onValueChange={setTier}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential">Essential</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Info
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <div className="text-center">
                <span className="text-xs text-muted-foreground">or</span>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/get-walkthrough">Schedule a Walkthrough</Link>
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
