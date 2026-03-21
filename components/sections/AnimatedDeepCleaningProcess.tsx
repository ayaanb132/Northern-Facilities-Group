'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    title: 'Complete Facility Assessment',
    description: "We start by understanding your facility's scope, condition, and specific needs.",
    bullets: [
      'Facility size and layout (square footage, number of areas)',
      'Surface types (carpet, tile, concrete, hardwood, equipment areas)',
      'Current condition (dust levels, debris, contamination)',
      'Access challenges (equipment placement, obstacles, tight spaces)',
      'Specific problem areas (noted by you or discovered by us)',
      'Timeline and scheduling (how soon, how long it will take)',
    ],
    keyPoint:
      'Output: Detailed scope document and timeline so you know exactly what is happening and when.',
  },
  {
    title: 'Area Preparation and Furniture Moving',
    description: 'Before we clean, we prepare the space.',
    bullets: [
      'All moveable furniture is carefully moved to clear floor space',
      'Equipment areas are prepped for access',
      'Protective coverings placed where needed',
      'Work zones established to minimize disruption',
      'Client approval before any deep work begins',
    ],
    keyPoint: "Key point: You don't manage furniture. We do. Your team focuses on operations.",
  },
  {
    title: 'Top-to-Bottom Systematic Cleaning',
    description: 'This is where deep cleaning actually happens.',
    bullets: [
      'High surfaces and ceilings: light fixtures, vents, ceiling tiles, high shelving, HVAC returns',
      'Walls and trim: baseboards detailed, marks and stains removed, trim wiped down',
      'Equipment areas: machinery exteriors cleaned, dust removed, safety areas cleared',
      'Floors: deep carpet extraction, hard floor stripping, grout and tile restoration',
      'Restrooms and kitchens: full sanitization, fixture polishing, appliance interiors cleaned',
      'Windows and glass: interior cleaning, frames and sills detailed, glass restored to clarity',
    ],
    keyPoint: null,
  },
  {
    title: 'Specialized Surface Treatments',
    description:
      "Different surfaces need different approaches. We apply treatments matched to your facility's specific needs.",
    bullets: [
      'Carpet: professional extraction, stain treatment, deodorization, protection coating',
      'Hard floors: VCT stripping and waxing, concrete sealing, hardwood restoration, grout restoration',
      'Equipment areas: degreasing, rust removal and protection, safety surface restoration',
      'Walls and trim: paint touch-up where needed, stain removal, protection coating',
    ],
    keyPoint: null,
  },
  {
    title: 'Final Inspection and Touch-Ups',
    description: "Before we're done, we inspect everything. Every detail is verified.",
    bullets: [
      'All surfaces cleaned to specification',
      'No areas missed or overlooked',
      'All equipment areas accessible and safe',
      'All surfaces protected and finished',
      'Facility ready for occupancy or operations',
      'No damage to existing equipment or property',
    ],
    keyPoint:
      'Touch-ups: Any missed spots corrected immediately, quality verified, client walkthrough and approval.',
  },
  {
    title: 'Documentation and Handoff',
    description: 'You receive complete documentation of what was done.',
    bullets: [
      'Before and after photos (showing the transformation)',
      'Detailed completion report (all areas covered, treatments applied)',
      'Timeline of work performed',
      'Recommendations for ongoing maintenance',
      'Warranty on work performed (if applicable)',
    ],
    keyPoint: null,
  },
];

export function AnimatedDeepCleaningProcess() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const duration = isMobile ? 0.4 : 0.6;
  const stagger = isMobile ? 0.1 : 0.15;
  const viewportAmount = isMobile ? 0.5 : 0.8;

  return (
    <div className="relative py-12">
      {/* Connecting Line */}
      <motion.div
        className="absolute left-[39px] md:left-[47px] top-12 bottom-0 w-0.5 bg-border/50 hidden sm:block origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="space-y-6 md:space-y-8">
        {steps.map((step, index) => {
          const currentDelay = shouldReduceMotion ? 0 : index * stagger;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmount }}
              transition={{ duration, ease: 'easeOut', delay: currentDelay }}
              className="relative flex gap-4 sm:gap-6 md:gap-8 group"
            >
              {/* Number Badge */}
              <motion.div
                initial={{
                  rotate: shouldReduceMotion ? 0 : 0,
                  scale: shouldReduceMotion ? 1 : 0.8,
                }}
                whileInView={{ rotate: shouldReduceMotion ? 0 : 360, scale: 1 }}
                viewport={{ once: true, amount: viewportAmount }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: currentDelay }}
                className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy-900 text-white font-bold text-lg md:text-xl shadow-lg transition-colors duration-300 group-hover:bg-primary"
              >
                {index + 1}
              </motion.div>

              {/* Card Content */}
              <div className="flex-1 bg-white border border-border/50 rounded-2xl p-5 md:p-6 shadow-sm group-hover:shadow-md transition-shadow">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: viewportAmount }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.2 }}
                  className="text-lg md:text-xl font-bold text-navy-900 mb-2 md:mb-3 leading-tight"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: viewportAmount }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.25 }}
                  className="text-muted-foreground text-[14px] md:text-[15px] leading-relaxed mb-3"
                >
                  {step.description}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: viewportAmount }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.3 }}
                  className="space-y-1.5 mb-3"
                >
                  {step.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-[13px] md:text-[14px] text-muted-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </motion.ul>

                {step.keyPoint && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: viewportAmount }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.4 }}
                    className="text-[13px] md:text-[14px] text-navy-900/80 font-medium italic border-l-2 border-primary pl-3 mt-3"
                  >
                    {step.keyPoint}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
