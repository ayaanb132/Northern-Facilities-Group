import { Metadata } from 'next';
import Link from 'next/link';
import {
  ClipboardCheck,
  Users,
  CalendarClock,
  Shield,
  BarChart3,
  Headphones,
  ArrowRight,
  Phone,
  FileCheck,
  Workflow,
} from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = genMeta({
  title: 'How It Works',
  description:
    'Learn about our facility management process from initial assessment to ongoing support. Transparent, systematic, and results-driven.',
  pathname: '/how-it-works',
});

const steps = [
  {
    icon: Phone,
    title: '1. Initial Consultation',
    description:
      'We start with a conversation to understand your needs, challenges, and goals. This helps us prepare for a productive site visit.',
    details: [
      'Discuss your current cleaning setup',
      'Identify pain points and priorities',
      'Understand your schedule and access requirements',
      'Review budget considerations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: '2. Site Walkthrough',
    description:
      'Our team conducts a comprehensive assessment of your facility, documenting areas, surfaces, and specific requirements.',
    details: [
      'Measure and document all spaces',
      'Identify high-traffic and sensitive areas',
      'Note special equipment or surface needs',
      'Photo documentation for reference',
    ],
  },
  {
    icon: FileCheck,
    title: '3. Custom Proposal',
    description:
      'Based on our assessment, we create a detailed proposal including scope, schedule, pricing, and recommended service tier.',
    details: [
      'Clear scope of work',
      'Recommended cleaning frequency',
      'Transparent pricing breakdown',
      'Service level options',
    ],
  },
  {
    icon: Users,
    title: '4. Team Assignment',
    description:
      'Once you approve, we assign a dedicated cleaning team trained specifically for your property type and requirements.',
    details: [
      'Background-checked staff',
      'Property-specific training',
      'Consistent team members',
      'Dedicated account manager',
    ],
  },
  {
    icon: Workflow,
    title: '5. Onboarding & Setup',
    description:
      'We coordinate access, establish protocols, and set up reporting systems before service begins.',
    details: [
      'Key/access card arrangements',
      'Security protocol alignment',
      'Reporting dashboard setup',
      'Emergency contact exchange',
    ],
  },
  {
    icon: CalendarClock,
    title: '6. Service Launch',
    description:
      'Cleaning begins according to your agreed schedule. We closely monitor the first weeks to ensure everything meets expectations.',
    details: [
      'Supervised initial services',
      'Frequent check-ins',
      'Quick adjustment capability',
      'Quality verification',
    ],
  },
  {
    icon: Shield,
    title: '7. Quality Assurance',
    description:
      'Regular inspections, digital checklists, and supervisor reviews ensure consistent service quality.',
    details: [
      'Scheduled supervisor inspections',
      'Digital task verification',
      'Photo documentation',
      'Client feedback integration',
    ],
  },
  {
    icon: BarChart3,
    title: '8. Reporting & Visibility',
    description:
      'Access your dashboard anytime to see completed tasks, quality metrics, and any issues being addressed.',
    details: [
      'Real-time task completion',
      'Quality score tracking',
      'Issue management',
      'Monthly summary reports',
    ],
  },
  {
    icon: Headphones,
    title: '9. Ongoing Partnership',
    description:
      'Regular reviews, responsive support, and continuous improvement keep your facility at its best.',
    details: [
      'Quarterly business reviews',
      '24/7 emergency support',
      'Service adjustments as needed',
      'Proactive recommendations',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Our Process
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              How We Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A transparent, systematic approach to facility management. From first
              contact to ongoing partnership, here's what to expect when you work
              with NFG.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gradient">
                <Link href="/get-walkthrough">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-px bg-border hidden md:block" />
                    )}

                    <div className="flex gap-6">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center text-sm"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-muted-foreground">
              From first contact to service launch
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4 max-w-4xl mx-auto">
            {[
              { time: 'Day 1', label: 'Initial Consultation' },
              { time: 'Days 2-3', label: 'Site Walkthrough' },
              { time: 'Days 4-5', label: 'Proposal Delivery' },
              { time: 'Days 7-10', label: 'Service Begins' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {item.time}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA variant="gradient" />
    </>
  );
}
