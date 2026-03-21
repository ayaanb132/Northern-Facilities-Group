'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Sparkles, Layers, Paintbrush2, CheckSquare, Camera } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Home Assessment & Cleaning Scope`,
    description: `We evaluate the home and build a complete scope before scheduling — so there are no surprises on the day.`,
    bullets: [
      `Number of rooms, bedrooms, bathrooms`,
      `Floor types in each room — carpet, hardwood, tile`,
      `Kitchen appliance condition and specific requirements`,
      `Any known problem areas: pet stains, high-traffic zones, odors`,
      `Timeline requirement — move-out, move-in, or annual deep clean`,
    ],
    keyPoint: `Deliverable: Fixed price and timeline confirmed before work begins — no surprise charges on completion.`,
  },
  {
    number: 2,
    icon: Sparkles,
    title: `Room-by-Room Deep Cleaning`,
    description: `Every room cleaned systematically — from ceiling track lighting to baseboards — in the right order to avoid re-contaminating cleaned surfaces.`,
    bullets: [
      `Top-to-bottom approach: lights, vents, walls, surfaces, then floors`,
      `All furniture moved where possible for complete floor access`,
      `Closets fully emptied and cleaned (move-out standard)`,
      `Window sills, ledges, and blind slats cleaned`,
      `All light switches, outlets, and door knobs sanitized`,
    ],
    keyPoint: `Key point: Top-to-bottom sequencing is the only way to avoid re-contaminating surfaces you just cleaned.`,
  },
  {
    number: 3,
    icon: Layers,
    title: `Carpet & Floor Treatment`,
    description: `Years of daily use leave floors heavily soiled even when they look acceptable. Professional treatment restores them.`,
    bullets: [
      `Carpet extraction: removes embedded dirt and residual odors`,
      `Pet stain enzymatic treatment applied to affected areas`,
      `Hardwood: professional cleaning, spot treatment, and protective polish`,
      `Tile and grout: grout scrubbing, tile cleaning, sealing`,
      `Vinyl/laminate: deep scrub, degreasing, and protective coat`,
    ],
    keyPoint: `Output: Floors that look, smell, and feel professionally clean — not just surface-level tidy.`,
  },
  {
    number: 4,
    icon: Paintbrush2,
    title: `Kitchen & Bathroom Deep Clean`,
    description: `The two most important rooms in any home — and the hardest to fully clean without professional products and technique.`,
    bullets: [
      `Oven interior: commercial degreaser removes baked-on grease`,
      `Fridge interior: all shelving removed and sanitized separately`,
      `All cabinets: interior and exterior cleaned and deodorized`,
      `Bathrooms: grout scrubbed, tile cleaned, fixtures descaled`,
      `All caulk cleaned, shower glass polished streak-free`,
    ],
    keyPoint: `Key point: Kitchen and bathroom conditions drive buyer or tenant decisions faster than any other room.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Final Walkthrough & Quality Check`,
    description: `Every room signed off against a room-by-room checklist before we leave — you shouldn't find anything we missed.`,
    bullets: [
      `All rooms checked against the pre-job assessment list`,
      `Any missed areas or client concerns addressed on-site`,
      `All cleaning products and equipment removed`,
      `Windows and glass: final streak check in natural light`,
      `Client present for final walkthrough (recommended)`,
    ],
    keyPoint: `Output: You walk through before we leave. If anything is missed, we correct it immediately.`,
  },
  {
    number: 6,
    icon: Camera,
    title: `Documentation & Move-In Certification`,
    description: `For move-out and move-in cleans — before and after photos plus a completion certificate to protect all parties.`,
    bullets: [
      `Before and after photos of all rooms and key areas`,
      `Condition notes: any existing damage documented`,
      `Move-in ready certification signed by crew lead`,
      `Digital photos provided within 24 hours`,
      `Documentation available for deposit, insurance, or lease records`,
    ],
    keyPoint: `Output: Complete photo and document record — protection for landlords, tenants, and buyers.`,
  },
];

export function AnimatedResidentialProcess() {
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
