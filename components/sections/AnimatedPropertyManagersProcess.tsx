'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Search,
  Sparkles,
  Layers,
  Paintbrush2,
  CheckSquare,
  Camera,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Move-Out Inspection & Cleaning Plan`,
    description: `We assess the unit condition and build a targeted cleaning plan with a defined timeline and move-in ready date.`,
    bullets: [
      `Unit size, layout, and current condition assessment`,
      `Carpet vs hard flooring — type and treatment required`,
      `Appliance condition and specific cleaning needs`,
      `Wall condition check — paint touch-up required?`,
      `Time available before next tenant move-in`,
    ],
    keyPoint: `Deliverable: Cleaning plan with specific timeline and confirmed move-in ready date.`,
  },
  {
    number: 2,
    icon: Sparkles,
    title: `Deep Cleaning & Sanitization`,
    description: `Complete unit cleaning to move-in ready standard — every surface, every fixture, every overlooked corner.`,
    bullets: [
      `All counters, cabinets, and appliances (interior and exterior)`,
      `Bathrooms: fixtures sanitized, tiles scrubbed, caulk cleaned`,
      `Kitchen appliances deep-cleaned — oven, fridge, microwave`,
      `Baseboards, trim, and light fixtures dusted and wiped`,
      `Closets, storage areas, and all doors/handles`,
    ],
    keyPoint: `Output: Every surface tenant-ready — no corners cut.`,
  },
  {
    number: 3,
    icon: Layers,
    title: `Carpet & Floor Treatment`,
    description: `Different floors need different approaches. We handle carpet, tile, vinyl, laminate, and hardwood with appropriate professional treatment.`,
    bullets: [
      `Carpet: deep extraction removes embedded dirt, stain treatment, deodorization`,
      `Tile: deep scrubbing, grout restoration, protective sealing`,
      `Vinyl and laminate: professional deep scrub and protective coat`,
      `Hardwood: safe professional cleaning and spot repair as needed`,
      `Protection coating applied — extends floor life, resists future stains`,
    ],
    keyPoint: `Key point: Professional extraction removes embedded dirt that regular vacuuming leaves behind.`,
  },
  {
    number: 4,
    icon: Paintbrush2,
    title: `Paint Touch-Up & Minor Repairs`,
    description: `Minor cosmetic issues handled to get the unit showing-ready and tenant-ready fast.`,
    bullets: [
      `Wall scuffs and marks removal`,
      `Paint touch-up on walls where needed`,
      `Caulk repair in bathroom and kitchen seal areas`,
      `Light fixture cosmetic touch-ups`,
      `Cabinet hardware replacement (if needed for move-in standard)`,
    ],
    keyPoint: `Note: Cosmetic repairs only — major structural repairs coordinated separately.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Final Inspection & Move-In Verification`,
    description: `A detailed walkthrough verifies every area of the unit meets move-in ready standard.`,
    bullets: [
      `All surfaces clean, sanitized, and dry`,
      `Floors clean and protected, no residue`,
      `Windows and glass pristine — no streaks`,
      `Plumbing, lighting, and HVAC functional`,
      `No visible damage, no leftover items, unit smells fresh`,
    ],
    keyPoint: `Deliverable: Move-in ready certification — signed off and documented.`,
  },
  {
    number: 6,
    icon: Camera,
    title: `Documentation & Tenant-Ready Photos`,
    description: `Before and after photos plus a completion report give you proof for deposits, disputes, and your own property records.`,
    bullets: [
      `Before and after photos — every room documented`,
      `Move-in ready checklist with all areas verified`,
      `Minor repairs noted and photographed`,
      `Completion date and timestamp`,
      `Digital files provided for your property management records`,
    ],
    keyPoint: `Output: Complete documentation package — ready for new tenant, insurance, or deposit disputes.`,
  },
];

export function AnimatedPropertyManagersProcess() {
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
        { threshold: 0.1 },
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="relative">
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
