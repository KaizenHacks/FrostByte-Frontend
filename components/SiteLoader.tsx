'use client';

import { useEffect } from 'react';
import { initSiteLoader } from '@/lib/siteLoader';

export default function SiteLoader() {
  useEffect(() => {
    initSiteLoader({
      minCycles: 2, // Minimum time = 2 full loading animation cycles (2 * 1.2s = 2400ms)
      maxMs: 4000,  // Fast safety cap so mobile/network devices never stall
    });
  }, []);

  return null;
}

