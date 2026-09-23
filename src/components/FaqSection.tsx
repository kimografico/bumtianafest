import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const title = 'SOBRE EL BUMFEST';
  const subtitle = 'Tot el que necessites saber per gaudir al màxim de la teva jornada a Tiana.';

  return (
    <section id="faq" className="py-16 sm:py-24 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {title}
          </h2>
          <p className="text-base text-[#4A4A43]">
            {subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded bg-[#FAF9F3]/90 backdrop-blur-xl border overflow-hidden transition-all shadow-sm ${
                  isOpen ? 'border-[#0C478D] ring-2 ring-[#0C478D]/15' : 'border-[#88643B]/30 hover:border-[#88643B]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#181816] hover:text-[#0C478D] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0C478D] shrink-0 shadow-2xs" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#66665D] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0C478D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A4A43] leading-relaxed border-t border-[#88643B]/20 bg-white/40"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
