'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Users,
  CalendarClock,
  BarChart3,
  Headphones,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    icon: ClipboardCheck,
    title: 'Site Assessment',
    description:
      'Comprehensive walkthrough to understand your space, requirements, and pain points.',
  },
  {
    icon: Users,
    title: 'Team Assignment',
    description:
      'Dedicated cleaning crew trained specifically for your property type and protocols.',
  },
  {
    icon: CalendarClock,
    title: 'Custom Schedule',
    description:
      'Flexible scheduling that minimizes disruption and maximizes coverage.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Regular supervisor inspections and digital checklists ensure consistent standards.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    description:
      'Dashboard access with photos, completion logs, and issue tracking.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'Dedicated account manager and 24/7 emergency response for peace of mind.',
  },
];

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
  className?: string;
}

export function ProcessTimeline({
  title = 'How We Work',
  subtitle = 'A transparent, systematic approach to facility management',
  steps = defaultSteps,
  className,
}: ProcessTimelineProps) {
  return (
    <section className={cn('section-padding bg-secondary', className)}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-[19px] text-[hsl(var(--foreground))]/70">{subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--foreground))]/[0.08] -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={cn(
                    'relative lg:grid lg:grid-cols-2 lg:gap-16',
                    !isEven && 'lg:[direction:rtl]'
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      'lg:[direction:ltr]',
                      isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16'
                    )}
                  >
                    <div
                      className={cn(
                        'inline-flex flex-col',
                        isEven ? 'lg:items-end' : 'lg:items-start'
                      )}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))] text-white mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-[hsl(var(--foreground))]/70 max-w-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Number (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[hsl(var(--primary))] text-[13px] font-semibold text-[hsl(var(--primary))]">
                      {index + 1}
                    </div>
                  </div>

                  {/* Empty cell for grid */}
                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
