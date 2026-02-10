import { Metadata } from 'next';
import { siteConfig } from './site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  pathname?: string;
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  pathname = '',
}: SEOProps = {}): Metadata {
  const siteTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Premium Facility Management`;
  const siteDescription = description || siteConfig.description;
  const siteImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${pathname}`;

  return {
    title: siteTitle,
    description: siteDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function generateLocalBusinessSchema(
  overrides?: Partial<LocalBusinessSchema>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: overrides?.name || siteConfig.name,
    description: overrides?.description || siteConfig.description,
    url: overrides?.url || siteConfig.url,
    telephone: overrides?.telephone || siteConfig.links.phone,
    email: overrides?.email || siteConfig.links.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 Eglinton Ave W',
      addressLocality: 'Mississauga',
      addressRegion: 'ON',
      postalCode: 'L5R 3E7',
      addressCountry: 'CA',
      ...overrides?.address,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    serviceType: [
      'Commercial Cleaning',
      'Facility Management',
      'Janitorial Services',
    ],
  };
}

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

export function generateServiceSchema({
  name,
  description,
  url,
  provider = siteConfig.name,
  areaServed = 'Canada',
  serviceType = 'Commercial Cleaning',
}: ServiceSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    serviceType,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
