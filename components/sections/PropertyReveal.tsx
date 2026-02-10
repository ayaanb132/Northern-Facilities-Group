'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { PropertyScene } from '@/components/3d/PropertyScene';
import { MODEL_CONFIGS, type ModelConfig } from '@/lib/modelPipeline';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

const PROPERTY_PAIRS: [string, string][] = [
  ['condo', 'medical'],
  ['restaurant', 'warehouse'],
  ['retail', 'office'],
];

function FloatingCard({
  title,
  description,
  href,
  className,
  scrollProgress,
  parallaxOffset = 0,
}: {
  title: string;
  description: string;
  href: string;
  className?: string;
  scrollProgress: ReturnType<typeof useTransform>;
  parallaxOffset?: number;
}) {
  const y = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [24 + parallaxOffset, 6, -6, -24 - parallaxOffset]);
  const opacity = useTransform(scrollProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.2], [0.96, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className={cn(
        'rounded-xl border border-[hsl(var(--foreground))]/[0.08] bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm w-full max-w-[200px] sm:max-w-[220px]',
        className
      )}
    >
      <h3 className="text-sm font-semibold tracking-tight text-[hsl(var(--foreground))]">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-[hsl(var(--foreground))]/70 line-clamp-2">{description}</p>
      <Link
        href={href}
        className="mt-2 inline-flex items-center text-xs font-medium text-[hsl(var(--primary))] hover:underline"
      >
        Learn more
        <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </motion.div>
  );
}

function PropertyViewport({ config }: { config: ModelConfig }) {
  return (
    <SceneCanvas
      className="aspect-[4/3] w-full min-h-[280px] rounded-2xl overflow-hidden shadow-lg border border-[hsl(var(--foreground))]/[0.06]"
      posterSrc={config.poster}
      posterAlt={`${config.name} 3D preview`}
      environmentPreset={config.environmentPreset}
      showContactShadows={false}
      cameraPosition={config.cameraPosition}
      cameraFov={config.cameraFov}
    >
      <PropertyScene
        config={config}
        activeHotspot={null}
        onHotspotClick={() => {}}
        enableAnimation={true}
      />
    </SceneCanvas>
  );
}

function RevealBlock({
  propertyIds,
  index,
}: {
  propertyIds: [string, string];
  index: number;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const configA = MODEL_CONFIGS[propertyIds[0]] as ModelConfig;
  const configB = MODEL_CONFIGS[propertyIds[1]] as ModelConfig;
  const propertyA = siteConfig.propertyTypes.find((p) => p.id === propertyIds[0]);
  const propertyB = siteConfig.propertyTypes.find((p) => p.id === propertyIds[1]);

  const containerOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const containerY = useTransform(scrollYProgress, [0, 0.2], [80, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity: containerOpacity, y: containerY }}
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--muted))]/30 to-[hsl(var(--background))]"
    >
      <div className="container-wide relative w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-[hsl(var(--foreground))]/50"
        >
          Property types {index + 1} of 3
        </motion.p>

        {/* Two 3D viewports with compact cards below (no overlap) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2 md:gap-8"
        >
          <div className="relative flex flex-col items-center gap-3">
            <div className="relative w-full">
              <PropertyViewport config={configA} />
              <span className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-[hsl(var(--foreground))]/80 backdrop-blur-sm">
                {configA.name}
              </span>
            </div>
            {propertyA && (
              <FloatingCard
                title={propertyA.name}
                description={`Specialized cleaning protocols designed for ${propertyA.name.toLowerCase()} environments.`}
                href={`/services/${propertyA.id}`}
                scrollProgress={scrollYProgress}
                parallaxOffset={20}
                className="mx-auto"
              />
            )}
          </div>
          <div className="relative flex flex-col items-center gap-3">
            <div className="relative w-full">
              <PropertyViewport config={configB} />
              <span className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-[hsl(var(--foreground))]/80 backdrop-blur-sm">
                {configB.name}
              </span>
            </div>
            {propertyB && (
              <FloatingCard
                title={propertyB.name}
                description={`Specialized cleaning protocols designed for ${propertyB.name.toLowerCase()} environments.`}
                href={`/services/${propertyB.id}`}
                scrollProgress={scrollYProgress}
                parallaxOffset={-20}
                className="mx-auto"
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function PropertyReveal({
  title = 'Specialized for Every Property Type',
  subtitle = 'Industry-specific cleaning protocols and trained teams',
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={cn('relative', className)}>
      {/* Intro header — fixed at top of reveal */}
      <div className="section-padding container-wide text-center">
        <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-[19px] leading-relaxed text-[hsl(var(--foreground))]/70">
          {subtitle}
        </p>
        <p className="mt-4 text-sm text-[hsl(var(--foreground))]/50">Scroll to explore</p>
      </div>

      {/* Three blocks: 2 properties each with 3D + floating cards */}
      {PROPERTY_PAIRS.map((pair, index) => (
        <RevealBlock key={pair.join('-')} propertyIds={pair} index={index} />
      ))}
    </section>
  );
}
