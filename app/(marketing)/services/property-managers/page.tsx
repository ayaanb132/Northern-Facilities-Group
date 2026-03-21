import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  Home,
  Key,
  Camera,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedPropertyManagersProcess } from '@/components/sections/AnimatedPropertyManagersProcess';

export const metadata: Metadata = {
  title: 'Property Management Cleaning Ontario | Fast Turnover | Northern Facilities Group',
  description:
    'Professional cleaning for residential and condo properties. Move-in/move-out, turnover, and common area cleaning with 24–48 hour turnaround. Board-ready reporting.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/services/property-managers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Property Management Cleaning',
  '@id': 'https://northernfacilitiesgroup.ca/services/property-managers',
  url: 'https://northernfacilitiesgroup.ca/services/property-managers',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function PropertyManagersPage() {
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
                Property Management
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Property Management Cleaning That Reduces Vacancy
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Every day your unit sits vacant is lost revenue. Every turnover that takes five days
                instead of two costs you money — and delays the next tenant from moving in.
              </p>
              <p className="mb-4">
                Every complaint from residents about common area cleanliness is a retention risk. First
                impressions matter. Move-in condition matters. Professional cleaning isn't optional —
                it's revenue protection.
              </p>
              <p>
                Northern Facilities Group specializes in residential and condo property turnover. We
                get units move-in ready in 24–48 hours. We understand your vacancy costs. We protect
                your income.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "Tenant-ready in 24–48 hours. Every unit. Every time."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="tel:8556641144">
                  Schedule a Property Assessment
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

      {/* The Problem */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              The Property Management Cleaning Challenge
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Slow turnovers, inconsistent quality, and disorganized documentation are the three
              biggest problems property managers face with cleaning.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: 'Slow Turnovers',
                  problem:
                    'DIY cleaning or unreliable contractors take 5–7 days per unit. Every extra day is lost rent.',
                  result: 'Units sit vacant longer than necessary — revenue lost directly.',
                },
                {
                  title: 'Inconsistent Quality',
                  problem:
                    'New tenants find issues on move-in day. Complaints start immediately. Bad reviews follow.',
                  result: 'Retention drops. Reputation suffers. Re-leasing costs increase.',
                },
                {
                  title: 'Poor Documentation',
                  problem:
                    'No before/after photos. No checklist. No proof of condition at move-in vs. move-out.',
                  result: 'Deposit disputes become difficult to resolve without documentation.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                    <p className="text-sm text-red-700 font-medium">Result: {item.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-navy-900 text-xl mb-3">Professional Turnover Cleaning</h3>
              <p className="text-muted-foreground">
                24–48 hour turnaround. Tenant-ready certification. Before and after photos.
                Documentation you can use for deposits or disputes. Multi-property coordination for
                larger portfolios.
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
              Our Turnover Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 6-step turnover process gets units move-in ready in 24–48 hours — with full
              documentation, certification, and photo evidence.
            </p>
          </div>
          <AnimatedPropertyManagersProcess />
        </div>
      </section>

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Turnover Timeline</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Standard process — from move-out to move-in ready.
              </p>
              <div className="space-y-4">
                {[
                  { label: `1 Bedroom unit`, time: `4–6 hours cleaning` },
                  { label: `2 Bedroom unit`, time: `6–8 hours cleaning` },
                  { label: `3+ Bedroom unit`, time: `8–12 hours cleaning` },
                  { label: `Standard turnaround`, time: `24–48 hours total` },
                  { label: `Rapid turnaround`, time: `Same-day (emergency)` },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-border/50 rounded-xl"
                  >
                    <span className="font-bold text-navy-900">{row.label}</span>
                    <span className="text-primary font-medium mt-1 sm:mt-0">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="space-y-2">
                  {[
                    'Complete deep cleaning (all surfaces)',
                    'Carpet extraction or hard floor deep clean',
                    'Bathroom sanitization',
                    'Kitchen appliance interior/exterior cleaning',
                    'Window and glass cleaning',
                    'Baseboard and trim detail',
                    'Before and after photos',
                    'Move-in ready certification',
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
                    'Paint touch-up beyond minor scuffs',
                    'Pet stain enzymatic treatment ($200–400)',
                    'Exterior balcony or patio cleaning',
                    'Emergency rapid turnaround',
                    'Recurring common area cleaning',
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

      {/* Why NFG */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Why Northern Facilities Group for Property Managers?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: `24–48 Hour Turnaround`, body: `Standard turnaround. Same-day emergency available. We minimize vacant days — maximizing your rental income.` },
              { icon: Camera, title: `Complete Documentation`, body: `Before and after photos, move-in checklist, completion cert. Proof for deposits, insurance, and tenant disputes.` },
              { icon: Home, title: `Multi-Property Coordination`, body: `Manage 5 or 50 units — we coordinate across your whole portfolio with consolidated scheduling and billing.` },
              { icon: ShieldCheck, title: `$2M Liability Coverage`, body: `Fully insured. Any damage is documented and covered. No surprises, no gaps in liability protection.` },
              { icon: Key, title: `Quality Guarantee`, body: `Not satisfied the unit is tenant-ready? We correct it at no additional cost. We stand behind every turnover.` },
              { icon: Check, title: `Flexible Scheduling`, body: `We coordinate directly with property managers, tenants, or your existing property management company.` },
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
            Service Areas Across Ontario
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { region: `Greater Toronto Area`, cities: `Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington` },
              { region: `Southwest Ontario`, cities: `Hamilton, London, Kitchener, Waterloo, Guelph` },
              { region: `Central Ontario`, cities: `Barrie, Newmarket, Durham Region (Oshawa, Pickering, Ajax, Whitby)` },
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
            Common Questions About Property Turnover Cleaning
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `How long does a unit turnover take?`, a: `1 bedroom: 4–6 hours. 2 bedroom: 6–8 hours. 3+ bedroom: 8–12 hours. Most turnovers complete within 24 hours of start time.` },
              { q: `Can you coordinate with our property manager?`, a: `Yes. If you have a property manager, we coordinate directly with them — they schedule, we execute, they verify. We follow their move-in ready checklist.` },
              { q: `What if there is damage beyond normal wear?`, a: `We handle cosmetic damage (scuffs, minor paint, light stains). Major damage is noted and documented — we connect you with appropriate contractors as needed.` },
              { q: `Do you handle pet stains or odors?`, a: `Yes. Specialized enzymatic treatment removes pet stains and odors. Additional cost based on severity. Most pet damage is handled with our standard cleaning protocol.` },
              { q: `Do you guarantee move-in ready?`, a: `Yes. If you're not satisfied the unit is tenant-ready, we make corrections at no additional cost. We stand behind every turnover.` },
              { q: `Can you handle furnished units?`, a: `Yes. We work around furniture and belongings. If you want furniture deep-cleaned or restored, that can be added as a service.` },
              { q: `Do you offer multi-property coordination?`, a: `Yes. We coordinate scheduling, billing, and reporting across multiple units or buildings — with consolidated invoicing and priority response for portfolio clients.` },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready to Reduce Vacancy?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Professional turnover cleaning reduces vacant days, attracts quality tenants, and protects
            your rental income. Free assessment. Custom quote within 24 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Schedule an Assessment</Link>
            </Button>
            <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg text-white border-white hover:bg-white/10">
              <a href="tel:8556641144">Call (855) 664-1144</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
