import React, { useState } from 'react';
import { Language, FAQ_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const t = {
    ca: {
      title: 'Dubtes habituals sobre el festival',
      subtitle: 'Tot el que necessites saber per gaudir al màxim de la teva jornada a Tiana.'
    },
    es: {
      title: 'Dudas habituales sobre el festival',
      subtitle: 'Todo lo que necesitas saber para exprimir al máximo tu jornada en Tiana.'
    }
  }[lang];

  return (
    <section className="py-16 sm:py-24 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl bg-white/60 backdrop-blur-xl border overflow-hidden transition-all shadow-sm ${
                  isOpen ? 'border-blue-300 ring-2 ring-blue-500/10' : 'border-white hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-blue-700 transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 shadow-2xs" />
                    <span>{faq.q[lang]}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white/40">
                    {faq.a[lang]}
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
