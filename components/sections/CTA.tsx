'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export function CTA({
  title = 'Ready to elevate your facility standards?',
  description = 'Schedule a walkthrough with our team to see how NFG can transform your property management experience.',
  primaryCta = { text: 'Get a Walkthrough', href: '/get-walkthrough' },
  secondaryCta = { text: 'Contact Sales', href: '/contact' },
  variant = 'default',
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        'section-padding',
        variant === 'dark' && 'bg-[hsl(var(--foreground))] text-white',
        variant === 'gradient' && 'bg-[hsl(var(--primary))] text-white',
        variant === 'default' && 'bg-secondary',
        className
      )}
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.28, 0.11, 0.32, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            className={cn(
              'text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold tracking-tight',
              variant === 'default' ? 'text-[hsl(var(--foreground))]' : 'text-white'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'mt-5 text-[19px] leading-relaxed',
              variant === 'default' ? 'text-[hsl(var(--foreground))]/70' : 'text-white/85'
            )}
          >
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant={variant === 'default' ? 'default' : 'secondary'}
              className={variant !== 'default' ? 'bg-white text-[hsl(var(--foreground))] hover:bg-white/90' : ''}
            >
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                variant !== 'default' && 'border-white/40 text-white hover:bg-white/10'
              )}
            >
              <Link href={secondaryCta.href}>
                <Phone className="mr-2 h-4 w-4" />
                {secondaryCta.text}
              </Link>
            </Button>
          </div>

          <p
            className={cn(
              'mt-8 text-[13px]',
              variant === 'default' ? 'text-[hsl(var(--foreground))]/55' : 'text-white/70'
            )}
          >
            No commitment required. Get a custom proposal within 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
