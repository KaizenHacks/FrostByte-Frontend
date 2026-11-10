'use client';

import { motion } from 'framer-motion';
import { Globe, Bot, Clock, Lock, Snowflake, ArrowUpRight } from 'lucide-react';
import { aboutHighlights, eventMeta, kaizenHacksMeta } from '@/lib/constants';

const iconMap = { Globe, Bot, Clock, Lock } as const;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Snowflake size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 01`}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
              About {eventMeta.name}
            </h2>
            <span className="font-pixel text-[10px] sm:text-xs text-[#A5AFBD] tracking-wider uppercase">
              {eventMeta.attribution}
            </span>
          </div>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-3xl leading-relaxed">
            {eventMeta.description} Organized by{' '}
            <a
              href={kaizenHacksMeta.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6D9EFF] hover:underline font-semibold"
            >
              KaizenHacks
            </a>
            , FROSTBYTE 2026 brings together builders for a 3-day immersive journey focused on full-stack web excellence and autonomous agent engineering.
          </p>
        </motion.div>

        {/* 4 Quest Highlight Pixel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-12">
          {aboutHighlights.map((highlight, index) => {
            const IconComponent =
              iconMap[highlight.icon as keyof typeof iconMap] ?? Globe;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pixel-panel pixel-panel-hover p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#1C2536] border border-[#53647B] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117]">
                      <IconComponent size={20} />
                    </div>
                    <span className="font-pixel text-[9px] text-[#A5AFBD] tracking-widest uppercase">
                      {highlight.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F7FA] mt-5 tracking-wide">
                    {highlight.title}
                  </h3>
                  <p className="font-sans text-sm text-[#A5AFBD] mt-2 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#53647B]/30 flex items-center justify-between">
                  <span className="font-pixel text-[9px] text-[#C2E1E8] tracking-widest">
                    LVL.0{index + 1}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#6D9EFF]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* KaizenHacks Organizer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 pixel-panel p-6 sm:p-7 bg-[#171F2D]/95 border border-[#53647B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href={kaizenHacksMeta.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2.5 bg-[#091F42]/80 border border-[#254B85]/60 hover:border-[#6D9EFF] shadow-[2px_2px_0_#0D1117] transition-all"
              aria-label="KaizenHacks - Independent Event & Innovation Network"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={kaizenHacksMeta.logo}
                alt="KaizenHacks Official Logo"
                width="160"
                height="44"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </a>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-pixel text-xs sm:text-sm text-[#F5F7FA] tracking-wide">
                  {kaizenHacksMeta.attribution}
                </span>
                <span className="pixel-badge text-[8px] text-[#6D9EFF] border-[#254B85]">
                  {kaizenHacksMeta.networkType}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#A5AFBD] mt-1 max-w-xl leading-relaxed">
                {kaizenHacksMeta.tagline} &bull; {kaizenHacksMeta.philosophy}
              </p>
            </div>
          </div>
          <a
            href={kaizenHacksMeta.website}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-secondary text-[10px] py-2 px-3.5 inline-flex items-center gap-1.5 uppercase transition-colors shrink-0"
          >
            <span>Explore Network</span>
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
