'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useScroll, useVelocity, useSpring, useReducedMotion } from 'motion/react';

interface PixelSnow {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedY: number;
  baseDrift: number;
  phase: number;
  colorType: 'snow' | 'paleIce' | 'frost';
}

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<PixelSnow[]>([]);
  const animFrameRef = useRef<number>(0);
  const reducedMotion = useReducedMotion();

  // Scroll velocity tracking via Motion
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  // Smoothly damp velocity so wind builds up dynamically and decays naturally over ~0.6-0.8s
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 24,
    stiffness: 140,
    mass: 0.5,
  });

  const createParticles = useCallback((width: number, height: number): PixelSnow[] => {
    // Atmospheric particle density: ~140 particles on desktop, ~55 on mobile for clarity
    const isMobile = width < 768;
    const count = isMobile ? 55 : 140;
    const particles: PixelSnow[] = [];

    for (let i = 0; i < count; i++) {
      const sizeRand = Math.random();
      // Pixel-art square particles: mostly 1px and 2px, rare 3px foreground flakes
      const size = sizeRand > 0.88 ? 3 : sizeRand > 0.45 ? 2 : 1;

      const colorRand = Math.random();
      const colorType: 'snow' | 'paleIce' | 'frost' =
        colorRand > 0.75 ? 'paleIce' : colorRand > 0.45 ? 'frost' : 'snow';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        opacity: 0.25 + Math.random() * 0.5,
        speedY: 0.6 + Math.random() * 0.9 + (size === 3 ? 0.35 : 0),
        baseDrift: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        colorType,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (reducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastW = window.innerWidth;
    let lastH = window.innerHeight;

    const resize = () => {
      if (!canvas) return;
      const curW = window.innerWidth;
      const curH = window.innerHeight;

      // Ignore mobile address bar expansion/collapse (< 150px vertical fluctuation)
      if (Math.abs(curW - lastW) === 0 && Math.abs(curH - lastH) < 150) {
        return;
      }

      lastW = curW;
      lastH = curH;
      canvas.width = curW;
      canvas.height = curH;
      particlesRef.current = createParticles(curW, curH);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesRef.current = createParticles(canvas.width, canvas.height);

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('orientationchange', resize, { passive: true });

    let elapsed = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      elapsed += 0.016;

      // Read current smoothed velocity from MotionValue without triggering React re-renders
      const currentVel = Math.abs(smoothVelocity.get());
      // Normalize wind factor: 0 at rest, 1.0 at fast scrolling (~1400px/s)
      const windFactor = Math.min(currentVel / 1400, 1.0);

      // Horizontal wind push (predominantly blowing across to the right)
      const windSpeedX = windFactor * 9.5;
      // Slight vertical acceleration during wind gust
      const windSpeedY = windFactor * 1.8;

      const particles = particlesRef.current;
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle drift oscillates gently with slight rightward bias
        const idleDrift = Math.sin(elapsed * 1.5 + p.phase) * p.baseDrift * 0.4 + 0.25;

        // Total instantaneous velocities
        const vx = idleDrift + windSpeedX;
        const vy = p.speedY + windSpeedY;

        p.x += vx;
        p.y += vy;

        // Wrap around boundaries
        if (p.y > h + 10) {
          p.y = -8;
          p.x = Math.random() * (w + 200) - 100;
        }
        if (p.x > w + 20) {
          p.x = -15;
          p.y = Math.random() * h;
        } else if (p.x < -20) {
          p.x = w + 15;
        }

        // Color palette based on brand guidelines:
        // Snow White: #F5F7FA
        // Pale Ice:   #C2E1E8
        // Frost White:#DCE3EA
        let rgb = '245, 247, 250';
        if (p.colorType === 'paleIce') {
          rgb = '194, 225, 232';
        } else if (p.colorType === 'frost') {
          rgb = '220, 227, 234';
        }

        const alpha = Math.min(0.85, p.opacity + (windFactor > 0.3 ? 0.15 : 0));

        // When wind is strong, draw subtle directional snow streaks along movement vector
        if (windFactor > 0.35 && p.size >= 2) {
          const streakLength = Math.floor(p.size + windFactor * 6.5);
          ctx.strokeStyle = `rgba(${rgb}, ${alpha * 0.75})`;
          ctx.lineWidth = p.size === 3 ? 2 : 1;
          ctx.beginPath();
          ctx.moveTo(Math.floor(p.x), Math.floor(p.y));
          ctx.lineTo(
            Math.floor(p.x - (vx / (vx + vy)) * streakLength),
            Math.floor(p.y - (vy / (vx + vy)) * streakLength)
          );
          ctx.stroke();
        } else {
          // Crisp pixel dot at rest or low wind
          ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [createParticles, reducedMotion, smoothVelocity]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 pixelated"
      aria-hidden="true"
    />
  );
}
