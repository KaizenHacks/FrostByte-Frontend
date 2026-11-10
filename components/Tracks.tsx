'use client';

import { motion } from 'framer-motion';
import { Lock, Globe, Bot, Terminal, ShieldAlert, Sparkles } from 'lucide-react';
import { eventMeta, problemStatementMeta } from '@/lib/constants';

export default function Tracks() {
  return (
    <section id="problem-statement" className="py-24 md:py-32 relative z-20">
      {/* Invisible anchor target for backwards compatibility */}
      <span id="tracks" className="sr-only" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Lock size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 03`}
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            Technical Domain &amp; Challenge
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-3xl leading-relaxed">
            {eventMeta.description}
          </p>
        </motion.div>

        {/* ── THE PROBLEM STATEMENT (Encrypted Vault) ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 pixel-panel p-6 sm:p-10 bg-[#141A26] border-2 border-[#6D9EFF] shadow-[6px_6px_0_#0D1117] relative overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#6D9EFF]" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#6D9EFF]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#1C2536] border border-[#53647B] text-[#D65BFF]">
                <ShieldAlert size={14} className="animate-pulse" />
                <span className="font-pixel text-[9px] tracking-widest uppercase text-[#C2E1E8]">
                  {problemStatementMeta.badge}
                </span>
              </div>

              <h3 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight leading-snug">
                {problemStatementMeta.title}
              </h3>

              <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-[#6D9EFF] animate-ping" />
                <p className="font-pixel text-xs sm:text-sm text-[#6D9EFF] tracking-wider uppercase">
                  {problemStatementMeta.status}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#A5AFBD] mt-4 max-w-xl leading-relaxed">
                To guarantee fair ground and uninhibited creativity, the single central problem statement remains sealed until the opening ceremony of FROSTBYTE. Every squad begins simultaneously with no pre-built templates.
              </p>
            </div>

            {/* Retro Vault Hologram Visual */}
            <div className="w-full md:w-auto flex flex-col items-center justify-center p-6 sm:p-8 bg-[#171F2D] border border-[#53647B] shadow-[4px_4px_0_#0D1117] shrink-0">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1C2536] border-2 border-[#6D9EFF] flex items-center justify-center shadow-[inset_0_0_15px_rgba(109,158,255,0.3)]">
                  <Lock size={36} className="text-[#6D9EFF] animate-pulse" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#D65BFF] animate-ping" />
              </div>
              <span className="font-pixel text-[10px] text-[#C2E1E8] tracking-widest mt-4 uppercase">
                STATUS: SEALED
              </span>
              <span className="font-pixel text-[8px] text-[#53647B] tracking-wider mt-1">
                DECRYPT_KEY // DAY_01
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Two Core Technical Pillars ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {/* Pillar 1: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="pixel-panel pixel-panel-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-[#1C2536] border border-[#53647B] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117]">
                  <Globe size={20} />
                </div>
                <span className="font-pixel text-[9px] text-[#C2E1E8] tracking-widest uppercase">
                  CORE DOMAIN // 01
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F5F7FA] mt-5 tracking-wide">
                Modern Web Development
              </h3>

              <p className="font-sans text-sm text-[#A5AFBD] mt-2.5 leading-relaxed">
                FROSTBYTE is exclusively a web development hackathon. Solutions must be delivered as full-stack web applications, rich client experiences, or progressive web architectures designed for scalability, accessibility, and real-world deployment.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#53647B]/30 flex items-center justify-between">
              <span className="font-pixel text-[9px] text-[#A5AFBD]">
                FRAMEWORKS &bull; APIS &bull; WEB PLATFORMS
              </span>
              <Sparkles size={13} className="text-[#6D9EFF]" />
            </div>
          </motion.div>

          {/* Pillar 2: Agentic Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pixel-panel pixel-panel-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-[#1C2536] border border-[#53647B] flex items-center justify-center text-[#D65BFF] shadow-[2px_2px_0_#0D1117]">
                  <Bot size={20} />
                </div>
                <span className="font-pixel text-[9px] text-[#D65BFF] tracking-widest uppercase">
                  TECHNICAL FOCUS // 02
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F5F7FA] mt-5 tracking-wide">
                Agentic Engineering
              </h3>

              <p className="font-sans text-sm text-[#A5AFBD] mt-2.5 leading-relaxed">
                Infuse your web applications with agentic workflows. Harness multi-agent coordination, autonomous tool execution, self-correcting logic, and intelligent copilots that transform passive web interfaces into active problem-solving engines.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#53647B]/30 flex items-center justify-between">
              <span className="font-pixel text-[9px] text-[#A5AFBD]">
                AUTONOMOUS AGENTS &bull; TOOL CALLING &bull; REASONING
              </span>
              <Terminal size={13} className="text-[#D65BFF]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
