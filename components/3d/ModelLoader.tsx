'use client';

import * as React from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import * as THREE from 'three';
import { DRACO_DECODER_PATH, KTX2_TRANSCODER_PATH } from '@/lib/modelPipeline';

// Configure DRACO loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(DRACO_DECODER_PATH);
dracoLoader.setDecoderConfig({ type: 'js' }); // Use JS decoder for broader compatibility

// Singleton loader configuration
let gltfLoader: GLTFLoader | null = null;
let ktx2Loader: KTX2Loader | null = null;

function getConfiguredLoader(gl: THREE.WebGLRenderer): GLTFLoader {
  if (!gltfLoader) {
    gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.setMeshoptDecoder(MeshoptDecoder);
  }

  // Configure KTX2 loader with the renderer
  if (!ktx2Loader) {
    ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath(KTX2_TRANSCODER_PATH);
    ktx2Loader.detectSupport(gl);
    gltfLoader.setKTX2Loader(ktx2Loader);
  }

  return gltfLoader;
}

interface ModelLoaderProps {
  url: string;
  onProgress?: (progress: number) => void;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  children: (gltf: ReturnType<typeof useGLTFModel>) => React.ReactNode;
}

export function useGLTFModel(url: string) {
  const { gl } = useThree();
  const _loader = React.useMemo(() => getConfiguredLoader(gl), [gl]);

  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const gltfLoader = loader as GLTFLoader;
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.setMeshoptDecoder(MeshoptDecoder);
    if (ktx2Loader) {
      gltfLoader.setKTX2Loader(ktx2Loader);
    }
  });

  return gltf;
}

export function ModelLoader({
  url,
  onProgress: _onProgress,
  onLoad,
  onError: _onError,
  children,
}: ModelLoaderProps) {
  const gltf = useGLTFModel(url);

  React.useEffect(() => {
    if (gltf) {
      onLoad?.();
    }
  }, [gltf, onLoad]);

  return <>{children(gltf)}</>;
}

// Preload function for models
export function preloadModel(url: string): void {
  useLoader.preload(GLTFLoader, url, (loader) => {
    const gltfLoader = loader as GLTFLoader;
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.setMeshoptDecoder(MeshoptDecoder);
  });
}

// Component to render a loaded model
interface ModelProps {
  gltf: ReturnType<typeof useGLTFModel>;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function Model({
  gltf,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  castShadow = false,
  receiveShadow = true,
}: ModelProps) {
  const modelRef = React.useRef<THREE.Group>(null);

  // Clone the scene to avoid issues with reusing
  const clonedScene = React.useMemo(() => {
    const clone = gltf.scene.clone(true);
    
    // Apply shadow settings
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;
        
        // Ensure materials are properly set up
        if (child.material) {
          const material = child.material as THREE.MeshStandardMaterial;
          material.envMapIntensity = 1;
          material.needsUpdate = true;
        }
      }
    });

    return clone;
  }, [gltf.scene, castShadow, receiveShadow]);

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// Loading progress component
interface LoadingIndicatorProps {
  progress: number;
}

export function LoadingIndicator({ progress }: LoadingIndicatorProps) {
  return (
    <mesh>
      <ringGeometry args={[0.4, 0.5, 32, 1, 0, Math.PI * 2 * progress]} />
      <meshBasicMaterial color="#2563eb" side={THREE.DoubleSide} />
    </mesh>
  );
}
