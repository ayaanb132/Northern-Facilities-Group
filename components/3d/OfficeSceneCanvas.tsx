'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { LODControllerProvider, LODMonitor } from './LODController';
import { usePerfGate } from './PerfGate';
import { OFFICE_SCENE } from '@/lib/officeScene';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface OfficeSceneCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function OfficeSceneCanvas({ children, className }: OfficeSceneCanvasProps) {
  const { capabilities, qualityMode } = usePerfGate();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setIsInView(e.isIntersecting),
      { threshold: 0.1, rootMargin: '80px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxDpr =
    qualityMode === 'high'
      ? Math.min(capabilities.maxDpr, 2.0)
      : Math.min(capabilities.maxDpr, 1.5);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full aspect-[4/3] min-h-[320px] max-w-2xl mx-auto rounded-2xl overflow-hidden bg-secondary',
        className
      )}
    >
      {isInView ? (
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
            powerPreference: 'high-performance',
          }}
          dpr={[1, maxDpr]}
          camera={{
            position: OFFICE_SCENE.cameraPosition,
            fov: 42,
            near: 0.1,
            far: 1000,
          }}
          style={{ background: 'transparent' }}
        >
          <LODControllerProvider defaultLOD={capabilities.recommendedLOD}>
            <LODMonitor />
            {children}
          </LODControllerProvider>
        </Canvas>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-2 border-[hsl(var(--primary))] border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
}
