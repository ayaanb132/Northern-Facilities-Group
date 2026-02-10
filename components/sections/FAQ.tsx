'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'How quickly can you start service at our property?',
    answer:
      'After the initial walkthrough and agreement, we can typically begin service within 5-7 business days. This includes time for team assignment, training on your specific requirements, and scheduling coordination.',
  },
  {
    question: 'Do you provide your own cleaning supplies and equipment?',
    answer:
      'Yes, all cleaning supplies, equipment, and consumables are included in our service. We use commercial-grade, eco-friendly products that meet industry safety standards. Special requests or preferences can be accommodated.',
  },
  {
    question: 'How do you handle quality assurance?',
    answer:
      'Our multi-layered QA approach includes digital checklists, supervisor inspections, photo documentation, and client feedback loops. You have 24/7 access to our reporting dashboard to track service quality in real-time.',
  },
  {
    question: 'What happens if we need service outside of regular hours?',
    answer:
      "We offer 24/7 emergency support for all clients. Regular after-hours service can be scheduled based on your property's needs. Our Professional and Enterprise tiers include enhanced support coverage.",
  },
  {
    question: 'Can you accommodate special cleaning requirements?',
    answer:
      'Absolutely. We specialize in industry-specific protocols for medical facilities, food service, clean rooms, and more. Custom requirements are documented in your service agreement and communicated to your dedicated team.',
  },
  {
    question: 'How does your pricing work?',
    answer:
      'Pricing is based on square footage, service frequency, and property type. We offer three service tiers (Essential, Professional, Enterprise) to match different needs and budgets. Schedule a walkthrough for a custom quote.',
  },
];

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

export function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = "Everything you need to know about our facility management services",
  faqs = defaultFaqs,
  className,
}: FAQProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
              {title}
            </h2>
            <p className="mt-5 text-[19px] text-[hsl(var(--foreground))]/70">{subtitle}</p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] text-[17px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--foreground))]/70 text-[15px] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
