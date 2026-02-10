'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface PlayOnceVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  /** URL of the video (e.g. MP4 or WebM). Plays once on load, then stops. */
  src: string;
  /** MIME type, e.g. "video/mp4" or "video/webm". Defaults to "video/mp4". */
  type?: string;
}

function stopVideoAndNotify(video: HTMLVideoElement, onEnded: (() => void) | undefined) {
  video.pause();
  video.removeAttribute('src');
  video.load();
  onEnded?.();
}

/**
 * Renders a video that plays once on load, then stops and calls onEnded.
 * Clears the video src when it finishes so it cannot replay.
 */
export function PlayOnceVideo({
  src,
  type = 'video/mp4',
  className,
  onEnded,
  ...videoProps
}: PlayOnceVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const hasEndedRef = React.useRef(false);

  const finish = React.useCallback(() => {
    const video = videoRef.current;
    if (!video || hasEndedRef.current) return;
    hasEndedRef.current = true;
    stopVideoAndNotify(video, onEnded as () => void);
  }, [onEnded]);

  const handleEnded = React.useCallback(() => {
    finish();
  }, [finish]);

  const handleTimeUpdate = React.useCallback(() => {
    const video = videoRef.current;
    if (!video || hasEndedRef.current) return;
    const d = video.duration;
    if (Number.isFinite(d) && d > 0 && video.currentTime >= d - 0.15) {
      finish();
    }
  }, [finish]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      onTimeUpdate={handleTimeUpdate}
      className={cn(className)}
      {...videoProps}
      loop={false}
    />
  );
}
