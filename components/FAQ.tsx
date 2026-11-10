'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs, contactEmail, eventMeta } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative z-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle size={14} className="text-[#6D9EFF]" />
            <span className="font-pixel text-[10px] tracking-widest text-[#6D9EFF] uppercase">
              {`// Chapter 05`}
            </span>
          </div>

          <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-[#F5F7FA] tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="pixel-divider w-24 my-4" />

          <p className="font-sans text-base sm:text-lg text-[#DCE3EA]">
            Crucial intelligence for your winter expedition into {eventMeta.fullName} by KaizenHacks.
          </p>
        </motion.div>

        {/* Pixel Accordion Items */}
        <motion.div
          className="mt-12 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`pixel-panel transition-all duration-150 ${
                  isOpen ? 'border-[#6D9EFF] shadow-[3px_3px_0_rgba(109,158,255,0.2)]' : 'border-[#53647B]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center p-5 text-left transition-colors hover:bg-[#1C2536]/50"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#F5F7FA] pr-4 tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 bg-[#1C2536] border border-[#53647B] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 border-[#6D9EFF] text-[#6D9EFF]' : 'text-[#A5AFBD]'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-[#53647B]/30">
                        <p className="font-sans text-sm sm:text-base text-[#DCE3EA] leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Support Callout */}
        <div className="mt-10 pixel-badge inline-flex flex-wrap items-center gap-2 sm:gap-2.5 text-[#A5AFBD] max-w-full">
          <span className="w-2 h-2 bg-[#D65BFF] shrink-0" />
          <span className="break-words">
            Have more questions? Send a transmission to{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[#6D9EFF] hover:underline font-bold break-all"
            >
              {contactEmail}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
