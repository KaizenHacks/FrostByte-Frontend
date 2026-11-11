// Site loader controller (browser only).
// Needs the server-rendered cover from siteLoaderCover.js (<div id="site-loader">).
//
// Rules:
// - min time = 2 full loading animation cycles (2 * 1.2s = 2400ms)
// - max time = when all components/assets finish loading
// - maxMs is a safety timeout fallback so it never hangs or infinitely loads.

export const ANIMATION_CYCLE_MS = 1200; // 1 full bouncing-dots animation cycle (1.2s)
export const DEFAULT_MIN_CYCLES = 2;    // Minimum 2 full loading animation cycles

export function initSiteLoader(opts = {}) {
  if (typeof window === "undefined" || window.__siteLoaderStarted) return;
  const root = document.getElementById("site-loader");
  if (!root) return;
  window.__siteLoaderStarted = true;

  const {
    animationCycleMs = ANIMATION_CYCLE_MS,
    minCycles = DEFAULT_MIN_CYCLES,
    minMs = minCycles * animationCycleMs, // 2400ms
    maxMs = 4500, // Maximum cap at 4.5s so network/mobile views never hang indefinitely
  } = opts;

  const t0 = (typeof window !== "undefined" && window.__loaderStartTime) || performance.now();

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;

    const elapsed = performance.now() - t0;
    const wait = Math.max(0, minMs - elapsed);

    setTimeout(() => {
      // 1. Ensure body and html overflow styles are clean
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");

      // 2. Hide and disable pointer events on the loader
      root.classList.add("sl-out");
      root.style.pointerEvents = "none";
      root.style.visibility = "hidden";

      // 3. Remove loader element completely from the DOM
      setTimeout(() => {
        if (root && root.parentNode) {
          root.parentNode.removeChild(root);
        }
      }, 550);
    }, wait);
  };

  // 1. Page complete (DOM interactive / complete)
  const pageLoaded = document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((r) => {
        window.addEventListener("load", r, { once: true });
        window.addEventListener("DOMContentLoaded", r, { once: true });
        setTimeout(r, 2000);
      });

  // 2. All fonts downloaded and decoded (safe: never hangs on rejection)
  const fontsReady = (document.fonts && document.fonts.ready)
    ? document.fonts.ready.catch(() => {})
    : Promise.resolve();

  // 3. Scenery images already rendered in the DOM
  const checkImg = (img) => {
    if (!img) return Promise.resolve();
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise((resolve) => {
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
      if (img.complete) resolve();
      setTimeout(resolve, 2000); // 2s max per image to prevent slow network stalls
    });
  };

  const sceneryImgs = Array.from(document.querySelectorAll(".scenery-image, .campfire-gif"));
  const imgsReady = Promise.all(sceneryImgs.map(checkImg));

  // Safety fallback timeout
  const safetyTimeout = new Promise((r) => setTimeout(r, maxMs));

  // Dismiss loader: waits for components OR safety timeout, always dismisses
  Promise.race([
    Promise.all([pageLoaded, fontsReady, imgsReady]),
    safetyTimeout,
  ])
    .then(dismiss)
    .catch(dismiss);

  // Hard safety timeout fallback
  setTimeout(dismiss, maxMs + 500);
}
