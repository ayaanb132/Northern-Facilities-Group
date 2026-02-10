'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Parses a stat value string into a number and suffix for count-up.
 * e.g. "100,000+ sq.ft" → { target: 100000, suffix: "+ sq.ft" }
 *      "5+" → { target: 5, suffix: "+" }
 *      "24/7" → { target: 24, suffix: "/7" }
 *      "foo" → null (no animation)
 */
function parseStatValue(value: string): { target: number; suffix: string } | null {
  const match = value.match(/^([\d,]+)(\+?)\s*(.*)$/);
  if (!match) return null;
  const numStr = match[1].replace(/,/g, '');
  const target = parseInt(numStr, 10);
  if (Number.isNaN(target)) return null;
  const plus = match[2];
  const rest = (match[3] ?? '').trim();
  const suffix = rest ? `${plus} ${rest}`.trim() : plus;
  return { target, suffix };
}

function formatNumber(n: number): string {
  return n.toLocaleString();
}

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, duration = 1800, className }: CountUpProps) {
  const parsed = React.useMemo(() => parseStatValue(value), [value]);
  const ref = React.useRef<HTMLDivElement>(null);
  const initialDisplay = parsed
    ? `${formatNumber(0)}${parsed.suffix ? ` ${parsed.suffix}` : ''}`.trim()
    : value;
  const [displayValue, setDisplayValue] = React.useState<string>(initialDisplay);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  React.useEffect(() => {
    if (!parsed || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const { target: end, suffix } = parsed;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          // easeOutExpo
          const eased = t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const current = Math.round(eased * end);
          setDisplayValue(`${formatNumber(current)}${suffix ? ` ${suffix}` : ''}`.trim());
          if (t < 1) requestAnimationFrame(tick);
          else setDisplayValue(`${formatNumber(end)}${suffix ? ` ${suffix}` : ''}`.trim());
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, duration, prefersReducedMotion, value, hasAnimated]);

  // No parseable number: show value as-is (e.g. "24/7" after parse, or custom text)
  if (!parsed && !prefersReducedMotion) {
    return (
      <div className={cn('whitespace-nowrap', className)} ref={ref}>
        {value}
      </div>
    );
  }

  return (
    <div className={cn('whitespace-nowrap', className)} ref={ref}>
      {displayValue}
    </div>
  );
}
