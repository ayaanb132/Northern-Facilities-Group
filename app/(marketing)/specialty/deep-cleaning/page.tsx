import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Factory,
  Building2,
  Store,
  Home,
  Wrench,
  Calendar,
  ClipboardCheck,
  AlertTriangle,
  Star,
  Camera,
  Cog,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedDeepCleaningProcess } from '@/components/sections/AnimatedDeepCleaningProcess';

export const metadata: Metadata = {
  title: 'Deep Cleaning',
  description:
    'Expert deep cleaning for warehouses, manufacturing, offices, and commercial facilities across Ontario. Post-renovation, seasonal, and compliance-ready cleaning. Call (855) 664-1144.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/specialty/deep-cleaning',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Deep Cleaning Services',
  image: 'https://northernfacilitiesgroup.ca/images/specialty/deep-cleaning.svg',
  '@id': 'https://northernfacilitiesgroup.ca/specialty/deep-cleaning',
  url: 'https://northernfacilitiesgroup.ca/specialty/deep-cleaning',
  telephone: '+18556641144',
  email: 'info@northernfacilitiesgroup.ca',
  serviceArea: {
    '@type': 'State',
    name: 'Ontario',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
};

export default function DeepCleaningPage() {
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
                Specialty Service
              </Badge>
              <div className="flex items-center text-sm font-medium text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Fully Insured
              </div>
            </div>

            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.6] lg:leading-[1.7] font-display font-bold text-navy-900 tracking-tight mb-6">
              Professional Deep Cleaning Services for Ontario Facilities
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Your facility needs more than routine cleaning. It needs a complete reset.
              </p>
              <p className="mb-4">
                Deep cleaning reaches every corner, every surface, every overlooked area. It's the
                difference between a clean facility and a facility that's actually ready for
                anything—audits, inspections, move-ins, or major events.
              </p>
              <p>
                At Northern Facilities Group, we specialize in comprehensive deep cleaning for
                warehouses, manufacturing plants, offices, and commercial spaces across Ontario.
                When routine maintenance isn't enough, we handle it.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "We clean everywhere. Even the places you forgot about."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="tel:8556641144">
                  Call: (855) 664-1144
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-[48px] h-12 lg:h-14 w-full sm:w-auto px-6 lg:px-8 text-base lg:text-lg"
              >
                <a href="mailto:info@northernfacilitiesgroup.ca">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When You Actually Need Deep Cleaning */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-b border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              When You Actually Need Deep Cleaning
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep cleaning isn't routine. It's strategic. You need it at specific moments when your
              facility requires a complete operational reset.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <Wrench className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Post-Construction</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                After construction wraps, dust is everywhere. Equipment areas are filthy. Windows
                are hazed. We remove construction dust from every surface, clean equipment areas,
                detail every vent and fixture, and prepare your space for occupancy on schedule.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Seasonal / Annual Reset</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over a year, dust accumulates in unreached spaces. Equipment areas build up debris.
                Corners and baseboards get overlooked. Most facilities do this quarterly or annually
                to prevent operational decline and maintain compliance standards.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <ClipboardCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Before Inspections</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Inspectors look for detail. Dirty equipment areas, dusty surfaces, neglected
                corners—these raise red flags, even if your daily cleaning is fine. A pre-audit deep
                clean ensures your facility passes inspection. Every detail matters. We handle them.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <Home className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Move-In / Move-Out</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empty facilities need to be pristine before new tenants arrive. We clean
                everything—every room, every surface, every vent. Your facility makes a professional
                impression.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">After Prolonged Vacancy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Extended vacancy leaves facilities in rough shape. Dust settles everywhere.
                Equipment areas accumulate debris. Restrooms need deep sanitization. A thorough deep
                clean brings your facility back to operational standard.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:shadow-md">
              <AlertTriangle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Compliance Recovery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sometimes facilities fall behind on maintenance. Equipment areas become safety
                risks. Surfaces accumulate contamination. A deep clean resets everything and brings
                you back into compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Deep Cleaning Difference */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-b border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              The Deep Cleaning Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep cleaning isn't just "more thorough." It's a different approach entirely.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Clock className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Routine Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Handles surfaces people see daily. Floors, restrooms, common areas. It's ongoing,
                preventative, and managed by daily crews.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-navy-900 font-medium">
                  <Check className="h-5 w-5 text-green-500 shrink-0" /> Vacuuming and mopping
                </li>
                <li className="flex items-start gap-2 text-sm text-navy-900 font-medium">
                  <Check className="h-5 w-5 text-green-500 shrink-0" /> Emptying trash
                </li>
                <li className="flex items-start gap-2 text-sm text-navy-900 font-medium">
                  <Check className="h-5 w-5 text-green-500 shrink-0" /> Surface wiping
                </li>
                <li className="flex items-start gap-2 text-sm text-navy-900 font-medium">
                  <Check className="h-5 w-5 text-green-500 shrink-0" /> Spot cleaning
                </li>
              </ul>
            </div>

            <div className="bg-primary p-6 md:p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Deep Cleaning</h3>
              <p className="text-white/80 mb-6 relative z-10">
                Reaches everywhere else. High surfaces, equipment areas, hidden corners, light
                fixtures, vents, baseboards. It's comprehensive, occasional, and triggered by
                specific events.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-2 text-sm font-medium">
                  <Check className="h-5 w-5 text-white shrink-0" /> Specialized extraction systems
                </li>
                <li className="flex items-start gap-2 text-sm font-medium">
                  <Check className="h-5 w-5 text-white shrink-0" /> Trained restoration crews
                </li>
                <li className="flex items-start gap-2 text-sm font-medium">
                  <Check className="h-5 w-5 text-white shrink-0" /> Top-to-bottom systematic
                  approach
                </li>
                <li className="flex items-start gap-2 text-sm font-medium">
                  <Check className="h-5 w-5 text-white shrink-0" /> Complete photo documentation
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-navy-900 font-bold text-lg md:text-xl md:mt-12">
            That's the difference between clean and{' '}
            <span className="text-primary italic">actually clean</span>.
          </div>
        </div>
      </section>

      {/* Animated Service Steps */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              Our Deep Cleaning Process
            </h2>
          </div>
          <AnimatedDeepCleaningProcess />
        </div>
      </section>

      {/* What Construction Leaves Behind — dark section for visual weight */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white border-y border-border/50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Why Choose Northern Facilities Group?
            </h2>
            <p className="text-lg text-white/70">
              Deep cleaning is different from daily maintenance. Not all cleaning companies do this
              well. We do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <Cog className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Specialized Equipment</h4>
              <p className="text-sm text-white/70">
                Professional-grade carpet extraction, floor restoration systems, pressure washing
                equipment, and access equipment for high surfaces. The right tools for the job.
              </p>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <Camera className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">We Document Everything</h4>
              <p className="text-sm text-white/70">
                Before, during, and after photos. Completion reports. You have proof of what was
                done and the transformation that happened. No guesswork.
              </p>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <Users className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">We Understand Operations</h4>
              <p className="text-sm text-white/70">
                We coordinate around your business. If you're open, we work nights and weekends. If
                you're construction-based, we work within your project timeline. We're partners, not
                obstacles.
              </p>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <ShieldCheck className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Fully Insured — $2M Coverage</h4>
              <p className="text-sm text-white/70">
                Your facility is protected. Any issues are covered. You can trust us with your
                space. Quality is non-negotiable.
              </p>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <Star className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">We Guarantee Quality</h4>
              <p className="text-sm text-white/70">
                If something isn't right, we fix it. No arguments. No excuses. Quality is
                non-negotiable on every deep cleaning project we take on.
              </p>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <ClipboardCheck className="h-9 w-9 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Specializing in Restoration</h4>
              <p className="text-sm text-white/70">
                Deep cleaning is comprehensive restoration. We have the crew training and process
                discipline to ensure nothing gets missed. Not all companies can say that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-b border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Deep Cleaning Timeline
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                How long does deep cleaning take? It depends on facility size and condition, but
                here's what to expect:
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Small office (5,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">2-3 days</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Medium warehouse (20,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">4-7 days</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Large facility (50,000+ sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">1-2 weeks</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Post-construction facility</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">Typically 3-7 days</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Seasonal deep clean</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">3-5 days</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground italic">
                We can often schedule work outside business hours to minimize disruption, or work
                nights/weekends to keep your operations running.
              </p>
            </div>

            {/* Included */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                What's Included
              </h2>

              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> High dusting
                    (ceilings/vents)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Light fixture cleaning
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Baseboard & trim detail
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Interior window & glass
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Deep carpet extraction
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Appliance interior
                    cleaning
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Grout & tile restoration
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Facility assessment &
                    scope
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-500 mb-4 text-lg">
                  Optional Add-Ons (Discussed During Assessment)
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Exterior pressure
                    washing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Equipment area
                    degreasing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Concrete
                    sealing/polishing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Hardwood restoration
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Paint touch-ups
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> HVAC vent & duct
                    cleaning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types & Service Areas */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Service Areas Across Ontario
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-navy-900">Greater Toronto Area</h4>
                    <p className="text-muted-foreground">
                      Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville,
                      Burlington
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-navy-900">Southwest Ontario</h4>
                    <p className="text-muted-foreground">
                      Hamilton, London, Kitchener, Waterloo, Guelph
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-navy-900">Central Ontario</h4>
                    <p className="text-muted-foreground">
                      Barrie, Newmarket, Durham Region (Oshawa, Pickering, Ajax, Whitby)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-lg text-navy-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> We're Fully Insured
                </h4>
                <p className="text-sm text-muted-foreground">
                  $2M liability coverage. Your facility is protected. Any issues are covered. You
                  can trust us with your space.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Deep Cleaning for Specific Facilities
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">
                      Warehouses & Manufacturing
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Post-construction cleanup so your facility is move-in ready. Safety compliance
                    reset. Equipment areas deep cleaned safely. Floor restoration for safe
                    operations.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">Commercial Offices</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Before major client events or office move-ins. Annual deep clean to reset common
                    areas. Carpet and floor restoration. All surfaces detailed and polished.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Store className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">Retail Spaces</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Before store opening or major renovations. Complete facility reset for grand
                    openings with professional appearance guaranteed.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">Residential & Condos</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Move-in/out preparation, annual community cleaning, tenant turnover, and common
                    area restoration frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">
            Common Questions About Deep Cleaning
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">
                How often should we do deep cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                For most facilities: Annually or semi-annually. Post-construction projects: Once
                after completion. Before audits/inspections: As needed. Talk to us about your
                specific facility's needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">
                Can you work around our operations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We schedule deep cleaning during downtime, nights, weekends, or gradual phases
                if needed. We coordinate with your operations team so you're never completely shut
                down.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">
                Will deep cleaning damage our equipment or facility?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No. We use facility-safe methods. All equipment is protected. We're careful around
                machinery, electronics, and finishes. Your facility is our responsibility.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">
                What if we find damage during deep cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We report it. You decide how to handle it. We can often address minor issues during
                the clean, but major issues are documented and reported to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">
                Can deep cleaning remove all stains?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Most stains, yes. Some set-in stains on carpet or hardwood may not be 100% removable
                without replacement. We'll assess and be honest about what's possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold text-lg">
                Do you provide before and after documentation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. Every deep cleaning includes photos and a completion report. You have proof of
                what was done.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-bold text-lg">
                Is deep cleaning the same as regular cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No. Deep cleaning is comprehensive restoration. Regular/daily cleaning maintains
                surfaces. Both are important. Deep cleaning resets everything.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-bold text-lg">
                How do we schedule deep cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Call (855) 664-1144 or email info@northernfacilitiesgroup.ca. We assess your
                facility, provide a detailed quote, and schedule based on your timeline.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready for a Facility Reset?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Deep cleaning transforms your facility. Every corner clean. Every surface restored.
            Every detail perfect. We handle it all so you can focus on operations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              asChild
              variant="secondary"
              className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold"
            >
              <Link href="/contact">Schedule Free Assessment</Link>
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
