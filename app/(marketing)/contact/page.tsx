import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = genMeta({
  title: 'Contact',
  description:
    'Get in touch with Northern Facilities Group. Contact us for questions, quotes, or to schedule a walkthrough.',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions about our services? Ready to get started? We're here to
              help. Reach out and we'll respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.links.email}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.links.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.links.phone.replace(/\D/g, '')}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.links.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy-900 mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.links.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy-900 mb-1">Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-slate-50 rounded-xl">
                <h3 className="font-medium text-navy-900 mb-2">
                  Ready for a quote?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skip the form and schedule a property walkthrough for a custom
                  proposal.
                </p>
                <Link
                  href="/get-walkthrough"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Request Walkthrough →
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-navy-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
