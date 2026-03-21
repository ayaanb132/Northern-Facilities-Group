import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Clock,
  MapPin,
  Factory,
  Building2,
  Store,
  Home,
  Wrench,
  AlertTriangle,
  HardHat,
  Hammer,
  Wind,
  ShieldCheck,
  Paintbrush,
  Sparkles,
  ClipboardCheck,
  Monitor,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedPostConstructionProcess } from '@/components/sections/AnimatedPostConstructionProcess';

export const metadata: Metadata = {
  title: 'Post-Construction Cleaning',
  description:
    'Expert post-construction cleanup for new builds, renovations, and buildouts across Ontario. Move-in ready within days. Call (855) 664-1144.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/specialty/post-construction',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Post-Construction Cleaning Services',
  image: 'https://northernfacilitiesgroup.ca/images/specialty/post-con.svg',
  '@id': 'https://northernfacilitiesgroup.ca/specialty/post-construction',
  url: 'https://northernfacilitiesgroup.ca/specialty/post-construction',
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

export default function PostConstructionPage() {
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
              Professional Post-Construction Cleaning for Ontario Projects
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">
                Construction projects create mess. Dust, debris, adhesive residue, stained surfaces,
                hazed windows.
              </p>
              <p className="mb-4">
                Your new facility should be move-in ready immediately. Instead, it needs a complete
                cleanup before anyone can occupy it. That's post-construction cleaning.
              </p>
              <p>
                At Northern Facilities Group, we specialize in transforming construction sites into
                move-in-ready facilities. We handle the cleanup so you can focus on operations.
                Fast, thorough, professional.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "Construction ends. We make it move-in ready."
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

      {/* The Post-Construction Challenge */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-b border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              The Post-Construction Challenge
            </h2>
            <p className="text-lg text-muted-foreground">
              Construction creates three specific problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl relative overflow-hidden transition hover:shadow-md">
              <Wrench className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Problem 1: Bulk Debris</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Drywall dust. Packaging material. Concrete residue. Scraps. Leftover materials. The
                site is literally buried in debris. This needs to be removed before detailed
                cleaning can happen. It's labor-intensive and time-consuming.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl relative overflow-hidden transition hover:shadow-md">
              <Wind className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Problem 2: Dust Everywhere</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Construction dust is relentless. It settles on every surface—ceilings, walls,
                fixtures, equipment. Normal vacuuming doesn't reach it. Dust stays suspended and
                settles during operations, creating a perpetual mess.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl relative overflow-hidden transition hover:shadow-md">
              <Paintbrush className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Problem 3: Contamination</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Paint splatters. Adhesive residue. Concrete residue on floors. Protective film on
                glass. Stains on surfaces. Construction leaves contamination that regular cleaning
                simply can't handle or resolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Post-Construction Cleaning */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-b border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              When You Need Post-Construction Cleaning
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">New Construction Completion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building is complete but not cleaned. Before tenants move in or operations begin,
                complete cleanup is required.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Major Renovation Projects</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Large renovations leave the same mess as new construction. Dust, debris, and residue
                everywhere. The space needs complete cleanup before it's usable.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Tenant Improvements</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Office or retail buildouts create construction mess inside occupied buildings. The
                buildout needs to be cleaned without affecting surrounding operations.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Office Buildouts</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                New office spaces need complete post-construction cleanup. Cubicles, furniture, and
                equipment need clean surfaces and dust-free environments before operations.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Equipment Installations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When new equipment is installed, construction debris and dust accompanies it. The
                installation area needs cleanup.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Timing-Critical Projects</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When you have a move-in date and can't delay, post-construction cleaning must happen
                fast. We understand the timeline and execute accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Post-Construction Cleaning is Critical */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Post-Construction Cleaning is Critical
            </h2>
            <p className="text-lg text-muted-foreground">
              Post-construction cleaning isn't optional. It's essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="flex gap-4">
              <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Move-In Readiness</h4>
                <p className="text-muted-foreground text-sm">
                  You can't move occupants or equipment into a dusty, debris-filled facility.
                  Post-construction cleaning makes the space actually usable.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Safety Compliance</h4>
                <p className="text-muted-foreground text-sm">
                  Construction leaves safety hazards. Scattered debris, slippery surfaces, hazardous
                  materials. Proper cleanup removes hazards and prepares for safe operations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Monitor className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Equipment Protection</h4>
                <p className="text-muted-foreground text-sm">
                  If you're installing expensive equipment, it needs a clean environment. Dust
                  damages electronics and machinery. Post-construction cleanup protects your
                  investment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wind className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Health and Sanitation</h4>
                <p className="text-muted-foreground text-sm">
                  Construction dust is a health hazard. Respiratory risk, allergies, contamination.
                  Complete cleanup ensures a safe, healthy environment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Sparkles className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Professional Image</h4>
                <p className="text-muted-foreground text-sm">
                  New facilities should look pristine. Dust, debris, and residue damage the
                  impression you make on clients, employees, and inspectors.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ClipboardCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-navy-900 mb-1">Punch List Completion</h4>
                <p className="text-muted-foreground text-sm">
                  Contractors have punch lists—final items to complete before handoff. They don't
                  handle post-construction cleaning. You need a professional cleaning company to
                  finish what construction left incomplete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Construction Leaves Behind */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-navy-900 text-white border-y border-border/50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              What Construction Leaves Behind
            </h2>
            <p className="text-lg text-white/70">
              Understanding everything that post-construction cleaning needs to systematically
              address.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Hammer className="h-5 w-5 text-primary" /> Bulk Debris
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Drywall
                  scraps and dust
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Packaging
                  material
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Concrete
                  residue and chunks
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Tile
                  pieces and grout
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Localized
                  wood scraps
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" /> Dust and Particles
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Drywall
                  dust
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Concrete
                  dust
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Insulation
                  particles
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Paint
                  overspray particles
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Dust on
                  every high surface
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Paintbrush className="h-5 w-5 text-primary" /> Contaminations
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Paint
                  splatters and drips
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Adhesive
                  wall residue
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Concrete
                  residue on floors
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Dried
                  caulk and sealants
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Tar, oil,
                  and grease spots
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-2xl hover:bg-navy-800/80 transition">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" /> Glass & Fixtures
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Hazed
                  windows and frames
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Adhesive
                  residue on glass
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Protective
                  cover films
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Dirty
                  window tracks
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{' '}
                  Contamination on light bulbs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Service Steps */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              Our Post-Construction Cleaning Process
            </h2>
          </div>
          <AnimatedPostConstructionProcess />
        </div>
      </section>

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Post-Construction Timeline
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                How fast can we clean your facility after construction wraps? We schedule
                expediently:
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Small project (5,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">3-5 days</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Medium project (20,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">5-10 days</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Large project (50,000+ sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">2-4 weeks</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-sm transition">
                  <span className="font-bold text-navy-900">Rapid turnaround projects</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0 text-sm">
                    Expedited scheduling available
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground italic">
                We can work around-the-clock if your moving timeline is critical and cannot be
                delayed.
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
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Bulk debris removal
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> High-to-low detailed
                    dusting
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Surface cleaning & residue
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Window & interior glass
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Final detail work
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Debris disposal
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Documentation report
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-4 text-lg text-slate-500">
                  Optional Add-Ons (Discussed During Assessment)
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Exterior pressure
                    washing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Equipment area cleanup
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Post-cleaning floor
                    treatment
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Air quality
                    certification
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="h-5 w-5 text-slate-300 shrink-0" /> Extended punch list
                    support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types & Areas */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
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
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Cleaning Specific Project Types
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <HardHat className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">
                      New Building Construction
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete facility cleanup. Every surface dust-free. Systems ready for operation.
                    Move-in ready immediately.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Hammer className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">Major Renovations</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Renovation dust is as bad as new construction. We treat it with the exact same
                    rigor.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-bold text-lg text-navy-900">
                      Tenant Improvements & Offices
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Buildouts in occupied buildings. We contain dust to prevent it spreading. Office
                    workstations must be perfectly dust-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">
            Common Questions About Post-Construction Cleaning
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">
                When should we schedule post-construction cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                As soon as construction is substantially complete. Not before—contractors will still
                be working. Schedule for final days of construction or immediately after substantial
                completion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">
                How do we coordinate with the contractor?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We work with your contractor's schedule. We start after construction's rough work is
                complete. We can work around remaining punch list items.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">
                Can you clean while contractors are still working?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We can do some work (rough debris removal) while contractors finish, but detailed
                cleaning happens after construction is substantially complete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">
                How long before move-in after we're done?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Same day or next day, depending on your move-in timeline. The facility is move-in
                ready when we finish.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">
                What if we have equipment installation during post-cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We coordinate. Equipment arrives post-construction cleanup. We ensure the space is
                dust-free for sensitive installations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold text-lg">
                Do you provide air quality testing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We can. Post-construction dust and particles affect air quality. Professional
                testing ensures the space is safe before occupancy. We can arrange this.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready for Post-Construction Cleanup?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Construction should not delay your move-in. Professional cleaning transforms a raw site
            into a move-in-ready facility. Fast, thorough, professional.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button
              asChild
              variant="secondary"
              className="min-h-[48px] h-12 lg:h-14 w-full text-base lg:text-lg font-bold"
            >
              <Link href="/contact">Schedule Site Assessment</Link>
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
