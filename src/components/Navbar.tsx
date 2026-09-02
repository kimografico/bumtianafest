import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../data/content';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: { ca: 'Tallers', es: 'Talleres' }, href: '#tallers' },
    { name: { ca: 'Xerrades', es: 'Charlas' }, href: '#xerrades' },
    { name: { ca: 'Horaris', es: 'Horarios' }, href: '#programa' },
    { name: { ca: 'Localitzacions', es: 'Localizaciones' }, href: '#espais' },
    { name: { ca: 'Tarifes', es: 'Tarifas' }, href: '#tarifes' },
    { name: { ca: '2LB', es: '2LB' }, href: '#organitzacio' },
  ];

  const handleLinkClick = () => {
    if (onNavigateHome) onNavigateHome();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Wordmark */}
          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-baseline gap-2 text-left cursor-pointer group"
          >
            <span className="font-extrabold text-xl sm:text-2xl text-blue-950 tracking-tight group-hover:text-blue-700 transition">
              BUM TIANA
            </span>
            <span className="text-xs font-bold text-blue-600">
              2026
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-900 hover:bg-slate-100/80 transition whitespace-nowrap"
              >
                {link.name[lang]}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold shadow-2xs">
              <button
                onClick={() => setLang('ca')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  lang === 'ca'
                    ? 'bg-blue-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                CA
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  lang === 'es'
                    ? 'bg-blue-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ES
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl md:hidden text-slate-700 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-2xl px-4 py-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-900 transition"
            >
              {link.name[lang]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
