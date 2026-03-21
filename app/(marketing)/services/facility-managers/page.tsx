import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  BarChart2,
  FileText,
  MapPin,
  Sparkles,
  Clock,
  Users,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedFacilityManagersProcess } from '@/components/sections/AnimatedFacilityManagersProcess';

export const metadata: Metadata = {
  title: 'Facility Management Services Ontario | Multi-Site Coordination | Northern Facilities Group',
  description:
    'Professional facility management for multi-site portfolios. Consistent standards, SLA-driven performance, compliance documentation, and single point of contact across Ontario.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/services/facility-managers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Facility Management Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/facility-managers',
  url: 'https://northernfacilitiesgroup.ca/services/facility-managers',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function FacilityManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                Facility Management
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Multi-Site Facility Management Made Simple
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Managing vendors across multiple sites is chaos. You're coordinating with 5–10
                different companies, each with different schedules, different quality standards,
                different billing, and different communication processes.
              </p>
              <p className="mb-4">
                When one vendor fails, your whole operation is disrupted. When standards slip on one
                site, you don't know until residents or clients complain.
              </p>
              <p>
                Northern Facilities Group is the consolidated partner. One contact, one set of
                standards, one invoice — across every property in your portfolio.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "From 8 vendors to one partner. From chaos to clarity."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="tel:8556641144">
                  Schedule a Portfolio Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Proposal</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Fragmentation Problem */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              The Multi-Site Facility Management Challenge
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Most facility managers operate with fragmented vendor relationships. Here's what that
              actually costs.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: AlertCircle,
                  title: `Communication Overhead`,
                  body: `Juggling 5–8 phone numbers, contracts, billing cycles, and communication processes. 20+ hours per month in vendor management.`,
                },
                {
                  icon: BarChart2,
                  title: `Quality Variance`,
                  body: `One site is pristine, another is neglected. Standards shift with vendor motivation. No centralized KPI tracking.`,
                },
                {
                  icon: FileText,
                  title: `Compliance Risk`,
                  body: `Documentation scattered across multiple vendors. When audits arrive, you scramble to compile reports from 5 different sources.`,
                },
                {
                  icon: AlertCircle,
                  title: `Budget Opacity`,
                  body: `You don't know your true facility spend. Different vendors, different rates, different billing cycles — no consolidated view.`,
                },
                {
                  icon: Clock,
                  title: `Emergency Confusion`,
                  body: `Spill at Site 3? Which vendor do you call? Multi-vendor setups create delays and confusion at the worst possible moments.`,
                },
                {
                  icon: Users,
                  title: `Vendor Replacement Burden`,
                  body: `When one vendor fails, you scramble to find a replacement — sourcing, vetting, onboarding — while the site suffers.`,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 p-6 rounded-2xl"
                  >
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-navy-900 text-xl mb-3">The Consolidated Solution</h3>
              <p className="text-muted-foreground">
                One partner manages your entire facility portfolio. All services coordinated. All
                compliance documented. All communication through a single point of contact. All
                billing consolidated to one invoice per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Process */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              The Portfolio Management Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fragmented chaos to consolidated clarity — our 5-phase approach transforms how
              you manage facilities across multiple sites.
            </p>
          </div>
          <AnimatedFacilityManagersProcess />
        </div>
      </section>

      {/* Why Portfolio Consolidation Matters */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Portfolio Consolidation Matters
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: `Time Savings`,
                body: `Consolidated management recovers 20+ hours/month previously spent managing fragmented vendors — freeing you for strategic work.`,
              },
              {
                icon: BarChart2,
                title: `Cost Transparency`,
                body: `Single invoice, per-property cost breakdown. Clear budget tracking eliminates spend surprises and simplifies forecasting.`,
              },
              {
                icon: ShieldCheck,
                title: `Quality Consistency`,
                body: `One partner has consistent incentive to maintain all properties to the same standard. Fewer complaints, better satisfaction.`,
              },
              {
                icon: FileText,
                title: `Compliance Simplicity`,
                body: `Centralized documentation and single audit trail simplifies compliance verification and audits dramatically.`,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included & Portfolio Scope */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                What's Included in Multi-Site Management
              </h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="space-y-2">
                  {[
                    'Daily cleaning coordination across all sites',
                    'Maintenance scheduling and coordination',
                    'Emergency response (24/7)',
                    'Compliance documentation for every property',
                    'Portfolio dashboard and real-time KPIs',
                    'Weekly and monthly property reports',
                    'Budget tracking and consolidated billing',
                    'Quarterly performance reviews',
                    'Single point of contact for all issues',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-Ons</h4>
                <ul className="space-y-2">
                  {[
                    'Specialized cleaning (carpet, floors, windows)',
                    'Seasonal deep cleaning',
                    'HVAC or plumbing vendor coordination',
                    'Landscaping and exterior maintenance',
                    'Post-event cleanup and coordination',
                    'Capital planning and maintenance forecasting',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                Portfolio Onboarding Timeline
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                From assessment to full portfolio activation — typically 4–5 weeks.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Week 1–2", task: "Assessment, SLA definition, vendor transition planning" },
                  { label: "Week 3–4", task: "Staff onboarding, system setup, first sites go live" },
                  { label: "Week 5–8", task: "Full portfolio activated, dashboard live" },
                  { label: "Month 2+", task: "Ongoing KPIs, monthly reviews, continuous optimization" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl"
                  >
                    <span className="font-bold text-primary">{row.label}</span>
                    <span className="text-navy-900 mt-1 sm:mt-0 sm:text-right">{row.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NFG */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Why Northern Facilities Group for Multi-Site Management?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: `Portfolio Specialization`,
                body: `Multi-site management requires coordination, SLA tracking, consolidated billing, and compliance management. We specialize in this — not generic cleaning.`,
              },
              {
                icon: BarChart2,
                title: `Real Portfolio Experience`,
                body: `We've managed 5-site, 10-site, and 20+ site portfolios. We know the scaling challenges, compliance requirements, and operational complexities.`,
              },
              {
                icon: ShieldCheck,
                title: `KPI Commitment`,
                body: `We commit to specific, measurable performance levels. Real-time dashboard shows performance. If we miss SLAs, we fix it at no additional cost.`,
              },
              {
                icon: FileText,
                title: `Audit-Ready Documentation`,
                body: `Systemized, centralized compliance documentation. When you need proof, we have it — organized, accessible, complete.`,
              },
              {
                icon: Clock,
                title: `24/7 Emergency Response`,
                body: `One number for every property emergency. No confusion about which vendor to call. 2–4 hour response for critical issues.`,
              },
              {
                icon: Check,
                title: `Scales With You`,
                body: `Your portfolio grows, we grow with it. Adding properties takes 1–2 weeks. Pricing adjusts based on portfolio size.`,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/10 border border-white/20 p-6 rounded-2xl">
                  <Icon className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">
            Multi-Site Management Across Ontario
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                region: 'Greater Toronto Area',
                cities: 'Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington',
              },
              {
                region: 'Southwest Ontario',
                cities: 'Hamilton, London, Kitchener, Waterloo, Guelph',
              },
              {
                region: 'Central Ontario',
                cities: 'Barrie, Newmarket, Durham Region',
              },
            ].map((area) => (
              <div key={area.region} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">{area.region}</h4>
                  <p className="text-sm text-muted-foreground">{area.cities}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Portfolio size: 3–50+ properties. We scale with you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">
            Multi-Site Portfolio FAQs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: `How do you manage different property types in one portfolio?`,
                a: `Each property type has different requirements. We establish property-specific SLAs that account for office buildings, retail spaces, mixed-use properties, and industrial facilities. One master contract covers all types with customized service levels per property.`,
              },
              {
                q: `Can you coordinate with our existing vendors?`,
                a: `Yes. For services we don't provide (HVAC, plumbing, landscaping), we schedule and supervise the work, verify quality and compliance, handle payment and billing, and include it in consolidated invoicing.`,
              },
              {
                q: `What if we need to add or remove properties?`,
                a: `Portfolio is fully scalable. Adding a property takes 1–2 weeks (assessment, onboarding, service start). Removing a property is handled with 30 days notice. Pricing adjusts based on portfolio size.`,
              },
              {
                q: `How does billing work?`,
                a: `One consolidated invoice per month for the entire portfolio. All properties, all services, one bill. Budget variance reporting shows cost per property for full transparency.`,
              },
              {
                q: `Can you provide different service levels for different properties?`,
                a: `Yes. Some properties might need daily cleaning, others bi-weekly. Some require 24/7 emergency response, others standard business hours. We customize SLAs per property while maintaining consolidated management.`,
              },
              {
                q: `What if performance drops below SLA?`,
                a: `If KPIs fall below agreed standards, we take corrective action at no additional cost. We'll adjust staffing, frequency, or training until performance meets SLA. Quality is non-negotiable.`,
              },
              {
                q: `What's the contract term?`,
                a: `Typically 12–24 months with annual reviews. We adjust service levels or pricing based on portfolio changes or performance improvements.`,
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready to Simplify Your Portfolio?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            From chaos to clarity. From fragmented vendors to consolidated management. Whether you're
            managing 3 properties or 30, we simplify facility management. Free assessment, no
            obligation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              asChild
              variant="secondary"
              className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold"
            >
              <Link href="/contact">Schedule a Portfolio Review</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg text-white border-white hover:bg-white/10"
            >
              <a href="tel:8556641144">Call (855) 664-1144</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
