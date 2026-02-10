import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getAllSpecialties } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = genMeta({
  title: 'Specialty Services',
  description:
    'Specialized cleaning services including deep cleaning, floor care, post-construction cleanup, and window cleaning.',
  pathname: '/specialty',
});

export default async function SpecialtyPage() {
  const specialties = await getAllSpecialties();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Beyond Routine Cleaning
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Specialty Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sometimes your facility needs more than routine maintenance. Our
              specialty services address specific challenges with focused expertise
              and specialized equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {specialties.map((specialty) => (
              <Link
                key={specialty.slug}
                href={`/specialty/${specialty.slug}`}
                className="group block"
              >
                <article className="h-full rounded-2xl border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {specialty.category}
                  </Badge>
                  <h2 className="text-xl font-semibold text-navy-900 mb-3">
                    {specialty.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {specialty.summary}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      When you need it:
                    </h4>
                    <ul className="space-y-1">
                      {specialty.whenNeeded.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="text-xs text-slate-600 flex items-center"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-8">
              Don't see what you're looking for? We handle a wide variety of
              specialty cleaning requests. Contact us to discuss your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Contact Us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
