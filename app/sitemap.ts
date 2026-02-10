import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getServiceSlugs, getSpecialtySlugs, getCaseStudySlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/specialty',
    '/how-it-works',
    '/proof',
    '/contact',
    '/get-walkthrough',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const serviceSlugs = getServiceSlugs();
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Specialty pages
  const specialtySlugs = getSpecialtySlugs();
  const specialtyPages = specialtySlugs.map((slug) => ({
    url: `${baseUrl}/specialty/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseStudySlugs = getCaseStudySlugs();
  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/proof/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...specialtyPages, ...caseStudyPages];
}
