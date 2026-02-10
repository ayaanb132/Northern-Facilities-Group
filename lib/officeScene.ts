/**
 * Office Suite hero scene config — ArchViz / Apple-meets-architecture.
 * Used by the homepage 3D hero and reusable on service pages.
 * Model paths are placeholders; swap when GLBs exist in /public/models/office/.
 */

export const OFFICE_SCENE = {
  id: 'office-hero',
  name: 'Office Suite',
  basePath: '/models/office',
  lods: {
    high: '/models/office/office_lod0.glb',
    mid: '/models/office/office_lod1.glb',
    low: '/models/office/office_lod2.glb',
  },
  poster: '/images/posters/office.webp',
  cameraPosition: [8, 1.6, 8] as [number, number, number],
  cameraTarget: [0, 1, 0] as [number, number, number],
  environmentPreset: 'studio' as const,
} as const;

export interface OfficeHotspot {
  id: string;
  label: string;
  position: [number, number, number];
  /** Short title for dialog */
  dialogTitle: string;
  /** 2–3 lines Apple-style copy */
  dialogBody: string;
  ctaText: string;
}

export const OFFICE_HOTSPOTS: OfficeHotspot[] = [
  {
    id: 'office-daily-touchpoints',
    label: 'Daily touchpoints',
    position: [1.2, 1.0, 0.5],
    dialogTitle: 'Daily touchpoints',
    dialogBody:
      'Door handles, push plates, and high-traffic surfaces are cleaned and sanitized on a defined schedule. Consistent touchpoints mean consistent standards.',
    ctaText: 'Book a walkthrough',
  },
  {
    id: 'office-after-hours',
    label: 'After-hours schedule',
    position: [0, 1.2, -2.5],
    dialogTitle: 'After-hours schedule',
    dialogBody:
      'Deep cleaning and floor care happen when the office is empty. We work around your hours so operations never skip a beat.',
    ctaText: 'Book a walkthrough',
  },
  {
    id: 'office-supervisor-qa',
    label: 'Supervisor QA',
    position: [-1.8, 1.0, 0.2],
    dialogTitle: 'Supervisor QA',
    dialogBody:
      'Quality checks are built into every run. A dedicated supervisor verifies standards so you see the same results every time.',
    ctaText: 'Book a walkthrough',
  },
  {
    id: 'office-reporting-log',
    label: 'Reporting log',
    position: [1.5, 0.9, 1.2],
    dialogTitle: 'Reporting log',
    dialogBody:
      'Every visit is logged with photos and completion status. Your team gets full visibility without stepping on-site.',
    ctaText: 'Book a walkthrough',
  },
  {
    id: 'office-supply-control',
    label: 'Supply control',
    position: [-2.2, 0.8, -1.5],
    dialogTitle: 'Supply control',
    dialogBody:
      'Supplies are tracked and restocked so your team never runs out. One less thing to manage.',
    ctaText: 'Book a walkthrough',
  },
];
