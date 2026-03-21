'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Sparkles, Eye, ShieldCheck, CheckSquare } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Store Assessment & Traffic Pattern Analysis`,
    description: `Every retail space has unique cleaning challenges — traffic patterns, product types, display surfaces, and customer experience standards.`,
    bullets: [
      `Store layout, high-traffic zones, and customer flow patterns`,
      `Display case types: glass, acrylic, open shelving`,
      `Restroom count and customer-facing area expectations`,
      `Operating hours and cleaning window available`,
      `Foot traffic volume — weekday vs. weekend variance`,
    ],
    keyPoint: `Deliverable: Store-specific schedule designed around your traffic patterns and operating hours.`,
  },
  {
    number: 2,
    icon: Eye,
    title: `Customer-Facing Surface Excellence`,
    description: `Every surface a customer touches or sees must be pristine — fingerprints, smudges, and streaks are unacceptable in retail.`,
    bullets: [
      `All display glass: fingerprint and streak-free cleaning`,
      `Product shelving and display surfaces wiped daily`,
      `Checkout counters and POS area sanitized every session`,
      `Fitting rooms: cleaned and restocked between customers or every close`,
      `Entrance doors and glass panels: daily cleaning`,
    ],
    keyPoint: `Key point: Clean displays increase purchase confidence. Dirty glass sends customers away.`,
  },
  {
    number: 3,
    icon: Sparkles,
    title: `Floors & High-Traffic Zone Maintenance`,
    description: `Retail floors take heavy foot traffic — they need daily care to maintain appearance and prevent deterioration.`,
    bullets: [
      `Hard floors: swept, mopped, and spot-cleaned every session`,
      `Carpeted areas: vacuumed nightly, extraction quarterly`,
      `Entrance matting: cleaned and maintained`,
      `High-traffic zones (checkout, fitting rooms): more frequent attention`,
      `Seasonal deep cleaning of all float and base areas`,
    ],
    keyPoint: `Output: Floors that stay clean-looking between professional sessions — not just right after cleaning.`,
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: `Restroom & Back-of-House Standards`,
    description: `Customer restrooms signal your brand standards. Back-of-house affects staff morale and operational efficiency.`,
    bullets: [
      `Customer restrooms: fully sanitized, stocked, and fresh-smelling`,
      `Break rooms and staff areas: clean counters, appliances, floors`,
      `Storage: organized and clean — not just hidden mess`,
      `Warehouse or receiving area: dust-free and navigable`,
      `Restroom supply inventory tracked — never runs out during business hours`,
    ],
    keyPoint: `Key point: Restroom cleanliness impacts customer reviews and brand perception directly.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Reporting & Account Management`,
    description: `Monthly reporting on completion, quality, and any maintenance issues identified — with easy escalation for urgent needs.`,
    bullets: [
      `Nightly completion verification with photos`,
      `Monthly completion report and quality summary`,
      `Maintenance issues flagged and escalated`,
      `Supply inventory management and restocking`,
      `Direct line to account manager for urgent requests or schedule changes`,
    ],
    keyPoint: `Output: Transparent, accountable service with proactive communication — no guesswork.`,
  },
];

export function AnimatedRetailProcess() {
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
