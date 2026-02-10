'use client';

import * as React from 'react';

export type PerformanceLevel = 'high' | 'standard' | 'low';

/** Resolved mode: poster = no 3D; standard/high = 3D with different quality. */
export type RenderMode = 'poster' | 'standard' | 'high';

export interface PerformanceCapabilities {
  level: PerformanceLevel;
  deviceMemory: number;
  hardwareConcurrency: number;
  supportsWebGL2: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  maxDpr: number;
  recommendedLOD: 'high' | 'mid' | 'low';
}

interface PerfGateContextType {
  capabilities: PerformanceCapabilities;
  /** User/device resolved mode. When 'poster', 3D is not rendered. */
  renderMode: RenderMode;
  setRenderMode: (mode: RenderMode) => void;
  /** Quality for 3D: standard (DPR 1.5) vs high (DPR 2.0, shadows). */
  qualityMode: 'standard' | 'high';
  setQualityMode: (mode: 'standard' | 'high') => void;
  /** True when we should render 3D (not poster, WebGL ok, no reduced motion). */
  shouldRender3D: boolean;
}

const defaultCapabilities: PerformanceCapabilities = {
  level: 'standard',
  deviceMemory: 4,
  hardwareConcurrency: 4,
  supportsWebGL2: true,
  prefersReducedMotion: false,
  isMobile: false,
  maxDpr: 1.5,
  recommendedLOD: 'mid',
};

const PerfGateContext = React.createContext<PerfGateContextType>({
  capabilities: defaultCapabilities,
  renderMode: 'standard',
  setRenderMode: () => {},
  qualityMode: 'standard',
  setQualityMode: () => {},
  shouldRender3D: true,
});

export function usePerfGate() {
  return React.useContext(PerfGateContext);
}

function detectCapabilities(): PerformanceCapabilities {
  if (typeof window === 'undefined') {
    return defaultCapabilities;
  }

  const deviceMemory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  let supportsWebGL2 = false;
  try {
    const canvas = document.createElement('canvas');
    supportsWebGL2 = !!canvas.getContext('webgl2');
  } catch {
    supportsWebGL2 = false;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

  let level: PerformanceLevel = 'standard';
  let maxDpr = 1.5;
  let recommendedLOD: 'high' | 'mid' | 'low' = 'mid';

  if (
    deviceMemory >= 8 &&
    hardwareConcurrency >= 8 &&
    supportsWebGL2 &&
    !isMobile
  ) {
    level = 'high';
    maxDpr = 2.0;
    recommendedLOD = 'high';
  } else if (
    deviceMemory < 4 ||
    hardwareConcurrency < 4 ||
    !supportsWebGL2 ||
    isMobile
  ) {
    level = 'low';
    maxDpr = 1.0;
    recommendedLOD = 'low';
  }

  return {
    level,
    deviceMemory,
    hardwareConcurrency,
    supportsWebGL2,
    prefersReducedMotion,
    isMobile,
    maxDpr,
    recommendedLOD,
  };
}

/** Initial render mode from capabilities: poster when 3D is not viable. */
function initialRenderMode(
  caps: PerformanceCapabilities
): RenderMode {
  if (!caps.supportsWebGL2 || caps.prefersReducedMotion) return 'poster';
  if (caps.level === 'low') return 'poster';
  return 'standard';
}

interface PerfGateProviderProps {
  children: React.ReactNode;
}

export function PerfGateProvider({ children }: PerfGateProviderProps) {
  const [capabilities, setCapabilities] =
    React.useState<PerformanceCapabilities>(defaultCapabilities);
  const [renderMode, setRenderMode] = React.useState<RenderMode>('standard');
  const [qualityMode, setQualityMode] = React.useState<'standard' | 'high'>(
    'standard'
  );

  React.useEffect(() => {
    const caps = detectCapabilities();
    setCapabilities(caps);
    setRenderMode((prev) => {
      if (prev !== 'poster') return initialRenderMode(caps);
      return prev;
    });
  }, []);

  const shouldRender3D =
    renderMode !== 'poster' &&
    capabilities.supportsWebGL2 &&
    !capabilities.prefersReducedMotion;

  const value = React.useMemo(
    () => ({
      capabilities,
      renderMode,
      setRenderMode,
      qualityMode,
      setQualityMode,
      shouldRender3D,
    }),
    [capabilities, renderMode, qualityMode, shouldRender3D]
  );

  return (
    <PerfGateContext.Provider value={value}>
      {children}
    </PerfGateContext.Provider>
  );
}

export function PerfGate({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const { shouldRender3D } = usePerfGate();
  return <>{shouldRender3D ? children : fallback}</>;
}
