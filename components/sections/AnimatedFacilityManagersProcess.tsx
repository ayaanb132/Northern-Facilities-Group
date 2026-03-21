'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Search,
  Shuffle,
  BarChart2,
  FileCheck,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: `Portfolio Assessment & SLA Definition`,
    description: `We start by understanding your portfolio, current pain points, compliance requirements, and performance goals across all properties.`,
    bullets: [
      `Audit of current vendor relationships and service gaps`,
      `Property types: offices, retail, mixed-use, industrial, residential`,
      `Compliance requirements per property (health codes, fire, ADA)`,
      `Performance goals: resident satisfaction, inspection readiness, cost`,
      `Operational constraints: hours, occupancy, special events`,
    ],
    keyPoint: `Deliverable: Master Service Agreement covering all properties with SLA specifications, performance metrics, and consolidated billing.`,
  },
  {
    number: 2,
    icon: Shuffle,
    title: `Vendor Consolidation & Coordination`,
    description: `We replace your fragmented vendor relationships with a single, coordinated team — one contact, one billing cycle, one set of standards for every property.`,
    bullets: [
      `Consolidate daily cleaning and maintenance across all sites`,
      `24/7 on-call emergency response team for every property`,
      `Centralized compliance documentation and reporting`,
      `One invoice for entire portfolio — no surprise bills`,
      `For services we don't provide (HVAC, plumbing), we coordinate and verify`,
    ],
    keyPoint: `Output: From 5–8 vendors to one coordinated partner. Estimated 20 hrs/month in management time recovered.`,
  },
  {
    number: 3,
    icon: BarChart2,
    title: `Portfolio-Wide Dashboard & KPIs`,
    description: `Real-time visibility into facility performance across all sites — from mobile or desktop, 24/7.`,
    bullets: [
      `Status per property: last cleaning, next scheduled, open issues`,
      `KPI tracking: compliance %, incident log, budget spend YTD`,
      `Maintenance alerts: preventive maintenance due, upcoming inspections`,
      `Budget tracking: actual spend vs budget per property`,
      `Mobile access — check any property from anywhere, anytime`,
    ],
    keyPoint: `Key point: Daily alerts, weekly KPI summaries, monthly full-portfolio reports, quarterly executive reviews.`,
  },
  {
    number: 4,
    icon: FileCheck,
    title: `Compliance & Documentation Management`,
    description: `Audit-ready documentation for all properties — centralized, organized, and accessible when inspectors arrive.`,
    bullets: [
      `Daily cleaning verification with photos, checklists, and timestamps`,
      `Safety incident log: spills, damage, near-misses`,
      `Equipment maintenance and certification records`,
      `Regulatory tracking: which inspections are due and when`,
      `Audit support — when inspectors come, we provide the complete file`,
    ],
    keyPoint: `Result: One audit package covers all properties. Not five files from five vendors.`,
  },
  {
    number: 5,
    icon: TrendingUp,
    title: `Continuous Optimization & Reporting`,
    description: `Monthly performance reviews, quarterly strategic analysis, and annual portfolio evaluations keep quality high and costs optimized.`,
    bullets: [
      `Monthly: KPI review, issue resolution, optimization recommendations`,
      `Quarterly: 6-month trend analysis, budget review, compliance status`,
      `Annual: Full year review, projections, contract renewal or adjustment`,
      `Staffing scaled up or down as portfolio grows or changes`,
      `Recommendations for cost reduction without quality compromise`,
    ],
    keyPoint: `Output: Consistent quality improvement, measurable cost control, no surprises.`,
  },
];

export function AnimatedFacilityManagersProcess() {
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
