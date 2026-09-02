import React from 'react';
import { Check } from 'lucide-react';

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  tag?: string;
  ctaText?: string;
  onSelect?: () => void;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  tag,
  ctaText = 'Comprar Entrada',
  onSelect,
  className = '',
}) => {
  return (
    <div
      className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
        highlighted
          ? 'bg-white/90 backdrop-blur-2xl border-2 border-blue-600 shadow-xl ring-4 ring-blue-500/10'
          : 'bg-white/60 backdrop-blur-xl border border-white shadow-sm hover:border-blue-200'
      } ${className}`}
    >
      {/* Badge if highlighted */}
      {highlighted && tag && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
          {tag}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="font-extrabold text-2xl text-slate-900">
            {name}
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price Display */}
        <div className="pb-4 border-b border-slate-200/60">
          <div className="text-4xl sm:text-5xl font-black text-slate-900">
            {price}
          </div>
          <div className="text-xs font-semibold text-blue-700 mt-1">
            {period}
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-3">
          {features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                <Check className="w-3 h-3" />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {onSelect && (
        <div className="pt-8">
          <button
            type="button"
            onClick={onSelect}
            className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
              highlighted
                ? 'bg-blue-900 hover:bg-blue-800 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-900 border border-slate-200'
            }`}
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
};
