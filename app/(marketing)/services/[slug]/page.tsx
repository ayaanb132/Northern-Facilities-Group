import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  Home,
  Key,
  Check,
  ArrowRight,
  Clock,
  FileText,
  Shield,
} from 'lucide-react';
import { generateMetadata as genMeta, generateServiceSchema } from '@/lib/seo';
import { getServiceBySlug, getServiceSlugs } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CTA } from '@/components/sections/CTA';
import { siteConfig } from '@/lib/site';

const icons: Record<string, React.ElementType> = {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  Home,
  Key,
};

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  if (!service) return {};

  return genMeta({
    title: service.frontmatter.title,
    description: service.frontmatter.summary,
    pathname: `/services/${params.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const { frontmatter } = service;
  const Icon = icons[frontmatter.icon] || Building2;
  const jsonLd = generateServiceSchema({
    name: frontmatter.title,
    description: frontmatter.summary,
    url: `/services/${params.slug}`,
    serviceType: frontmatter.category,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 gradient-bg">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="h-6 w-6" />
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
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full min-w-0">
              {frontmatter.image ? (
                <div className="aspect-[4/3] lg:aspect-video relative rounded-2xl overflow-hidden w-full mx-auto lg:mx-0 bg-secondary/30 isolate">
                  <div className="service-hero-image-wrap absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={frontmatter.image}
                      alt={frontmatter.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div
                    className="service-hero-image-blend absolute inset-0 rounded-2xl"
                    aria-hidden
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <Icon className="h-24 w-24 text-primary/30" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-8">
            What You Can Expect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frontmatter.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-navy-900">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope and Protocols */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Scope */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-navy-900">
                    Service Scope
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Areas and spaces covered by this service:
                </p>
                <ul className="space-y-2">
                  {frontmatter.scope.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Protocols */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-navy-900">
                    Cleaning Protocols
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized procedures and standards we follow:
                </p>
                <ul className="space-y-2">
                  {frontmatter.protocols.map((item) => (
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

      {/* Frequency and Reporting */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Frequency */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-navy-900">
                  Service Frequency Options
                </h3>
              </div>
              <div className="space-y-3">
                {frontmatter.frequencyOptions.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-white"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{option}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reporting */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-navy-900">
                  Reporting & Documentation
                </h3>
              </div>
              <div className="space-y-3">
                {frontmatter.reporting.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-white"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tiers */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
            Recommended Service Tiers
          </h2>
          <p className="text-muted-foreground mb-8">
            Based on the requirements of {frontmatter.title.toLowerCase()}, we
            recommend these service levels:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.tiers.map((tier) => {
              const isRecommended = frontmatter.tiersRecommended.includes(tier.id);
              return (
                <Card
                  key={tier.id}
                  className={isRecommended ? 'ring-2 ring-primary' : 'opacity-60'}
                >
                  <CardContent className="pt-6">
                    {isRecommended && (
                      <Badge className="mb-2">Recommended</Badge>
                    )}
                    <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tier.description}
                    </p>
                    <Button
                      asChild
                      variant={isRecommended ? 'default' : 'outline'}
                      className="w-full"
                    >
                      <Link href="/get-walkthrough">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {frontmatter.faqs && frontmatter.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible>
                {frontmatter.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-navy-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      <CTA variant="dark" />
    </>
  );
}
