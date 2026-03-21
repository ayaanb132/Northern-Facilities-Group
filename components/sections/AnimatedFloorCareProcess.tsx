'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    title: 'Floor Assessment and Surface Identification',
    description:
      'We start by understanding your floors—type, condition, and specific needs. We evaluate the floor type, current condition, usage pattern, and your specific goals to create a customized care plan.',
  },
  {
    title: 'Furniture and Obstacle Clearing',
    description:
      "Before we start, we clear the floor. All moveable furniture is carefully moved, equipment is safely relocated, and work zones are established. You don't manage this. We do.",
  },
  {
    title: 'Surface Preparation and Stripping',
    description:
      'Different floors need different prep. For VCT, old wax is stripped. For hardwood, the floor is inspected and cleaned. For concrete, heavy contamination is degreased. For carpet, stains are pre-treated.',
  },
  {
    title: 'Treatment Application',
    description:
      'Now the actual floor care happens. Fresh wax is applied to VCT. Polyurethane to hardwood. Sealers applied to tile and concrete. For carpet, professional extraction removes deep dirt.',
  },
  {
    title: 'Buffing, Burnishing, and Finishing',
    description:
      'For hard floors, this step restores the shine. Floor buffers remove scuffs, and burnishing polishes the surface to a high shine. Protectors are allowed to cure.',
  },
  {
    title: 'Cure Time and Protection',
    description:
      'Different treatments need different cure times. VCT wax takes 24-48 hours before heavy foot traffic. Carpet protector takes 24 hours. We provide clear instructions.',
  },
  {
    title: 'Furniture Replacement and Final Inspection',
    description:
      'Once cured, everything goes back. Furniture is carefully replaced, the floor is inspected one final time, and we provide a client walkthrough for approval.',
  },
];

export function AnimatedFloorCareProcess() {
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

  // Timings based on brief specs
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
          // Disable delays if reduced motion preferred
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
