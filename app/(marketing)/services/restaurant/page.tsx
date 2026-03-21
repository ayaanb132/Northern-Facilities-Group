import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  MapPin,
  Sparkles,
  FileText,
  Clock,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedRestaurantProcess } from '@/components/sections/AnimatedRestaurantProcess';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Services Ontario | Health Code Compliant | Northern Facilities Group',
  description:
    'Professional restaurant cleaning including commercial kitchen, hood & exhaust, and dining room. NFPA 96 compliant. Health inspection documentation. Available nightly across Ontario.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/services/restaurant',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Restaurant Cleaning Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/restaurant',
  url: 'https://northernfacilitiesgroup.ca/services/restaurant',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function RestaurantPage() {
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
                Restaurant & Hospitality
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Restaurant Cleaning That Passes Health Inspections
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                A failed health inspection can shut your restaurant. A poor score gets published. One
                bad review mentioning cleanliness can cost you 20% of your customers.
              </p>
              <p className="mb-4">
                In-house cleaning staff rarely have the equipment, training, or compliance knowledge
                to maintain commercial kitchens to health inspection standards. Grease accumulates.
                Hood systems go uncleaned. Documentation doesn't exist.
              </p>
              <p>
                Northern Facilities Group provides professional restaurant cleaning with
                health-code-compliant kitchen protocols, NFPA 96 hood cleaning, and complete
                inspection documentation.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "Pass every health inspection. Every time."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">
                  Schedule a Kitchen Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
            The Restaurant Cleaning Problem
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Every restaurant cleaning failure creates a compounding problem.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: `Grease Buildup`, body: `Commercial kitchens accumulate grease on every surface. Grease build-up is a fire hazard and an automatic health violation. Staff cleaning can't match professional kitchen degreasing.` },
              { title: `Hood System Neglect`, body: `Hood and exhaust systems must be professionally cleaned per NFPA 96. Improper or infrequent cleaning is a fire risk and an automatic inspection failure.` },
              { title: `Poor Documentation`, body: `Health inspectors need to see dated, signed cleaning logs. "We clean every night" isn't documentation — it's an assurance. Inspectors want paper proof.` },
              { title: `Guest Experience`, body: `Dirty dining rooms, sticky tables, and filthy bathrooms drive guests away and generate online reviews that damage your reputation permanently.` },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0" /> {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Process */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              Our Restaurant Cleaning Protocol
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From kitchen deep-clean to health inspection documentation — a 6-phase protocol for
              restaurants that need to pass every inspection.
            </p>
          </div>
          <AnimatedRestaurantProcess />
        </div>
      </section>

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="space-y-2">
                  {[
                    'Nightly commercial kitchen deep clean',
                    'Dining room and front-of-house cleaning',
                    'Restroom sanitization and restocking',
                    'Daily sanitation log (signed, timestamped)',
                    'Monthly hood and exhaust cleaning',
                    'NFPA 96 compliance documentation',
                    'Grease trap coordination',
                    'Pre-service morning prep',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-Ons</h4>
                <ul className="space-y-2">
                  {[
                    'Deep fryer cleaning and filter replacement',
                    'Walk-in cooler detail and organization',
                    'Bar deep clean and speed rail detail',
                    'Patio and exterior cleaning',
                    'Emergency pre-inspection cleaning',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Restaurant Cleaning Schedule</h2>
              <div className="space-y-4 mb-8">
                {[
                  { label: `Nightly (after service)`, task: `Full kitchen and dining room deep clean` },
                  { label: `Morning (pre-service)`, task: `Prep area sanitization and setup` },
                  { label: `Monthly`, task: `Hood and exhaust system cleaning (NFPA 96)` },
                  { label: `Quarterly`, task: `Grease trap service and documentation` },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-border/50 rounded-xl">
                    <span className="font-bold text-primary">{row.label}</span>
                    <span className="text-navy-900 mt-1 sm:mt-0">{row.task}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <h4 className="font-bold text-navy-900 mb-2">Inspection Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  We maintain a complete health inspection documentation file — daily logs, hood
                  cleaning certificates, temperature records, and staff certifications. When
                  inspectors arrive, you have everything they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NFG */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Restaurants?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: `NFPA 96 Compliance`, body: `Hood and exhaust systems cleaned per NFPA 96 requirements. Compliance certificate provided after every service.` },
              { icon: FileText, title: `Health Inspection Package`, body: `Complete documentation file — daily logs, certificates, temperature records, staff docs — always ready for inspectors.` },
              { icon: Clock, title: `After-Hours Service`, body: `We clean after your last service and before morning prep — no disruption to your operations or kitchen staff.` },
              { icon: Star, title: `Guest Experience Focus`, body: `A clean dining room affects reviews, word-of-mouth, and repeat visits. We understand the business impact of front-of-house cleanliness.` },
              { icon: AlertTriangle, title: `Emergency Response`, body: `Pre-inspection rapid clean available. If you're notified of an inspection, we can prioritize your location on our schedule.` },
              { icon: Check, title: `Quality Guarantee`, body: `If health inspection fails due to cleaning standards, we remediate immediately. Pass every inspection or we fix it at no cost.` },
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
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">Service Areas</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { region: `Greater Toronto Area`, cities: `Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington` },
              { region: `Southwest Ontario`, cities: `Hamilton, London, Kitchener, Waterloo, Guelph` },
              { region: `Central Ontario`, cities: `Barrie, Newmarket, Durham Region` },
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Restaurant Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `Can you clean while we're closed?`, a: `Yes — that's standard. We arrive after service ends and clean overnight, so the kitchen is ready before morning prep. No disruption to your staff or customers.` },
              { q: `Do you handle hood and exhaust cleaning?`, a: `Yes. We provide NFPA 96-compliant hood and exhaust system cleaning. Monthly for high-volume kitchens. Quarterly for lower-volume. We provide the compliance certificate required for fire and health inspections.` },
              { q: `What documentation do you provide for health inspections?`, a: `Daily sanitation logs (timestamped and signed), hood cleaning certificates, temperature log coordination, staff certification records, and chemical usage records — a complete health inspection package.` },
              { q: `Can you help us before a health inspection?`, a: `Yes. If you receive an inspection notice, we can prioritize your location for emergency pre-inspection cleaning. Contact us as soon as you're notified.` },
              { q: `Do you clean walk-in coolers and freezers?`, a: `Walk-in deep cleaning is available as an add-on. Regular cleaning of walk-in interiors (shelving, walls, floors) is provided monthly or quarterly based on your needs.` },
              { q: `What if we fail a health inspection?`, a: `If you fail an inspection due to cleaning standards issues we were responsible for maintaining, we remediate immediately at no additional cost and provide documentation support for reinspection.` },
              { q: `Do you work with bar and lounge operations?`, a: `Yes. Bar-specific cleaning includes speed rail detail, bar top sanitation, tap handle cleaning, back-bar organization, and under-bar area. Similar protocols apply for nightclubs and event venues.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready to Pass Every Inspection?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Professional kitchen cleaning, NFPA 96 hood cleaning, health inspection documentation.
            Free kitchen assessment. Custom quote within 24 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Schedule a Kitchen Assessment</Link>
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
