'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    title: 'Complete Facility Assessment',
    description:
      "We start by understanding your facility's scope, condition, and specific needs. We evaluate facility size and layout, surface types, current condition, access challenges, and timelines. The output is a detailed scope document and timeline so you know exactly what's happening and when.",
  },
  {
    title: 'Area Preparation and Furniture Moving',
    description:
      'Before we clean, we prepare the space. All moveable furniture is carefully moved to clear floor space, equipment areas are prepped for access, protective coverings placed where needed, and work zones established to minimize disruption. Client approval before any deep work begins.',
  },
  {
    title: 'Top-to-Bottom Systematic Cleaning',
    description:
      'This is where deep cleaning actually happens. High surfaces and ceilings, walls and trim, equipment areas, floors and surfaces, restrooms and kitchens, windows and glass - all systematically detailed.',
  },
  {
    title: 'Specialized Surface Treatments',
    description:
      "Different surfaces need different approaches. We apply treatments matched to your facility's specific needs, including professional carpet extraction, hard floor treatment (VCT stripping/waxing, concrete sealing/polishing, hardwood restoration), equipment area degreasing/restoration, and wall/trim paint touch-ups.",
  },
  {
    title: 'Final Inspection and Touch-Ups',
    description:
      "Before we're done, we inspect everything. Every detail is verified against our comprehensive checklist. Any missed spots are corrected immediately, final details refined, quality verification complete, followed by a final client walkthrough and approval.",
  },
  {
    title: 'Documentation and Handoff',
    description:
      'You receive complete documentation of what was done, including before and after photos showing the transformation, a detailed completion report spanning all areas covered and treatments applied, a timeline of work performed, recommendations for ongoing maintenance, and warranty on work performed (if applicable).',
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

  // Timings identical to Window Cleaning / Floor Care
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
                  className="text-lg md:text-xl font-bold text-navy-900 mb-3 md:mb-4 flex items-center gap-2 leading-tight"
                >
                  {step.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: viewportAmount }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.3 }}
                  className="text-muted-foreground text-[14px] md:text-[16px] leading-relaxed mb-1"
                >
                  {step.description}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
