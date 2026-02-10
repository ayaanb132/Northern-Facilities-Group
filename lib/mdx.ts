import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ServiceFrontmatter {
  title: string;
  slug: string;
  category: string;
  summary: string;
  icon: string;
  /** Optional hero image path (e.g. /images/services/name.jpg) */
  image?: string;
  outcomes: string[];
  scope: string[];
  protocols: string[];
  frequencyOptions: string[];
  reporting: string[];
  tiersRecommended: string[];
  faqs: { question: string; answer: string }[];
  order?: number;
}

export interface SpecialtyFrontmatter {
  title: string;
  slug: string;
  category: string;
  summary: string;
  whenNeeded: string[];
  process: string[];
  inclusions: string[];
  order?: number;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  client: string;
  propertyType: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  /** Optional logo path (e.g. /images/case-studies/client-logo.png) */
  logo?: string;
  published: boolean;
  date: string;
}

export async function getServiceBySlug(slug: string): Promise<{
  frontmatter: ServiceFrontmatter;
  content: string;
} | null> {
  try {
    const filePath = path.join(contentDirectory, 'services', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data as ServiceFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllServices(): Promise<ServiceFrontmatter[]> {
  const servicesDir = path.join(contentDirectory, 'services');
  
  if (!fs.existsSync(servicesDir)) {
    return [];
  }

  const files = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.mdx'));
  
  const services = files.map((file) => {
    const filePath = path.join(servicesDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as ServiceFrontmatter;
  });

  return services.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function getSpecialtyBySlug(slug: string): Promise<{
  frontmatter: SpecialtyFrontmatter;
  content: string;
} | null> {
  try {
    const filePath = path.join(contentDirectory, 'specialty', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data as SpecialtyFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllSpecialties(): Promise<SpecialtyFrontmatter[]> {
  const specialtyDir = path.join(contentDirectory, 'specialty');
  
  if (!fs.existsSync(specialtyDir)) {
    return [];
  }

  const files = fs.readdirSync(specialtyDir).filter((f) => f.endsWith('.mdx'));
  
  const specialties = files.map((file) => {
    const filePath = path.join(specialtyDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as SpecialtyFrontmatter;
  });

  return specialties.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function getCaseStudyBySlug(slug: string): Promise<{
  frontmatter: CaseStudyFrontmatter;
  content: string;
} | null> {
  try {
    const filePath = path.join(contentDirectory, 'case-studies', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data as CaseStudyFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllCaseStudies(): Promise<CaseStudyFrontmatter[]> {
  const caseStudiesDir = path.join(contentDirectory, 'case-studies');
  
  if (!fs.existsSync(caseStudiesDir)) {
    return [];
  }

  const files = fs.readdirSync(caseStudiesDir).filter((f) => f.endsWith('.mdx'));
  
  const caseStudies = files
    .map((file) => {
      const filePath = path.join(caseStudiesDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data as CaseStudyFrontmatter;
    })
    .filter((cs) => cs.published);

  return caseStudies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getCaseStudySlugs(): string[] {
  const caseStudiesDir = path.join(contentDirectory, 'case-studies');
  if (!fs.existsSync(caseStudiesDir)) return [];
  return fs
    .readdirSync(caseStudiesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getServiceSlugs(): string[] {
  const servicesDir = path.join(contentDirectory, 'services');
  
  if (!fs.existsSync(servicesDir)) {
    return [];
  }

  return fs
    .readdirSync(servicesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getSpecialtySlugs(): string[] {
  const specialtyDir = path.join(contentDirectory, 'specialty');
  
  if (!fs.existsSync(specialtyDir)) {
    return [];
  }

  return fs
    .readdirSync(specialtyDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}
