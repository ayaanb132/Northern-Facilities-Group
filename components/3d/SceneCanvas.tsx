'use client';

import * as React from 'react';
import { Canvas, type RootState } from '@react-three/fiber';
import { Environment, ContactShadows, AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { PerfGateProvider, usePerfGate, PerfGate } from './PerfGate';
import { LODControllerProvider, LODMonitor } from './LODController';
import { PosterFallback } from './PosterFallback';
import { cn } from '@/lib/utils';

interface SceneCanvasProps {
  children: React.ReactNode;
  className?: string;
  posterSrc?: string;
  posterAlt?: string;
  environmentPreset?: 'apartment' | 'city' | 'dawn' | 'forest' | 'lobby' | 'night' | 'park' | 'studio' | 'sunset' | 'warehouse';
  showContactShadows?: boolean;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  onCreated?: (state: RootState) => void;
}

function SceneContent({
  children,
  environmentPreset = 'lobby',
  showContactShadows = false,
}: {
  children: React.ReactNode;
  environmentPreset?: SceneCanvasProps['environmentPreset'];
  showContactShadows?: boolean;
}) {
  const { capabilities: _capabilities, qualityMode } = usePerfGate();
  const shouldShowShadows = showContactShadows && qualityMode === 'high';

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow={qualityMode === 'high'}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Environment */}
      <Environment preset={environmentPreset} background={false} />

      {/* Contact shadows (only in high quality mode) */}
      {shouldShowShadows && (
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={10}
        />
      )}

      {/* Performance monitoring */}
      <LODMonitor />

      {/* Adaptive performance */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Scene content */}
      <Suspense fallback={null}>{children}</Suspense>

      {/* Preload assets */}
      <Preload all />
    </>
  );
}

function CanvasWrapper({
  children,
  className,
  environmentPreset,
  showContactShadows,
  cameraPosition = [5, 2, 5],
  cameraFov = 50,
  onCreated,
}: SceneCanvasProps) {
  const { capabilities, qualityMode } = usePerfGate();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  // Intersection observer for lazy rendering
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const maxDpr = qualityMode === 'high' ? capabilities.maxDpr : Math.min(capabilities.maxDpr, 1.5);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200',
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
            position: cameraPosition,
            fov: cameraFov,
            near: 0.1,
            far: 1000,
          }}
          onCreated={(state) => {
            // Configure renderer - Note: physicallyCorrectLights is now default in Three.js r155+
            onCreated?.(state);
          }}
          style={{ background: 'transparent' }}
        >
          <LODControllerProvider defaultLOD={capabilities.recommendedLOD}>
            <SceneContent
              environmentPreset={environmentPreset}
              showContactShadows={showContactShadows}
            >
              {children}
            </SceneContent>
          </LODControllerProvider>
        </Canvas>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export function SceneCanvas({
  children,
  className,
  posterSrc = '/images/posters/default-poster.jpg',
  posterAlt = '3D Scene Preview',
  environmentPreset,
  showContactShadows,
  cameraPosition,
  cameraFov,
  onCreated,
}: SceneCanvasProps) {
  return (
    <PerfGateProvider>
      <PerfGate
        fallback={
          <PosterFallback
            src={posterSrc}
            alt={posterAlt}
            className={className}
            enableParallax
          />
        }
      >
        <CanvasWrapper
          className={className}
          environmentPreset={environmentPreset}
          showContactShadows={showContactShadows}
          cameraPosition={cameraPosition}
          cameraFov={cameraFov}
          onCreated={onCreated}
        >
          {children}
        </CanvasWrapper>
      </PerfGate>
    </PerfGateProvider>
  );
}
