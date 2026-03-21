import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Users, FileText, MapPin, Sparkles, Star, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedCondoProcess } from '@/components/sections/AnimatedCondoProcess';

export const metadata: Metadata = {
  title: 'Condo Building Cleaning Ontario | Board-Ready Reporting | Northern Facilities Group',
  description: 'Professional condo and multi-residential building cleaning. Lobbies, hallways, amenities, and common areas — with board-ready monthly reporting across Ontario.',
  alternates: { canonical: 'https://northernfacilitiesgroup.ca/services/condo' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Condo Building Cleaning',
  '@id': 'https://northernfacilitiesgroup.ca/services/condo',
  url: 'https://northernfacilitiesgroup.ca/services/condo',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function CondoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Condo & Residential</Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />Fully Insured
              </div>
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Condo Building Cleaning That Residents Notice
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">Residents don't think about building cleaning — until it fails. A dirty lobby, grimy elevator, or neglected gym is what residents see and feel every day. It's their home.</p>
              <p className="mb-4">Boards face complaints, retention challenges, and reputational damage when cleaning falls short. Finding a reliable cleaning partner who understands condo regulations and board reporting requirements is genuinely difficult.</p>
              <p>Northern Facilities Group specializes in multi-residential building cleaning — from boutique condos to high-rise towers. Board-ready reporting, consistent quality, and direct accountability.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">Schedule a Building Assessment <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Proposal</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">The Condo Cleaning Challenge</h2>
          <p className="text-lg text-muted-foreground mb-10">Condos have unique requirements that standard commercial cleaning doesn't address.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: `Resident Expectations`, body: `Residents pay premium condo fees. They expect professional-grade common areas. Substandard cleaning generates complaints and board pressure.` },
              { title: `Board Accountability`, body: `Boards need proof of service delivery. Without documentation, cleaning becomes a complaint-driven reaction rather than a managed program.` },
              { title: `High Turnover of Vendors`, body: `Many buildings cycle through cheap vendors. Every switch means re-training, re-onboarding, and quality gaps during transitions.` },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">Our Condo Building Cleaning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A 5-phase approach covering lobbies, amenities, hallways, and board reporting — designed for residential buildings.</p>
          </div>
          <AnimatedCondoProcess />
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
                  {[`Daily lobby cleaning and sanitization`, `Elevator and hallway cleaning (all floors)`, `Gym and amenity space cleaning`, `Common area restrooms`, `Garbage and recycling room`, `Monthly board report with photos`, `Incident and damage reporting`, `Emergency response for spills or issues`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Check className="h-5 w-5 text-green-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-Ons</h4>
                <ul className="space-y-2">
                  {[`Pool area deep cleaning`, `Parking garage full sweep`, `Window exterior cleaning`, `Move-out suite cleaning`, `Seasonal exterior cleaning`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Amenities We Cover</h2>
              <div className="space-y-3">
                {[`Main lobby & concierge area`, `Elevators and elevator lobbies`, `All floor hallways and stairwells`, `Fitness centre / gym`, `Pool and pool deck`, `Party room and event spaces`, `Mailroom and package room`, `Parking garage (spot and periodic full sweep)`, `Outdoor patios and rooftop terraces`, `Garbage and recycling rooms`].map((area) => (
                  <div key={area} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <Building2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-navy-900">{area}</span>
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
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Condos?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: `Residential Specialization`, body: `We understand condo board dynamics, resident expectations, and the compliance requirements of multi-residential buildings.` },
              { icon: FileText, title: `Board-Ready Reporting`, body: `Monthly completion reports with photos, KPI summaries, and cost tracking — everything boards need for meeting documentation.` },
              { icon: Star, title: `Resident Satisfaction`, body: `Our goal is zero resident complaints related to common area cleanliness. We monitor feedback and adjust proactively.` },
              { icon: ShieldCheck, title: `$2M Liability Coverage`, body: `Fully insured with certificates on file. Any damage documented and covered. Full compliance with condo corporation standards.` },
              { icon: Check, title: `Quality Guarantee`, body: `If common area quality falls below agreed standards, we adjust at no cost. Quality is non-negotiable.` },
              { icon: Building2, title: `Any Size Building`, body: `From 20-unit boutique condos to 500+ unit high-rises — we scale staffing to your building size and cleaning requirements.` },
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Condo Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `Do you work with property management companies?`, a: `Yes. We coordinate directly with your property manager — they schedule, we execute, they verify. Or we can work directly with the board.` },
              { q: `How do you handle resident complaints about cleanliness?`, a: `Resident complaints are escalated to us immediately. We investigate, correct, and report back to management within 24 hours.` },
              { q: `What does board reporting look like?`, a: `Monthly: completion log per area with photos, any maintenance flags, supply usage, and cost summary. Quarterly: trend analysis and optimization recommendations.` },
              { q: `Can you handle seasonal deep cleaning?`, a: `Yes. Seasonal deep cleaning (spring/fall) covers areas like parking garages, outdoor spaces, window exteriors, and high-reach areas that standard cleaning doesn't reach.` },
              { q: `What if we have an event in the party room?`, a: `Pre-event setup cleaning and post-event full cleanup are available as add-ons. Scheduling coordinated directly with your management team.` },
              { q: `Do you handle suite turnovers?`, a: `Yes. Move-out and move-in cleaning for individual suites is available as an add-on service.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready to Elevate Your Building's Standards?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">Pristine lobbies, professionally maintained amenities, board-ready reporting. Free building assessment. Custom proposal within 48 hours.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Schedule a Building Assessment</Link>
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
