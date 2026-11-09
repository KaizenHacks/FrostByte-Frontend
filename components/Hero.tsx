'use client';

import { type Variants, motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Navigation, ChevronDown } from 'lucide-react';
import { eventMeta } from '@/lib/constants';
import FrostbyteLogo from '@/components/FrostbyteLogo';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const metaItems = [
  { label: eventMeta.format, icon: Clock, tag: 'FORMAT' },
  { label: eventMeta.dates, icon: Calendar, tag: 'TIMING' },
  { label: eventMeta.venue, icon: MapPin, tag: 'VENUE' },
  { label: eventMeta.location, icon: Navigation, tag: 'REALM' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[105vh] flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-36 text-center select-none"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center max-w-4xl mx-auto"
      >
        {/* Prominent FROSTBYTE Hero Emblem */}
        <motion.div
          custom={0}
          variants={fadeUp}
          className="mb-5 sm:mb-7 flex justify-center"
        >
          <FrostbyteLogo
            variant="hero"
            glow
            hoverGlow
          />
        </motion.div>

        {/* Retro Game Quest Badge */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171F2D]/90 border border-[#53647B] shadow-[2px_2px_0_#0D1117] backdrop-blur-sm"
        >
          <span className="font-pixel text-[10px] sm:text-xs text-[#C2E1E8] tracking-widest uppercase">
            Quest 2025 // Winter Edition
          </span>
          <span className="inline-block w-1.5 h-1.5 bg-[#D65BFF]" />
        </motion.div>

        {/* FROSTBYTE Monumental Pixel Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          className="font-pixel text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F7FA] drop-shadow-[0_4px_0_#0D1117] max-w-full break-words"
        >
          {eventMeta.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          className="mt-5 font-heading text-xl sm:text-2xl md:text-3xl text-[#C2E1E8] tracking-wide"
        >
          {eventMeta.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={3}
          variants={fadeUp}
          className="mx-auto mt-4 max-w-2xl font-sans text-sm sm:text-base text-[#DCE3EA] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          {eventMeta.description}
        </motion.p>

        {/* Pixel Buttons CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href={eventMeta.registrationUrl}
            className="pixel-btn-primary w-full sm:w-auto"
          >
            Start Quest [Register]
          </a>
          <a
            href="#about"
            className="pixel-btn-secondary w-full sm:w-auto"
          >
            Explore Campsite &darr;
          </a>
        </motion.div>

        {/* Event Metadata Pixel HUD Panel */}
        <motion.div
          custom={5}
          variants={fadeUp}
          className="mt-12 w-full pixel-panel p-3 sm:p-4 bg-[#171F2D]/90 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 text-left sm:text-center divide-y sm:divide-y-0 sm:divide-x divide-[#53647B]/40">
            {metaItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.tag}
                  className="flex items-center gap-3 pt-2.5 sm:pt-0 sm:justify-center first:pt-0"
                >
                  <div className="w-8 h-8 bg-[#1C2536] border border-[#53647B] flex items-center justify-center shrink-0 shadow-[1px_1px_0_#0D1117]">
                    <Icon size={14} className="text-[#6D9EFF]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-pixel text-[9px] text-[#A5AFBD] tracking-widest uppercase">
                      {item.tag}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-semibold text-[#F5F7FA]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Retro Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <a
          href="#about"
          aria-label="Scroll down into the winter realm"
          className="flex flex-col items-center gap-1.5 font-pixel text-[10px] tracking-widest text-[#A5AFBD] hover:text-[#6D9EFF] transition-colors"
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
