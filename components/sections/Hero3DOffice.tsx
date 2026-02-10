'use client';

/**
 * Stub: re-exports the standard Hero + SVG illustration for backwards compatibility.
 * The homepage uses Hero + HeroSvgIllustration directly; this file exists so
 * stale dev server caches that still reference Hero3DOffice resolve correctly.
 */

import { Hero } from '@/components/sections/Hero';
import { HeroSvgIllustration } from '@/components/3d/HeroSvgIllustration';

export function Hero3DOffice() {
  return (
    <Hero
      title="Ready When It Matters"
      subtitle="Trusted by property managers across Canada"
      description="Enterprise-grade cleaning and facility services with real-time reporting, quality assurance, and dedicated account management."
      badges={['ISO 9001 Certified', '24/7 Support', 'LEED Standards']}
      features={[
        'Dedicated account management',
        'Real-time reporting dashboard',
        'Industry-specific protocols',
        'Satisfaction guaranteed',
      ]}
      variant="split"
    >
      <HeroSvgIllustration />
    </Hero>
  );
}
