'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ClipboardList,
  Wrench,
  Droplets,
  AlertTriangle,
  CheckSquare,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: `Complete Facility & Operations Assessment`,
    description: `We start by understanding your facility layout, equipment types, product contamination risks, OSHA compliance requirements, and operational schedule constraints.`,
    bullets: [
      `Warehouse size, aisle configuration, high-reach zones`,
      `Equipment types: forklifts, racking, dock equipment`,
      `Product types and contamination risk (dust sensitivity, perishables)`,
      `OSHA compliance requirements specific to your operation`,
      `Schedule constraints — when can we clean without disrupting shipping`,
    ],
    keyPoint: `Deliverable: Detailed facility map with cleaning zones, frequency & compliance requirements.`,
  },
  {
    number: 2,
    icon: Wrench,
    title: `Daily Floor Maintenance & Dust Control`,
    description: `Systematic, consistent cleaning prevents problems before they develop — industrial-grade floor scrubbing with simultaneous dust collection.`,
    bullets: [
      `Wide-path floor scrubbers (20"+ cleaning width) covering 10,000+ sq ft per cycle`,
      `HEPA-filtered dust collection — no dust clouds redistributed into the air`,
      `Weekly high-reach dust removal from racking, beams, and shelving`,
      `Corners, edges, and hard-to-reach zones cleaned biweekly with HEPA vacuums`,
      `High-touch surfaces sanitized in break rooms and offices`,
    ],
    keyPoint: `Key point: We prevent dust accumulation — not just react to visible mess.`,
  },
  {
    number: 3,
    icon: Droplets,
    title: `Equipment Area Degreasing & Protection`,
    description: `Equipment areas accumulate dirt, grease, and dust. Dirty equipment runs less efficiently and creates safety hazards. We clean it without shutting down operations.`,
    bullets: [
      `Forklift and pallet jack exterior cleaning`,
      `Loading dock equipment and conveyor systems`,
      `Racking and shelving system degreasing`,
      `Eco-safe degreasers — no damage to equipment or floors`,
      `Protective coating application prevents immediate re-contamination`,
    ],
    keyPoint: `Output: Monthly or quarterly depending on operation — keeps equipment running efficiently.`,
  },
  {
    number: 4,
    icon: AlertTriangle,
    title: `Safety, Spill Response & Compliance`,
    description: `Warehouses carry spill risks. Fast, documented response prevents injuries, OSHA violations, and liability exposure.`,
    bullets: [
      `Trained response team on 24-hour standby for emergencies`,
      `Standard spill kit stocked and maintained on-site`,
      `HAZMAT coordination (bloodborne, chemical, or industrial hazards)`,
      `Quick cleanup prevents worker slip hazards and incident reports`,
      `Incident logs and floor condition assessments for OSHA compliance`,
    ],
    keyPoint: `Key point: For existing clients — 2–4 hour emergency response across the GTA.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Quality Inspections & Reporting`,
    description: `Every cleaning session is verified and documented. You have audit-ready proof of professional maintenance at all times.`,
    bullets: [
      `Crew lead walkthrough after every cleaning with photos`,
      `Weekly report: completion logs, problem areas, damage documentation`,
      `Monthly summary: all areas cleaned, OSHA verification, equipment status`,
      `Quarterly review: cost analysis, optimization, compliance certification`,
      `Accessible records — never scrambling for documentation during audits`,
    ],
    keyPoint: `Output: Full audit trail — daily, weekly, monthly, and quarterly.`,
  },
];

export function AnimatedWarehouseProcess() {
  const [visible, setVisible] = useState<boolean[]>(new Array(steps.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 150);
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-[27px] md:left-[35px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

      <div className="space-y-8 md:space-y-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              ref={(el) => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              <div className="flex gap-5 md:gap-7">
                {/* Step badge */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-transform duration-700"
                    style={{
                      transform: visible[i] ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-180deg)',
                      transitionDelay: `${i * 150}ms`,
                    }}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="text-xs font-bold text-primary mt-1 opacity-70">0{step.number}</span>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="text-sm font-semibold text-primary">{step.keyPoint}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
