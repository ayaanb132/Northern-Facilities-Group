'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  title: string;
  description: string | React.ReactNode;
  timeline: string;
  isCommercial?: boolean;
  isResidential?: boolean;
}

const steps: Step[] = [
  {
    title: 'Initial Contact',
    description: (
      <div className="space-y-2">
        <p>
          You call (855) 664-1144 or email info@northernfacilitiesgroup.ca with details about your
          window cleaning needs.
        </p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>We answer your call and listen to your needs</li>
          <li>
            We ask clarifying questions (residential or commercial, facility size, window access,
            frequency)
          </li>
          <li>We provide initial guidance and schedule an assessment (if needed)</li>
        </ul>
      </div>
    ),
    timeline: 'Same day response',
  },
  {
    title: 'Free Assessment (Commercial) OR Direct Quote (Residential)',
    description: (
      <div className="space-y-4">
        <div>
          <p className="font-medium text-navy-900 flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" /> For Residential Clients:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-1">
            <li>We provide a quote based on your description</li>
            <li>You approve the quote and schedule a service date</li>
            <li>No site visit needed unless you request one</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-navy-900 flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" /> For Commercial Clients:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-1">
            <li>We schedule a free facility assessment at your location</li>
            <li>
              Our team evaluates facility size, window count, access challenges, and cleaning
              frequency
            </li>
            <li>We discuss your operational needs and scheduling preferences</li>
          </ul>
        </div>
      </div>
    ),
    timeline: 'Assessment within 2-3 business days of contact',
  },
  {
    title: 'Custom Plan & Service Agreement',
    description: (
      <div className="space-y-2">
        <p>We create a personalized window cleaning plan tailored to your specific needs.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What's included:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Service scope (what windows we'll clean, frequency)</li>
          <li>Recommended cleaning schedule (monthly, quarterly, seasonal, or one-time)</li>
          <li>Service date and time (coordinated with your availability)</li>
          <li>Contact information and emergency procedures</li>
          <li>Payment terms and invoice details</li>
        </ul>
        <p className="mt-2 font-medium">You review and approve the plan.</p>
      </div>
    ),
    timeline: 'Plan delivered within 1 business day',
  },
  {
    title: 'Preparation & Scheduling',
    description: (
      <div className="space-y-2">
        <p>Once you approve, we lock in your service date and schedule.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Service date confirmed in writing</li>
          <li>Crew assigned and briefed</li>
          <li>Equipment prepared and inspected</li>
          <li>Access requirements confirmed (gates, security, facility rules)</li>
        </ul>
        <p className="mt-2">
          We send you a confirmation email with service time and crew contact info.
        </p>
      </div>
    ),
    timeline: 'Service scheduled within 1-2 weeks (residential) or 2-3 weeks (commercial)',
  },
  {
    title: 'Pre-Service Coordination',
    description: (
      <div className="space-y-2">
        <p>24 hours before service, we confirm everything is ready.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>We text or call to confirm you're available</li>
          <li>We confirm facility access and any special instructions</li>
          <li>We ensure weather won't impact service (rain reschedules automatically)</li>
          <li>Crew confirms arrival time and parking</li>
        </ul>
        <p className="mt-2 font-medium">You confirm all details are correct.</p>
      </div>
    ),
    timeline: '24 hours before scheduled service',
  },
  {
    title: 'Professional Window Cleaning',
    description: (
      <div className="space-y-2">
        <p>Our crew arrives at the scheduled time with professional Tucker® equipment.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Crew introduces themselves and confirms scope of work</li>
          <li>Safety perimeter established (for commercial)</li>
          <li>Professional cleaning begins using water-fed systems</li>
          <li>Windows cleaned methodically (interior/exterior, frames, sills)</li>
          <li>Equipment setup and cleanup handled by crew</li>
        </ul>
        <p className="mt-2 font-medium">
          You can watch progress or go about your day—we handle everything.
        </p>
      </div>
    ),
    timeline: '2-4 hours (residential) to 4-8 hours (commercial), depending on facility size',
  },
  {
    title: 'Quality Inspection & Photo Documentation',
    description: (
      <div className="space-y-2">
        <p>After cleaning is complete, we conduct a quality check.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Crew supervisor inspects all cleaned windows</li>
          <li>Photos taken for your records</li>
          <li>Any touch-ups completed on the spot</li>
          <li>You walk through and approve the work</li>
        </ul>
        <p className="mt-2">
          For commercial clients, photo documentation is provided for compliance records.
        </p>
      </div>
    ),
    timeline: 'Included in service time (30 minutes)',
  },
  {
    title: 'Post-Service Communication',
    description: (
      <div className="space-y-2">
        <p>You receive confirmation that service is complete.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Crew provides final confirmation via text/email</li>
          <li>For commercial clients: Photos and service report sent same day</li>
          <li>We follow up to confirm satisfaction</li>
          <li>Any questions or concerns addressed immediately</li>
        </ul>
      </div>
    ),
    timeline: 'Same day as service',
  },
  {
    title: 'Invoice & Payment',
    description: (
      <div className="space-y-2">
        <p>You receive a professional invoice.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Detailed invoice sent via email or mail (your preference)</li>
          <li>Invoice includes service scope, date completed, and total amount due</li>
          <li>Multiple payment options available: Credit card, Check, Bank transfer, Auto-pay</li>
        </ul>
        <p className="mt-2 font-medium">Payment due within 15 days of invoice date.</p>
      </div>
    ),
    timeline: 'Invoice sent within 24 hours of service completion',
  },
  {
    title: 'Ongoing Service (If Recurring)',
    description: (
      <div className="space-y-2">
        <p>
          For monthly, quarterly, or seasonal services, we maintain your schedule automatically.
        </p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Next service automatically scheduled based on your plan</li>
          <li>Pre-service confirmation sent 24 hours before</li>
          <li>Service completed on schedule with same professional standard</li>
          <li>Ongoing communication and documentation provided</li>
        </ul>
        <p className="mt-2 font-medium">You never have to reschedule—we handle it.</p>
      </div>
    ),
    timeline: 'Recurring on your approved schedule',
  },
  {
    title: 'Annual Review & Adjustment',
    description: (
      <div className="space-y-2">
        <p>Once per year, we review your service plan to ensure it's still meeting your needs.</p>
        <p className="font-medium text-navy-900 mt-3 flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> What happens:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>We ask: Are you satisfied with frequency and quality?</li>
          <li>Do you need to adjust the schedule for seasonal changes?</li>
          <li>Are there any additional services you'd like to add?</li>
          <li>We make adjustments if needed (no additional fees)</li>
        </ul>
      </div>
    ),
    timeline: 'Annual, scheduled at your convenience',
  },
];

export function AnimatedServiceSteps() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for Next.js SSR)
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
  const viewportAmount = isMobile ? 0.5 : 0.8; // 0.8 for desktop so it doesn't get stuck if screen is short

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
          // If reduced motion, we disable the delays and movement
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
                  className="text-muted-foreground text-[14px] md:text-[16px] leading-relaxed mb-5 md:mb-6"
                >
                  {step.description}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: viewportAmount }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: currentDelay + 0.4 }}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-xs md:text-sm text-navy-900/80"
                >
                  <span className="opacity-70 mr-1 md:mr-2">Timeline:</span> {step.timeline}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
