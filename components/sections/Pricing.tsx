'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PricingProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  className?: string;
}

export function Pricing({
  title = 'Transparent Pricing',
  subtitle = 'Your quote is based on your space and service needs.',
  showCta = true,
  className,
}: PricingProps) {
  return (
    <section className={cn('section-padding bg-slate-50', className)}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-[19px] text-[hsl(var(--foreground))]/70">{subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Scope & surfaces',
              items: [
                'Square footage',
                'Room count',
                'Floor type and finishes',
                'Specialty areas (kitchens, washrooms, medical)',
              ],
            },
            {
              title: 'Schedule & traffic',
              items: [
                'Service frequency',
                'Operating hours',
                'High-traffic zones',
                'Seasonality and events',
              ],
            },
            {
              title: 'Reporting & compliance',
              items: [
                'Checklists and photo documentation',
                'QA inspections',
                'Issue reporting',
                'Any compliance requirements',
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-3xl border bg-white p-8 border-[hsl(var(--foreground))]/[0.06]"
            >
              <div className="mb-6">
                <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] text-[hsl(var(--foreground))]/65">
                  Custom to your building—not a one-size-fits-all plan.
                </p>
              </div>
              <ul className="space-y-3.5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    <span className="text-[15px] text-[hsl(var(--foreground))]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What Affects Pricing */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] mb-4 tracking-tight">
              What affects your quote?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-[15px] text-[hsl(var(--foreground))]/65">
              <span className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Square footage
              </span>
              <span className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Service frequency
              </span>
              <span className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Property type
              </span>
              <span className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Special requirements
              </span>
              <span className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Location
              </span>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/get-walkthrough">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
