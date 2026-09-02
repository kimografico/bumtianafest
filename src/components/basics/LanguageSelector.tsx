import React from 'react';
import { Language } from '../../data/content';

export interface LanguageSelectorProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  lang,
  onLanguageChange,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => onLanguageChange('ca')}
        aria-label="Canviar a Català"
        className={`px-3 py-1 rounded-xl transition cursor-pointer ${
          lang === 'ca'
            ? 'bg-blue-900 text-white shadow-2xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        CA
      </button>
      <button
        type="button"
        onClick={() => onLanguageChange('es')}
        aria-label="Cambiar a Castellano"
        className={`px-3 py-1 rounded-xl transition cursor-pointer ${
          lang === 'es'
            ? 'bg-blue-900 text-white shadow-2xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        ES
      </button>
    </div>
  );
};
