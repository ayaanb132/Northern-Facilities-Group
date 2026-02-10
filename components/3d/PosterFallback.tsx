'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PosterFallbackProps {
  src: string;
  alt: string;
  className?: string;
  /** Parallax is disabled when prefers-reduced-motion is set. */
  enableParallax?: boolean;
}

export function PosterFallback({
  src,
  alt,
  className,
  enableParallax = true,
}: PosterFallbackProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [respectsReducedMotion, setRespectsReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setRespectsReducedMotion(mq.matches);
    const handler = () => setRespectsReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const parallaxEnabled = enableParallax && !respectsReducedMotion;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!parallaxEnabled || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [parallaxEnabled, mouseX, mouseY]
  );

  const handleMouseLeave = React.useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden rounded-2xl',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 z-0" />

      {/* Poster image with parallax */}
      <motion.div
        style={{
          rotateX: parallaxEnabled ? rotateX : 0,
          rotateY: parallaxEnabled ? rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </motion.div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* "3D Preview" badge */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 shadow-sm">
        Interactive 3D Available
      </div>
    </div>
  );
}
