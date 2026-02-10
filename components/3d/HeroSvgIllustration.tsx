'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HERO_VIDEO_SRC = '/images/hero-logo.mp4';
const HERO_POSTER_SRC = '/images/hero-illustration.png';
const HERO_VIDEO_PLAYED_KEY = 'nfg-hero-video-played';

function hasPlayedThisSession(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(HERO_VIDEO_PLAYED_KEY) === '1';
  } catch {
    return false;
  }
}

interface HeroSvgIllustrationProps {
  className?: string;
}

/**
 * Hero illustration: video plays once then we remove it and show static image only.
 * SessionStorage + immediate DOM removal prevent any loop or replay.
 */
export function HeroSvgIllustration({ className }: HeroSvgIllustrationProps) {
  const [showStatic, setShowStatic] = React.useState(hasPlayedThisSession);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const doneRef = React.useRef(false);
  const lastTimeRef = React.useRef(0);

  const switchToStatic = React.useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    try {
      sessionStorage.setItem(HERO_VIDEO_PLAYED_KEY, '1');
    } catch {
      // ignore sessionStorage errors (e.g. private mode)
    }
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.removeAttribute('src');
      video.load();
    }
    setShowStatic(true);
  }, []);

  const onEnded = React.useCallback(() => switchToStatic(), [switchToStatic]);

  const onPlay = React.useCallback(() => {
    if (doneRef.current) {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
      setShowStatic(true);
    }
  }, []);

  const onTimeUpdate = React.useCallback(() => {
    const video = videoRef.current;
    if (!video || doneRef.current) return;
    const t = video.currentTime;
    const d = video.duration;
    if (Number.isFinite(d) && d > 0.1 && t >= d - 0.5) {
      switchToStatic();
      return;
    }
    if (t < lastTimeRef.current - 1) {
      switchToStatic();
      return;
    }
    lastTimeRef.current = t;
  }, [switchToStatic]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(
        'relative w-full overflow-hidden rounded-2xl aspect-square max-w-lg mx-auto',
        className
      )}
    >
      {showStatic ? (
        <Image
          key="hero-static"
          src={HERO_POSTER_SRC}
          alt="Northern Facilities Group"
          width={800}
          height={800}
          className="w-full h-full object-contain"
          priority
        />
      ) : (
        <video
          key="hero-video"
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER_SRC}
          autoPlay
          muted
          playsInline
          loop={false}
          disablePictureInPicture
          onEnded={onEnded}
          onPlay={onPlay}
          onTimeUpdate={onTimeUpdate}
          onError={() => setShowStatic(true)}
          className="w-full h-full object-contain"
        />
      )}
    </motion.div>
  );
}
