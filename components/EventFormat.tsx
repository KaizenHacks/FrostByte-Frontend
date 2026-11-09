'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Sword } from 'lucide-react';
import { eventTimeline } from '@/lib/constants';

export default function EventFormat() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sword size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 02`}
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            Event Format &amp; Quest Log
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA] max-w-2xl leading-relaxed">
            Engineered into two concentrated 12-hour building sprints (12 + 12 format), balancing relentless focus, restorative rest, and an electric final demo round.
          </p>
        </motion.div>

        {/* Modular Vertical Pixel Timeline */}
        <div className="relative mt-16 sm:mt-20">
          {/* Vertical retro line */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-[#53647B]/60" />

          <div className="flex flex-col gap-10 md:gap-14">
            {eventTimeline.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative grid grid-cols-[24px_1fr] md:grid-cols-[1fr_24px_1fr] items-center"
                >
                  {/* Desktop-only left content */}
                  <div className="hidden md:block">
                    {isEven ? (
                      <div className="pr-10 text-right">
                        <TimelinePixelCard event={event} align="right" step={index + 1} />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Pixel Timeline Marker */}
                  <div className="flex justify-center z-10">
                    <div className="w-5 h-5 bg-[#171F2D] border-2 border-[#6D9EFF] flex items-center justify-center shadow-[1px_1px_0_#0D1117]">
                      <span className="w-1.5 h-1.5 bg-[#D65BFF]" />
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden pl-3 sm:pl-6">
                    <TimelinePixelCard event={event} align="left" step={index + 1} />
                  </div>

                  {/* Desktop right content */}
                  <div className="hidden md:block">
                    {!isEven ? (
                      <div className="pl-10 text-left">
                        <TimelinePixelCard event={event} align="left" step={index + 1} />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelinePixelCard({
  event,
  align = 'left',
  step,
}: {
  event: (typeof eventTimeline)[number];
  align?: 'left' | 'right';
  step: number;
}) {
  return (
    <div
      className={`pixel-panel pixel-panel-hover p-4 sm:p-6 ${
        align === 'right' ? 'md:text-right' : 'text-left'
      }`}
    >
      <div
        className={`flex items-center gap-2 mb-2 ${
          align === 'right' ? 'md:justify-end' : 'justify-start'
        }`}
      >
        <span className="font-pixel text-[10px] text-[#6D9EFF] tracking-wider uppercase">
          STAGE 0{step} {`//`} {event.phase}
        </span>
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F7FA] tracking-wide">
        {event.title}
      </h3>
      <p className="font-sans text-sm text-[#A5AFBD] mt-2 leading-relaxed">
        {event.description}
      </p>
      <div
        className={`mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5 ${
          align === 'right' ? 'md:justify-end' : 'justify-start'
        }`}
      >
        <span className="pixel-badge inline-flex items-center gap-1.5 text-[#C2E1E8]">
          <Calendar size={11} className="text-[#6D9EFF]" />
          {event.day}
        </span>
        <span className="pixel-badge inline-flex items-center gap-1.5 text-[#A5AFBD]">
          <Clock size={11} className="text-[#6D9EFF]" />
          {event.time}
        </span>
      </div>
    </div>
  );
}
