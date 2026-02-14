import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { testimonials } from '@/lib/testimonials';

export const metadata: Metadata = genMeta({
  title: 'Proof',
  description:
    'Real testimonials and reviews from clients who trust Northern Facilities Group. See what property managers and facility owners say about our cleaning and facility management services.',
  pathname: '/proof',
});

export default function ProofPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              What Our Clients Say
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Testimonials
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real feedback from property managers, facility owners, and clients
              across the GTA. See why they trust NFG for cleaning and facility
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
            Want to see detailed results?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our case studies to see how we&apos;ve helped clients achieve
            measurable improvements in their facilities.
          </p>
          <Button asChild>
            <Link href="/case-studies">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTA />
    </>
  );
}
