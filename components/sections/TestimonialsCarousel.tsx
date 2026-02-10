'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Testimonial } from '@/lib/testimonials';

const ROTATE_INTERVAL_MS = 5500;

function TestimonialCard({ quote, author, role }: Testimonial) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <Quote className="h-5 w-5 text-primary mb-3" />
        <p className="text-sm text-slate-700 mb-4">"{quote}"</p>
        <p className="text-sm font-medium text-navy-900">{author}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}

interface TestimonialsCarouselProps {
  items: Testimonial[];
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const totalPages = Math.ceil(items.length / 2) || 1;
  const [page, setPage] = useState(0);

  const goTo = useCallback(
    (delta: number) => {
      setPage((p) => ((p + delta) % totalPages + totalPages) % totalPages);
    },
    [totalPages]
  );

  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => goTo(1), ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [totalPages, goTo]);

  if (items.length === 0) return null;

  const pair = [
    items[page * 2],
    items[page * 2 + 1],
  ].filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 md:grid-cols-2 min-h-[180px]"
          >
            {pair.map((item) => (
              <TestimonialCard
                key={`${item.author}-${item.quote.slice(0, 20)}`}
                quote={item.quote}
                author={item.author}
                role={item.role}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 rounded-full h-9 w-9 border-slate-200 bg-white shadow-sm hover:bg-slate-50 z-10"
              aria-label="Previous"
              onClick={() => goTo(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 rounded-full h-9 w-9 border-slate-200 bg-white shadow-sm hover:bg-slate-50 z-10"
              aria-label="Next"
              onClick={() => goTo(1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
