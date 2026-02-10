import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, ListChecks, Package } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getSpecialtyBySlug, getSpecialtySlugs } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/sections/CTA';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getSpecialtySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const specialty = await getSpecialtyBySlug(params.slug);
  if (!specialty) return {};

  return genMeta({
    title: specialty.frontmatter.title,
    description: specialty.frontmatter.summary,
    pathname: `/specialty/${params.slug}`,
  });
}

export default async function SpecialtyPage({ params }: PageProps) {
  const specialty = await getSpecialtyBySlug(params.slug);

  if (!specialty) {
    notFound();
  }

  const { frontmatter } = specialty;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
                <Badge variant="secondary">{frontmatter.category}</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 tracking-tight">
                {frontmatter.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {frontmatter.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="gradient">
                  <Link href="/get-walkthrough">
                    Request Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get Details</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center">
                <Sparkles className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Needed */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-8">
            When You Need This Service
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frontmatter.whenNeeded.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-navy-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process and Inclusions */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Process */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-navy-900">
                    Our Process
                  </h3>
                </div>
                <ol className="space-y-4">
                  {frontmatter.process.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-navy-900">
                    What's Included
                  </h3>
                </div>
                <ul className="space-y-3">
                  {frontmatter.inclusions.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
              See the Difference
            </h2>
            <p className="text-muted-foreground">
              Before and after gallery coming soon. Contact us for project examples
              and references.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Before</span>
            </div>
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">After</span>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="dark" />
    </>
  );
}
