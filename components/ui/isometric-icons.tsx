'use client';

import * as React from 'react';

const svgProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
} as const;

const iconClass = 'inline-block';

/** Isometric tower — multi-floor residential. */
export function IsometricCondo({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      <path d="M8 28 L24 38 L24 14 L8 4 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 38 L40 28 L40 4 L24 14 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M8 4 L24 14 L40 4 L24 0 Z" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9">
        <rect x="27" y="18" width="4" height="4" rx="0.5" />
        <rect x="34" y="18" width="4" height="4" rx="0.5" />
        <rect x="27" y="25" width="4" height="4" rx="0.5" />
        <rect x="34" y="25" width="4" height="4" rx="0.5" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6">
        <rect x="11" y="12" width="3" height="3" rx="0.5" transform="skewX(-30)" />
        <rect x="11" y="18" width="3" height="3" rx="0.5" transform="skewX(-30)" />
      </g>
    </svg>
  );
}

/** Isometric clinic — single story with medical cross on front. */
export function IsometricMedical({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      <path d="M6 26 L22 36 L22 16 L6 6 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M22 36 L38 26 L38 6 L22 16 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M6 6 L22 16 L38 6 L22 2 Z" fill="currentColor" />
      {/* Medical cross on right face */}
      <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <line x1="28" y1="11" x2="28" y2="23" />
        <line x1="24" y1="17" x2="32" y2="17" />
      </g>
    </svg>
  );
}

/** Isometric restaurant — building with awning. */
export function IsometricRestaurant({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      <path d="M8 28 L24 38 L24 14 L8 4 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 38 L40 28 L40 4 L24 14 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M8 4 L24 14 L40 4 L24 0 Z" fill="currentColor" />
      {/* Awning stripe below roofline */}
      <path d="M10 10 L24 18 L38 10 L24 6 Z" fill="currentColor" fillOpacity="0.4" />
      {/* Door/window */}
      <rect x="28" y="22" width="6" height="8" rx="0.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9" />
    </svg>
  );
}

/** Isometric warehouse — long box with large door. */
export function IsometricWarehouse({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      {/* Left face (long) */}
      <path d="M4 32 L16 38 L16 14 L4 8 Z" fill="currentColor" fillOpacity="0.5" />
      {/* Right face */}
      <path d="M16 38 L28 32 L28 8 L16 14 Z" fill="currentColor" fillOpacity="0.75" />
      {/* Roof (angled / shed style) */}
      <path d="M4 8 L16 14 L28 8 L16 4 Z" fill="currentColor" />
      {/* Large loading door on right face */}
      <path d="M18 18 L26 14 L26 28 L18 32 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.8" />
      <line x1="22" y1="14" x2="22" y2="30" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6" />
    </svg>
  );
}

/** Isometric retail — storefront with big window. */
export function IsometricRetail({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      <path d="M8 28 L24 38 L24 14 L8 4 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 38 L40 28 L40 4 L24 14 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M8 4 L24 14 L40 4 L24 0 Z" fill="currentColor" />
      {/* Large display window */}
      <rect x="26" y="16" width="12" height="10" rx="0.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9" />
      <line x1="28" y1="21" x2="36" y2="21" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.5" />
      <line x1="32" y1="17" x2="32" y2="25" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.5" />
      {/* Door */}
      <rect x="30" y="26" width="4" height="6" rx="0.5" fill="none" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.8" />
    </svg>
  );
}

/** Isometric office — mid-rise with many windows. */
export function IsometricOffice({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={iconClass + (className ? ` ${className}` : '')}>
      <path d="M10 30 L24 40 L24 12 L10 2 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M24 40 L38 30 L38 2 L24 12 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M10 2 L24 12 L38 2 L24 0 Z" fill="currentColor" />
      {/* Window grid right face */}
      <g fill="none" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.9">
        <rect x="26" y="16" width="3.5" height="3.5" rx="0.4" />
        <rect x="31" y="16" width="3.5" height="3.5" rx="0.4" />
        <rect x="26" y="21" width="3.5" height="3.5" rx="0.4" />
        <rect x="31" y="21" width="3.5" height="3.5" rx="0.4" />
        <rect x="26" y="26" width="3.5" height="3.5" rx="0.4" />
        <rect x="31" y="26" width="3.5" height="3.5" rx="0.4" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6">
        <rect x="12" y="8" width="2.5" height="2.5" rx="0.4" transform="skewX(-30)" />
        <rect x="12" y="14" width="2.5" height="2.5" rx="0.4" transform="skewX(-30)" />
        <rect x="12" y="20" width="2.5" height="2.5" rx="0.4" transform="skewX(-30)" />
      </g>
    </svg>
  );
}

const byPropertyId = {
  condo: IsometricCondo,
  medical: IsometricMedical,
  restaurant: IsometricRestaurant,
  warehouse: IsometricWarehouse,
  retail: IsometricRetail,
  office: IsometricOffice,
} as const;

export type PropertyId = keyof typeof byPropertyId;

export function IsometricPropertyIcon({
  propertyId,
  className,
}: {
  propertyId: PropertyId;
  className?: string;
}) {
  const Icon = byPropertyId[propertyId];
  return Icon ? <Icon className={className} /> : null;
}
