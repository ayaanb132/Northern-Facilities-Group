import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/mdx';
import { CaseStudyView } from '@/components/sections/CaseStudyView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const VAN_HORNE_SLUG = 'van-horne-construction-post-construction-cleaning';

const vanHorneMeta = {
  title: 'Van Horne Construction Case Study | Post-Construction Cleaning',
  description:
    'How Northern Facilities Group supports Van Horne Construction with head office janitorial and post-construction site cleaning across Ontario projects.',
  ogTitle: 'Van Horne Construction Case Study',
  ogDescription:
    'Head office janitorial plus post-construction cleaning leadership for Van Horne Construction project sites, with consistent standards and site-ready handovers.',
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const study = await getCaseStudyBySlug(resolved.slug);
  if (!study) return {};

  const pathname = `/case-studies/${resolved.slug}`;
  const isVanHorne = resolved.slug === VAN_HORNE_SLUG;

  const title = isVanHorne ? vanHorneMeta.title : study.frontmatter.title;
  const description = isVanHorne ? vanHorneMeta.description : study.frontmatter.summary;

  const base = genMeta({ title, description, pathname });

  if (isVanHorne && base.openGraph) {
    base.openGraph = {
      ...base.openGraph,
      title: vanHorneMeta.ogTitle,
      description: vanHorneMeta.ogDescription,
    };
    if (base.twitter) {
      base.twitter = {
        ...base.twitter,
        title: vanHorneMeta.ogTitle,
        description: vanHorneMeta.ogDescription,
      };
    }
  }

  return base;
}

function buildArticleSchema(slug: string, title: string, summary: string, client: string) {
  const url = `${siteConfig.url}/case-studies/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: summary,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: 'Van Horne Construction, post-construction cleaning, construction site cleaning, head office janitorial, Ontario',
    about: [
      { '@type': 'Organization', name: siteConfig.name },
      { '@type': 'Organization', name: client },
    ],
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const resolved = await params;
  const study = await getCaseStudyBySlug(resolved.slug);

  if (!study) {
    notFound();
  }

  const pathname = `/case-studies/${resolved.slug}`;
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: study.frontmatter.title, href: pathname },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const articleSchema = buildArticleSchema(
    resolved.slug,
    study.frontmatter.title,
    study.frontmatter.summary,
    study.frontmatter.client
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <nav className="container-wide pt-24 pb-2" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/case-studies" className="hover:text-foreground transition-colors">
              Case Studies
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground font-medium" aria-current="page">
            {study.frontmatter.client}
          </li>
        </ol>
      </nav>

      <CaseStudyView
        frontmatter={study.frontmatter}
        content={study.content}
        allCaseStudiesHref="/case-studies"
      />
    </>
  );
}
