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
      institutionalTitle: 'Organització & Suport',
      venuesTitle: 'Localitzacions',
      rights: '© 2026 BUM TIANA FEST · 2LB Produccions. Tots els drets reservats.',
      councilNote: 'Amb la col·laboració institucional de l\'Ajuntament de Tiana.',
    },
    es: {
      tagline: 'Festival de Artes, Talleres y Comunidad Familiar en Tiana (Maresme).',
      location: 'Tiana, Barcelona',
      linksTitle: 'Navegación',
      institutionalTitle: 'Organización & Apoyo',
      venuesTitle: 'Localizaciones',
      rights: '© 2026 BUM TIANA FEST · 2LB Produccions. Todos los derechos reservados.',
      councilNote: 'Con la colaboración institucional del Ajuntament de Tiana.',
    },
  }[lang];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                BUM TIANA FEST
              </span>
              <span className="text-xs font-bold text-blue-400">
                2026
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="pt-2 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{t.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.linksTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
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

          {/* Organization & Support */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.institutionalTitle}
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              <div>
                <span className="font-bold text-white block">2LB Produccions</span>
                <span className="text-slate-400">Direcció artística, producció tècnica & musical a Tiana</span>
              </div>
              
              <div className="pt-2">
                <a
                  href="https://tiana.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-teal-300 hover:text-teal-200 font-semibold transition text-sm mb-3"
                >
                  Ajuntament de Tiana (tiana.cat)
                </a>

                {/* Large Escut de Tiana */}
                <a
                  href="https://tiana.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit group"
                  title="Ajuntament de Tiana"
                >
                  <img
                    src={FESTIVAL_LOGOS.tiana}
                    alt="Escut de l'Ajuntament de Tiana"
                    className="h-16 sm:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 BUM TIANA FEST · 2LB Produccions. {lang === 'ca' ? 'Tots els drets reservats.' : 'Todos los derechos reservados.'} · {lang === 'ca' ? 'Disseny web: ' : 'Diseño web: '}
            <a
              href="https://kimografico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition font-medium"
            >
              kimografico.com
            </a>
          </div>
          <div className="text-center sm:text-right text-slate-300 font-medium">{t.councilNote}</div>
        </div>

      </div>
    </footer>
  );
};
