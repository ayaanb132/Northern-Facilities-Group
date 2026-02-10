import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/mdx';
import { CaseStudyView } from '@/components/sections/CaseStudyView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const study = await getCaseStudyBySlug(resolved.slug);
  if (!study) return {};
  return genMeta({
    title: study.frontmatter.title,
    description: study.frontmatter.summary,
    pathname: `/proof/${resolved.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolved = await params;
  const study = await getCaseStudyBySlug(resolved.slug);

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyView
      frontmatter={study.frontmatter}
      content={study.content}
    />
  );
}
