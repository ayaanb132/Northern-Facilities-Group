import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Home, Camera, MapPin, Sparkles, Clock, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedResidentialProcess } from '@/components/sections/AnimatedResidentialProcess';

export const metadata: Metadata = {
  title: 'Residential Cleaning Services Ontario | Move-Out & Deep Cleaning | Northern Facilities Group',
  description: 'Professional residential deep cleaning, move-out, and move-in cleaning across Ontario. Complete documentation, same-day availability, guaranteed move-in ready.',
  alternates: { canonical: 'https://northernfacilitiesgroup.ca/services/residential' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Residential Cleaning Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/residential',
  url: 'https://northernfacilitiesgroup.ca/services/residential',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function ResidentialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Residential</Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground"><Check className="h-4 w-4 text-green-500 mr-1" />Fully Insured</div>
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Residential Cleaning You Can Actually Trust
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">Move-out cleaning that risks your damage deposit. Move-in cleaning that takes two days instead of one and still feels unfinished. Annual deep cleaning that doesn't reach the right areas.</p>
              <p className="mb-4">Most residential cleaning services promise the same thing, but deliver inconsistently. You don't know what you'll actually get until you see it — and by then your moving truck is already there.</p>
              <p>Northern Facilities Group provides professional, documented residential cleaning with guaranteed move-in ready certification and before-and-after photo evidence. No guesswork. No surprises.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">Book a Deep Clean <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">What We Clean & When</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Key, title: `Move-Out Cleaning`, body: `Protect your deposit. Landlords and property managers expect professional-grade cleaning when you leave. We deliver it with photo documentation.` },
              { icon: Home, title: `Move-In Cleaning`, body: `Moving into a new home or rental? Start with a clean slate. Before your furniture arrives, we clean everything — including what the previous occupant left behind.` },
              { icon: ShieldCheck, title: `Annual Deep Cleaning`, body: `Even regularly cleaned homes accumulate buildup in grout, appliances, baseboards, and vents. An annual deep clean resets everything.` },
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">Our Residential Cleaning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A 6-phase systematic approach that covers every room, every surface, and every detail — from pre-job scope to move-in certification.</p>
          </div>
          <AnimatedResidentialProcess />
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Every Deep Clean</h4>
                <ul className="space-y-2">
                  {[`All rooms deep-cleaned top to bottom`, `Kitchen: appliances, cabinets, counters`, `Bathrooms: tiles, grout, fixtures, mirrors`, `Floors: extraction, scrubbing, or hardwood treatment`, `All closets and storage areas`, `Baseboards, trim, and light fixtures`, `Windows and glass (interior)`, `Before and after photos`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Check className="h-5 w-5 text-green-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-Ons</h4>
                <ul className="space-y-2">
                  {[`Pet stain enzymatic treatment`, `Oven interior commercial degreasing`, `Move-in ready certification`, `Garage cleaning`, `Exterior window cleaning`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Pricing by Home Size</h2>
              <p className="text-muted-foreground mb-6">Transparent fixed pricing. No hourly billing surprises.</p>
              <div className="space-y-4">
                {[
                  { label: `Studio / Bachelor`, price: `From $250` },
                  { label: `1 Bedroom apartment`, price: `From $350` },
                  { label: `2 Bedroom unit`, price: `From $450` },
                  { label: `3 Bedroom home`, price: `From $600` },
                  { label: `4+ Bedroom home`, price: `Custom quote` },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-border/50 rounded-xl">
                    <span className="font-bold text-navy-900">{row.label}</span>
                    <span className="text-primary font-medium mt-1 sm:mt-0">{row.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <h4 className="font-bold text-navy-900 mb-2">Move-Out Guarantee</h4>
                <p className="text-sm text-muted-foreground">We provide a move-out ready certification with photos. If your landlord disputes cleanliness, we provide documentation and return to address any documented concerns at no additional cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Residential?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: `Fast Availability`, body: `24–48 hour standard booking. Same-day emergency available for move-out deadlines.` },
              { icon: Camera, title: `Complete Documentation`, body: `Before and after photos plus move-in ready certification — protection for your deposit and peace of mind.` },
              { icon: ShieldCheck, title: `$2M Liability Coverage`, body: `Fully insured. Any damage documented and covered. Safe to have in your home.` },
              { icon: Check, title: `Move-Out Guarantee`, body: `If your landlord disputes cleanliness documented in our certification, we return and address it at no cost.` },
              { icon: Home, title: `Professional Products`, body: `Commercial-grade cleaning products — more effective than retail products. Results you can see and smell.` },
              { icon: Key, title: `Background-Checked Staff`, body: `All staff screened and bonded. You can trust us inside your home with or without you present.` },
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Residential Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `What's the difference between a deep clean and a regular clean?`, a: `A regular clean maintains a home that's already in good condition — surfaces wiped, floors vacuumed, bathrooms tidied. A deep clean reaches into grout lines, inside appliances, behind fixtures, and areas that standard cleaning misses.` },
              { q: `Do I need to be home during the clean?`, a: `No. Many clients provide key access or a lockbox code. All staff are background-checked and bonded. You can be home or not — your preference.` },
              { q: `Do you guarantee move-out deposits?`, a: `We provide a move-out cleaning certification with before-and-after photos. If your landlord raises a documented cleanliness concern, we return to address it at no additional cost.` },
              { q: `What if I have pets?`, a: `We handle pet hair and standard pet-related mess as part of standard cleaning. Enzymatic treatment for pet stains and odors is available as an add-on.` },
              { q: `How long does a move-out clean take?`, a: `Studio: 3–4 hours. 1 bedroom: 4–5 hours. 2 bedroom: 5–7 hours. 3+ bedroom: 7–10 hours. Timelines confirmed at booking based on your specific unit.` },
              { q: `Do you bring your own supplies?`, a: `Yes. All professional-grade cleaning products and equipment are included in every booking.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready for a Truly Clean Home?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">Professional deep cleaning with documentation, guarantee, and fixed pricing. Free quote. 24–48 hour booking.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Get a Free Quote</Link>
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
