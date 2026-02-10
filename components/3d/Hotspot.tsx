'use client';

import * as React from 'react';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import type { Hotspot as HotspotData } from '@/lib/modelPipeline';
import { usePerfGate } from './PerfGate';

interface HotspotProps {
  hotspot: HotspotData;
  isActive: boolean;
  onClick: () => void;
}

export function Hotspot({ hotspot, isActive, onClick }: HotspotProps) {
  const { capabilities } = usePerfGate();
  const [isHovered, setIsHovered] = React.useState(false);

  // On low-end devices, render simpler hotspots
  if (capabilities.level === 'low') {
    return (
      <Html
        position={hotspot.position}
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
      >
        <button
          onClick={onClick}
          className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform"
          aria-label={hotspot.label}
        />
      </Html>
    );
  }

  return (
    <Html
      position={hotspot.position}
      center
      distanceFactor={10}
      zIndexRange={[100, 0]}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 -m-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
        </div>

        {/* Hotspot button */}
        <button
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative z-10 flex items-center justify-center
            w-6 h-6 rounded-full border-2 border-white
            bg-primary text-white shadow-lg
            transition-all duration-200
            hover:scale-125 hover:bg-primary/90
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${isActive ? 'scale-125 bg-primary/90' : ''}
          `}
          aria-label={hotspot.label}
          aria-expanded={isActive}
        >
          <span className="text-[10px] font-bold">+</span>
        </button>

        {/* Tooltip on hover */}
        <AnimatePresence>
          {isHovered && !isActive && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap"
            >
              <div className="bg-navy-900 text-white text-xs px-2 py-1 rounded shadow-lg">
                {hotspot.label}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-navy-900 rotate-45 -mt-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}

// Keyboard-accessible HTML overlay for hotspots
interface HotspotOverlayProps {
  hotspots: HotspotData[];
  activeHotspot: string | null;
  onHotspotClick: (id: string) => void;
}

export function HotspotOverlay({
  hotspots,
  activeHotspot,
  onHotspotClick,
}: HotspotOverlayProps) {
  return (
    <div className="absolute bottom-4 left-4 z-20">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 max-w-[200px]">
        <p className="text-xs font-medium text-slate-600 mb-2">Explore Points</p>
        <div className="flex flex-wrap gap-1">
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => onHotspotClick(hotspot.id)}
              className={`
                text-xs px-2 py-1 rounded-lg transition-colors
                ${
                  activeHotspot === hotspot.id
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }
              `}
            >
              {hotspot.label.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
