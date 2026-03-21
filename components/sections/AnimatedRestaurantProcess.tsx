'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ClipboardList,
  Sun,
  Flame,
  Wind,
  Coffee,
  CheckSquare,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: `Restaurant Assessment & Compliance Audit`,
    description: `Complete evaluation of your kitchen layout, equipment types, grease accumulation risk, and health code compliance requirements.`,
    bullets: [
      `Kitchen layout, hood systems, and equipment inventory`,
      `Grease trap and exhaust cleaning schedule assessment`,
      `Health inspection history and specific compliance gaps`,
      `NFPA 96 requirements for hood and duct systems`,
      `Walk-in cooler/freezer sanitation needs`,
    ],
    keyPoint: `Deliverable: Compliance map with cleaning schedule, frequency requirements, and health code gaps identified.`,
  },
  {
    number: 2,
    icon: Sun,
    title: `Pre-Service Preparation & Opening Setup`,
    description: `Every morning, your kitchen is sanitized and inspection-ready before the first staff member begins prep.`,
    bullets: [
      `All cooking surfaces wiped down and sanitized`,
      `Prep areas cleared, sanitized, and ready`,
      `Front-of-house: tables, menus, chairs, and hostess area reset`,
      `Restrooms: sanitized and stocked`,
      `Floor inspection and spot cleaning from previous evening`,
    ],
    keyPoint: `Output: Inspection-ready every morning before first shift — never scrambling to clean before service.`,
  },
  {
    number: 3,
    icon: Flame,
    title: `Kitchen Deep Clean (Nightly)`,
    description: `The most critical cleaning in any restaurant — systematic nightly deep clean of every kitchen surface after service ends.`,
    bullets: [
      `Grills, fryers, flat tops: degreased and scrubbed to bare metal`,
      `All cooking equipment exterior: stoves, ovens, salamanders, steamers`,
      `Prep surfaces: cutting boards, prep tables, counters sanitized`,
      `Food storage areas: shelving wiped, spills removed, organization verified`,
      `Floors: grease-safe degreaser applied, scrubbed, mopped, and dried`,
    ],
    keyPoint: `Key point: Nightly kitchen deep cleaning is the foundation of health code compliance. Skipping it compounds grease buildup daily.`,
  },
  {
    number: 4,
    icon: Wind,
    title: `Hood, Exhaust & Grease Management`,
    description: `Commercial hood and exhaust system cleaning per NFPA 96 standards — required for fire safety compliance and health inspections.`,
    bullets: [
      `Hood filter removal and commercial degreasing`,
      `Exhaust duct and fan cleaning (frequency: inspection-based)`,
      `Grease trap cleaning and documentation`,
      `Rooftop grease containment verification`,
      `NFPA 96 compliance documentation and service certificate`,
    ],
    keyPoint: `Output: NFPA 96 compliance certificate — required by fire departments and health inspectors.`,
  },
  {
    number: 5,
    icon: Coffee,
    title: `Dining Room, Bar & Front-of-House`,
    description: `The guest experience starts with cleanliness. Dining areas, bar surfaces, and restrooms cleaned and maintained to guest-facing standards.`,
    bullets: [
      `All table surfaces sanitized — every dining area, every booths`,
      `Bar top, speed rail, tap handles, and back-bar sanitized`,
      `Restrooms: deep-cleaned nightly, restocked, inspected during service`,
      `Windows, mirrors, and glass: streak-free cleaning`,
      `High chairs, menus, salt & pepper, condiment stations cleaned`,
    ],
    keyPoint: `Key point: Guests notice cleanliness immediately. Front-of-house cleanliness directly affects reviews and repeat visits.`,
  },
  {
    number: 6,
    icon: CheckSquare,
    title: `Health Inspection Documentation`,
    description: `Complete cleaning records, sanitation logs, and temperature documentation — everything inspectors need organized and ready.`,
    bullets: [
      `Daily sanitation log (areas cleaned, time, staff, products used)`,
      `Temperature logs for coolers and heating equipment`,
      `Hood cleaning certificate (dated, signed, on display)`,
      `Pest control coordination documentation`,
      `Staff certification records: Food Handler Certification, WHMIS`,
    ],
    keyPoint: `Output: Audit-ready documentation file — pass health inspections with confidence.`,
  },
];

export function AnimatedRestaurantProcess() {
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
