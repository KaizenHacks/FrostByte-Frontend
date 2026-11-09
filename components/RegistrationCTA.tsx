'use client';

import { motion } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';
import { eventMeta } from '@/lib/constants';
import FrostbyteLogo from '@/components/FrostbyteLogo';

export default function RegistrationCTA() {
  return (
    <section id="register" className="py-20 md:py-28 relative z-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="pixel-panel p-6 sm:p-8 md:p-12 text-center bg-[#171F2D]/95 border-2 border-[#6D9EFF] shadow-[6px_6px_0_#0D1117] relative overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#6D9EFF]" />

          {/* Official Frostbyte Emblem */}
          <div className="flex justify-center mb-6">
            <FrostbyteLogo
              variant="cta"
              glow
            />
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#D65BFF] shrink-0" />
            <span className="font-pixel text-[9px] sm:text-[10px] text-[#C2E1E8] tracking-widest uppercase">
              FINAL CALL FOR EXPEDITION CANDIDATES
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight leading-snug">
            Ready to Build Beyond the Ordinary?
          </h2>

          <div className="pixel-divider w-20 mx-auto my-5" />

          <p className="font-sans text-sm sm:text-base text-[#DCE3EA] max-w-xl mx-auto leading-relaxed">
            Assemble your party of up to 4, prepare your setup, and join us in Delhi for 24 hours of deep engineering, winter atmosphere, and relentless building.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={eventMeta.registrationUrl}
              className="pixel-btn-primary w-full sm:w-auto text-sm py-3.5 px-8 text-center"
            >
              Apply for {eventMeta.name} &rarr;
            </a>
            <a
              href="#timeline"
              className="pixel-btn-secondary w-full sm:w-auto text-sm py-3.5 px-6 text-center"
            >
              Review Timeline
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[#A5AFBD] font-pixel text-[8px] sm:text-[9px] text-center">
            <Terminal size={12} className="text-[#6D9EFF] shrink-0" />
            <span className="break-words">APPLICATIONS CLOSING SOON // ALL REGIONS WELCOME</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
