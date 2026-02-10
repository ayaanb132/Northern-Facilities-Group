'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Briefcase, Building2, Key } from 'lucide-react';
import { cn } from '@/lib/utils';

const CARD_ICONS = { Home, Briefcase, Building2, Key } as const;

const NOT_BUSINESS_OWNER_CARDS = [
  {
    title: 'Residential',
    href: '/services/residential',
    icon: 'Home' as const,
    description: 'Specialized cleaning for homes and families.',
  },
  {
    title: 'Facility Managers',
    href: '/services/facility-managers',
    icon: 'Briefcase' as const,
    description: 'Cleaning and facility support for multi-site operations.',
  },
  {
    title: 'Property Managers',
    href: '/services/property-managers',
    icon: 'Building2' as const,
    description: 'Solutions for residential, condo, and mixed-use properties.',
  },
  {
    title: 'Realtors',
    href: '/services/realtors',
    icon: 'Key' as const,
    description: 'Listing prep, showings, and move-in/move-out cleaning for your clients.',
  },
];

function TiltCard({
  href,
  icon,
  title,
  description,
  index,
}: {
  href: string;
  icon: keyof typeof CARD_ICONS;
  title: string;
  description: string;
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const Icon = CARD_ICONS[icon];

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({ rotateX: -y * 8, rotateY: x * 8, scale: 1.02 });
  };
  const handleLeave = () => setTransform({ rotateX: 0, rotateY: 0, scale: 1 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{ perspective: '1200px' }}
    >
      <Link
        href={href}
        className="group block h-full"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          ref={cardRef}
          className="h-full p-8 flex flex-col justify-between min-h-[200px] rounded-2xl bg-white border border-[hsl(var(--foreground))]/[0.06] hover:border-[hsl(var(--foreground))]/[0.12] transition-[border-color,box-shadow] duration-300 shadow-[0_1px_2px_hsl(var(--foreground)/0.04)] hover:shadow-[0_20px_40px_-12px_hsl(var(--foreground)/0.15),0_0_0_1px_hsl(var(--foreground)/0.04)]"
          style={{
            transform: `perspective(1200px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
          }}
        >
          <div style={{ transform: 'translateZ(1px)' }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] mb-5 group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-[15px] text-[hsl(var(--foreground))]/65 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center text-[15px] font-normal text-[hsl(var(--primary))] group-hover:underline" style={{ transform: 'translateZ(2px)' }}>
            Learn more
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface ResidentialSectionProps {
  className?: string;
}

export function ResidentialSection({ className }: ResidentialSectionProps) {
  return (
    <section className={cn('section-padding bg-slate-50', className)}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
            Not a business owner?
          </h2>
          <p className="mt-3 text-[17px] text-[hsl(var(--foreground))]/70">
            We offer specialized options for homeowners, facility managers, property managers, and realtors. Same quality standards, tailored for your role.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {NOT_BUSINESS_OWNER_CARDS.map((card, index) => (
            <TiltCard
              key={card.href}
              href={card.href}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
