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
  Key,
  ArrowRight,
} from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getAllServices } from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { CTA } from '@/components/sections/CTA';

const icons: Record<string, React.ElementType> = {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  Key,
};

export const metadata: Metadata = genMeta({
  title: 'Services',
  description:
    'Specialized commercial cleaning services for residential, condos, medical practices, restaurants, warehouses, retail stores, and offices across Canada.',
  pathname: '/services',
});

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Industry-Specific Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              Services Built for Your Industry
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every property type has unique cleaning requirements. Our specialized teams
              are trained in industry-specific protocols to deliver the results your
              facility demands.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon] || Building2;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {service.category}
                    </Badge>
                    <h2 className="text-xl font-semibold text-navy-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.outcomes.slice(0, 3).map((outcome) => (
                        <span
                          key={outcome}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                        >
                          {outcome.length > 30 ? outcome.slice(0, 30) + '...' : outcome}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                      View Service Details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-navy-900">
              Why Choose Specialized Cleaning?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Generic cleaning services can't meet the unique demands of your industry.
              Our specialized approach delivers better results.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Trained Teams',
                description:
                  'Staff trained specifically for your property type, understanding the unique challenges and standards of your industry.',
              },
              {
                title: 'Custom Protocols',
                description:
                  'Cleaning procedures designed around regulatory requirements, best practices, and the specific needs of your facility.',
              },
              {
                title: 'Proper Equipment',
                description:
                  'Commercial-grade equipment and industry-appropriate products for effective, safe cleaning in any environment.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
