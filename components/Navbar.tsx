'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, eventMeta } from '@/lib/constants';
import FrostbyteLogo from '@/components/FrostbyteLogo';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Handle transparent vs solid backdrop styling
      setIsScrolled(currentScrollY > 40);

      // Always show at top of page
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (!mobileOpen && currentScrollY <= maxScroll) {
        const delta = currentScrollY - lastScrollY;
        // 8px threshold to ignore micro-scroll jitter
        if (delta > 8) {
          // Scrolling down -> remove nav
          setIsVisible(false);
        } else if (delta < -8) {
          // Scrolling up -> bring nav back
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const showNav = isVisible || mobileOpen;

  return (
    <header
      style={{
        transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s, border-color 0.25s',
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-[#171F2D]/90 backdrop-blur-md border-b-2 border-[#53647B] shadow-[0_4px_0_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* FROSTBYTE Pixel Wordmark & Prominent Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 sm:gap-3.5 group py-1"
            aria-label="FROSTBYTE Hackathon home"
          >
            <FrostbyteLogo
              variant="nav"
              hoverGlow
            />
            <div className="flex items-center gap-2">
              <span className="font-pixel text-base sm:text-lg tracking-wider text-[#F5F7FA] group-hover:text-[#6D9EFF] transition-colors">
                {eventMeta.name}
              </span>
              <span className="inline-block w-2 h-2 bg-[#D65BFF] animate-pulse shadow-[1px_1px_0_#0D1117]" />
            </div>
          </a>

          {/* Desktop Links (Sharp Pixel Borders) */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-pixel text-[11px] tracking-wider text-[#A5AFBD] hover:text-[#F5F7FA] hover:bg-[#1C2536] border border-transparent hover:border-[#53647B] px-3.5 py-2 transition-all uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 pl-3 border-l border-[#53647B]/50">
              <a
                href={eventMeta.registrationUrl}
                className="pixel-btn-primary"
              >
                Register [ESC]
              </a>
            </div>
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 bg-[#171F2D] border-2 border-[#53647B] text-[#DCE3EA] hover:border-[#6D9EFF] md:hidden shadow-[2px_2px_0_#0D1117] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Responsive Pixel Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="overflow-hidden border-b-2 border-[#53647B] bg-[#171F2D] shadow-[0_6px_0_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-t border-b border-[#53647B]/40 bg-[#141A26]">
              <FrostbyteLogo variant="badge" className="w-8 h-8" />
              <div className="flex items-center gap-1.5">
                <span className="font-pixel text-sm text-[#F5F7FA] tracking-wider">
                  {eventMeta.name}
                </span>
                <span className="inline-block w-1.5 h-1.5 bg-[#D65BFF] animate-pulse" />
              </div>
            </div>
            <nav className="flex flex-col gap-1.5 p-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="font-pixel text-xs tracking-wider text-[#DCE3EA] hover:bg-[#1C2536] hover:text-[#6D9EFF] border border-transparent hover:border-[#53647B] p-2.5 transition-colors uppercase flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#6D9EFF] opacity-50">&gt;</span>
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-[#53647B]">
                <a
                  href={eventMeta.registrationUrl}
                  onClick={closeMobile}
                  className="pixel-btn-primary w-full text-center"
                >
                  Register Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
