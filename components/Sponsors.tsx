'use client';

import { motion } from 'framer-motion';
import { Award, Shield, ArrowUpRight, Globe } from 'lucide-react';
import { eventMeta, kaizenHacksMeta, contactEmail } from '@/lib/constants';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="0" ry="0" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
            Organizer &amp; Partners
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-2xl leading-relaxed">
            FROSTBYTE is proudly organized by KaizenHacks, uniting builders and technology organizations to create transformative web experiences.
          </p>
        </motion.div>

        {/* ── 1. PROMINENT ORGANIZER CARD (KaizenHacks) ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 pixel-panel p-6 sm:p-10 bg-[#141A26] border-2 border-[#53647B] relative"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* KaizenHacks Logo & Badge */}
            <div className="flex flex-col items-center lg:items-start gap-4 shrink-0 text-center lg:text-left">
              <div className="px-3 py-1 bg-[#091F42] border border-[#254B85] inline-flex items-center gap-2 shadow-[2px_2px_0_#0D1117]">
                <span className="w-2 h-2 bg-[#6D9EFF] animate-pulse" />
                <span className="font-pixel text-[9px] text-[#C2E1E8] tracking-widest uppercase">
                  OFFICIAL ORGANIZER
                </span>
              </div>

              <a
                href={kaizenHacksMeta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[280px] sm:max-w-[320px] p-4 bg-[#091F42]/80 border border-[#254B85]/70 hover:border-[#6D9EFF] shadow-[4px_4px_0_#0D1117] transition-all group"
                aria-label="KaizenHacks Official Website"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={kaizenHacksMeta.logo}
                  alt="KaizenHacks Official Logo"
                  width="280"
                  height="77"
                  className="w-full h-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </a>

              <span className="font-pixel text-[10px] text-[#C2E1E8] tracking-widest uppercase">
                {kaizenHacksMeta.tagline}
              </span>
            </div>

            {/* KaizenHacks Bio & Official Channels */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-2.5 py-0.5 mb-2 bg-[#254B85]/20 border border-[#254B85]/50 text-[#6D9EFF] font-pixel text-[9px] tracking-wider uppercase">
                {kaizenHacksMeta.networkType}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
                {kaizenHacksMeta.attribution}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#DCE3EA] mt-3 leading-relaxed">
                {kaizenHacksMeta.description}
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#A5AFBD] mt-2 leading-relaxed">
                <span className="text-[#C2E1E8] font-semibold">Core Philosophy:</span> {kaizenHacksMeta.philosophy} &mdash; Through FROSTBYTE 2026, KaizenHacks establishes an intensive 3-day arena for developers to master modern web architecture and agentic engineering through collective progress.
              </p>

              {/* KaizenHacks Verified Links */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={kaizenHacksMeta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-badge inline-flex items-center gap-2 text-[#F5F7FA] hover:text-[#6D9EFF] hover:border-[#6D9EFF] transition-colors"
                >
                  <Globe size={13} className="text-[#6D9EFF]" />
                  <span>kaizenhacks.tech</span>
                  <ArrowUpRight size={11} className="text-[#A5AFBD]" />
                </a>

                <a
                  href={kaizenHacksMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-badge inline-flex items-center gap-2 text-[#A5AFBD] hover:text-[#F5F7FA] hover:border-[#6D9EFF] transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-[#6D9EFF]" />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-[#A5AFBD]" />
                </a>

                <a
                  href={kaizenHacksMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-badge inline-flex items-center gap-2 text-[#A5AFBD] hover:text-[#F5F7FA] hover:border-[#6D9EFF] transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#6D9EFF]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-[#A5AFBD]" />
                </a>

                <a
                  href={kaizenHacksMeta.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-badge inline-flex items-center gap-2 text-[#A5AFBD] hover:text-[#F5F7FA] hover:border-[#6D9EFF] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#6D9EFF]" />
                  <span>Instagram</span>
                  <ArrowUpRight size={11} className="text-[#A5AFBD]" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. GUILD PARTNERS & SPONSORS STATUS ──────────────────────────── */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-6 text-center">
            <span className="h-0.5 w-8 bg-[#53647B]/50 hidden sm:block" />
            <span className="font-pixel text-[11px] text-[#C2E1E8] tracking-widest uppercase">
              Guild Partners &amp; Sponsors
            </span>
            <span className="h-0.5 w-8 bg-[#53647B]/50 hidden sm:block" />
          </div>

          {/* Clean Revealed Slot Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="pixel-panel p-6 flex flex-col items-center justify-center gap-2.5 text-center min-h-[120px] bg-[#171F2D]/70"
              >
                <Shield className="w-5 h-5 text-[#53647B]" />
                <span className="font-pixel text-[9px] text-[#6D9EFF] tracking-wider uppercase">
                  MORE PARTNERS REVEALING SOON
                </span>
                <span className="font-pixel text-[8px] text-[#53647B] tracking-widest">
                  SLOT_0{slot} {`//`} LOCKED
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. BECOME A PARTNER CALLOUT ──────────────────────────────────── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="pixel-panel flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:px-8 bg-[#171F2D]/95 max-w-3xl mx-auto text-center sm:text-left">
            <div>
              <span className="font-pixel text-[9px] text-[#6D9EFF] uppercase tracking-wider block mb-1">
                SUPPORT INNOVATION
              </span>
              <p className="font-sans text-sm text-[#DCE3EA]">
                Interested in supporting student developers, providing problem statements, or partnering with {eventMeta.name} 2026?
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="pixel-btn-primary w-full sm:w-auto shrink-0 text-center"
            >
              Partner With Us &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
