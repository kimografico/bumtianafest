import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../data/content';
import { FESTIVAL_LOGOS } from '../assets/images';

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
    { name: { ca: '2LB', es: '2LB' }, href: '#organitzacio' },
  ];

  const handleLinkClick = () => {
    if (onNavigateHome) onNavigateHome();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#EFEEE0]/90 border-b border-[#88643B]/25 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo with BUMFEST26.svg */}
          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left cursor-pointer group py-1"
            title="BUM Tiana FEST 2026"
          >
            <img
              src={FESTIVAL_LOGOS.bumFest}
              alt="BUM Tiana FEST"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#181816] hover:text-[#0C478D] hover:bg-[#88643B]/10 transition whitespace-nowrap"
              >
                {link.name[lang]}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-2xl bg-[#FAF9F3] border border-[#88643B]/30 text-xs font-bold shadow-2xs">
              <button
                onClick={() => setLang('ca')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  lang === 'ca'
                    ? 'bg-[#0C478D] text-white shadow-2xs'
                    : 'text-[#181816] hover:text-[#0C478D]'
                }`}
              >
                CA
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  lang === 'es'
                    ? 'bg-[#0C478D] text-white shadow-2xs'
                    : 'text-[#181816] hover:text-[#0C478D]'
                }`}
              >
                ES
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl md:hidden text-[#181816] hover:bg-[#88643B]/15 border border-[#88643B]/30 transition cursor-pointer"
              aria-label={lang === 'ca' ? 'Menú' : 'Menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={lang === 'ca' ? 'Navegació mòbil' : 'Navegación móvil'}
          className="md:hidden border-t border-[#88643B]/25 bg-[#FAF9F3]/98 backdrop-blur-2xl px-4 py-6 space-y-2 shadow-xl animate-in slide-in-from-top-2"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-2xl text-sm font-bold text-[#181816] hover:bg-[#0C478D]/10 hover:text-[#0C478D] transition"
            >
              {link.name[lang]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
