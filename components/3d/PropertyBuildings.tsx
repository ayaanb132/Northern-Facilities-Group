'use client';

import * as React from 'react';

/** Procedural 3D building per property type — recognizable silhouettes, no GLB required. */
export function PropertyBuilding({ type }: { type: string }) {
  return (
    <group>
      <Floor />
      {type === 'residential' && <ResidentialHouse />}
      {type === 'condo' && <CondoTower />}
      {type === 'medical' && <MedicalClinic />}
      {type === 'restaurant' && <Restaurant />}
      {type === 'warehouse' && <Warehouse />}
      {type === 'retail' && <Retail />}
      {type === 'office' && <Office />}
      {!['residential', 'condo', 'medical', 'restaurant', 'warehouse', 'retail', 'office'].includes(type) && (
        <GenericBuilding />
      )}
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial color="#e8eae9" roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

// Single-family house — pitched roof, chimney
function ResidentialHouse() {
  const wall = '#d4c4a8';
  const roof = '#8b7355';
  const door = '#5c4a3a';
  return (
    <group position={[0, 0.7, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 1.8]} />
        <meshStandardMaterial color={wall} roughness={0.85} metalness={0.05} />
      </mesh>
      <mesh castShadow position={[0, 0.85, 0]} rotation={[0, 0, Math.PI * 0.02]}>
        <coneGeometry args={[1.2, 0.5, 4]} />
        <meshStandardMaterial color={roof} roughness={0.9} metalness={0.05} />
      </mesh>
      <mesh castShadow position={[0, -0.3, 0.91]}>
        <boxGeometry args={[0.4, 0.6, 0.05]} />
        <meshStandardMaterial color={door} roughness={0.8} metalness={0} />
      </mesh>
      <mesh castShadow position={[0.5, 0.5, 0.95]}>
        <boxGeometry args={[0.2, 0.25, 0.03]} />
        <meshStandardMaterial color="#6b8cae" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh castShadow position={[0.35, 0.95, 0.2]}>
        <boxGeometry args={[0.15, 0.2, 0.15]} />
        <meshStandardMaterial color="#6b7280" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
}

// Tall residential tower — stacked mass with flat roof and window bands
function CondoTower() {
  const wall = '#8b9cad';
  const window = '#6b8cae';
  const roof = '#5a6b7a';
  return (
    <group position={[0, 1.4, 0]}>
      {/* Main tower */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 2.4, 1.6]} />
        <meshStandardMaterial color={wall} roughness={0.85} metalness={0.1} />
      </mesh>
      {/* Window band front */}
      <mesh castShadow position={[0, 0.5, 0.81]}>
        <boxGeometry args={[1.5, 0.25, 0.05]} />
        <meshStandardMaterial color={window} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh castShadow position={[0, -0.2, 0.81]}>
        <boxGeometry args={[1.5, 0.25, 0.05]} />
        <meshStandardMaterial color={window} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh castShadow position={[0, -0.9, 0.81]}>
        <boxGeometry args={[1.5, 0.25, 0.05]} />
        <meshStandardMaterial color={window} roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Flat roof */}
      <mesh castShadow position={[0, 1.25, 0]}>
        <boxGeometry args={[1.9, 0.12, 1.7]} />
        <meshStandardMaterial color={roof} roughness={0.9} metalness={0.05} />
      </mesh>
    </group>
  );
}

// Low clinic with pitched roof and cross
function MedicalClinic() {
  const wall = '#f0f2f1';
  const roof = '#c4d0d4';
  const cross = '#c53030';
  return (
    <group position={[0, 0.6, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1, 1.8]} />
        <meshStandardMaterial color={wall} roughness={0.8} metalness={0.05} />
      </mesh>
      {/* Pitched roof (gable) */}
      <mesh castShadow position={[0, 0.65, 0]}>
        <coneGeometry args={[1.25, 0.4, 4]} />
        <meshStandardMaterial color={roof} roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Medical cross on front */}
      <group position={[0, 0.2, 0.91]}>
        <mesh>
          <boxGeometry args={[0.12, 0.35, 0.04]} />
          <meshStandardMaterial color={cross} roughness={0.5} metalness={0} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.28, 0.1, 0.04]} />
          <meshStandardMaterial color={cross} roughness={0.5} metalness={0} />
        </mesh>
      </group>
    </group>
  );
}

// Building with awning and vent
function Restaurant() {
  const wall = '#b8a99a';
  const awning = '#9e2b2b';
  const roof = '#7a6f64';
  return (
    <group position={[0, 0.7, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 1.6]} />
        <meshStandardMaterial color={wall} roughness={0.8} metalness={0.08} />
      </mesh>
      {/* Flat roof */}
      <mesh castShadow position={[0, 0.7, 0]}>
        <boxGeometry args={[2.1, 0.1, 1.7]} />
        <meshStandardMaterial color={roof} roughness={0.9} metalness={0.05} />
      </mesh>
      {/* Awning over entrance */}
      <mesh castShadow position={[0, 0.5, 0.85]}>
        <boxGeometry args={[1.4, 0.08, 0.5]} />
        <meshStandardMaterial color={awning} roughness={0.7} metalness={0} />
      </mesh>
      {/* Vent / chimney */}
      <mesh castShadow position={[0.5, 0.95, 0]}>
        <boxGeometry args={[0.2, 0.25, 0.2]} />
        <meshStandardMaterial color="#6b7280" roughness={0.6} metalness={0.3} />
      </mesh>
    </group>
  );
}

// Long low box with sloped roof and loading dock
function Warehouse() {
  const wall = '#9ca3af';
  const roof = '#6b7280';
  const dock = '#78716c';
  return (
    <group position={[0, 0.55, 0]}>
      {/* Main long building */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[3, 1, 1.4]} />
        <meshStandardMaterial color={wall} roughness={0.85} metalness={0.1} />
      </mesh>
      {/* Sloped roof (shed) */}
      <mesh castShadow position={[0, 0.6, -0.1]} rotation={[0, 0, Math.PI * 0.08]}>
        <boxGeometry args={[3.2, 0.12, 1.8]} />
        <meshStandardMaterial color={roof} roughness={0.9} metalness={0.05} />
      </mesh>
      {/* Loading dock / bay */}
      <mesh castShadow position={[-0.6, -0.2, 0.75]}>
        <boxGeometry args={[0.8, 0.4, 0.15]} />
        <meshStandardMaterial color={dock} roughness={0.9} metalness={0} />
      </mesh>
      {/* Roll door hint */}
      <mesh castShadow position={[-0.6, 0.2, 0.82]}>
        <boxGeometry args={[0.7, 0.6, 0.04]} />
        <meshStandardMaterial color="#4b5563" roughness={0.5} metalness={0.2} />
      </mesh>
    </group>
  );
}

// Storefront with large display window and awning
function Retail() {
  const wall = '#e5e7eb';
  const windowColor = '#93c5fd';
  const awning = '#4f46e5';
  return (
    <group position={[0, 0.75, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.4, 1.4]} />
        <meshStandardMaterial color={wall} roughness={0.75} metalness={0.05} />
      </mesh>
      {/* Big front window */}
      <mesh castShadow position={[0, 0.2, 0.71]}>
        <boxGeometry args={[1.2, 0.9, 0.04]} />
        <meshStandardMaterial
          color={windowColor}
          roughness={0.1}
          metalness={0}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Awning */}
      <mesh castShadow position={[0, 0.85, 0.75]}>
        <boxGeometry args={[1.5, 0.06, 0.45]} />
        <meshStandardMaterial color={awning} roughness={0.7} metalness={0} />
      </mesh>
    </group>
  );
}

// Mid-rise with window bands and flat roof
function Office() {
  const wall = '#94a3b8';
  const windowColor = '#64748b';
  const roof = '#475569';
  return (
    <group position={[0, 1.1, 0]}>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.8, 1.6]} />
        <meshStandardMaterial color={wall} roughness={0.8} metalness={0.12} />
      </mesh>
      {/* Window strips */}
      {[0.4, 0, -0.4].map((z, i) => (
        <mesh key={i} castShadow position={[0, 0.3, 0.81 + z * 0.4]}>
          <boxGeometry args={[1.6, 0.2, 0.03]} />
          <meshStandardMaterial color={windowColor} roughness={0.25} metalness={0.15} />
        </mesh>
      ))}
      <mesh castShadow position={[0, -0.3, 0.81]}>
        <boxGeometry args={[1.6, 0.2, 0.03]} />
        <meshStandardMaterial color={windowColor} roughness={0.25} metalness={0.15} />
      </mesh>
      {/* Roof */}
      <mesh castShadow position={[0, 0.95, 0]}>
        <boxGeometry args={[2.05, 0.1, 1.65]} />
        <meshStandardMaterial color={roof} roughness={0.9} metalness={0.05} />
      </mesh>
      {/* AC unit */}
      <mesh castShadow position={[0.4, 1.05, 0.2]}>
        <boxGeometry args={[0.25, 0.12, 0.2]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.6} metalness={0.2} />
      </mesh>
    </group>
  );
}

function GenericBuilding() {
  return (
    <group position={[0, 1, 0]}>
      <mesh castShadow>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.85} metalness={0.1} />
      </mesh>
    </group>
  );
}
