import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Badge } from '@/components/ui/badge';
import { CTA } from '@/components/sections/CTA';
import { jobs } from '@/lib/careers';

export const metadata: Metadata = genMeta({
  title: 'Careers',
  description:
    'Join Northern Facilities Group. We\'re hiring Business Development Reps, Intake Specialists, Operations Coordinators, and more. Grow with us in the GTA.',
  pathname: '/careers',
});

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              We&apos;re Hiring
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Careers at NFG
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re a rapidly growing facilities management company serving the GTA.
              Join us and grow with a team that moves fast, owns results, and builds trust.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-2">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group block"
              >
                <article className="h-full rounded-2xl border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-primary/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-3">
                        {job.employmentType}
                      </Badge>
                      <h2 className="text-xl font-semibold text-navy-900 group-hover:text-primary transition-colors">
                        {job.title}
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location.split('|')[0].trim()}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          {job.compensation}
                        </span>
                      </div>
                      <p className="mt-4 text-[15px] text-foreground/70 line-clamp-2">
                        {job.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join / Culture */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
              Our Values
            </h2>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>Move Fast.</strong> Make decisions, test, adjust.</li>
              <li><strong>Own Your Results.</strong> Hit targets. Own your mistakes.</li>
              <li><strong>Solve Problems.</strong> Things break. Fix them.</li>
              <li><strong>Respect Your Team.</strong> Treat people like you want to be treated.</li>
              <li><strong>Build Trust.</strong> Do what you say. Communicate clearly.</li>
            </ul>
            <p className="mt-6 text-foreground/70">
              We&apos;re not looking for people who need to be told what to do.
              We&apos;re looking for people who take ownership, move fast, and grow with us.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
