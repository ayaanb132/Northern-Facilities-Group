import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Factory,
  Home,
} from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CTA } from '@/components/sections/CTA';
import { AnimatedServiceSteps } from '@/components/sections/AnimatedServiceSteps';

export const metadata: Metadata = genMeta({
  title: 'Window Cleaning',
  description:
    'Expert window cleaning for homes, apartments, and commercial facilities across Ontario. Fully insured, professional service. Call (855) 664-1144.',
  pathname: '/specialty/window-cleaning',
});

export default function WindowCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Northern Facilities Group Inc.',
            telephone: '(855) 664-1144',
            email: 'info@northernfacilitiesgroup.ca',
            areaServed: 'Ontario, Canada',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '30 Eglinton Ave W',
              addressLocality: 'Mississauga',
              addressRegion: 'ON',
              addressCountry: 'CA',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] -z-10" />
        <div className="container-wide">
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight leading-[1.1] mb-6">
              Professional Window Cleaning Services for Ontario Homes & Businesses
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Clean windows transform how your space looks and feels. Whether you're managing a
              residential property, apartment building, or large commercial facility, professional
              window cleaning improves curb appeal, safety, and natural light.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 mb-10 text-lg font-medium text-navy-900/90 italic">
              "At Northern Facilities Group, we clean windows for both residential and commercial
              properties across Ontario. From single-family homes to 100,000+ sq ft warehouses, we
              handle it all with the same professional standard using industry-leading equipment. We
              clean windows. We do it right. Every time."
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg">
                <a href="tel:8556641144">
                  Call: (855) 664-1144
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg">
                <a href="mailto:info@northernfacilitiesgroup.ca">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section: Residential vs Commercial */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Residential */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-border/50">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Home className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">
                Residential Window Cleaning
              </h2>
              <p className="text-primary font-medium mb-6">For Homeowners & Property Managers</p>

              <p className="text-muted-foreground mb-8">
                Clean windows enhance your home's appearance and let natural light flood in.
                Professional window cleaning saves you time and eliminates the safety risks of DIY
                ladder work.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-navy-900 mb-4 text-lg">What we clean:</h3>
                  <ul className="space-y-3">
                    {[
                      'Interior and exterior windows',
                      'Frames and sills',
                      'Skylights and glass doors',
                      'Hard-to-reach windows',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-navy-900 mb-4 text-lg">Why hire a professional:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900">Safety:</strong>{' '}
                        <span className="text-muted-foreground">No ladder accidents or falls</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900">Quality:</strong>{' '}
                        <span className="text-muted-foreground">
                          Professional-grade results you can't achieve alone
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900">Time:</strong>{' '}
                        <span className="text-muted-foreground">
                          We do it in hours, not weekends
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-navy-900 rounded-3xl p-8 lg:p-12 shadow-lg text-white">
              <div className="h-14 w-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                <Factory className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-3">
                Commercial Window Cleaning
              </h2>
              <p className="text-blue-300 font-medium mb-6">
                For Warehouses, Manufacturing Plants & Office Buildings
              </p>

              <p className="text-slate-300 mb-8">
                When you run a commercial facility, clean windows aren't just about looks—they
                impact safety, employee satisfaction, and professional image.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-white mb-4 text-lg">What we clean:</h3>
                  <ul className="space-y-3">
                    {[
                      'Large warehouse windows',
                      'Manufacturing plant glass',
                      'Office building windows',
                      'Multi-story facilities (rope access available)',
                      'Skylights and high-access windows',
                      'Glass doors and storefronts',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="font-bold text-white mb-4 text-lg">Why hire a professional:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Safety:</strong>{' '}
                        <span className="text-slate-300">Fully insured, WHMIS compliant</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Reliability:</strong>{' '}
                        <span className="text-slate-300">Scheduled service, zero disruption</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Consistency:</strong>{' '}
                        <span className="text-slate-300">Same crew, same standards</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Equipment */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
                Why Choose Northern Facilities Group?
              </h2>
              <p className="text-lg text-primary font-medium mb-8">
                For Both Residential & Commercial
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Fully Insured', desc: 'Complete coverage for your protection' },
                  {
                    title: 'Professional Quality',
                    desc: 'Streak-free, spotless results every time',
                  },
                  { title: 'Safety First', desc: 'No ladder accidents, WHMIS compliant' },
                  { title: 'Reliability', desc: 'On-time service, professional crew' },
                  {
                    title: 'Flexible Scheduling',
                    desc: 'Early morning, evening, or weekend service',
                  },
                  { title: 'Transparent Service', desc: 'Clear scope, no surprises' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-900">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-primary/5 rounded-3xl transform rotate-3 scale-105 -z-10" />
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-4">
                  Our Professional Equipment
                </h2>
                <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
                  <p>
                    We use Tucker® water-fed systems—the #1 brand for professional window cleaning
                    since 1957. Tucker equipment reaches 60-70 feet on standard pressure, handles
                    high water production, and comes with a 10-year warranty. All systems are built
                    in North America with industrial-grade materials and components.
                  </p>
                  <p>
                    Our crew uses Tucker® H2Pro 3-Stage water systems with dual-mode operation
                    (RO/DI), professional water-fed poles with industry-leading Dual Trim brushes,
                    and complete filtration systems for spotless, streak-free results on every job.
                  </p>
                  <p className="font-bold text-navy-900 text-lg border-l-4 border-primary pl-4 py-1">
                    Why Tucker? Because professional equipment delivers professional results. It's
                    that simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Service Steps */}
      <section className="py-24 bg-slate-50 border-y border-border/50 overflow-hidden">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
              Service Breakdown: From Contact to Final Payment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our transparent, step-by-step process ensures a smooth and professional experience
              from the first phone call to the final invoice.
            </p>
          </div>

          <AnimatedServiceSteps />
        </div>
      </section>

      {/* Areas, Payments & FAQs */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6 border-b pb-4">
                  Service Areas Across Ontario
                </h2>
                <p className="text-muted-foreground mb-4">
                  We service residential and commercial properties throughout Ontario:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-navy-900">Greater Toronto Area:</strong> Toronto,
                    Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington
                  </li>
                  <li>
                    <strong className="text-navy-900">Southwest Ontario:</strong> Hamilton, London,
                    Kitchener, Waterloo, Guelph
                  </li>
                  <li>
                    <strong className="text-navy-900">Central Ontario:</strong> Barrie, Newmarket,
                    Durham Region (Oshawa, Pickering, Ajax, Whitby)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6 border-b pb-4">
                  Payment Options
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                      'Credit card (Visa, Mastercard, Amex)',
                      'Debit card',
                      'Check',
                      'Bank transfer (ACH)',
                      'Auto-pay (recurring)',
                    ].map((opt) => (
                      <li key={opt} className="flex items-center text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mr-2" /> {opt}
                      </li>
                    ))}
                  </ul>
                  <p className="font-medium text-navy-900 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    No hidden fees. No surprises. Transparent pricing.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 border-b pb-4">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How often should windows be cleaned?',
                    a: 'Residential: 1-2 times per year (spring and fall) for most homes. More often if near trees, water, or high traffic areas.\nCommercial: Regular cleaning keeps your facility looking professional and maintains safety visibility.',
                  },
                  {
                    q: 'Do you handle high windows and skylights?',
                    a: 'Yes. For residential (second-story windows, skylights) and commercial (multi-story, rope access work)—all fully insured.',
                  },
                  {
                    q: 'Can you clean during business hours?',
                    a: 'Yes. For commercial clients, we coordinate around your operations schedule.',
                  },
                  {
                    q: 'Do you remove hard water stains?',
                    a: 'Yes. We use professional-grade water-fed systems and solutions for stubborn stains and buildup.',
                  },
                  {
                    q: 'Are you insured?',
                    a: 'Fully insured with liability coverage. We protect you and your property.',
                  },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white border rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-navy-900">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-muted-foreground whitespace-pre-line border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 bg-primary mb-10 text-white text-center">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            Ready for Clean Windows?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Whether you're a homeowner wanting crystal-clear windows or a facility manager needing
            reliable service, we're here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg text-primary hover:text-primary"
            >
              <a href="tel:8556641144">
                Call: (855) 664-1144
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <a href="mailto:info@northernfacilitiesgroup.ca">
                Email info@northernfacilitiesgroup.ca
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">
            Hours: Monday-Friday, 9 AM - 6 PM | Ready When It Matters.
          </p>
        </div>
      </section>
    </>
  );
}
