import React from 'react';
import { Check } from 'lucide-react';
import { Language, PRICING_DATA } from '../data/content';

interface PricingSectionProps {
  lang: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang }) => {
  const t = PRICING_DATA[lang];

  return (
    <section id="tarifes" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {t.packs.map((pack, idx) => (
            <div
              key={idx}
              className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between transition-all ${
                pack.highlighted
                  ? 'bg-white/85 backdrop-blur-2xl border-2 border-blue-600 shadow-xl relative -translate-y-2 ring-4 ring-blue-500/10'
                  : 'bg-white/60 backdrop-blur-xl border border-white shadow-sm hover:border-blue-200'
              }`}
            >
              {/* Badge if highlighted */}
              {pack.highlighted && pack.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                  {pack.tag}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-extrabold text-2xl text-slate-900">
                    {pack.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 font-normal leading-relaxed">
                    {pack.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-4 border-b border-slate-200/60">
                  <div className="text-4xl sm:text-5xl font-black text-slate-900">
                    {pack.price}
                  </div>
                  <div className="text-xs font-semibold text-blue-700 mt-1">
                    {pack.period}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  {pack.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
