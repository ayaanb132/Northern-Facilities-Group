import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Star, Camera, MapPin, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedRealtorsProcess } from '@/components/sections/AnimatedRealtorsProcess';

export const metadata: Metadata = {
  title: 'Realtor Cleaning Services Ontario | Pre-Listing & Showing Ready | Northern Facilities Group',
  description: 'Professional pre-listing and showing cleaning for realtors across Ontario. Photo-ready properties, 24-hour turnaround, move-out certification documentation.',
  alternates: { canonical: 'https://northernfacilitiesgroup.ca/services/realtors' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Realtor Cleaning Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/realtors',
  url: 'https://northernfacilitiesgroup.ca/services/realtors',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function RealtorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Realtor Services</Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground"><Check className="h-4 w-4 text-green-500 mr-1" />Fully Insured</div>
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Pre-Listing Cleaning That Gets Properties Sold Faster
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">Properties that show beautifully sell faster and for more money. The difference between a quick sale and 45 days on market is often presentation — and cleanliness is the foundation of presentation.</p>
              <p className="mb-4">Realtors who rely on homeowners to clean before listing get inconsistent results. Homeowners don't see what buyers see: the grease behind the stove, the grout lines, the fingerprints on every glass surface.</p>
              <p>Northern Facilities Group is your pre-listing cleaning partner. Photo-ready. Showing-ready. Every time.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">Book a Pre-Listing Clean <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Email for Priority Booking</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">Why Pre-Listing Cleaning Is Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Camera, title: `Listing Photo Quality`, body: `Listing photos taken in a clean property perform measurably better. Better photos = more showings = faster sale.` },
              { icon: Star, title: `Buyer First Impression`, body: `The moment buyers walk through the door, their impression is formed. Cleanliness = care. Care = confidence. Confidence = offers.` },
              { icon: TrendingUp, title: `Sale Price Impact`, body: `Clean, well-presented properties consistently achieve higher sale prices. The cleaning cost is recovered in the sale price.` },
              { icon: Clock, title: `Days on Market`, body: `Properties that show well receive offers faster. Faster sales serve your client and your commission timing.` },
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">Our Pre-Listing Cleaning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From initial brief to closing-day certification — a 5-phase process designed specifically for real estate presentations.</p>
          </div>
          <AnimatedRealtorsProcess />
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Pre-Listing Deep Clean</h4>
                <ul className="space-y-2">
                  {[`Complete room-by-room deep clean`, `Kitchen: appliances, cabinets, counters`, `Bathrooms: tiles, grout, fixtures, mirrors`, `Floor treatment (carpet extraction or hard floor)`, `Window and glass cleaning`, `Baseboard and trim detail`, `All closets, storage, and fixtures`, `Before and after photos`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Check className="h-5 w-5 text-green-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Services</h4>
                <ul className="space-y-2">
                  {[`Weekly showing maintenance visits`, `Photo-ready final prep session`, `Post-sale move-out cleaning`, `Pet stain and odor treatment`, `Garage and basement deep clean`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Turnaround Reality</h2>
              <p className="text-muted-foreground mb-6 text-lg">Listings don't wait. We move as fast as you need us to.</p>
              <div className="space-y-4">
                {[
                  { label: `Standard pre-listing`, time: `24–48 hour booking` },
                  { label: `Condo/apartment (1–2 br)`, time: `4–6 hours cleaning` },
                  { label: `House (3–4 bedroom)`, time: `6–10 hours cleaning` },
                  { label: `Luxury home (5+ bedroom)`, time: `8–14 hours cleaning` },
                  { label: `Emergency listing prep`, time: `Same-day available` },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-border/50 rounded-xl">
                    <span className="font-bold text-navy-900">{row.label}</span>
                    <span className="text-primary font-medium mt-1 sm:mt-0">{row.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <h4 className="font-bold text-navy-900 mb-2">Preferred Realtor Program</h4>
                <p className="text-sm text-muted-foreground">Realtors who use us for 3+ listings get priority scheduling and a dedicated account manager. No waiting, no delays on listing day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Realtors?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: `Fast Turnaround`, body: `24–48 hour standard. Same-day emergency available when listings come up unexpectedly.` },
              { icon: Camera, title: `Photo-Ready Standard`, body: `We clean to a different standard than standard move-out. Streak-free glass, polished surfaces — optimized for listing photography.` },
              { icon: ShieldCheck, title: `Fully Insured`, body: `$2M liability coverage. Any damage documented and covered. Peace of mind for you and your clients.` },
              { icon: Star, title: `Complete Documentation`, body: `Before and after photos, move-in certification — documentation that protects all parties throughout the transaction.` },
              { icon: TrendingUp, title: `Real Estate ROI`, body: `Pre-listing cleaning investment is recovered in sale price or days-on-market improvement. Professional cleaning pays for itself.` },
              { icon: Check, title: `Preferred Realtor Partnership`, body: `Consistent quality, priority booking, and a dedicated account manager for top-producing realtors.` },
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
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">Service Areas</h2>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Realtor Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `How quickly can you book an urgent listing clean?`, a: `Same-day is possible with advance notice. Contact us as early as possible for urgent bookings. Priority scheduling available for preferred realtor clients.` },
              { q: `Do you coordinate with the seller directly?`, a: `We can coordinate with the seller for access and timing, or work directly with you. Your preference.` },
              { q: `What if there are pets or odors?`, a: `Enzymatic odor treatment for pet odors is available as an add-on. Standard cleaning removes visible pet hair and surface odors. Severe odor cases may require additional treatment.` },
              { q: `Do you offer weekly showing maintenance?`, a: `Yes. After the initial deep clean, weekly showing maintenance visits keep the property in showing condition throughout the listing period.` },
              { q: `Do you provide documentation for closing?`, a: `Yes. Before and after photos plus a cleaning completion certificate are provided for every job — useful for seller disclosure, buyer expectations, and deposit documentation.` },
              { q: `Do you offer a preferred realtor rate?`, a: `Realtors who use us consistently receive priority scheduling, preferred rates, and a dedicated account manager. Contact us to set up a preferred realtor account.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready to List Properties Faster?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">Photo-ready. Showing-ready. Every listing, every time. Set up a preferred realtor account today.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Set Up a Preferred Account</Link>
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
