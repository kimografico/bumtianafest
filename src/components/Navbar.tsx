import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FESTIVAL_LOGOS } from "../assets/images";
import { LINKS } from "../data/links";

interface NavbarProps {
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Tallers", href: "#tallers" },
    { name: "Xerrades", href: "#xerrades" },
    { name: "Horaris", href: "#programa" },
    { name: "Localitzacions", href: "#espais" },
    { name: "Cloenda", href: "#cloenda" },
    { name: "2LB", href: "#organitzacio" },
  ];

  const handleLinkClick = () => {
    if (onNavigateHome) onNavigateHome();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-festbg/90 border-b border-secondary/25 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand Logo with BUMFEST26.svg */}
          <button
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 text-left cursor-pointer group py-1"
            title="BUMFEST TIANA 2026"
          >
            <img
              src={FESTIVAL_LOGOS.bumFest}
              alt="BUMFEST"
              width={459}
              height={102}
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Navegació principal"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-2 rounded text-xs font-bold text-festtext hover:text-primary hover:bg-secondary/10 transition whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Ajuntament de Tiana Logo (Corporate Blue) & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo del Ajuntament de Tiana en blau corporatiu */}
            <a
              href={LINKS.institutional.ajuntamentTiana}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-1 rounded hover:opacity-85 transition group"
              title="Ajuntament de Tiana"
            >
              <img
                src={FESTIVAL_LOGOS.tiana}
                alt="Ajuntament de Tiana"
                width={26}
                height={38}
                className="h-13 w-auto object-contain -my-2 transition-transform duration-200 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded md:hidden text-festtext hover:bg-secondary/15 border border-secondary/30 transition cursor-pointer"
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ?
                <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegació mòbil"
          className="md:hidden border-t border-secondary/25 bg-festcard/98 backdrop-blur-2xl px-4 py-6 space-y-2 shadow-xl animate-in slide-in-from-top-2"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded text-sm font-bold text-festtext hover:bg-primary/10 hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
