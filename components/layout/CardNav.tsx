'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

const LOGO_SRC = '/images/logo.svg';

const CARD_ITEMS = [
  {
    label: 'Services',
    bgColor: 'hsl(var(--primary))',
    textColor: 'white',
    links: [
      { label: 'All Services', href: '/services', ariaLabel: 'View all services' },
      { label: 'Specialty', href: '/specialty', ariaLabel: 'Specialty services' },
    ],
  },
  {
    label: 'Learn',
    bgColor: 'hsl(229 100% 18%)',
    textColor: 'white',
    links: [
      { label: 'How It Works', href: '/how-it-works', ariaLabel: 'How it works' },
      { label: 'Proof', href: '/proof', ariaLabel: 'Proof and testimonials' },
      { label: 'Case Studies', href: '/case-studies', ariaLabel: 'Case studies' },
    ],
  },
  {
    label: 'Contact',
    bgColor: 'hsl(229 100% 22%)',
    textColor: 'white',
    links: [
      { label: 'Careers', href: '/careers', ariaLabel: 'Careers' },
      { label: 'Get a Walkthrough', href: '/get-walkthrough', ariaLabel: 'Get a walkthrough' },
      { label: 'Contact Us', href: '/contact', ariaLabel: 'Contact us' },
    ],
  },
];

export function CardNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isPastHero, setIsPastHero] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setIsScrolled(prev => (y > 24 ? true : y < 8 ? false : prev));
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  React.useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsPastHero(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out',
        isPastHero && '-translate-y-full'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-4xl rounded-2xl border border-black/[0.06] shadow-sm transition-colors duration-300',
          isScrolled ? 'bg-white/95' : 'bg-white/95 lg:bg-white/90 lg:backdrop-blur-md'
        )}
      >
        {/* Top bar: hamburger | logo (center) | CTA — compact height, logo overflows */}
        <div className="relative flex min-h-12 items-center justify-between overflow-visible px-4 py-2 lg:min-h-14 lg:px-6 lg:py-2.5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-black/[0.04] hover:text-foreground"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 origin-center bg-current"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 origin-center bg-current"
              />
            </div>
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 shrink-0 items-center"
          >
            <Image
              src={LOGO_SRC}
              alt={siteConfig.name}
              width={600}
              height={300}
              className="h-40 w-auto max-w-[400px] object-contain sm:max-w-[500px] lg:h-[10rem] lg:max-w-[600px]"
              priority
            />
          </Link>

          <div className="flex w-9 items-center justify-end lg:w-auto">
            <Link
              href={siteConfig.nav.cta.href}
              className="hidden rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[hsl(var(--primary))]/90 lg:inline-flex"
            >
              {siteConfig.nav.cta.title}
            </Link>
          </div>
        </div>

        {/* Expandable card content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.28, 0.11, 0.32, 1] }}
              className="overflow-hidden border-t border-black/[0.06]"
            >
              <div className="flex flex-col gap-2 p-3 pb-4 lg:flex-row lg:gap-3 lg:p-4 lg:pb-5">
                {CARD_ITEMS.map((card, idx) => (
                  <motion.div
                    key={card.label}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06, ease: [0.28, 0.11, 0.32, 1] }}
                    className="flex flex-1 flex-col rounded-xl p-4"
                    style={{
                      backgroundColor: card.bgColor,
                      color: card.textColor,
                    }}
                  >
                    <div className="font-display text-lg font-medium tracking-tight lg:text-xl">
                      {card.label}
                    </div>
                    <div className="mt-3 flex flex-col gap-1">
                      {card.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-label={link.ariaLabel}
                          className="flex items-center gap-2 text-[15px] opacity-90 transition-opacity hover:opacity-100"
                        >
                          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
