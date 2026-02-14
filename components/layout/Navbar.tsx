'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';

const LOGO_SRC = '/images/logo.svg';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isPastHero, setIsPastHero] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    let rafId: number;
    const SCROLL_DOWN_THRESHOLD = 24;
    const SCROLL_UP_THRESHOLD = 8;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setIsScrolled(prev => {
          if (y > SCROLL_DOWN_THRESHOLD) return true;
          if (y < SCROLL_UP_THRESHOLD) return false;
          return prev;
        });
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
        'fixed top-0 left-0 right-0 z-50 px-3 pt-3 transition-[transform] duration-300 ease-out',
        isPastHero && '-translate-y-full'
      )}
    >
      <nav
        className={cn(
          'mx-auto max-w-6xl rounded-full border border-black/[0.06] shadow-sm transition-colors duration-300',
          'lg:max-w-5xl',
          isScrolled ? 'bg-white/95' : 'bg-white/95 lg:bg-white/80 lg:backdrop-blur-md'
        )}
      >
        <div className="flex min-h-10 items-center justify-between gap-2 px-3 py-1.5 sm:px-5 lg:min-h-12 lg:px-6 lg:py-2">
          {/* Logo — compact on mobile */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={LOGO_SRC}
              alt={siteConfig.name}
              width={600}
              height={300}
              className="h-9 w-auto max-w-[160px] object-contain object-left sm:max-w-[200px] lg:h-auto lg:min-w-[320px] lg:max-w-[320px] lg:max-h-24"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-1.5 text-[13px] font-normal text-foreground/80 hover:text-foreground transition-colors duration-200 rounded-full',
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-[hsl(var(--primary))]'
                    : ''
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <Button asChild size="sm" className="rounded-full">
              <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.title}</Link>
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden flex shrink-0 items-center justify-center w-9 h-9 rounded-lg text-foreground/80 hover:text-foreground hover:bg-black/[0.04] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.28, 0.11, 0.32, 1] }}
            className="lg:hidden mx-3 mt-1.5 rounded-2xl border border-black/[0.06] border-t-0 bg-white/95 shadow-sm backdrop-blur-xl"
          >
            <div className="px-5 py-4 space-y-0.5">
              {siteConfig.nav.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 text-[17px] font-normal rounded-xl transition-colors',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-[hsl(var(--primary))]'
                      : 'text-foreground hover:bg-black/[0.04]'
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <div className="my-4 h-px bg-black/[0.06]" />
              <div className="pt-4 px-4">
                <Button asChild className="w-full rounded-full">
                  <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.title}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
