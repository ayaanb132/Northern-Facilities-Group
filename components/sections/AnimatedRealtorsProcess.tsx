'use client';

import { useEffect, useRef, useState } from 'react';
import { Key, Sparkles, Eye, Camera, CheckSquare } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Key,
    title: `Property Brief & Timeline Assessment`,
    description: `We start with your listing, showing schedule, and any specific concerns about the property's condition.`,
    bullets: [
      `Property type and size overview`,
      `Listing date and showing schedule`,
      `Current condition vs. showing standard gap`,
      `Specific problem areas (pet stains, odors, stains)`,
      `Timeline to listing and any open house dates`,
    ],
    keyPoint: `Deliverable: Confirmed cleaning schedule aligned to your listing and showing timeline.`,
  },
  {
    number: 2,
    icon: Sparkles,
    title: `Pre-Listing Deep Clean`,
    description: `A complete, professional deep clean of the entire property — every room, every surface, every fixture.`,
    bullets: [
      `All rooms deep-cleaned and staged-ready`,
      `Kitchen: appliances, cabinets, counters, and sink fully cleaned`,
      `Bathrooms: tiles, grout, fixtures, and mirrors pristine`,
      `Floors: vacuumed, mopped, and professionally treated`,
      `Closets, storage, light fixtures, baseboards, and vents`,
    ],
    keyPoint: `Key point: Listing photos taken in a professionally cleaned space perform measurably better than photos taken in a standard-clean space.`,
  },
  {
    number: 3,
    icon: Eye,
    title: `Weekly Showing Maintenance`,
    description: `After the initial deep clean, maintaining showing-ready condition between open houses is a smaller, faster operation.`,
    bullets: [
      `Bathrooms freshened and re-stocked (if vacant)`,
      `Kitchen surfaces wiped and any marks removed`,
      `Floors vacuumed or swept to show-ready standard`,
      `Any odor treatment applied (vacant properties)`,
      `Quick-clean version available (2–3 hours per visit)`,
    ],
    keyPoint: `Output: Every showing, every open house — the property is in perfect condition.`,
  },
  {
    number: 4,
    icon: Camera,
    title: `Photo-Ready Preparation`,
    description: `The final prep before listing photography — everything detailed to camera-ready standard.`,
    bullets: [
      `All glass and mirrors: streak-free, lint-free`,
      `Stainless appliances: fingerprint-free and polished`,
      `Hardwood or tile floors: buffed to show sheen in photos`,
      `Window sills and ledges: dust-free for close-up shots`,
      `Final walkthrough with property agent pre-shoot`,
    ],
    keyPoint: `Key point: Listing photos are the first impression buyers have. Photo-ready cleaning is different from general cleaning.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Move-Out & Closing Ready`,
    description: `When the property sells, final cleaning ensures it's in move-in condition for the buyers — avoiding any closing disputes.`,
    bullets: [
      `Full deep clean of entire property`,
      `All appliances: interior and exterior cleaned`,
      `Garage, basement, and storage areas included`,
      `Before and after photos documenting condition`,
      `Move-in ready certification provided to your client`,
    ],
    keyPoint: `Output: Buyers take possession of a professionally cleaned property. Fewer complaints, better referrals, stronger relationship.`,
  },
];

export function AnimatedRealtorsProcess() {
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
