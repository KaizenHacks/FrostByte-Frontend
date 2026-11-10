'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Lock, Sparkles, Terminal } from 'lucide-react';
import FrostbyteLogo from '@/components/FrostbyteLogo';
import { communityMeta, eventMeta, kaizenHacksMeta } from '@/lib/constants';

export default function Registration() {
  return (
    <section id="registration" className="py-24 md:py-32 relative z-20">
      {/* Anchor alias for backwards compatibility */}
      <span id="register" className="sr-only" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="pixel-panel p-6 sm:p-10 md:p-14 text-center bg-[#171F2D]/95 border-2 border-[#53647B] relative overflow-hidden shadow-[6px_6px_0_#0D1117]"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#6D9EFF]" />

          {/* Frostbyte Logo */}
          <div className="flex justify-center mb-6">
            <FrostbyteLogo variant="cta" glow />
          </div>

          {/* Event Header Label */}
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#D65BFF]" />
            <span className="font-pixel text-[11px] sm:text-xs text-[#F5F7FA] tracking-widest uppercase">
              {eventMeta.fullName}
            </span>
          </div>

          {/* Visual Status Indicator: REGISTRATION STATUS: NOT OPEN */}
          <div className="my-3 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#091F42] border-2 border-[#EAB308]/60 shadow-[2px_2px_0_#0D1117]">
              <span className="w-2 h-2 bg-[#EAB308] animate-pulse" />
              <span className="font-pixel text-[10px] sm:text-[11px] text-[#FDE047] tracking-widest uppercase">
                &lt;REGISTRATION STATUS: NOT OPEN&gt;
              </span>
            </div>
          </div>

          {/* Primary Heading */}
          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight leading-snug mt-4">
            Registrations are opening soon.
          </h2>

          <div className="pixel-divider w-20 mx-auto my-5" />

          {/* Narrative */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#DCE3EA] max-w-xl mx-auto leading-relaxed">
            We&apos;re preparing something exciting. Stay connected with the FROSTBYTE community to be among the first to know when registrations go live.
          </p>

          {/* Functional WhatsApp Community CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={communityMeta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-primary w-full sm:w-auto text-xs sm:text-sm py-3.5 px-8 text-center inline-flex items-center justify-center gap-2.5 shadow-[4px_4px_0_#0D1117]"
              aria-label="Join the FROSTBYTE WhatsApp Community (opens in new tab)"
            >
              <MessageCircle size={16} />
              <span>JOIN THE WHATSAPP COMMUNITY</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Secondary Notice */}
          <p className="font-sans text-xs sm:text-sm text-[#A5AFBD] mt-5 max-w-md mx-auto leading-relaxed">
            Registration details and application instructions will be announced soon.
          </p>

          {/* Retro Status Terminal Footer */}
          <div className="mt-8 pt-5 border-t border-[#53647B]/40 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-pixel text-[9px] text-[#A5AFBD]">
            <span className="inline-flex items-center gap-1.5 text-[#C2E1E8]">
              <Lock size={12} className="text-[#EAB308]" />
              APPLICATIONS: STAGED
            </span>
            <span className="text-[#53647B] hidden sm:inline">{`//`}</span>
            <span className="inline-flex items-center gap-1.5">
              <Terminal size={12} className="text-[#6D9EFF]" />
              {kaizenHacksMeta.attribution.toUpperCase()}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
