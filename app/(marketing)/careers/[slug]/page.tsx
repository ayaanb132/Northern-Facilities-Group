import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Briefcase, Mail } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTA } from '@/components/sections/CTA';
import { getJobBySlug, jobs, CAREERS_EMAIL } from '@/lib/careers';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return genMeta({
    title: job.title,
    description: job.shortDescription,
    pathname: `/careers/${slug}`,
  });
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <nav className="container-wide pt-24 pb-2" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/careers" className="hover:text-foreground transition-colors">
              Careers
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">{job.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="container-wide">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {job.employmentType}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 tracking-tight">
              {job.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {job.compensation}
              </span>
            </div>
            <p className="mt-6 text-lg text-foreground/80">
              {job.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl space-y-12">
            {job.responsibilities.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  What You&apos;ll Do
                </h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  What We&apos;re Looking For
                </h2>
                <ul className="space-y-2">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.notRequired && job.notRequired.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  What You DON&apos;T Need
                </h2>
                <ul className="space-y-2">
                  {job.notRequired.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-muted-foreground mt-1">×</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.compensationDetails && job.compensationDetails.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  Compensation & Benefits
                </h2>
                <ul className="space-y-2">
                  {job.compensationDetails.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.successMetrics && job.successMetrics.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  Success Metrics
                </h2>
                <div className="space-y-4">
                  {job.successMetrics.map((metric, i) => (
                    <div key={i}>
                      <h3 className="font-medium text-foreground/90 mb-2">{metric.period}:</h3>
                      <ul className="space-y-1 pl-4">
                        {metric.items.map((item, j) => (
                          <li key={j} className="text-foreground/85">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {job.whyJoin && job.whyJoin.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  Why Join Us
                </h2>
                <ul className="space-y-2">
                  {job.whyJoin.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.tools && job.tools.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold text-navy-900 mb-4">
                  Tools You&apos;ll Use
                </h2>
                <p className="text-foreground/85">{job.tools.join(' • ')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center rounded-2xl border bg-white p-10 shadow-soft">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-foreground/70 mb-6">
              Send your resume and a short note (2-3 sentences) about why you want this role.
              We review applications on a rolling basis.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href={`mailto:${CAREERS_EMAIL}?subject=Application: ${job.title}`}>
                <Mail className="mr-2 h-4 w-4" />
                Apply via Email
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              {CAREERS_EMAIL}
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
