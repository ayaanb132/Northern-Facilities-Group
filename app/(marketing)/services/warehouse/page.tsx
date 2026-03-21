import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  MapPin,
  Sparkles,
  Users,
  Clock,
  FileText,
  Warehouse,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedWarehouseProcess } from '@/components/sections/AnimatedWarehouseProcess';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Ontario | OSHA Compliance | Northern Facilities Group',
  description:
    'Professional warehouse cleaning with OSHA compliance, dust control, equipment protection, and safety standards. 24/7 service availability across Ontario.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/services/warehouse',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Warehouse Cleaning Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/warehouse',
  url: 'https://northernfacilitiesgroup.ca/services/warehouse',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function WarehousePage() {
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
                Industrial Service
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Professional Warehouse Cleaning That Keeps Operations Running
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Dust in your warehouse is costing you money. It damages product quality, increases
                worker safety liability, slows operations, and fails OSHA inspections.
              </p>
              <p className="mb-4">
                Most warehouse cleaning is reactive — you wait until the mess is visible. By then,
                equipment is coated, workers are at risk, and inventory is compromised.
              </p>
              <p>
                At Northern Facilities Group, we're the warehouse cleaning partner that understands
                your operational constraints and compliance requirements. We work around your
                schedule, not against it.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "We clean the dust before it becomes a problem."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="tel:8556641144">
                  Schedule a Facility Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Current Approach Is Failing */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              The Warehouse Cleaning Problem
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Most warehouses handle cleaning one of three ways. All three fail.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: 'Approach 1: DIY In-House',
                  problem:
                    "Your team cleans when they have time with basic equipment. High-traffic areas get attention. Remote corners don't.",
                  result:
                    'Inconsistent cleanliness, safety gaps, OSHA violations, and 1–2 FTEs spending $50–80k/year on cleaning instead of operations.',
                },
                {
                  label: 'Approach 2: Cheap Contractor',
                  problem:
                    "The lowest-cost cleaner comes weekly, sweeps floors, empties trash. That's it.",
                  result:
                    'Dust builds in high-reach areas, equipment stays dirty, safety hazards remain. Compliance fails.',
                },
                {
                  label: 'Approach 3: Generic Vendor',
                  problem:
                    'Locked into a contract with a generic company. Expensive, inflexible, cleans on their schedule.',
                  result:
                    'Overpaying ($8–12k/month) for inconsistent service with slow response times.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-navy-900 mb-3">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                    <p className="text-sm text-red-700 font-medium">Result: {item.result}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-navy-900 text-xl mb-3">The Better Way</h3>
              <p className="text-muted-foreground">
                Professional warehouse maintenance that understands your operation. Fast response
                times. OSHA compliance. Equipment protection. Safety-focused cleaning. Flexible
                scheduling around your operations. This is what Northern Facilities Group delivers.
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
              What Professional Warehouse Cleaning Includes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 5-step approach covers every zone, every frequency, and every compliance
              requirement — proactively, not reactively.
            </p>
          </div>
          <AnimatedWarehouseProcess />
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Warehouse Cleaning Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              The business case is clear — clean facilities outperform dirty ones across every metric.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'OSHA Compliance',
                body: 'Professional cleaning provides documented compliance verification. Non-compliance carries significant regulatory and operational risk.',
              },
              {
                icon: Wrench,
                title: 'Equipment Protection',
                body: 'Dirty equipment runs less efficiently and has a shorter lifespan. Professional cleaning extends equipment life and maintains performance.',
              },
              {
                icon: Users,
                title: 'Worker Safety',
                body: 'Clean facilities reduce slip hazards and safety risks. Workers perform better and stay longer in well-maintained environments.',
              },
              {
                icon: AlertTriangle,
                title: 'Product Quality',
                body: 'Dust contamination affects product value and quality. Clean conditions protect inventory and reduce damage.',
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

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                How Quickly Can We Start?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                From first contact to active cleaning service in under 7 days.
              </p>
              <div className="space-y-4">
                {[
                  { day: `Day 1`, task: `Contact us (call or email)` },
                  { day: `Day 2–3`, task: `On-site facility assessment (1–2 hours)` },
                  { day: `Day 4`, task: `Proposal and SLA agreement` },
                  { day: `Day 5`, task: `Staff training and onboarding` },
                  { day: `Day 6–7`, task: `Cleaning service begins` },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl"
                  >
                    <span className="font-bold text-primary">{row.day}</span>
                    <span className="text-navy-900 mt-1 sm:mt-0">{row.task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                What's Included
              </h2>

              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="space-y-2">
                  {[
                    'Daily floor scrubbing with dust collection',
                    'Weekly or bi-weekly high-reach dust removal',
                    'Equipment area cleaning',
                    'Spill response availability',
                    'Daily inspections with photo documentation',
                    'Weekly and monthly reporting',
                    'OSHA compliance verification',
                    '24-hour emergency response',
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
                    'Dock pressure washing (monthly/quarterly)',
                    'Specialized equipment degreasing',
                    'Racking system detailed cleaning',
                    'HAZMAT disposal coordination',
                    'Seasonal deep cleaning (quarterly)',
                    'Exterior facility pressure washing',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Northern Facilities Group */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Why Northern Facilities Group for Warehouse Cleaning?
            </h2>
            <p className="text-lg text-white/70">
              Industrial expertise. Not generic cleaning dressed up as industrial.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Warehouse,
                title: 'Industrial Specialization',
                body: 'We specialize in warehouses, distribution centers, and manufacturing. Different equipment, different OSHA standards — we know all of it.',
              },
              {
                icon: Wrench,
                title: 'Industrial-Grade Equipment',
                body: 'Wide-path scrubbers, HEPA dust collection, scissor lifts for high-reach — designed for 50,000+ sq ft, not 5,000 sq ft offices.',
              },
              {
                icon: FileText,
                title: 'OSHA Documentation',
                body: 'Detailed logs, photos, incident records — audit-ready at all times. When inspectors come, you have proof.',
              },
              {
                icon: Clock,
                title: '24-Hour Response',
                body: 'Spill? Urgent cleaning need? For existing clients, 2–4 hour response time across the GTA. Immediate dispatch for critical issues.',
              },
              {
                icon: ShieldCheck,
                title: '$2M Liability Coverage',
                body: 'Fully insured. Any damage is documented, reported immediately, and covered. No surprises, no liability gaps.',
              },
              {
                icon: Check,
                title: 'Quality Guarantee',
                body: 'If cleanliness drops below agreed standards, we adjust at no additional cost. Quality is non-negotiable.',
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
            Warehouse Cleaning Service Areas
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                region: 'Greater Toronto Area',
                cities:
                  'Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington, Ajax, Pickering',
              },
              {
                region: 'Southwest Ontario',
                cities: 'Hamilton, London, Kitchener, Waterloo, Cambridge, Guelph',
              },
              {
                region: 'Central Ontario',
                cities: 'Barrie, Newmarket, Oshawa, Durham Region',
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">
            Common Questions About Warehouse Cleaning
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Can you clean while we're operating?",
                a: 'Yes. We coordinate entirely around your operations. Daily cleaning typically happens early morning (5–7 AM) before shift start or during slow periods. High-reach cleaning happens during operational hours without disrupting workflow.',
              },
              {
                q: 'What equipment do you use?',
                a: 'Industrial-grade equipment designed for large facilities: wide-path floor scrubbers (20"+ width), HEPA-filtered vacuum systems (captures particles <0.3 microns), scissor and boom lifts for high-reach work (up to 50+ feet), and 3000+ PSI pressure washing for dock cleaning.',
              },
              {
                q: 'How do you handle OSHA compliance?',
                a: 'We follow OSHA standards 1910.22 and any industry-specific standards relevant to your operation. We maintain detailed logs, train staff on hazardous waste handling, keep incident records, and provide monthly compliance verification reports.',
              },
              {
                q: "What if there's damage during cleaning?",
                a: 'We carry $2M liability insurance. Any damage is documented and covered. We report it immediately with photos and coordinate remediation through your insurance claim process.',
              },
              {
                q: 'Can you handle hazardous material cleanup?',
                a: 'We coordinate with specialized hazmat teams for disposal. We handle the general area cleanup and documentation. Hazmat specialists handle contaminated materials per regulatory requirements.',
              },
              {
                q: "What's your emergency response time?",
                a: 'For existing clients with 24-hour service: 2–4 hour response. For major spills or safety hazards, we dispatch immediately — typically on-site within 2 hours in the Greater Toronto Area.',
              },
              {
                q: 'Do you work nights and weekends?',
                a: 'Yes. We schedule cleaning during nights, weekends, or early mornings. Premium rates apply for after-hours service, but flexibility is built into our scheduling options.',
              },
              {
                q: 'What does warehouse cleaning cost?',
                a: 'Pricing depends on facility size, frequency, and specific services. We provide detailed quotes after facility assessment. We offer transparent pricing with no hidden fees.',
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
            Ready to Transform Your Warehouse?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Professional warehouse cleaning improves safety, protects equipment, ensures compliance,
            and lets your team focus on operations — not cleaning. Free assessment, custom proposal
            within 48 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              asChild
              variant="secondary"
              className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold"
            >
              <Link href="/contact">Schedule a Facility Audit</Link>
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
