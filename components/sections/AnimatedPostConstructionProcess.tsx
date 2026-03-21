'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    title: 'Initial Rough Clean (Bulk Debris Removal)',
    description:
      'We start by removing the bulk. Large debris, scraps, packaging, and waste are collected and hauled away. Work areas are roughed in for detailed cleaning. This step is labor-intensive but critical before detail work can commence.',
  },
  {
    title: 'Detailed Dust and Particle Removal',
    description:
      "Now we target construction dust that's settled everywhere. We clean high surfaces first (ceilings to floors) including fixtures and air vents. We deploy HEPA vacuums, professional dust tools, and air movers. HVAC runs continuously to clear remaining particles.",
  },
  {
    title: 'Surface Cleaning and Residue Removal',
    description:
      'Next, we handle contamination. Paint drips and splatter are carefully removed, adhesive and caulk residue is detached from floors, and tape stickers are scraped off. Concrete dust is scrubbed away. Oil, grease, and stains are treated.',
  },
  {
    title: 'Window and Glass Cleaning (Interior)',
    description:
      'Windows are a classic construction mess; we restore them completely. We clean interior glass (all windows and glass doors), frames and sills, target dirty window tracks, unpeel protective films, and fully remedy hazed glass.',
  },
  {
    title: 'Final Detail Cleaning and Inspection',
    description:
      "Before we're done, every detail is addressed. Detail work includes baseboards, custom trim, door frames, switch plates, hardware polishing, corner edges, and missed spots from earlier. Every surface is systematically inspected with a final quality verification pass.",
  },
  {
    title: 'Punch List Support',
    description:
      'We work with you to ensure punch list items are addressed. We identify any remaining construction issues, document them with photos, coordinate with contractors if needed, and guarantee a unified final walkthrough and approval.',
  },
];

export function AnimatedPostConstructionProcess() {
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
