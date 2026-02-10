'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SketchfabEmbedProps {
  /** Sketchfab model ID (from the model URL: sketchfab.com/3d-models/...-ID) */
  modelId: string;
  /** Optional title for iframe accessibility */
  title?: string;
  /** Enable autoplay / animation (default false) */
  autoplay?: boolean;
  /** Transparent background (default false) */
  transparent?: boolean;
  /** Initial camera index (e.g. 0) */
  camera?: number;
  className?: string;
}

/**
 * Embeds a Sketchfab 3D model in an iframe.
 * Use camera=0 and transparent=1 for a static look with no animation.
 */
export function SketchfabEmbed({
  modelId,
  title = '3D model',
  autoplay = false,
  transparent = false,
  camera,
  className,
}: SketchfabEmbedProps) {
  const embedUrl = React.useMemo(() => {
    const url = new URL(
      `https://sketchfab.com/models/${modelId}/embed`
    );
    url.searchParams.set('utm_medium', 'embed');
    url.searchParams.set('utm_campaign', 'share-popup');
    url.searchParams.set('autostart', '0'); // no animation
    if (autoplay) {
      url.searchParams.set('autostart', '1');
    }
    if (transparent) {
      url.searchParams.set('transparent', '1');
    }
    if (camera !== undefined) {
      url.searchParams.set('camera', String(camera));
    }
    return url.toString();
  }, [modelId, autoplay, transparent, camera]);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl aspect-square max-w-lg mx-auto',
        !transparent && 'bg-secondary',
        className
      )}
    >
      <iframe
        title={title}
        className="absolute inset-0 h-full w-full rounded-2xl"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={embedUrl}
      />
      <p className="sr-only">
        <a
          href={`https://sketchfab.com/3d-models/${modelId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View 3D model on Sketchfab
        </a>
      </p>
    </div>
  );
}
