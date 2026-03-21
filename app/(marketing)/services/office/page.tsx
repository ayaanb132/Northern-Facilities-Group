import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Users, Clock, MapPin, Sparkles, TrendingUp, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedOfficeProcess } from '@/components/sections/AnimatedOfficeProcess';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Ontario | Nightly Janitorial | Northern Facilities Group',
  description: 'Professional office cleaning with nightly janitorial service, high-touch sanitization, and flexible scheduling. Consistent quality across Ontario offices.',
  alternates: { canonical: 'https://northernfacilitiesgroup.ca/services/office' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Office Cleaning Services',
  '@id': 'https://northernfacilitiesgroup.ca/services/office',
  url: 'https://northernfacilitiesgroup.ca/services/office',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function OfficePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-10 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-40 gradient-bg relative overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Office & Commercial</Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground"><Check className="h-4 w-4 text-green-500 mr-1" />Fully Insured</div>
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Professional Office Cleaning That Reflects Your Standards
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">Your office appearance signals your company's standards. A clean office improves employee productivity, health, and morale. It creates confidence in clients who visit.</p>
              <p className="mb-4">Inconsistent cleaning is the norm — cheap vendors cut corners, staff skip difficult areas, quality varies. You notice when the kitchen is dirty. Clients notice when the conference room isn't fresh.</p>
              <p>Northern Facilities Group provides consistent, professional office cleaning. Every session, same standard. No surprises. No complaints about what was missed.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">Why Office Cleanliness Matters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: Users, title: `Employee Productivity`, body: `Clean, organized workspaces reduce cognitive load and improve focus. Employees work better in professional environments.` },
              { icon: TrendingUp, title: `Client Impressions`, body: `When clients visit, your office communicates your standards. Clean spaces build trust. Dirty offices create doubt.` },
              { icon: ShieldCheck, title: `Health & Sick Days`, body: `Regular disinfection of high-touch surfaces reduces illness transmission — fewer sick days, better team performance.` },
              { icon: Clock, title: `Consistent Standards`, body: `Professional cleaning delivers the same result every time. No variation. No days when things slide.` },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">Our Office Cleaning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A consistent 5-step approach covering your entire office — from workstations to restrooms, nightly or on schedule.</p>
          </div>
          <AnimatedOfficeProcess />
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Every Session</h4>
                <ul className="space-y-2">
                  {[`Workstations and desks wiped`, `Kitchen and break room cleaned`, `Restrooms sanitized and restocked`, `All trash and recycling emptied`, `Floors vacuumed or mopped`, `High-touch surface disinfection`, `Glass and mirrors cleaned`, `Completion verification with crew lead`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Check className="h-5 w-5 text-green-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Periodic Deep Cleaning</h4>
                <ul className="space-y-2">
                  {[`Carpet extraction (quarterly)`, `Hard floor maintenance (quarterly)`, `Window interior cleaning (monthly)`, `Appliance interior cleaning (monthly)`, `HVAC vent cleaning (biannual)`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Pricing by Office Size</h2>
              <p className="text-muted-foreground mb-6">Transparent pricing based on square footage and frequency. Custom quotes provided after assessment.</p>
              <div className="space-y-4">
                {[
                  { size: `Small office (under 2,000 sq ft)`, freq: `2x/week from $400/month` },
                  { size: `Medium office (2,000–5,000 sq ft)`, freq: `Nightly from $800/month` },
                  { size: `Large office (5,000–15,000 sq ft)`, freq: `Nightly from $1,500/month` },
                  { size: `Enterprise (15,000+ sq ft)`, freq: `Custom pricing — call us` },
                ].map((row) => (
                  <div key={row.size} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-border/50 rounded-xl">
                    <span className="font-bold text-navy-900">{row.size}</span>
                    <span className="text-primary font-medium mt-1 sm:mt-0">{row.freq}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">*Indicative pricing. Final quote provided after on-site assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Office Cleaning?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: `Consistent Quality`, body: `Same crew, same checklist, same standard every session. Not a rotation of random staff with inconsistent results.` },
              { icon: Clock, title: `Flexible Scheduling`, body: `Evenings, weekends, or early mornings — we work around your schedule. After-hours cleaning at no premium for regular clients.` },
              { icon: Monitor, title: `Tech-Enabled Tracking`, body: `Digital checklist completion and photo verification — you know every session was completed to standard.` },
              { icon: Users, title: `Background-Checked Staff`, body: `All staff screened and bonded. Appropriate for office environments that contain sensitive materials or equipment.` },
              { icon: ShieldCheck, title: `$2M Liability Coverage`, body: `Fully insured. Any damage documented and covered. No surprises.` },
              { icon: Check, title: `Quality Guarantee`, body: `Not satisfied? We come back and correct it at no additional cost. Consistent quality is our commitment.` },
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">Office Cleaning FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `Can you clean after business hours?`, a: `Yes — after-hours cleaning is standard for most offices. We arrive after your team leaves and complete cleaning before the next business day.` },
              { q: `Do you provide cleaning supplies?`, a: `Yes. All professional-grade cleaning products and equipment are included. We use EPA-registered disinfectants and commercial microfiber systems.` },
              { q: `What if I only need cleaning twice a week?`, a: `We offer flexible frequency: nightly, 3x/week, twice weekly, or weekly. Pricing adjusts based on frequency.` },
              { q: `Can you handle a move to a new office?`, a: `Yes. We provide one-time deep cleaning for new office spaces before move-in day, and ongoing janitorial service after you're settled.` },
              { q: `What about cold and flu season?`, a: `During cold/flu season, we increase frequency of high-touch surface disinfection and use enhanced antimicrobial products on keyboards, phones, and shared surfaces.` },
              { q: `How soon can you start?`, a: `From assessment to first cleaning session typically takes 5–7 business days — fast onboarding to get service started quickly.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready for a Cleaner Office?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">Professional, consistent office cleaning reflects your company's standards. Free assessment — custom quote within 24 hours.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Get a Custom Quote</Link>
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
