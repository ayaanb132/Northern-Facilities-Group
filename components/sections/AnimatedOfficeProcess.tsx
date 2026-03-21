'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Sparkles, Monitor, ShieldCheck, CheckSquare } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Office Assessment & Schedule Design`,
    description: `We evaluate your office layout, team size, traffic patterns, and work schedule to design a cleaning program that fits seamlessly.`,
    bullets: [
      `Open plan vs. private office vs. hybrid layout`,
      `Kitchen and break room use frequency`,
      `Restroom count and daily traffic volume`,
      `Work-from-office schedule: days, hours, peak periods`,
      `Seasonal variation (cold/flu season, events, client visits)`,
    ],
    keyPoint: `Deliverable: Custom cleaning schedule matching your office schedule — not a generic template.`,
  },
  {
    number: 2,
    icon: Sparkles,
    title: `Nightly Standard Clean`,
    description: `Consistent end-of-day cleaning so every morning your office is fresh, professional, and ready for the day.`,
    bullets: [
      `Desks, workstations, and common areas vacuumed and wiped`,
      `Kitchen: counters, appliances, sink, and microwave cleaned`,
      `Restrooms: fully sanitized, restocked, and deodorized`,
      `All trash and recycling emptied and replaced`,
      `Floors vacuumed (carpet) or mopped (hardwood/tile)`,
    ],
    keyPoint: `Key point: Consistent nightly cleaning prevents mess from accumulating and keeps the office inspection-ready.`,
  },
  {
    number: 3,
    icon: Monitor,
    title: `High-Touch Surface Sanitization`,
    description: `Keyboards, phones, door handles, elevator buttons — the surfaces that spread germs most effectively.`,
    bullets: [
      `Keyboard, mouse, monitor, and phone sanitization`,
      `Door handles, light switches, and shared touchpoints`,
      `Conference room surfaces: table, chairs, AV equipment`,
      `Shared equipment: printers, copiers, water coolers`,
      `Elevator buttons, stair handrails, reception counters`,
    ],
    keyPoint: `Output: EPA-registered disinfectants used on all high-touch surfaces — cold/flu season priority.`,
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: `Deep Cleaning & Seasonal Service`,
    description: `Periodic deep cleaning covers areas standard cleaning doesn't reach — typically monthly or quarterly.`,
    bullets: [
      `Carpet deep extraction (quarterly)`,
      `Hard floor maintenance: scrubbing, polishing, waxing (quarterly)`,
      `Window and glass interior cleaning (monthly)`,
      `Kitchen appliance interior deep clean (monthly)`,
      `HVAC vent and air quality maintenance`,
    ],
    keyPoint: `Key point: Regular deep cleaning prevents deterioration and extends the life of your office space.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Quality Inspection & Reporting`,
    description: `Every cleaning session is verified and documented — you receive monthly reporting on all areas.`,
    bullets: [
      `Crew lead walkthrough after every session`,
      `Photo log of problem areas or maintenance needs`,
      `Monthly summary: areas covered, issues found, supply status`,
      `Quarterly review: quality assessment and schedule optimization`,
      `Direct contact for complaints, requests, or schedule changes`,
    ],
    keyPoint: `Output: No surprises. Consistent quality with an accountable reporting trail.`,
  },
];

export function AnimatedOfficeProcess() {
  const [visible, setVisible] = useState<boolean[]>(new Array(steps.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => { const next = [...prev]; next[i] = true; return next; });
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
      <div className="absolute left-[27px] md:left-[35px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />
      <div className="space-y-8 md:space-y-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.number} ref={(el) => { refs.current[i] = el; }} className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'translateY(0)' : 'translateY(40px)' }}>
              <div className="flex gap-5 md:gap-7">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-transform duration-700"
                    style={{ transform: visible[i] ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-180deg)', transitionDelay: `${i * 150}ms` }}>
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
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />{b}
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
