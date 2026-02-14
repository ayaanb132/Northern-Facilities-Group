'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountUp } from '@/components/ui/count-up';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
  children?: React.ReactNode;
  variant?: 'default' | 'centered' | 'split';
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Hero({
  title = 'Ready When It Matters',
  subtitle = '',
  description = 'Enterprise-grade cleaning and facility services with real-time reporting, quality assurance, and dedicated account management.',
  badges = [],
  primaryCta = { text: 'Get a Walkthrough', href: '/get-walkthrough' },
  secondaryCta = { text: 'View Services', href: '/services' },
  features = [],
  children,
  variant = 'default',
  className,
}: HeroProps) {
  return (
    <section
      id="hero"
      className={cn(
        'relative overflow-hidden pt-[200px] pb-20 sm:pt-[220px] lg:pt-[240px] lg:pb-28',
        variant === 'centered' && 'text-center',
        className
      )}
    >
      {/* Background - Apple-style soft gradient */}
      <div className="absolute inset-0 gradient-bg-hero" />

      {/* Ontario outline - behind content, centered */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center" aria-hidden>
        <div className="relative w-full h-full max-w-3xl max-h-[80%] lg:max-w-4xl">
          <Image
            src="/images/ontario-outline.svg"
            alt=""
            fill
            className="object-contain opacity-[0.12]"
            sizes="(max-width: 1024px) 48rem, 56rem"
            priority
          />
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div
          className={cn(
            'grid gap-16 lg:gap-20 items-center',
            variant === 'split' && 'lg:grid-cols-2',
            variant === 'centered' && 'max-w-3xl mx-auto'
          )}
        >
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn(variant === 'centered' && 'text-center')}
          >
            {/* Badges - minimal pills */}
            {badges.length > 0 && (
              <motion.div
                variants={itemVariants}
                className={cn(
                  'flex flex-wrap gap-2 mb-8',
                  variant === 'centered' && 'justify-center'
                )}
              >
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full bg-black/[0.04] px-3 py-1 text-[13px] font-medium text-foreground/80"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-[17px] font-normal text-[hsl(var(--primary))] mb-5"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Title - Apple-style large, tight tracking */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.75rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem] font-display font-semibold text-foreground tracking-tight text-balance"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-[19px] leading-[1.47] text-foreground/70 max-w-xl text-pretty"
            >
              {description}
            </motion.p>

            {/* Features */}
            {features.length > 0 && (
              <motion.ul
                variants={itemVariants}
                className={cn(
                  'mt-8 space-y-3',
                  variant === 'centered' && 'inline-flex flex-col items-start'
                )}
              >
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-[15px] text-foreground/70">
                    <CheckCircle className="mr-3 h-5 w-5 text-[hsl(var(--primary))]" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            )}

            {/* CTAs - Apple-style rounded-full primary */}
            <motion.div
              variants={itemVariants}
              className={cn(
                'mt-10 flex flex-wrap gap-4',
                variant === 'centered' && 'justify-center'
              )}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 bg-transparent hover:bg-black/[0.04]">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            </motion.div>

            {/* Stats - minimal */}
            <motion.div
              variants={itemVariants}
              className={cn(
                'mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3',
                variant === 'centered' && 'max-w-2xl mx-auto'
              )}
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="min-w-0 flex flex-col sm:min-w-[140px]">
                  <div className="text-[28px] font-semibold tracking-tight text-foreground">
                    <CountUp value={stat.value} className="whitespace-nowrap" />
                  </div>
                  <div className="text-[13px] text-foreground/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual / 3D Scene */}
          {(variant === 'split' || children) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
