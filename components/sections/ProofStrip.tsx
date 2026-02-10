'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const BADGES = [
  { src: '/images/badges/whmis-logo.svg', alt: 'WHMIS' },
  { src: '/images/badges/untitled-design.svg', alt: 'Certification' },
  { src: '/images/badges/untitled-design-1.svg', alt: 'Standards' },
] as const;

interface ProofStripProps {
  className?: string;
}

export function ProofStrip({ className }: ProofStripProps) {
  return (
    <section className={cn('py-12 bg-secondary border-y border-[hsl(var(--foreground))]/[0.06]', className)}>
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 sm:gap-x-24 md:gap-x-32">
          {BADGES.map((badge, index) => (
            <motion.div
              key={badge.src}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="relative h-14 w-auto max-w-[140px] sm:h-16 sm:max-w-[160px]"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={160}
                height={64}
                className="h-full w-auto object-contain object-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
