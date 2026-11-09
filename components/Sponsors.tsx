'use client';

import { motion } from 'framer-motion';
import { Shield, Award } from 'lucide-react';
import { sponsorTiers, contactEmail } from '@/lib/constants';
import FrostbyteLogo from '@/components/FrostbyteLogo';

const sizeClasses: Record<string, string> = {
  lg: 'w-60 h-28 sm:w-72 sm:h-32',
  md: 'w-44 h-24 sm:w-52 sm:h-24',
  sm: 'w-36 h-20 sm:w-40 sm:h-20',
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Award size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 04`}
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            Sponsors &amp; Guild Partners
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-2xl leading-relaxed">
            FROSTBYTE is backed by technology organizations empowering student engineers and innovators to build the future.
          </p>
        </motion.div>

        {/* Sponsor Tiers in Retro Pixel Style */}
        <div className="mt-16 space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: tierIndex * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-0.5 w-8 bg-[#53647B]/50 hidden sm:block" />
                <span className="font-pixel text-[11px] text-[#C2E1E8] tracking-widest uppercase">
                  {tier.tier}
                </span>
                <span className="h-0.5 w-8 bg-[#53647B]/50 hidden sm:block" />
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {Array.from({ length: tier.slots }).map((_, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`${sizeClasses[tier.size]} max-w-full pixel-panel pixel-panel-hover flex flex-col items-center justify-center gap-2 group`}
                  >
                    <Shield className="w-5 h-5 text-[#53647B] group-hover:text-[#6D9EFF] transition-colors" />
                    <span className="font-pixel text-[9px] text-[#53647B] group-hover:text-[#A5AFBD] tracking-widest transition-colors uppercase">
                      [{tier.tier}]
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor Callout */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="pixel-panel flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:px-8 bg-[#171F2D]/95 max-w-2xl mx-auto text-center sm:text-left">
            <div className="flex items-center gap-3">
              <FrostbyteLogo variant="badge" className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" hoverGlow />
              <span className="font-sans text-sm text-[#DCE3EA]">
                Looking to support student innovation and recruit top tier engineering talent?
              </span>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="pixel-btn-primary w-full sm:w-auto shrink-0 text-center"
            >
              Sponsor FROSTBYTE &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
