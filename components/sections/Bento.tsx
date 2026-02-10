'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

const icons = {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
};

/** 3D-style depth: we use CSS perspective + transform (rotateX/Y, translateZ, scale) and
 * mouse-relative tilt so cards feel physical. No WebGL — detail level: high for layout/shadow,
 * medium for custom isometric SVGs (per-icon art), low for full scene wireframes (but doable). */

function useCardTilt() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({
      rotateX: -y * 8,
      rotateY: x * 8,
      scale: 1.02,
    });
  };

  const handleLeave = () => setTransform({ rotateX: 0, rotateY: 0, scale: 1 });

  return { ref, transform, handleMove, handleLeave };
}

function BentoCard({
  property,
  Icon,
  isLarge,
  itemVariants,
}: {
  property: (typeof siteConfig.propertyTypes)[number];
  Icon: React.ComponentType<{ className?: string }> | undefined;
  isLarge: boolean;
  itemVariants: typeof itemVariants;
}) {
  const { ref, transform, handleMove, handleLeave } = useCardTilt();

  return (
    <motion.div
      variants={itemVariants}
      className={cn(isLarge && 'md:col-span-2 lg:col-span-1')}
      style={{ perspective: '1200px' }}
    >
      <Link
        href={`/services/${property.id}`}
        className="group block h-full"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          ref={ref}
          className="h-full p-8 flex flex-col justify-between min-h-[200px] rounded-2xl bg-white border border-[hsl(var(--foreground))]/[0.06] hover:border-[hsl(var(--foreground))]/[0.12] transition-[border-color,box-shadow] duration-300 shadow-[0_1px_2px_hsl(var(--foreground)/0.04)] hover:shadow-[0_20px_40px_-12px_hsl(var(--foreground)/0.15),0_0_0_1px_hsl(var(--foreground)/0.04)]"
          style={{
            transform: `perspective(1200px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
          }}
        >
          <div style={{ transform: 'translateZ(1px)' }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] mb-5 group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
              {Icon && <Icon className="h-5 w-5" />}
            </div>
            <h3 className="text-[21px] font-semibold text-[hsl(var(--foreground))] mb-2 tracking-tight">
              {property.name}
            </h3>
            <p className="text-[15px] text-[hsl(var(--foreground))]/65 leading-relaxed">
              Specialized cleaning protocols designed for {property.name.toLowerCase()} environments.
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

interface BentoProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

export function Bento({
  title = 'Specialized for Every Property Type',
  subtitle = 'Industry-specific cleaning protocols and trained teams',
  className,
}: BentoProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-[19px] leading-relaxed text-[hsl(var(--foreground))]/70">{subtitle}</p>
        </div>

        {/* Bento Grid - commercial property types only; residential is below "Not a business owner?" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.propertyTypes.filter((p) => p.id !== 'residential').map((property, index) => {
            const Icon = icons[property.icon as keyof typeof icons];
            const isLarge = index === 0 || index === 3;
            return (
              <BentoCard
                key={property.id}
                property={property}
                Icon={Icon}
                isLarge={isLarge}
                itemVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
