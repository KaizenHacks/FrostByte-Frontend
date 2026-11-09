'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';
import LightCurtainBackground from '@/components/LightCurtainBackground';
import './frostbyte-scenery.css';

/**
 * FROSTBYTE Pixel Art Scenery Asset Mapping:
 * Layer 1 (FAR SKY):           /scenery/farsky-clean.png     (z-index: 1, 2% parallax)
 * Layer 2 (DISTANT FOREST):    /scenery/farforest-clean.png  (z-index: 2, 7% parallax)
 * Layer 3 (MAIN CAMPSITE):     /scenery/campsite-clean.png   (z-index: 3, 16% parallax)
 * TITLE LAYER (FROSTBYTE):     Integrated HTML Title         (z-index: 3, 16% parallax locked with campsite)
 * Layer 4 (FOREGROUND TERRAIN):/scenery/foreground-clean.png (z-index: 4, 38-45% parallax, 1086x1448 extended height)
 * Layer 5 (CAMPFIRE):          /scenery/campfire-clean.png   (temporarily disabled)
 */
export const SCENERY_LAYERS = {
  farSky: {
    src: '/scenery/farsky-clean.png',
    alt: 'FROSTBYTE Far Sky — Winter night sky with celestial clouds and stars',
    zIndex: 1,
  },
  distantForest: {
    src: '/scenery/farforest-clean.png',
    alt: 'FROSTBYTE Distant Forest — Silhouette of pine forest and snowy hills',
    zIndex: 2,
  },
  mainCampsite: {
    src: '/scenery/campsite-clean.png',
    alt: 'FROSTBYTE Main Campsite — Winter adventurer, snow igloo, lantern and clearing',
    zIndex: 4,
  },
  foregroundTerrain: {
    src: '/scenery/foreground-clean.png',
    alt: 'FROSTBYTE Foreground Terrain — Rising snow-covered silhouette framing the content',
    zIndex: 5,
  },
  campfire: {
    src: '/scenes/Pixel-Art_Campfire_Flicker_Animation.gif',
    alt: 'FROSTBYTE Campfire — Glowing animated pixel-art campfire and logs at the campsite',
    zIndex: 4,
  },
} as const;

interface CampfireLayerProps {
  yTransform: MotionValue<string>;
  reducedMotion?: boolean | null;
}

/**
 * Dedicated Animated Campfire Layer component.
 * Positioned beside the adventurer, anchored in the campsite coordinate space,
 * and scrolls 1:1 with campsiteY behind the rising foreground terrain.
 */
export function CampfireLayer({ yTransform, reducedMotion }: CampfireLayerProps) {
  return (
    <motion.div
      className="scenery-layer scenery-layer-campfire"
      style={{ y: reducedMotion ? '0px' : yTransform }}
      aria-hidden="true"
    >
      <div className="campfire-wrapper">
        <div className="campfire-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SCENERY_LAYERS.campfire.src}
          alt={SCENERY_LAYERS.campfire.alt}
          className="campfire-gif"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

/**
 * Atmospheric Star Twinkle Canvas (Subtle background idle effect)
 */
function StarTwinkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 0.5);

    const stars = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() > 0.8 ? 2 : 1,
      baseAlpha: 0.2 + Math.random() * 0.4,
      speed: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.04;

      for (const s of stars) {
        const alpha = s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.2;
        ctx.fillStyle = `rgba(194, 225, 232, ${Math.max(0.1, alpha)})`;
        ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 0.5;
    };

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-twinkle-canvas" aria-hidden="true" />;
}

/**
 * Piecewise linear interpolation helper with integer pixel snapping.
 * Ensures strict whole-pixel coordinates, eliminating subpixel jitter on pixel art.
 */
function interpolateSegment(val: number, keys: number[], values: number[]): number {
  if (val <= keys[0]) return values[0];
  if (val >= keys[keys.length - 1]) return values[values.length - 1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (val >= keys[i] && val <= keys[i + 1]) {
      const span = keys[i + 1] - keys[i];
      if (span === 0) return values[i];
      const t = (val - keys[i]) / span;
      return values[i] + t * (values[i + 1] - values[i]);
    }
  }
  return values[values.length - 1];
}

export default function FrostbyteScenery() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Track responsive viewport height for proportional travel calculations
  const [viewportHeight, setViewportHeight] = useState(1080);

  useEffect(() => {
    const updateDims = () => {
      setViewportHeight(window.innerHeight);
    };
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  // Extended cinematic duration: approximately 225vh of scroll distance
  const D = Math.max(Math.round(viewportHeight * 2.25), 2200);

  // Milestones along scroll distance:
  // 0–15%: Complete initial campsite composition. FROSTBYTE title clearly visible.
  // 15–35%: Sky and forest begin movement. Wind picks up. Title moves upwards.
  // 35–60%: Campsite moves upwards. Foreground starts rising noticeably.
  // 60–80%: Foreground progressively covers the campsite and title.
  // 80–100%: Complete foreground snow coverage fills the viewport.
  const scrollKeys = [0, 0.15 * D, 0.35 * D, 0.60 * D, 0.80 * D, D];

  // Distinct relative movement strengths:
  // Layer 1: Far Sky — almost stationary (0 at scroll=0, subtle ~43px travel at 1080p)
  const skyVals = [0, 0, -10, -25, -35, Math.round(-0.04 * viewportHeight)];

  // Layer 2: Distant Forest — moderate movement (0 at scroll=0, ~162px travel at 1080p)
  const forestVals = [0, 0, -35, -90, -130, Math.round(-0.15 * viewportHeight)];

  // Layer 3: Main Campsite (0 at scroll=0, ~378px travel at 1080p)
  const campsiteVals = [0, 0, -80, -220, -310, Math.round(-0.35 * viewportHeight)];

  // Dedicated Title Layer: Independent scrollspeed moving upwards into the sky (~540px travel at 1080p)
  const finalTitle = Math.round(-0.10 * viewportHeight);
  const titleVals = [
    0,
    0,
    Math.round(finalTitle * 0.22),
    Math.round(finalTitle * 0.55),
    Math.round(finalTitle * 0.85),
    finalTitle,
  ];

  // Layer 4: Foreground Terrain — FASTEST layer of all (~1296px travel at 1080p):
  // Rises dramatically over campsite and title, pulling up the deep lower foreground snow textures
  // and ensuring 100% solid coverage behind website sections with zero plain background.
  const finalFg = Math.round(-1.20 * viewportHeight);
  const fgVals = [
    0,
    0,                          // 0–15%: translation remains 0, showcasing pristine campsite composition
    Math.round(finalFg * 0.18), // 15–35%: begins rising smoothly
    Math.round(finalFg * 0.50), // 35–60%: covers campsite
    Math.round(finalFg * 0.82), // 60–80%: covers title
    finalFg,                    // 80–100%: deep foreground snow terrain fills the entire viewport
  ];

  // Integer-pixel snapped transform translations
  const skyY = useTransform(
    scrollY,
    (v) => (reducedMotion ? '0px' : `${Math.round(interpolateSegment(v, scrollKeys, skyVals))}px`)
  );
  const forestY = useTransform(
    scrollY,
    (v) => (reducedMotion ? '0px' : `${Math.round(interpolateSegment(v, scrollKeys, forestVals))}px`)
  );
  const campsiteY = useTransform(
    scrollY,
    (v) => (reducedMotion ? '0px' : `${Math.round(interpolateSegment(v, scrollKeys, campsiteVals))}px`)
  );
  const titleY = useTransform(
    scrollY,
    (v) => (reducedMotion ? '0px' : `${Math.round(interpolateSegment(v, scrollKeys, titleVals))}px`)
  );
  const titleOpacity = useTransform(
    scrollY,
    [0, 0.20 * D, 0.60 * D],
    [1, 1, 0]
  );
  const foregroundY = useTransform(
    scrollY,
    (v) => (reducedMotion ? '0px' : `${Math.round(interpolateSegment(v, scrollKeys, fgVals))}px`)
  );

  return (
    <aside
      className="scenery-viewport"
      aria-label="FROSTBYTE Interactive Winter Scenery"
      role="presentation"
    >
      <div className="scenery-container">
        {/* Interactive WebGL curtain between the sky and the scenery foreground. */}
        <LightCurtainBackground />

        {/* ── Layer 1: Far Sky (z-index: 1, 2% movement) ───────────────────── */}
        <motion.div
          className="scenery-layer scenery-layer-sky"
          style={{ y: skyY }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SCENERY_LAYERS.farSky.src}
            alt={SCENERY_LAYERS.farSky.alt}
            className="scenery-image"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          {!reducedMotion && <StarTwinkleCanvas />}
        </motion.div>

        {/* ── Layer 2: Distant Forest (z-index: 2, 7% movement) ────────────── */}
        <motion.div
          className="scenery-layer scenery-layer-forest"
          style={{ y: forestY }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SCENERY_LAYERS.distantForest.src}
            alt={SCENERY_LAYERS.distantForest.alt}
            className="scenery-image"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </motion.div>

        {/* ── Layer 3: Main Campsite (z-index: 3, 16% movement) ───────────── */}
        <motion.div
          className="scenery-layer scenery-layer-campsite"
          style={{ y: campsiteY }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SCENERY_LAYERS.mainCampsite.src}
            alt={SCENERY_LAYERS.mainCampsite.alt}
            className="scenery-image"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </motion.div>

        {/* ── FROSTBYTE Title Layer (Dedicated independent scrollspeed) ── */}
        <motion.div
          className="scenery-layer scenery-layer-title"
          style={{ y: titleY, opacity: titleOpacity }}
          aria-hidden="true"
        >
          {/* <div className="mb-3 sm:mb-4">
            <FrostbyteLogo
              variant="scenery"
              glow
            />
          </div> */}
          <h1 className="scenery-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            FROSTBYTE
          </h1>
          <div className="scenery-scroll-hint animate-pulse">
            [SCROLL TO EXPLORE]
          </div>
        </motion.div>

        {/* ── Layer 5: Campfire (Integrated animated campfire beside the boy) ── */}
        <CampfireLayer yTransform={campsiteY} reducedMotion={reducedMotion} />

        {/* ── Layer 4: Foreground Terrain (z-index: 4, 38–45% movement) ────── */}
        {/* Visually passes in front of campsite and title, preserving complete intended silhouette & extended depth */}
        <motion.div
          className="scenery-layer scenery-layer-terrain"
          style={{ y: foregroundY }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SCENERY_LAYERS.foregroundTerrain.src}
            alt={SCENERY_LAYERS.foregroundTerrain.alt}
            className="scenery-image"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </motion.div>
      </div>
    </aside>
  );
}
