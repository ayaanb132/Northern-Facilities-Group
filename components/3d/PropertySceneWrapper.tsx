'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Home,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Store,
  Briefcase,
  Settings2,
} from 'lucide-react';
import { SceneCanvas } from './SceneCanvas';
import { PropertyScene } from './PropertyScene';
import { HotspotOverlay } from './Hotspot';
import { usePerfGate, PerfGateProvider } from './PerfGate';
import { MODEL_CONFIGS, type ModelConfig, type Hotspot } from '@/lib/modelPipeline';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const icons = {
  residential: Home,
  condo: Building2,
  medical: Stethoscope,
  restaurant: UtensilsCrossed,
  warehouse: Warehouse,
  retail: Store,
  office: Briefcase,
};

interface PropertySelectorProps {
  selectedProperty: string;
  onSelect: (id: string) => void;
}

function PropertySelector({ selectedProperty, onSelect }: PropertySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {siteConfig.propertyTypes.map((property) => {
        const Icon = icons[property.id as keyof typeof icons] || Building2;
        const isSelected = selectedProperty === property.id;

        return (
          <button
            key={property.id}
            onClick={() => onSelect(property.id)}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all',
              isSelected
                ? 'bg-primary text-white shadow-md'
                : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm'
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{property.name}</span>
          </button>
        );
      })}
    </div>
  );
}

interface QualityToggleProps {
  mode: 'standard' | 'high';
  onChange: (mode: 'standard' | 'high') => void;
}

function QualityToggle({ mode, onChange }: QualityToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
      <Settings2 className="h-4 w-4 text-slate-500" />
      <select
        value={mode}
        onChange={(e) => onChange(e.target.value as 'standard' | 'high')}
        className="text-xs bg-transparent border-none focus:ring-0 cursor-pointer"
      >
        <option value="standard">Standard</option>
        <option value="high">High Fidelity</option>
      </select>
    </div>
  );
}

interface HotspotDialogProps {
  hotspot: Hotspot | null;
  onClose: () => void;
}

function HotspotDialog({ hotspot, onClose }: HotspotDialogProps) {
  return (
    <Dialog open={!!hotspot} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{hotspot?.label}</DialogTitle>
          <DialogDescription>{hotspot?.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button asChild>
            <Link href="/get-walkthrough">{hotspot?.ctaText || 'Book Walkthrough'}</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PropertySceneWrapperInner() {
  const { qualityMode, setQualityMode, capabilities, shouldRender3D } = usePerfGate();
  const [selectedProperty, setSelectedProperty] = React.useState('condo');
  const [activeHotspot, setActiveHotspot] = React.useState<string | null>(null);
  const [selectedHotspotData, setSelectedHotspotData] = React.useState<Hotspot | null>(null);

  const config = MODEL_CONFIGS[selectedProperty] as ModelConfig;

  const handleHotspotClick = (id: string) => {
    if (activeHotspot === id) {
      setActiveHotspot(null);
      setSelectedHotspotData(null);
    } else {
      setActiveHotspot(id);
      const hotspot = config.hotspots.find((h) => h.id === id);
      setSelectedHotspotData(hotspot || null);
    }
  };

  const handlePropertyChange = (id: string) => {
    setSelectedProperty(id);
    setActiveHotspot(null);
    setSelectedHotspotData(null);
  };

  // Fallback for non-3D rendering
  if (!shouldRender3D) {
    return (
      <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <Building2 className="h-16 w-16 mx-auto text-slate-300 mb-4" />
            <p className="text-sm text-slate-500 mb-4">
              Interactive 3D preview available on supported devices
            </p>
            <Button asChild size="sm">
              <Link href="/get-walkthrough">Request Walkthrough</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Property Selector */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <PropertySelector
          selectedProperty={selectedProperty}
          onSelect={handlePropertyChange}
        />
      </div>

      {/* Quality Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <QualityToggle mode={qualityMode} onChange={setQualityMode} />
      </div>

      {/* 3D Scene */}
      <SceneCanvas
        className="aspect-square"
        posterSrc={config.poster}
        posterAlt={`${config.name} 3D Preview`}
        environmentPreset={config.environmentPreset}
        showContactShadows={qualityMode === 'high'}
        cameraPosition={config.cameraPosition}
        cameraFov={50}
      >
        <PropertyScene
          config={config}
          activeHotspot={activeHotspot}
          onHotspotClick={handleHotspotClick}
          enableAnimation={!capabilities.prefersReducedMotion}
        />
      </SceneCanvas>

      {/* Hotspot Overlay (keyboard accessible) */}
      <HotspotOverlay
        hotspots={config.hotspots}
        activeHotspot={activeHotspot}
        onHotspotClick={handleHotspotClick}
      />

      {/* Hotspot Dialog */}
      <HotspotDialog
        hotspot={selectedHotspotData}
        onClose={() => {
          setActiveHotspot(null);
          setSelectedHotspotData(null);
        }}
      />

      {/* Property name badge */}
      <div className="absolute bottom-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
          <p className="text-xs font-medium text-slate-600">{config.name}</p>
        </div>
      </div>
    </div>
  );
}

export default function PropertySceneWrapper() {
  return (
    <PerfGateProvider>
      <PropertySceneWrapperInner />
    </PerfGateProvider>
  );
}
