import { Metadata } from 'next';
import Link from 'next/link';
import {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getAllCaseStudies } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/sections/CTA';

const icons: Record<string, React.ElementType> = {
  residential: Home,
  condo: Building2,
  medical: Stethoscope,
  restaurant: UtensilsCrossed,
  warehouse: Warehouse,
  retail: Store,
  office: Briefcase,
};

export const metadata: Metadata = genMeta({
  title: 'Case Studies',
  description:
    'Case studies and success stories from properties we manage. See how NFG delivers consistent cleaning and facility management for offices, construction sites, and more.',
  pathname: '/case-studies',
});

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Client Success Stories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real results from real properties. Explore how we&apos;ve helped facility
              managers and property owners transform their operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-8">
            All Case Studies
          </h2>

          {caseStudies.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-2">
              {caseStudies.map((study) => {
                const Icon = icons[study.propertyType] || Building2;
                return (
                  <Card key={study.slug} className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline">{study.client}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {study.summary}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                          Key Results
                        </h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 3).map((result) => (
                            <li key={result} className="text-sm flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {study.testimonial && study.testimonialApproved === true && (
                        <div className="bg-slate-50 rounded-lg p-4 mb-4">
                          <Quote className="h-4 w-4 text-primary mb-2" />
                          <p className="text-sm italic text-slate-700">
                            &ldquo;{study.testimonial.quote}&rdquo;
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            — {study.testimonial.author}
                            {study.testimonial.role && `, ${study.testimonial.role}`}
                          </p>
                        </div>
                      )}
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/case-studies/${study.slug}`}>
                          Read Full Case Study
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl">
              <p className="text-muted-foreground mb-4">
                Case studies coming soon. Contact us for references.
              </p>
              <Button asChild>
                <Link href="/contact">Request References</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
