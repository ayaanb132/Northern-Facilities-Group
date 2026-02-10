'use client';

import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { usePerfGate } from './PerfGate';

type LODLevel = 'high' | 'mid' | 'low';

interface LODControllerState {
  currentLOD: LODLevel;
  fps: number;
  isStable: boolean;
}

interface LODControllerContextType extends LODControllerState {
  setForcedLOD: (lod: LODLevel | null) => void;
}

const LODControllerContext = React.createContext<LODControllerContextType>({
  currentLOD: 'mid',
  fps: 60,
  isStable: true,
  setForcedLOD: () => {},
});

export function useLODController() {
  return React.useContext(LODControllerContext);
}

// FPS thresholds with hysteresis to prevent flapping
const FPS_THRESHOLDS = {
  high: { upgrade: 55, downgrade: 40 },
  mid: { upgrade: 45, downgrade: 25 },
  low: { upgrade: 0, downgrade: 0 },
};

// Sustained time before LOD change: downgrade after 2s low FPS, upgrade after 5s high FPS
const HYSTERESIS_DOWNGRADE_MS = 2000;
const HYSTERESIS_UPGRADE_MS = 5000;

interface LODControllerProviderProps {
  children: React.ReactNode;
  defaultLOD?: LODLevel;
}

export function LODControllerProvider({
  children,
  defaultLOD = 'mid',
}: LODControllerProviderProps) {
  const { capabilities, qualityMode } = usePerfGate();
  const [state, setState] = React.useState<LODControllerState>({
    currentLOD: capabilities.recommendedLOD || defaultLOD,
    fps: 60,
    isStable: true,
  });
  const [forcedLOD, setForcedLOD] = React.useState<LODLevel | null>(null);

  // These refs are used for future FPS-based LOD adjustments
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fpsHistoryRef = React.useRef<number[]>([]);
  const lastLODChangeRef = React.useRef<number>(Date.now());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const frameTimesRef = React.useRef<number[]>([]);

  // Update LOD based on device capabilities when quality mode changes
  React.useEffect(() => {
    if (forcedLOD) return;

    let targetLOD: LODLevel = 'mid';
    
    if (qualityMode === 'high' && capabilities.level !== 'low') {
      targetLOD = 'high';
    } else if (capabilities.level === 'low') {
      targetLOD = 'low';
    } else {
      targetLOD = capabilities.recommendedLOD;
    }

    setState((prev) => ({ ...prev, currentLOD: targetLOD }));
    lastLODChangeRef.current = Date.now();
  }, [qualityMode, capabilities, forcedLOD]);

  const value = React.useMemo(
    () => ({
      ...state,
      currentLOD: forcedLOD || state.currentLOD,
      setForcedLOD,
    }),
    [state, forcedLOD]
  );

  return (
    <LODControllerContext.Provider value={value}>
      {children}
    </LODControllerContext.Provider>
  );
}

// Track how long FPS has been in "low" or "high" range for hysteresis
function LODMonitorInner() {
  const { capabilities } = usePerfGate();
  const { currentLOD, setForcedLOD } = useLODController();
  const frameTimesRef = React.useRef<number[]>([]);
  const lastLODChangeRef = React.useRef<number>(Date.now());
  const lowFPSStartRef = React.useRef<number | null>(null);
  const highFPSStartRef = React.useRef<number | null>(null);

  useFrame((_, delta) => {
    const fps = Math.min(120, 1 / delta);
    const now = Date.now();

    frameTimesRef.current.push(fps);
    if (frameTimesRef.current.length > 120) {
      frameTimesRef.current.shift();
    }

    const avgFPS =
      frameTimesRef.current.reduce((a, b) => a + b, 0) /
      frameTimesRef.current.length;

    let newLOD: LODLevel | null = null;

    if (currentLOD === 'high' && avgFPS < FPS_THRESHOLDS.high.downgrade) {
      if (lowFPSStartRef.current === null) lowFPSStartRef.current = now;
      if (now - lowFPSStartRef.current >= HYSTERESIS_DOWNGRADE_MS) {
        newLOD = 'mid';
        lowFPSStartRef.current = null;
        highFPSStartRef.current = null;
      }
    } else if (currentLOD === 'mid') {
      if (avgFPS < FPS_THRESHOLDS.mid.downgrade) {
        if (lowFPSStartRef.current === null) lowFPSStartRef.current = now;
        highFPSStartRef.current = null;
        if (now - lowFPSStartRef.current >= HYSTERESIS_DOWNGRADE_MS) {
          newLOD = 'low';
          lowFPSStartRef.current = null;
        }
      } else if (
        avgFPS > FPS_THRESHOLDS.high.upgrade &&
        capabilities.level === 'high'
      ) {
        if (highFPSStartRef.current === null) highFPSStartRef.current = now;
        lowFPSStartRef.current = null;
        if (now - highFPSStartRef.current >= HYSTERESIS_UPGRADE_MS) {
          newLOD = 'high';
          highFPSStartRef.current = null;
        }
      } else {
        lowFPSStartRef.current = null;
        highFPSStartRef.current = null;
      }
    } else if (currentLOD === 'low' && avgFPS > FPS_THRESHOLDS.mid.upgrade) {
      if (highFPSStartRef.current === null) highFPSStartRef.current = now;
      if (now - highFPSStartRef.current >= HYSTERESIS_UPGRADE_MS) {
        newLOD = 'mid';
        highFPSStartRef.current = null;
        lowFPSStartRef.current = null;
      }
    } else {
      lowFPSStartRef.current = null;
      highFPSStartRef.current = null;
    }

    if (newLOD && newLOD !== currentLOD) {
      setForcedLOD(newLOD);
      lastLODChangeRef.current = now;
      frameTimesRef.current = [];
    }
  });

  return null;
}

export function LODMonitor() {
  return <LODMonitorInner />;
}

// Helper hook to get model path based on current LOD
export function useLODModelPath(
  paths: { high: string; mid: string; low: string }
): string {
  const { currentLOD } = useLODController();
  return paths[currentLOD];
}
