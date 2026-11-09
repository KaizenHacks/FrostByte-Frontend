'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Target, Zap, Snowflake } from 'lucide-react';
import { aboutHighlights, eventMeta } from '@/lib/constants';

const iconMap = { Clock, Users, Target, Zap } as const;

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

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            About {eventMeta.name}
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-3xl leading-relaxed">
            {eventMeta.description} Step into a pixelated winter frontier where ideas take shape around the campsite campfire. Whether you&apos;re forging game engines, AI infrastructure, decentralized platforms, or solving humanitarian challenges, FROSTBYTE is built for passionate builders who thrive on high-intensity shipping.
          </p>
        </motion.div>

        {/* 4 Quest Highlight Pixel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-12">
          {aboutHighlights.map((highlight, index) => {
            const IconComponent =
              iconMap[highlight.icon as keyof typeof iconMap];
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
                  <div className="w-10 h-10 bg-[#1C2536] border border-[#53647B] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117]">
                    <IconComponent size={20} />
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
      </div>
    </section>
  );
}
