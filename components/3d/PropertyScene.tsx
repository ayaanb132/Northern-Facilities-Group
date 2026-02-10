'use client';

import * as React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { type ModelConfig } from '@/lib/modelPipeline';
import { usePerfGate } from './PerfGate';
import { useLODController, useLODModelPath } from './LODController';
import { Model } from './ModelLoader';
import { Hotspot } from './Hotspot';
import { PropertyBuilding } from './PropertyBuildings';

interface PropertySceneProps {
  config: ModelConfig;
  activeHotspot: string | null;
  onHotspotClick: (id: string) => void;
  enableAnimation?: boolean;
}

// Camera drift animation
function CameraDrift({ enabled }: { enabled: boolean }) {
  const { camera } = useThree();
  const { capabilities } = usePerfGate();
  const time = React.useRef(0);
  const initialPosition = React.useRef<THREE.Vector3 | null>(null);

  React.useEffect(() => {
    if (!initialPosition.current) {
      initialPosition.current = camera.position.clone();
    }
  }, [camera]);

  useFrame((_, delta) => {
    if (!enabled || capabilities.prefersReducedMotion || !initialPosition.current) return;

    time.current += delta * 0.3; // Slow drift speed

    // Subtle circular drift
    const driftRadius = 0.2;
    const x = initialPosition.current.x + Math.sin(time.current) * driftRadius;
    const z = initialPosition.current.z + Math.cos(time.current) * driftRadius;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, 0.02);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.02);
  });

  return null;
}

// Procedural 3D building per property type when GLB is not loaded
function PlaceholderModel({ type }: { type: string }) {
  return <PropertyBuilding type={type} />;
}

// Scene with model loading
function SceneWithModel({
  config,
  activeHotspot,
  onHotspotClick,
  enableAnimation,
}: PropertySceneProps) {
  const { currentLOD: _currentLOD } = useLODController();
  const _modelPath = useLODModelPath(config.lods);
  const [modelError, _setModelError] = React.useState(false);

  // Try to load the model, fall back to placeholder if it fails
  const gltf = null;
  try {
    // Only try to load if we haven't errored
    if (!modelError) {
      // Note: In production, this would use the actual model
      // For now, we'll use the placeholder since models don't exist yet
      throw new Error('Model not found - using placeholder');
    }
  } catch {
    // Model doesn't exist yet, use placeholder
  }

  return (
    <group>
      {/* Model or placeholder */}
      {modelError || !gltf ? (
        <PlaceholderModel type={config.id} />
      ) : (
        <Model gltf={gltf} receiveShadow />
      )}

      {/* Hotspots */}
      {config.hotspots.map((hotspot) => (
        <Hotspot
          key={hotspot.id}
          hotspot={hotspot}
          isActive={activeHotspot === hotspot.id}
          onClick={() => onHotspotClick(hotspot.id)}
        />
      ))}

      {/* Camera drift */}
      <CameraDrift enabled={enableAnimation ?? true} />

      {/* Orbit controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        target={config.cameraTarget}
        enableDamping
        dampingFactor={0.05}
      />
    </group>
  );
}

export function PropertyScene(props: PropertySceneProps) {
  const { progress } = useProgress();
  const [_isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  return <SceneWithModel {...props} />;
}
