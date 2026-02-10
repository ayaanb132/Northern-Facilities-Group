/**
 * Model Pipeline Configuration
 * 
 * This module handles the configuration for 3D model loading, LOD management,
 * and asset optimization settings.
 */

export interface ModelConfig {
  id: string;
  name: string;
  basePath: string;
  lods: {
    high: string;
    mid: string;
    low: string;
  };
  poster: string;
  hotspots: Hotspot[];
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  environmentPreset: 'apartment' | 'city' | 'dawn' | 'forest' | 'lobby' | 'night' | 'park' | 'studio' | 'sunset' | 'warehouse';
}

export interface Hotspot {
  id: string;
  label: string;
  position: [number, number, number];
  description: string;
  ctaText: string;
}

export const MODEL_CONFIGS: Record<string, ModelConfig> = {
  residential: {
    id: 'residential',
    name: 'Residential',
    basePath: '/models/residential',
    lods: {
      high: '/models/residential/residential-lod0.glb',
      mid: '/models/residential/residential-lod1.glb',
      low: '/models/residential/residential-lod2.glb',
    },
    poster: '/images/posters/condo-poster.jpg',
    cameraPosition: [4, 2, 4],
    cameraTarget: [0, 0.5, 0],
    environmentPreset: 'apartment',
    hotspots: [
      {
        id: 'residential-1',
        label: 'Recurring Cleaning',
        position: [1, 1, 0],
        description: 'Weekly or bi-weekly service tailored to your home and schedule.',
        ctaText: 'Get a Quote',
      },
      {
        id: 'residential-2',
        label: 'Deep Clean',
        position: [-1, 0.8, 1],
        description: 'One-time or seasonal deep cleans for every room.',
        ctaText: 'Book Now',
      },
    ],
  },
  condo: {
    id: 'condo',
    name: 'Condo Tower Lobby',
    basePath: '/models/condo',
    lods: {
      high: '/models/condo/condo-lod0.glb',
      mid: '/models/condo/condo-lod1.glb',
      low: '/models/condo/condo-lod2.glb',
    },
    poster: '/images/posters/condo-poster.jpg',
    cameraPosition: [5, 2, 5],
    cameraTarget: [0, 0.5, 0],
    environmentPreset: 'lobby',
    hotspots: [
      {
        id: 'condo-1',
        label: 'Daily Touchpoints',
        position: [1.5, 1, 0],
        description: 'High-traffic areas receive multiple daily cleanings with antimicrobial treatments.',
        ctaText: 'Book Walkthrough',
      },
      {
        id: 'condo-2',
        label: 'Supervisor QA',
        position: [-1, 1.2, 1],
        description: 'Regular quality inspections ensure consistent service standards across all common areas.',
        ctaText: 'Learn About QA',
      },
      {
        id: 'condo-3',
        label: 'After-Hours Schedule',
        position: [0, 0.8, -2],
        description: 'Deep cleaning and floor maintenance performed during low-traffic hours to minimize disruption.',
        ctaText: 'View Schedules',
      },
      {
        id: 'condo-4',
        label: 'Supply Management',
        position: [2, 0.5, 1.5],
        description: 'Automated inventory tracking ensures supplies are always stocked and available.',
        ctaText: 'See Our Process',
      },
    ],
  },
  medical: {
    id: 'medical',
    name: 'Medical Practices',
    basePath: '/models/medical',
    lods: {
      high: '/models/medical/medical-lod0.glb',
      mid: '/models/medical/medical-lod1.glb',
      low: '/models/medical/medical-lod2.glb',
    },
    poster: '/images/posters/medical-poster.jpg',
    cameraPosition: [4, 2.5, 4],
    cameraTarget: [0, 1, 0],
    environmentPreset: 'studio',
    hotspots: [
      {
        id: 'medical-1',
        label: 'Infection Control',
        position: [1, 1.2, 0.5],
        description: 'Hospital-grade disinfection protocols for all patient contact surfaces.',
        ctaText: 'View Protocols',
      },
      {
        id: 'medical-2',
        label: 'Biohazard Handling',
        position: [-1.5, 0.8, 0],
        description: 'Certified biohazard waste management with full compliance documentation.',
        ctaText: 'Compliance Info',
      },
      {
        id: 'medical-3',
        label: 'Air Quality',
        position: [0, 2, -1],
        description: 'HEPA filtration and air quality monitoring for healthier clinical environments.',
        ctaText: 'Learn More',
      },
      {
        id: 'medical-4',
        label: 'Waiting Area',
        position: [2, 1, 1.5],
        description: 'Frequent sanitization of high-touch surfaces to protect patients and staff.',
        ctaText: 'Book Walkthrough',
      },
      {
        id: 'medical-5',
        label: 'Inspection Log',
        position: [-0.5, 1.5, 2],
        description: 'Digital inspection logs provide real-time visibility into cleaning activities.',
        ctaText: 'See Reporting',
      },
    ],
  },
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant',
    basePath: '/models/restaurant',
    lods: {
      high: '/models/restaurant/restaurant-lod0.glb',
      mid: '/models/restaurant/restaurant-lod1.glb',
      low: '/models/restaurant/restaurant-lod2.glb',
    },
    poster: '/images/posters/restaurant-poster.jpg',
    cameraPosition: [6, 3, 6],
    cameraTarget: [0, 0.5, 0],
    environmentPreset: 'sunset',
    hotspots: [
      {
        id: 'restaurant-1',
        label: 'Kitchen Sanitation',
        position: [-2, 1, 0],
        description: 'Food-safe cleaning products and grease control systems for commercial kitchens.',
        ctaText: 'Kitchen Services',
      },
      {
        id: 'restaurant-2',
        label: 'Dining Area',
        position: [1.5, 0.8, 1],
        description: 'Table turnover cleaning protocols that maintain ambiance without disruption.',
        ctaText: 'Learn More',
      },
      {
        id: 'restaurant-3',
        label: 'Restroom Standards',
        position: [0, 1, -2],
        description: 'Frequent checks and cleaning to maintain guest-ready restrooms at all times.',
        ctaText: 'View Standards',
      },
      {
        id: 'restaurant-4',
        label: 'Floor Care',
        position: [2, 0.3, -1],
        description: 'Specialized floor care for tile, hardwood, and high-traffic restaurant surfaces.',
        ctaText: 'Book Walkthrough',
      },
    ],
  },
  warehouse: {
    id: 'warehouse',
    name: 'Warehouse',
    basePath: '/models/warehouse',
    lods: {
      high: '/models/warehouse/warehouse-lod0.glb',
      mid: '/models/warehouse/warehouse-lod1.glb',
      low: '/models/warehouse/warehouse-lod2.glb',
    },
    poster: '/images/posters/warehouse-poster.jpg',
    cameraPosition: [8, 4, 8],
    cameraTarget: [0, 1, 0],
    environmentPreset: 'warehouse',
    hotspots: [
      {
        id: 'warehouse-1',
        label: 'Loading Dock',
        position: [3, 1, 0],
        description: 'Heavy-duty cleaning for loading areas with industrial floor scrubbing.',
        ctaText: 'Industrial Services',
      },
      {
        id: 'warehouse-2',
        label: 'Aisle Maintenance',
        position: [-1, 1.5, 2],
        description: 'Clear aisles and dust control for safety compliance and efficient operations.',
        ctaText: 'View Services',
      },
      {
        id: 'warehouse-3',
        label: 'Office Areas',
        position: [0, 1, -3],
        description: 'Administrative spaces receive full commercial cleaning services.',
        ctaText: 'Learn More',
      },
      {
        id: 'warehouse-4',
        label: 'Break Rooms',
        position: [-2.5, 0.8, -1],
        description: 'Employee facilities maintained to the same standards as front-office spaces.',
        ctaText: 'Book Walkthrough',
      },
    ],
  },
  retail: {
    id: 'retail',
    name: 'Retail Store',
    basePath: '/models/retail',
    lods: {
      high: '/models/retail/retail-lod0.glb',
      mid: '/models/retail/retail-lod1.glb',
      low: '/models/retail/retail-lod2.glb',
    },
    poster: '/images/posters/retail-poster.jpg',
    cameraPosition: [5, 2.5, 5],
    cameraTarget: [0, 1, 0],
    environmentPreset: 'city',
    hotspots: [
      {
        id: 'retail-1',
        label: 'Storefront',
        position: [2, 1.2, 2],
        description: 'Pristine window and entrance cleaning to maximize curb appeal.',
        ctaText: 'Storefront Services',
      },
      {
        id: 'retail-2',
        label: 'Display Areas',
        position: [-1, 1, 0],
        description: 'Careful dusting and polishing of merchandise displays and fixtures.',
        ctaText: 'Learn More',
      },
      {
        id: 'retail-3',
        label: 'Fitting Rooms',
        position: [0, 1, -2],
        description: 'High-frequency cleaning of changing rooms with attention to detail.',
        ctaText: 'View Standards',
      },
      {
        id: 'retail-4',
        label: 'Checkout Counter',
        position: [1.5, 0.8, -1],
        description: 'Point-of-sale areas sanitized regularly throughout operating hours.',
        ctaText: 'Book Walkthrough',
      },
      {
        id: 'retail-5',
        label: 'Stockroom',
        position: [-2, 1.5, -1.5],
        description: 'Back-of-house organization and cleanliness for efficient operations.',
        ctaText: 'See Process',
      },
    ],
  },
  office: {
    id: 'office',
    name: 'Office Suite',
    basePath: '/models/office',
    lods: {
      high: '/models/office/office-lod0.glb',
      mid: '/models/office/office-lod1.glb',
      low: '/models/office/office-lod2.glb',
    },
    poster: '/images/posters/office-poster.jpg',
    cameraPosition: [5, 2, 5],
    cameraTarget: [0, 1, 0],
    environmentPreset: 'apartment',
    hotspots: [
      {
        id: 'office-1',
        label: 'Workstations',
        position: [1.5, 1, 1],
        description: 'Desk-level cleaning with sanitization of keyboards, phones, and high-touch surfaces.',
        ctaText: 'Workspace Services',
      },
      {
        id: 'office-2',
        label: 'Conference Rooms',
        position: [-2, 1.2, 0],
        description: 'Meeting spaces prepped and cleaned before and after each use.',
        ctaText: 'Learn More',
      },
      {
        id: 'office-3',
        label: 'Kitchen/Break Room',
        position: [0, 0.8, -2],
        description: 'Full kitchen sanitation including appliances, counters, and dining areas.',
        ctaText: 'View Services',
      },
      {
        id: 'office-4',
        label: 'Reception',
        position: [2, 1, -1],
        description: 'First impressions matter—reception areas maintained to the highest standards.',
        ctaText: 'Book Walkthrough',
      },
      {
        id: 'office-5',
        label: 'Restrooms',
        position: [-1, 1, 2],
        description: 'Frequent restroom checks and cleaning throughout the day.',
        ctaText: 'See Standards',
      },
      {
        id: 'office-6',
        label: 'Floor Care',
        position: [0, 0.3, 0],
        description: 'Carpet cleaning, hard floor care, and entrance mat maintenance.',
        ctaText: 'Floor Services',
      },
    ],
  },
};

export const DRACO_DECODER_PATH = '/draco/';
export const KTX2_TRANSCODER_PATH = '/basis/';

export interface LODLevel {
  name: 'high' | 'mid' | 'low';
  distanceThreshold: number;
  triangleBudget: number;
}

export const LOD_LEVELS: LODLevel[] = [
  { name: 'high', distanceThreshold: 0, triangleBudget: 500000 },
  { name: 'mid', distanceThreshold: 10, triangleBudget: 100000 },
  { name: 'low', distanceThreshold: 25, triangleBudget: 25000 },
];

export interface PerformanceProfile {
  name: 'standard' | 'high';
  maxDpr: number;
  shadowsEnabled: boolean;
  postProcessing: boolean;
  antialiasing: boolean;
  defaultLOD: 'high' | 'mid' | 'low';
}

export const PERFORMANCE_PROFILES: Record<string, PerformanceProfile> = {
  standard: {
    name: 'standard',
    maxDpr: 1.5,
    shadowsEnabled: false,
    postProcessing: false,
    antialiasing: true,
    defaultLOD: 'mid',
  },
  high: {
    name: 'high',
    maxDpr: 2.0,
    shadowsEnabled: true,
    postProcessing: true,
    antialiasing: true,
    defaultLOD: 'high',
  },
};

export function getModelConfig(propertyType: string): ModelConfig | null {
  return MODEL_CONFIGS[propertyType] || null;
}

export function getAllModelConfigs(): ModelConfig[] {
  return Object.values(MODEL_CONFIGS);
}
