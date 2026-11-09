'use client';

import { useEffect } from 'react';
import { initSiteLoader } from '@/lib/siteLoader';

const HERO_IMAGES = [
  '/scenery/farsky-clean.png',
  '/scenery/farforest-clean.png',
  '/scenery/campsite-clean.png',
  '/scenery/foreground-clean.png',
  '/scenes/Pixel-Art_Campfire_Flicker_Animation.gif',
  '/logo/frostbyte_p5.svg',
];

export default function SiteLoader() {
  useEffect(() => {
    initSiteLoader({
      extraImages: HERO_IMAGES,
      minCycles: 2, // Minimum time = 2 full loading animation cycles (2 * 1.2s = 2400ms)
      maxMs: 15000, // Safety timeout fallback
    });
  }, []);

  return null;
}
