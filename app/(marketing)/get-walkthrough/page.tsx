import { Metadata } from 'next';
import { Check, Clock, FileCheck, Users } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { WalkthroughForm } from '@/components/forms/WalkthroughForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = genMeta({
  title: 'Get a Walkthrough',
  description:
    'Book a free on-site walkthrough for your property. We assess your space and deliver a custom commercial cleaning or facility management proposal within 24–48 hours. No obligation.',
  pathname: '/get-walkthrough',
});

const benefits = [
  {
    icon: Clock,
    title: 'Fast Response',
    description:
      'We contact you within 24 hours to schedule the walkthrough and deliver a custom proposal shortly after the visit.',
  },
  {
    icon: FileCheck,
    title: 'Clear Scope & Pricing',
    description:
      'You get a detailed scope of work, service frequencies, and transparent pricing—no hidden fees.',
  },
  {
    icon: Users,
    title: 'Experienced Assessment',
    description:
      'Our team evaluates your property type, square footage, and requirements so we can recommend the right service tier.',
  },
];

const whatToExpect = [
  'We reach out within 24 hours to confirm your details and schedule',
  'An on-site walkthrough at a time that works for you',
  'Assessment of lobbies, common areas, restrooms, offices, and any specialty spaces',
  'Discussion of your priorities, schedules, and any compliance or inspection needs',
  'A written proposal with scope, frequencies, and pricing',
  'No obligation—you decide if and when to move forward',
];

export default function GetWalkthroughPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4">
              Free, No Obligation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Get a Walkthrough
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Whether you run an office, condo, medical practice, restaurant, warehouse, or retail space—we’ll visit your property, assess your needs, and send a custom cleaning and facility management proposal. Response within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <Card className="shadow-soft-lg">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Request Your Walkthrough
                  </h2>
                  <WalkthroughForm />
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              {/* Benefits Cards */}
              <div className="grid gap-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to Expect */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {whatToExpect.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Why {siteConfig.shortName}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {siteConfig.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="col-span-2 pt-2">
                    <p className="text-xs text-muted-foreground">
                      {siteConfig.socialProof[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
