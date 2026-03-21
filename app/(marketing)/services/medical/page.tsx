import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileText,
  MapPin,
  Sparkles,
  Clock,
  Stethoscope,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedMedicalProcess } from '@/components/sections/AnimatedMedicalProcess';

export const metadata: Metadata = {
  title: 'Medical Office Cleaning Ontario | OSHA Compliant | Northern Facilities Group',
  description:
    'OSHA-compliant medical office cleaning with EPA antimicrobials, biohazard coordination, and daily compliance documentation. Serving clinics, dental offices, and medical facilities across Ontario.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/services/medical',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Medical Office Cleaning',
  '@id': 'https://northernfacilitiesgroup.ca/services/medical',
  url: 'https://northernfacilitiesgroup.ca/services/medical',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: { '@type': 'State', name: 'Ontario' },
  address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' },
};

export default function MedicalPage() {
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
                Medical Facility
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Medical Office Cleaning That Passes Every Inspection
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Medical facilities can't operate with basic cleaning. Your practice is held to
                standards that regular commercial cleaning companies aren't equipped to meet.
              </p>
              <p className="mb-4">
                Non-compliance with OSHA bloodborne pathogen standards carries penalties. Failing
                health inspections results in operational disruption. Poor sanitization creates
                patient safety risks.
              </p>
              <p>
                Northern Facilities Group provides certified, OSHA-compliant medical facility
                cleaning — with documentation your inspectors will accept.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "Medical-grade cleaning. Audit-ready documentation. Every session."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="tel:8556641144">
                  Schedule a Compliance Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
            Why Standard Cleaning Fails Medical Practices
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Medical facilities have requirements that standard commercial cleaning simply doesn't cover.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: `Wrong Products`, body: `Generic disinfectants don't meet EPA pathogen kill requirements for healthcare. Contact time is ignored. Concentration is wrong. Healthcare-specific protocols are not followed.` },
              { title: `No Certification`, body: `Staff aren't OSHA bloodborne pathogen certified. When inspectors ask for certification records, there's nothing to produce.` },
              { title: `Poor Documentation`, body: `No cleaning logs. No chemical records. No staff certifications. Inspectors want dated, signed documentation — not assurances.` },
              { title: `No Biohazard Training`, body: `Biohazard materials handled incorrectly create regulatory violations. Incorrect disposal creates patient and staff risk.` },
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
              Our Medical Cleaning Protocol
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              OSHA bloodborne pathogen compliant, EPA antimicrobial certified, fully documented — a
              6-phase daily protocol designed for healthcare environments.
            </p>
          </div>
          <AnimatedMedicalProcess />
        </div>
      </section>

      {/* What's Included & Practice Types */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">What's Included</h2>
              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Every Session</h4>
                <ul className="space-y-2">
                  {[
                    'OSHA bloodborne pathogen certified staff',
                    'EPA-registered antimicrobial application',
                    'Morning prep and closing deep clean',
                    'Biohazard waste coordination',
                    'Daily cleaning log with timestamps',
                    'All exam rooms, waiting areas, restrooms',
                    'High-touch surface sanitization protocol',
                    'Cross-contamination prevention systems',
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
                    'Between-patient sanitization team',
                    'Waiting room viral fogging (seasonal)',
                    'Specialized equipment surface cleaning',
                    'Emergency response/outbreak cleaning',
                    'WHMIS/safety signage audit',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-navy-900/40 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">Practice Types We Serve</h2>
              <div className="space-y-3">
                {[
                  'Family medicine / GP clinics',
                  'Dental and orthodontic offices',
                  'Physiotherapy and rehabilitation centres',
                  'Chiropractic offices',
                  'Optometry and ophthalmology practices',
                  'Mental health and counselling offices',
                  'Walk-in clinics',
                  'Medical imaging and diagnostics',
                  'Specialist referral offices',
                ].map((type) => (
                  <div key={type} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <Stethoscope className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-navy-900">{type}</span>
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
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why Northern Facilities Group for Medical?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: `OSHA Certified Staff`, body: `Every member of your cleaning team is certified in bloodborne pathogen standards. Certifications renewed annually and on file.` },
              { icon: FileText, title: `Complete Audit Package`, body: `Cleaning logs, chemical records, biohazard documentation, staff certifications — a complete audit file, always current.` },
              { icon: Clock, title: `Before-Open/After-Close`, body: `We clean before your first patient and after your last — no disruption to practice operations or patient experience.` },
              { icon: AlertTriangle, title: `Biohazard Coordination`, body: `We handle cleanup and documentation. Certified biohazard specialists handle regulated waste disposal — per all applicable regulations.` },
              { icon: Check, title: `EPA Antimicrobials`, body: `We use EPA-registered disinfectants approved for healthcare settings with enforced contact times — effective against MRSA, influenza, COVID-19.` },
              { icon: Sparkles, title: `Quality Guarantee`, body: `If your practice fails inspection due to cleaning standards, we remediate immediately at no cost. Compliance is our commitment.` },
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">FAQs — Medical Office Cleaning</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: `Are your staff OSHA bloodborne pathogen certified?`, a: `Yes. Every team member assigned to medical facilities is certified per OSHA standard 1910.1030. Certifications are renewed annually and available for your compliance files.` },
              { q: `What disinfectants do you use?`, a: `We use EPA-registered disinfectants approved for use in healthcare settings — effective against MRSA, influenza, COVID-19, and other healthcare-associated pathogens. MSDS sheets available for all products.` },
              { q: `Can you handle biohazard cleanup?`, a: `We handle surface cleanup and documentation for biohazardous materials. Licensed biohazard disposal specialists handle regulated waste per provincial and federal requirements.` },
              { q: `Do you clean between patient appointments?`, a: `Between-patient sanitization can be added as a service. We provide a dedicated team member who sanitizes exam rooms and high-touch surfaces between appointments during operating hours.` },
              { q: `What documentation do you provide?`, a: `Daily cleaning logs (what, when, who, with timestamps), chemical usage and MSDS records, staff certification documents, incident logs, and quarterly compliance summaries.` },
              { q: `Can you clean dental offices specifically?`, a: `Yes. We clean dental practices regularly and are familiar with sterilization area requirements, operatory standards, and dental-specific IPAC guidelines.` },
              { q: `Do you work before or after patient hours?`, a: `We work before first patient (morning prep) and after last patient (closing deep clean) as standard. Between-patient service is available as an add-on during operating hours.` },
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
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Ready for Fully Compliant Medical Cleaning?</h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            OSHA certifications, EPA antimicrobials, biohazard coordination, and complete audit
            documentation. No more compliance scrambles. Free assessment, custom protocol.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button asChild variant="secondary" className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold">
              <Link href="/contact">Schedule a Compliance Assessment</Link>
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
