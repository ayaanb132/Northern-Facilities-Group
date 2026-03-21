'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Users, Sparkles, ShieldCheck, CheckSquare } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Condo Property Assessment`,
    description: `Complete building evaluation — common areas, amenities, resident touchpoints, and board compliance requirements.`,
    bullets: [
      `Common areas: lobbies, hallways, stairwells, elevators`,
      `Amenities: gym, pool area, party room, meeting rooms`,
      `High-traffic resident touchpoints: mailroom, package room, laundry`,
      `Board and management compliance expectations`,
      `Current cleaning gaps and frequency adjustments needed`,
    ],
    keyPoint: `Deliverable: Building-specific cleaning plan mapped to all areas with confirmed frequency and SLA.`,
  },
  {
    number: 2,
    icon: Users,
    title: `Lobby & First Impression Areas`,
    description: `The lobby is the first and last thing every resident and visitor sees. It needs to be consistently pristine.`,
    bullets: [
      `Lobby floors: daily sweeping, scrubbing, spot-cleaning of tracked-in dirt`,
      `Front desk, concierge, and reception areas`,
      `Elevator interiors: doors, buttons, floors daily or twice-daily`,
      `Mailroom, package room, and entry vestibule`,
      `All glass, mirrors, and touch panels streak-free`,
    ],
    keyPoint: `Key point: First impressions drive resident satisfaction and property value. Lobby cleanliness is non-negotiable.`,
  },
  {
    number: 3,
    icon: Sparkles,
    title: `Amenity Spaces`,
    description: `Gyms, pools, party rooms, and shared spaces require more intensive cleaning — they see high use and quick contamination.`,
    bullets: [
      `Fitness centre: all equipment wiped and disinfected daily, floors mopped`,
      `Pool area: tiles, pool deck, change rooms, and showers`,
      `Party room / meeting space: full clean after each booking`,
      `Outdoor spaces: patios, BBQ areas, rooftop terraces`,
      `Parking garage: spot cleaning and periodic full sweeping`,
    ],
    keyPoint: `Output: Clean amenities improve resident satisfaction scores and reduce board complaints.`,
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: `Hallways, Stairwells & Mechanical`,
    description: `Every floor, every hallway, every stairwell — consistently maintained so residents never encounter neglected spaces.`,
    bullets: [
      `All floor hallways: weekly deep clean, daily inspection`,
      `Stairwells: biweekly full clean, handrails disinfected weekly`,
      `Garbage and recycling rooms: daily clean, odour treatment weekly`,
      `Storage areas and resident locker rooms`,
      `Mechanical room exteriors and utility areas`,
    ],
    keyPoint: `Key point: Hallway cleanliness directly affects resident reviews on renting/selling platforms.`,
  },
  {
    number: 5,
    icon: CheckSquare,
    title: `Board Reporting & Resident Communication`,
    description: `Transparent reporting for building management and boards — proof of service delivery and quality maintenance.`,
    bullets: [
      `Monthly cleaning completion log per area`,
      `Photo documentation of problem areas`,
      `Damage or maintenance issues flagged immediately`,
      `Board-ready quarterly report with KPIs and improvement recommendations`,
      `Resident complaint response process integrated with management`,
    ],
    keyPoint: `Output: Board-ready monthly report — transparent accountability, no guesswork.`,
  },
];

export function AnimatedCondoProcess() {
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
