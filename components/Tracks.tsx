'use client';

import { motion } from 'framer-motion';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Leaf,
  Lightbulb,
  Trophy,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { tracks } from '@/lib/constants';

const iconMap = {
  HeartPulse,
  Landmark,
  GraduationCap,
  Leaf,
  Lightbulb,
  Trophy,
} as const;

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Layers size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 03`}
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            Tracks &amp; Challenges
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-2xl leading-relaxed">
            Select your quest path. Specific industry challenge statements provided by partners will be unsealed at opening ceremony.
          </p>
        </motion.div>

        {/* 6 Track Pixel Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {tracks.map((track, index) => {
            const IconComponent =
              iconMap[track.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="pixel-panel pixel-panel-hover p-5 sm:p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#1C2536] border border-[#53647B] flex items-center justify-center text-[#6D9EFF] shadow-[2px_2px_0_#0D1117] group-hover:border-[#6D9EFF] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-pixel text-[10px] text-[#A5AFBD] tracking-widest">
                      TRACK_0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F5F7FA] mt-5 tracking-wide group-hover:text-[#6D9EFF] transition-colors">
                    {track.title}
                  </h3>

                  <p className="font-sans text-sm text-[#A5AFBD] mt-2 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#53647B]/30 flex items-center justify-between font-pixel text-[9px] text-[#A5AFBD]">
                  <span className="text-[#C2E1E8]">STATUS: UNLOCKED</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6D9EFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
