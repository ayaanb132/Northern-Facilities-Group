'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Quote, ArrowRight, Check, Building2 } from 'lucide-react';
import type { CaseStudyFrontmatter } from '@/lib/mdx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ProseBlock({ content }: { content: string }) {
  const sections = content
    .split(/\n## /)
    .filter(Boolean)
    .map((block) => {
      const firstLine = block.indexOf('\n');
      const head = firstLine === -1 ? block : block.slice(0, firstLine);
      const body = firstLine === -1 ? '' : block.slice(firstLine + 1).trim();
      return { title: head.replace(/^##\s*/, ''), body };
    });

  return (
    <div className="space-y-10">
      {sections.map(({ title, body }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-display font-semibold text-foreground tracking-tight">
            {title}
          </h3>
          <div className="prose prose-slate max-w-none text-foreground/80 leading-relaxed space-y-4">
            {body.split(/\n\n+/).map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function CaseStudyView({
  frontmatter,
  content,
}: {
  frontmatter: CaseStudyFrontmatter;
  content: string;
}) {
  return (
    <>
      {/* Hero with logo — load animation */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 gradient-bg overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            {frontmatter.logo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white/80 shadow-lg flex items-center justify-center p-4 mb-8"
              >
                <Image
                  src={frontmatter.logo}
                  alt={frontmatter.client}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            )}
            <Badge variant="secondary" className="mb-4">
              Case Study
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 tracking-tight">
              {frontmatter.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{frontmatter.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/get-walkthrough">
                  Get a Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/proof">All Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge — scroll animation */}
      <AnimatedSection className="section-padding">
        <div className="container-wide max-w-3xl">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-4"
            >
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                The Challenge
              </span>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/85 leading-relaxed"
            >
              {frontmatter.challenge}
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Solution — scroll animation */}
      <AnimatedSection className="section-padding bg-slate-50">
        <div className="container-wide max-w-3xl">
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span
              variants={fadeInUp}
              className="text-xs font-medium text-primary uppercase tracking-wider"
            >
              Our Approach
            </motion.span>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-xl text-foreground/85 leading-relaxed"
            >
              {frontmatter.solution}
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Key Results — scroll animation */}
      <AnimatedSection className="section-padding">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-navy-900 mb-8"
          >
            Key Results
          </motion.h2>
          <motion.ul
            className="grid gap-4 sm:grid-cols-2 max-w-4xl"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {frontmatter.results.map((result) => (
              <motion.li
                key={result}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{result}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </AnimatedSection>

      {/* Testimonial — scroll animation */}
      {frontmatter.testimonial && (
        <AnimatedSection className="section-padding bg-slate-50">
          <div className="container-wide max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-slate-100"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                &ldquo;{frontmatter.testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 text-muted-foreground">
                — {frontmatter.testimonial.author}
                {frontmatter.testimonial.role && (
                  <span className="text-foreground/70">, {frontmatter.testimonial.role}</span>
                )}
              </footer>
            </motion.div>
          </div>
        </AnimatedSection>
      )}

      {/* Full story (MDX body) — scroll animations per section */}
      {content.trim() && (
        <AnimatedSection className="section-padding">
          <div className="container-wide max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-navy-900 mb-10"
            >
              Full Story
            </motion.h2>
            <ProseBlock content={content} />
          </div>
        </AnimatedSection>
      )}

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-padding bg-primary/5"
      >
        <div className="container-wide text-center">
          <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
            Ready for similar results?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a walkthrough and we&apos;ll tailor a program for your property.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/get-walkthrough">
              Get a Walkthrough
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </>
  );
}
