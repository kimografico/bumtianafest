import React from 'react';
import { MapPin } from 'lucide-react';
import { Language } from '../data/content';
import { FESTIVAL_LOGOS } from '../assets/images';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = {
    ca: {
      tagline: 'Festival d’Arts, Tallers i Comunitat Familiar a Tiana (Maresme).',
      location: 'Tiana, Barcelona',
      linksTitle: 'Navegació',
      organizers: 'Organitzen 2LB Produccions juntament amb l\'Ajuntament de Tiana',
      rights: '© 2026 BUM TIANA FEST · Tots els drets reservats.',
    },
    es: {
      tagline: 'Festival de Artes, Talleres y Comunidad Familiar en Tiana (Maresme).',
      location: 'Tiana, Barcelona',
      linksTitle: 'Navegación',
      organizers: 'Organizan 2LB Produccions junto con el Ayuntamiento de Tiana',
      rights: '© 2026 BUM TIANA FEST · Todos los derechos reservados.',
    },
  }[lang];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Left Column: Brand, Tagline, Location, Organization note and Escut */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                BUM TIANA FEST
              </span>
              <span className="text-xs font-bold text-blue-400">
                2026
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {t.tagline}
            </p>

            <div className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{t.location}</span>
            </div>

            {/* Organization text (appears only once) */}
            <div className="pt-2 space-y-3">
              <p className="text-sm text-teal-300 font-semibold">
                {t.organizers}
              </p>

              {/* Escut de Tiana & 2LB Produccions side by side */}
              <div className="flex items-center gap-8 sm:gap-10 pt-1">
                <a
                  href="https://tiana.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                  title="Ajuntament de Tiana"
                >
                  <img
                    src={FESTIVAL_LOGOS.tiana}
                    alt="Escut de l'Ajuntament de Tiana"
                    className="h-16 sm:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                  />
                </a>

                <a
                  href="#organitzacio"
                  className="inline-block group"
                  title="2LB Produccions"
                >
                  <img
                    src={FESTIVAL_LOGOS.twoLb}
                    alt="2LB Produccions"
                    className="h-9 sm:h-11 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links Navigation */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3 md:pl-6 lg:pl-12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.linksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#concepte" className="hover:text-white transition">El Concepte</a></li>
              <li><a href="#tallers" className="hover:text-white transition">Tallers Didàctics</a></li>
              <li><a href="#xerrades" className="hover:text-white transition">Xerrades de Criança</a></li>
              <li><a href="#programa" className="hover:text-white transition">Horaris</a></li>
              <li><a href="#espais" className="hover:text-white transition">Localitzacions</a></li>
              <li><a href="#tarifes" className="hover:text-white transition">Tarifes</a></li>
              <li><a href="#faq" className="hover:text-white transition">Preguntes Freqüents</a></li>
              <li><a href="#organitzacio" className="hover:text-white transition">2LB Produccions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 BUM TIANA FEST · {lang === 'ca' ? 'Tots els drets reservats.' : 'Todos los derechos reservados.'} · {lang === 'ca' ? 'Disseny web: ' : 'Diseño web: '}
            <a
              href="https://kimografico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition font-medium"
            >
              kimografico.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
