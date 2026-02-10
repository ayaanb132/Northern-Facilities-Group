'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

interface PricingProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  className?: string;
}

export function Pricing({
  title = 'Service Tiers',
  subtitle = 'Flexible plans designed for properties of all sizes',
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

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'relative rounded-3xl border bg-white p-8 border-[hsl(var(--foreground))]/[0.06]',
                tier.popular && 'border-[hsl(var(--primary))]/30 ring-1 ring-[hsl(var(--primary))]/20'
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-2 text-[15px] text-[hsl(var(--foreground))]/65">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-[28px] font-semibold text-[hsl(var(--foreground))]">Custom</span>
                <span className="text-[15px] text-[hsl(var(--foreground))]/60"> / quote</span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    <span className="text-[15px] text-[hsl(var(--foreground))]/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.popular ? 'default' : 'outline'}
                className="w-full rounded-full"
              >
                <Link href="/get-walkthrough">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
