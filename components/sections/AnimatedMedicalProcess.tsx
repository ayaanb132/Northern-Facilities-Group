'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ClipboardCheck,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Trash2,
  FileText,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: `Medical Practice Assessment & Compliance Audit`,
    description: `Complete evaluation of your practice's cleaning needs, compliance gaps, and biohazard management requirements.`,
    bullets: [
      `Facility layout and high-touch surfaces inventory`,
      `Review of current cleaning protocols (if any)`,
      `Biohazard management: sharps, blood, contaminated materials`,
      `OSHA bloodborne pathogen requirements for your practice type`,
      `State/local health department requirements and inspection schedule`,
    ],
    keyPoint: `Deliverable: Compliance audit report with specific findings and required protocol recommendations.`,
  },
  {
    number: 2,
    icon: GraduationCap,
    title: `Staff Training & Certification`,
    description: `All staff trained and certified in medical facility cleaning protocols — documentation available for audits.`,
    bullets: [
      `OSHA bloodborne pathogen standards (1910.1030)`,
      `CDC infection prevention guidelines for healthcare settings`,
      `EPA-registered antimicrobial use and contact times`,
      `Biohazard handling, disposal coordination, and PPE use`,
      `Cross-contamination prevention with colour-coded microfiber systems`,
    ],
    keyPoint: `Output: Staff certifications on file, renewed annually — proof of compliance at all times.`,
  },
  {
    number: 3,
    icon: Sparkles,
    title: `Daily Cleaning with Hospital-Grade Protocols`,
    description: `Systematic daily cleaning using medical facility standards — before first patient, after last patient, and between-patient sanitization if needed.`,
    bullets: [
      `Morning deep clean: all surfaces, waiting room, exam rooms, restrooms`,
      `Between-patient sanitization: high-touch surfaces, equipment exteriors`,
      `Cross-contamination prevention — dedicated microfiber per zone`,
      `Air drying protocol — no towel recontamination`,
      `Closing deep clean: HVAC vents, storage areas, medical equipment exteriors`,
    ],
    keyPoint: `Key point: Morning prep, between-patient protocol, and closing deep clean — a full 3-phase daily cycle.`,
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: `EPA-Registered Antimicrobial Application`,
    description: `Hospital-grade disinfectants applied with proper contact time — effective against healthcare pathogens and safe for patients and equipment.`,
    bullets: [
      `EPA-registered disinfectants (MRSA, influenza, COVID-19 effective)`,
      `Proper contact time enforced — product sits on surface the required duration`,
      `Colour-coded microfiber systems prevent cross-contamination between zones`,
      `Exam tables, door handles, keyboards, phones, waiting room furniture`,
      `Safe for medical equipment surfaces — no damage to instruments or coatings`,
    ],
    keyPoint: `Output: Documented chemical usage records with MSDS for regulatory compliance.`,
  },
  {
    number: 5,
    icon: Trash2,
    title: `Biohazard Waste Coordination`,
    description: `Safe handling and disposal of biohazard materials — coordinated with licensed disposal companies and fully documented.`,
    bullets: [
      `Sharps disposal: needles, scalpels, contaminated instruments`,
      `Bloodborne pathogen cleanup with full PPE protocol`,
      `Coordination with licensed biohazard disposal company`,
      `Documentation of all biohazard materials collected`,
      `EPA and provincial regulatory compliance documentation`,
    ],
    keyPoint: `Key point: We handle cleanup and documentation — licensed specialists handle regulated waste.`,
  },
  {
    number: 6,
    icon: FileText,
    title: `Compliance Documentation & Audit Support`,
    description: `Complete audit documentation maintained and organized — ready before inspectors arrive, not after.`,
    bullets: [
      `Daily cleaning logs: what, when, who, with timestamps`,
      `Chemical usage and MSDS records maintained`,
      `Staff training certifications — current, up-to-date, on file`,
      `Incident logs: safety concerns, biohazard exposures, spills`,
      `Audit support: on-site during inspections to explain protocols`,
    ],
    keyPoint: `Output: Complete audit package — 6–12 months of logs, certifications, and compliance documentation.`,
  },
];

export function AnimatedMedicalProcess() {
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
