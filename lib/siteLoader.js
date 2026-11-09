// Site loader controller (browser only).
// Needs the server-rendered cover from siteLoaderCover.js (<div id="site-loader">).
//
// Rules:
// - min time = 2 full loading animation cycles (2 * 1.2s = 2400ms)
// - max time = when all components/assets (window "load" + fonts + scenery + images) finish loading
// - maxMs is a safety timeout fallback so it never gets permanently stuck if an asset hangs.

export const ANIMATION_CYCLE_MS = 1200; // 1 full bouncing-dots animation cycle (1.2s)
export const DEFAULT_MIN_CYCLES = 2;    // Minimum 2 full loading animation cycles

export function initSiteLoader(opts = {}) {
  if (typeof window === "undefined" || window.__siteLoaderStarted) return;
  const root = document.getElementById("site-loader");
  if (!root) {
    console.warn("siteLoader: #site-loader not found; render the cover on the server.");
    return;
  }
  window.__siteLoaderStarted = true;

  const {
    extraImages = [],
    animationCycleMs = ANIMATION_CYCLE_MS,
    minCycles = DEFAULT_MIN_CYCLES,
    minMs = minCycles * animationCycleMs, // 2 * 1200ms = 2400ms
    maxMs = 15000,
  } = opts;

  // Use the exact time the cover was rendered, or current performance timestamp
  const t0 = (typeof window !== "undefined" && window.__loaderStartTime) || performance.now();

  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  // 1. Page complete (scripts, stylesheets, initial DOM)
  const pageLoaded = document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((r) => addEventListener("load", r, { once: true }));

  // 2. All fonts downloaded and decoded
  const fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve();

  // 3. Preload all critical hero scenery & brand assets
  const preload = extraImages.map((src) => new Promise((res) => {
    const i = new Image();
    i.onload = i.onerror = res;
    i.src = src;
  }));

  // 4. All visible non-lazy <img> tags on page finished loading
  const visibleImgs = () => Promise.all(
    Array.from(document.images)
      .filter((i) => i.loading !== "lazy" && !i.complete && !root.contains(i))
      .map((i) => new Promise((res) => {
        if (i.complete) return res();
        i.addEventListener("load", res, { once: true });
        i.addEventListener("error", res, { once: true });
      }))
  );

  // All components loaded promise
  const allComponentsLoaded = Promise.all([pageLoaded, fontsReady, ...preload]).then(visibleImgs);

  // Safety fallback timeout
  const safetyTimeout = new Promise((r) => setTimeout(r, maxMs));

  // Dismiss loader:
  // - Waits for all components to load (or safety timeout)
  // - Ensures at least `minMs` (2 full loading animation cycles) has elapsed before fading out
  Promise.race([allComponentsLoaded, safetyTimeout]).then(() => {
    const elapsed = performance.now() - t0;
    const wait = Math.max(0, minMs - elapsed);

    setTimeout(() => {
      root.classList.add("sl-out");
      setTimeout(() => {
        document.body.style.overflow = prevOverflow;
        root.style.display = "none"; // Hide, do not unmount React root
      }, 650);
    }, wait);
  });
}
