import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Star, Eye, MapPin, Sparkles, Clock, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedRetailProcess } from '@/components/sections/AnimatedRetailProcess';

export const metadata: Metadata = {
  title: 'Retail Store Cleaning Ontario | Display & Customer Area Experts | Northern Facilities Group',
  description: 'Professional retail store cleaning with display glass, floor care, fitting room service, and customer restrooms. After-hours scheduling across Ontario.',
  alternates: { canonical: 'https://northernfacilitiesgroup.ca/services/retail' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Retail Store Cleaning',
  '@id': 'https://northernfacilitiesgroup.ca/services/retail',
  url: 'https://northernfacilitiesgroup.ca/services/retail',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function RetailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Retail & Hospitality</Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground"><Check className="h-4 w-4 text-green-500 mr-1" />Fully Insured</div>
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Retail Cleaning That Drives Customer Confidence
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">A dirty display, fingerprint-covered glass, or neglected fitting room sends one message: we don't care. That message reaches your customers instantly — and they act on it.</p>
              <p className="mb-4">Retail environments need cleaning that understands customer psychology. Every surface customers see and touch creates an impression about your brand and your product.</p>
              <p>Northern Facilities Group provides retail-specific cleaning — after hours, to customer-facing standards, consistently.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">Schedule a Store Assessment <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">Why Retail Cleanliness Directly Affects Revenue</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: `Purchase Confidence`, body: `Clean displays and organized merchandise signal quality. Customers buy more confidently in pristine retail environments.` },
              { icon: Star, title: `Online Reviews`, body: `Cleanliness is one of the top-rated factors in retail Google Reviews. Dirty stores attract permanent 1-star reviews.` },
              { icon: ShieldCheck, title: `Brand Perception`, body: `Your store condition is your brand. Dirty conditions create cognitive dissonance — customers trust the brand less.` },
              { icon: Clock, title: `Longer Dwell Time`, body: `Clean, comfortable stores keep customers browsing longer. Longer dwell time means higher average transaction values.` },
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

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">Our Retail Cleaning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A 5-phase approach designed for retail environments — customer-facing surfaces, floors, and back-of-house, all to store-opening standard.</p>
          </div>
          <AnimatedRetailProcess />
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="space-y-2">
                  {[`All display glass and surfaces fingerprint-free`, `Checkout area sanitization`, `Floor vacuuming/mopping`, `Fitting rooms cleaned`, `Restrooms sanitized and stocked`, `Entrance and glass doors cleaned`, `Nightly completion verification`, `Monthly completion report`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Check className="h-5 w-5 text-green-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-Ons</h4>
                <ul className="space-y-2">
                  {[`Quarterly carpet or hard floor deep treatment`, `Stockroom organization and cleaning`, `Window exterior cleaning`, `Seasonal deep clean (spring/fall)`, `Pre-grand opening cleaning`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Retail Types We Serve</h2>
              <div className="space-y-3">
                {[`Fashion and apparel stores`, `Jewelry and luxury retail`, `Electronics and technology stores`, `Home décor and furniture showrooms`, `Grocery and specialty food retail`, `Pharmacy and health retail`, `Sporting goods and outdoor stores`, `Multi-location retail chains`, `Shopping centre tenants`].map((type) => (
                  <div key={type} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <Store className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-navy-900">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Retail?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: `After-Hours Cleaning`, body: `We clean after closing — every session is complete before opening the next morning. No cleaning during customer hours.` },
              { icon: Eye, title: `Retail-Specific Standards`, body: `Streak-free glass, fingerprint-free displays, and customer-facing standards — not generic janitorial work applied to a retail context.` },
              { icon: ShieldCheck, title: `$2M Liability Coverage`, body: `Fully insured. Any product damage, fixture damage, or incidents documented and covered immediately.` },
              { icon: Star, title: `Consistent Every Session`, body: `Same crew, same checklist, same standard every session. Not a rotation of random staff with inconsistent quality.` },
              { icon: Check, title: `Quality Guarantee`, body: `If the store isn't opening-ready, we correct it. No questions. Consistent quality is our base standard.` },
              { icon: Store, title: `Multi-Location Coordination`, body: `Managing multiple store locations? We coordinate across your entire retail portfolio with consolidated scheduling and billing.` },
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

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">Service Areas Across Ontario</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { region: `Greater Toronto Area`, cities: `Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington` },
              { region: `Southwest Ontario`, cities: `Hamilton, London, Kitchener, Waterloo, Guelph` },
              { region: `Central Ontario`, cities: `Barrie, Newmarket, Durham Region` },
            ].map((area) => (
              <div key={area.region} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div><h4 className="font-bold text-navy-900 mb-1">{area.region}</h4><p className="text-sm text-muted-foreground">{area.cities}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Retail Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `Can you clean while the store is closed?`, a: `Yes — after-hours cleaning is standard. We arrive after closing and complete all cleaning before your opening time.` },
              { q: `Do you clean display cases?`, a: `Yes. Glass display cases, acrylic showcases, and open display shelving are cleaned streak-free as standard.` },
              { q: `Can you handle high-end or luxury retail environments?`, a: `Yes. We use appropriate products for high-end fixtures, marble surfaces, specialty flooring, and sensitive materials.` },
              { q: `Do you manage supply restocking?`, a: `We track and resupply restroom consumables (soap, paper, sanitizer) and flag supply levels in monthly reports.` },
              { q: `Can you coordinate across multiple store locations?`, a: `Yes. Multi-location retail clients receive coordinated scheduling, consolidated billing, and a single account manager.` },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready for Store-Opening Clean Every Morning?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">Professional retail cleaning that reflects your brand standards. Free store assessment. Custom quote within 24 hours.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Schedule a Store Assessment</Link>
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
