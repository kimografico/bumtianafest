import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  indexBadge?: string;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  indexBadge,
  className = '',
}) => {
  return (
    <div
      className={`rounded-3xl bg-white/60 backdrop-blur-xl border overflow-hidden transition-all shadow-xs ${
        isOpen
          ? 'border-blue-300 ring-2 ring-blue-500/10'
          : 'border-white hover:border-blue-200'
      } ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-blue-700 transition cursor-pointer"
      >
        <span className="flex items-center gap-3">
          {indexBadge ? (
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-black flex items-center justify-center shrink-0">
              {indexBadge}
            </span>
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 shadow-2xs" />
          )}
          <span>{question}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white/40">
          {answer}
        </div>
      )}
    </div>
  );
};
