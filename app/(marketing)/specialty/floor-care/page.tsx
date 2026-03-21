import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Eye,
  ClipboardCheck,
  MapPin,
  Factory,
  Building2,
  Store,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedFloorCareProcess } from '@/components/sections/AnimatedFloorCareProcess';

export const metadata: Metadata = {
  title: 'Floor Care',
  description:
    'Expert floor care for warehouses, manufacturing, offices, and commercial facilities. Stripping, waxing, polishing, carpet extraction. Call (855) 664-1144.',
  alternates: {
    canonical: 'https://northernfacilitiesgroup.ca/specialty/floor-care',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Northern Facilities Group - Floor Care Services',
  image: 'https://northernfacilitiesgroup.ca/images/specialty/floor-care.svg',
  '@id': 'https://northernfacilitiesgroup.ca/specialty/floor-care',
  url: 'https://northernfacilitiesgroup.ca/specialty/floor-care',
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

export default function FloorCarePage() {
  return (
    <>
      {/* Schema Markup */}
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
              Professional Floor Care and Restoration for Ontario Commercial Facilities
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4">Your floors tell the story of your operation.</p>
              <p className="mb-4">
                Worn, dull, or stained floors signal neglect. Professional, maintained floors signal
                excellence. But maintaining floors isn't simple—different floor types need different
                approaches, and most facilities don't have the expertise or equipment to do it
                right.
              </p>
              <p>
                At Northern Facilities Group, we handle all floor types: VCT, hardwood, tile,
                concrete, carpet. We maintain them, restore them, and transform them from worn to
                professional.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mb-8 text-lg md:text-xl font-medium text-navy-900/90 italic">
              "Your floors matter. We treat them that way."
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

      {/* Why Floor Care Matters */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Floor Care Actually Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Floors aren't just surfaces. They're part of your operational infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Safety</h3>
              <p className="text-muted-foreground">
                Worn, slippery, or damaged floors are liability risks. Workers slip. Damage happens.
                Professional floor maintenance prevents accidents and reduces insurance risk.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Operations</h3>
              <p className="text-muted-foreground">
                A clean, well-maintained floor improves worker morale and productivity. Employees
                appreciate professional spaces. Clients notice. Operations run better in
                professional environments.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Longevity</h3>
              <p className="text-muted-foreground">
                Floors are expensive to replace. Proper maintenance extends lifespan by years.
                Stripping and waxing VCT extends its life. Sealing concrete protects it. Maintenance
                beats replacement.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl lg:col-span-1 sm:col-span-2 lg:col-start-1">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Appearance</h3>
              <p className="text-muted-foreground">
                Your floors reflect your facility's standards. Worn floors look unprofessional.
                Maintained floors look operated. When clients or inspectors visit, your floors make
                an impression.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl lg:col-span-2 sm:col-span-2">
              <ClipboardCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Compliance</h3>
              <p className="text-muted-foreground">
                Some facilities require documented floor maintenance for safety or sanitation
                compliance. We document everything. Audits pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Services & Floor Types We Handle */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* When You Need Services */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 border-b pb-4">
                When You Need Floor Care
              </h2>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" /> Worn or Dull Hard
                    Floors
                  </h4>
                  <p className="text-muted-foreground mt-1 ml-7">
                    VCT, tile, or hardwood floors lose their shine over time. A professional
                    restoration rapidly brings it back and is highly cost-effective compared to
                    replacing flooring.
                  </p>
                </li>
                <li>
                  <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" /> Stained or
                    High-Traffic Carpets
                  </h4>
                  <p className="text-muted-foreground mt-1 ml-7">
                    Daily vacuuming doesn't reach embedded dirt. Professional extraction removes
                    deep dirt and restores appearance, significantly extending carpet life.
                  </p>
                </li>
                <li>
                  <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" /> Annual Maintenance
                    Programs
                  </h4>
                  <p className="text-muted-foreground mt-1 ml-7">
                    Many facilities schedule quarterly or annual floor maintenance. Prevents
                    deterioration and extends lifespan.
                  </p>
                </li>
                <li>
                  <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" /> After Construction or
                    Renovation
                  </h4>
                  <p className="text-muted-foreground mt-1 ml-7">
                    Construction leaves floors filthy. Professional floor care cleans dust, debris,
                    and adhesive residue to ensure move-in condition.
                  </p>
                </li>
                <li>
                  <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" /> Before Inspections or
                    Major Events
                  </h4>
                  <p className="text-muted-foreground mt-1 ml-7">
                    Pre-event floor care ensures perfection for client visits, grand openings, and
                    agency inspections.
                  </p>
                </li>
              </ul>
            </div>

            {/* Floor Types */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 border-b pb-4">
                Floor Types We Handle
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-primary text-xl mb-2">
                    VCT (Vinyl Composition Tile)
                  </h4>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Most common commercial flooring. Durable but requires maintenance. VCT lasts
                    10-15 years with proper maintenance. Maintenance beats replacement.
                  </p>
                  <p className="text-sm font-medium text-navy-900">
                    <span className="opacity-60">What we do:</span> Regular waxing, deep stripping
                    and re-waxing, sealing, stain removal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-primary text-xl mb-2">Hardwood Floors</h4>
                  <p className="text-muted-foreground mb-3 text-sm">
                    More common in offices and higher-end facilities. Expensive to replace.
                  </p>
                  <p className="text-sm font-medium text-navy-900">
                    <span className="opacity-60">What we do:</span> Professional cleaning,
                    refinishing, polyurethane application, spot restoration.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-primary text-xl mb-2">Concrete Floors</h4>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Warehouses, manufacturing, garages. Unsealed concrete stains easily and is a
                    slip hazard.
                  </p>
                  <p className="text-sm font-medium text-navy-900">
                    <span className="opacity-60">What we do:</span> Polishing, sealing, degreasing,
                    epoxy coating.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-primary text-xl mb-2">Carpet & Tile</h4>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Offices, common areas, bathrooms, kitchens. Professional grout restoration and
                    carpet extraction remove 80% more dirt than standard cleaning.
                  </p>
                  <p className="text-sm font-medium text-navy-900">
                    <span className="opacity-60">What we do:</span> Extraction, stain treatment,
                    deodorization, grout stripping/sealing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Service Steps */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-white overflow-hidden">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              Our Floor Care Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our standardized 7-step approach ensures your floors are restored effectively with
              minimal disruption to your active operations.
            </p>
          </div>
          <AnimatedFloorCareProcess />
        </div>
      </section>

      {/* What's Included & Timeline */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50 border-y border-border/50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                Floor Care Timeline
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                How long does floor care take? Most work can be scheduled outside business hours or
                phased to keep operations running.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl">
                  <span className="font-bold text-navy-900">Small office (5,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">
                    2-3 days (wax/strip) or 1 day (carpet)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl">
                  <span className="font-bold text-navy-900">Medium warehouse (20,000 sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">4-7 days total</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl">
                  <span className="font-bold text-navy-900">Large facility (50,000+ sq ft)</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">1-2 weeks (phased)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-border/50 rounded-xl">
                  <span className="font-bold text-navy-900">Concrete sealing/polishing</span>
                  <span className="text-primary font-medium mt-1 sm:mt-0">3-5 days</span>
                </div>
              </div>
            </div>

            {/* Included */}
            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
                What's Included
              </h2>

              <div className="mb-8">
                <h4 className="font-bold text-primary mb-4 text-lg">Always Included</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Floor type assessment
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Customized care plan
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> All prep & clearing
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Professional treatment
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Debris removal
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-green-500 shrink-0" /> Completion report
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-4 text-lg">Optional Add-ons</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Specialized stain
                    removal
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Extra protective
                    coatings
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Grout sealing (tile)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Epoxy coating
                    (concrete)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Fabric protection
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-navy-900/50 shrink-0" /> Recurring maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types & Areas */}
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
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Facility Types
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Factory className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-navy-900">Warehouses and Logistics</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Factory className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-navy-900">Manufacturing Plants</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Building2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-navy-900">Offices and Commercial Spaces</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Store className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-navy-900">Retail and Showrooms</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Home className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium text-navy-900">Condos and Residential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-slate-50">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-10 text-center">
            Common Questions About Floor Care
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">
                How often should we have floor care?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                VCT waxing: Quarterly or semi-annually. Carpet extraction: Annually or as needed.
                Concrete sealing: Every 2-3 years. Hardwood: As needed (1-3 years depending on
                traffic).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">
                Can you work while we're open?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We can work nights, weekends, or phase the work so areas stay operational
                during business hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">
                Will stripping damage our VCT?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                No. Professional stripping removes only the old wax layer. The VCT beneath is
                undamaged and ready for new wax.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">
                How long until we can use the floor?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                VCT: 24-48 hours before heavy use. Hardwood: 48-72 hours. Concrete: 24-48 hours
                (epoxy longer). Carpet: 24 hours. We provide specific timelines per treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">
                Is floor care worth the investment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. A quality floor lasts 10-15 years with maintenance. Without maintenance,
                replacement costs $3-5 per sq ft. Maintenance costs $0.50-1.50 per sq ft. The ROI is
                clear.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-[30px] md:py-[50px] lg:py-[80px] bg-primary mb-10 text-white text-center">
        <div className="container-wide px-5 md:px-[30px] lg:px-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready for Professional Floor Care?
          </h2>
          <p className="text-lg sm:text-2xl text-white/80 mb-10">
            Worn floors don't have to stay worn. Whether you need VCT stripping, carpet extraction,
            concrete sealing, or hardwood refinishing, we handle it seamlessly. No commitment. No
            pressure.
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
