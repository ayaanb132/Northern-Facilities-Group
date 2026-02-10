import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { HeroSvgIllustration } from '@/components/3d/HeroSvgIllustration';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { Bento } from '@/components/sections/Bento';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ReportingPreview } from '@/components/sections/ReportingPreview';
import { CTA } from '@/components/sections/CTA';
import { ResidentialSection } from '@/components/sections/ResidentialSection';
import { FAQ } from '@/components/sections/FAQ';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Ready When It Matters',
  description:
    'Enterprise-grade commercial cleaning and facility management for residential, condos, medical practices, restaurants, warehouses, retail, and offices across Canada. Real-time reporting, quality assurance, and dedicated account management.',
  pathname: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Ready When It Matters"
        description="Enterprise-grade cleaning and facility services for residential, condos, medical, restaurants, warehouses, retail, and offices—with real-time reporting, quality assurance, and dedicated account management."
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

      <ProofStrip />

      <Bento />

      <ProcessTimeline />

      <ReportingPreview />

      <CTA variant="dark" />

      <ResidentialSection />

      <FAQ />
    </>
  );
}
