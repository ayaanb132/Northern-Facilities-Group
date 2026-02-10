'use client';

import * as React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, useProgress, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useLODController } from './LODController';
import { usePerfGate } from './PerfGate';
import { OFFICE_SCENE, OFFICE_HOTSPOTS, type OfficeHotspot } from '@/lib/officeScene';
import { DRACO_DECODER_PATH } from '@/lib/modelPipeline';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(DRACO_DECODER_PATH);
dracoLoader.setDecoderConfig({ type: 'js' });

let officeGltfLoader: GLTFLoader | null = null;
function getOfficeLoader(): GLTFLoader {
  if (!officeGltfLoader) {
    officeGltfLoader = new GLTFLoader();
    officeGltfLoader.setDRACOLoader(dracoLoader);
  }
  return officeGltfLoader;
}

type LoadedGLTF = { scene: THREE.Group };

function OfficeModel({ url }: { url: string }) {
  const loader = React.useMemo(() => getOfficeLoader(), []);
  const [gltf, setGltf] = React.useState<LoadedGLTF | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const scene = React.useMemo((): THREE.Group | null => {
    if (!gltf?.scene) return null;
    const clone = gltf.scene.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [gltf]);

  React.useEffect(() => {
    let cancelled = false;
    setError(null);
    setGltf(null);
    loader.load(
      url,
      (data: LoadedGLTF) => {
        if (!cancelled) setGltf(data);
      },
      undefined,
      (err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
      }
    );
    return () => {
      cancelled = true;
    };
  }, [loader, url]);

  if (error) throw error;
  if (!gltf || !scene) return null;

  return <primitive object={scene} />;
}

function CameraDrift() {
  const { camera } = useThree();
  const { capabilities } = usePerfGate();
  const prefersReducedMotion = capabilities.prefersReducedMotion;
  const initialPos = React.useRef<THREE.Vector3 | null>(null);
  const time = React.useRef(0);

  React.useEffect(() => {
    initialPos.current = camera.position.clone();
  }, [camera]);

  useFrame((_, delta) => {
    if (prefersReducedMotion || !initialPos.current) return;
    time.current += delta * 0.15;
    const r = 0.15;
    camera.position.x = initialPos.current.x + Math.sin(time.current) * r;
    camera.position.z = initialPos.current.z + Math.cos(time.current) * r;
  });

  return null;
}

function OfficeHotspotMarker({
  hotspot,
  onClick,
}: {
  hotspot: OfficeHotspot;
  onClick: () => void;
}) {
  return (
    <Html
      position={hotspot.position}
      center
      distanceFactor={8}
      zIndexRange={[100, 0]}
      style={{ pointerEvents: 'auto' }}
    >
      <button
        type="button"
        onClick={onClick}
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[hsl(var(--primary))] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
        aria-label={hotspot.label}
      >
        <span className="text-[10px] font-bold">+</span>
      </button>
    </Html>
  );
}

function LoaderBar() {
  const { progress } = useProgress();
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[1.2, 0.08]} />
      <meshBasicMaterial color="#e5e5e5" />
      <mesh position={[-0.6 + (progress / 100) * 0.6, 0, 0.001]}>
        <planeGeometry args={[1.2 * (progress / 100), 0.06]} />
        <meshBasicMaterial color="hsl(var(--primary))" />
      </mesh>
    </mesh>
  );
}

export interface OfficeSceneProps {
  onHotspotClick: (hotspot: OfficeHotspot) => void;
}

export function OfficeScene({ onHotspotClick }: OfficeSceneProps) {
  const { currentLOD } = useLODController();
  const modelPath =
    currentLOD === 'high'
      ? OFFICE_SCENE.lods.high
      : currentLOD === 'low'
        ? OFFICE_SCENE.lods.low
        : OFFICE_SCENE.lods.mid;

  return (
    <Suspense fallback={<LoaderBar />}>
      <OfficeModel url={modelPath} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 8, 4]} intensity={0.9} />
      <Environment preset={OFFICE_SCENE.environmentPreset} background={false} />
      <CameraDrift />
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={14}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        target={OFFICE_SCENE.cameraTarget}
        enableDamping
        dampingFactor={0.05}
      />
      {OFFICE_HOTSPOTS.map((h) => (
        <OfficeHotspotMarker
          key={h.id}
          hotspot={h}
          onClick={() => onHotspotClick(h)}
        />
      ))}
    </Suspense>
  );
}

const { Suspense } = React;
