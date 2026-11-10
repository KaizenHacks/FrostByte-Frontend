'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Sparkles, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';
import { communityMeta, kaizenHacksMeta } from '@/lib/constants';

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 04`}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
              FROSTBYTE Community
            </h2>
            <span className="font-pixel text-[10px] sm:text-xs text-[#A5AFBD] tracking-wider uppercase">
              Builders &bull; Organizers &bull; Network
            </span>
          </div>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-3xl leading-relaxed">
            Connect directly with fellow web developers, agentic engineering enthusiasts, and the{' '}
            <strong className="text-[#F5F7FA]">KaizenHacks</strong> organizing squad. Assemble your hackathon squad of up to 4 builders and receive prompt event announcements.
          </p>
        </motion.div>

        {/* Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {/* Pillar 1: Official WhatsApp Guild */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="pixel-panel p-6 sm:p-7 flex flex-col justify-between bg-[#171F2D]/90 border border-[#53647B] relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#091F42] border border-[#254B85] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117]">
                  <MessageCircle size={20} />
                </div>
                <span className="pixel-badge text-[8px] text-[#6D9EFF]">PRIMARY CHANNEL</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F5F7FA] tracking-wide">
                Official WhatsApp Squad
              </h3>

              <p className="font-sans text-sm text-[#A5AFBD] mt-3 leading-relaxed">
                Direct access to KaizenHacks organizers, real-time quest alerts, team matching mixers, and logistical support throughout the winter hackathon.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#53647B]/30">
              <a
                href={communityMeta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-primary w-full text-xs py-2.5 px-4 text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                <span>Join WhatsApp Guild</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>

          {/* Pillar 2: Squad Formation Mixer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pixel-panel p-6 sm:p-7 flex flex-col justify-between bg-[#171F2D]/90 border border-[#53647B] relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#091F42] border border-[#254B85] flex items-center justify-center text-[#D65BFF] shadow-[2px_2px_0_#0D1117]">
                  <Users size={20} />
                </div>
                <span className="pixel-badge text-[8px] text-[#D65BFF]">1-4 BUILDERS</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F5F7FA] tracking-wide">
                Squad Formation
              </h3>

              <p className="font-sans text-sm text-[#A5AFBD] mt-3 leading-relaxed">
                Competing solo or looking to complete your roster? Find complementary frontend developers, agent architects, and UI/UX designers inside the community.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#53647B]/30 flex items-center justify-between text-[#A5AFBD] font-pixel text-[9px]">
              <span className="inline-flex items-center gap-1.5 text-[#C2E1E8]">
                <ShieldCheck size={13} className="text-[#6D9EFF]" />
                TEAMS: 1 TO 4 MEMBERS
              </span>
              <span className="text-[#53647B]">{`// OPEN`}</span>
            </div>
          </motion.div>

          {/* Pillar 3: KaizenHacks Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pixel-panel p-6 sm:p-7 flex flex-col justify-between bg-[#171F2D]/90 border border-[#53647B] relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#091F42] border border-[#254B85] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117]">
                  <Globe size={20} />
                </div>
                <span className="pixel-badge text-[8px] text-[#A5AFBD]">NETWORK</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F5F7FA] tracking-wide">
                KaizenHacks Network
              </h3>

              <p className="font-sans text-sm text-[#A5AFBD] mt-3 leading-relaxed">
                An Independent Event &amp; Innovation Network connecting independent organisers with knowledge, resources, and opportunities to build lasting experience.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#53647B]/30">
              <a
                href={kaizenHacksMeta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary w-full text-xs py-2.5 px-4 text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore Network</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
