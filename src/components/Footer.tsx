import React from "react";
import { MapPin } from "lucide-react";
import { Language } from "../data/content";
import { FESTIVAL_LOGOS } from "../assets/images";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = {
    ca: {
      tagline: "Festival d'Arts, Tallers i Comunitat Familiar a Tiana (Maresme).",
      location: "Tiana, Barcelona",
      linksTitle: "Navegació",
      linkConcepte: "El Concepte",
      linkTallers: "Tallers Didàctics",
      linkXerrades: "Xerrades de Criança",
      linkHoraris: "Horaris",
      linkEspais: "Localitzacions",
      linkFaq: "Preguntes Freqüents",
      link2lb: "2LB Produccions",
      organizers:
        "Organitzen 2LB Produccions + l'Ajuntament de Tiana amb la col·laboració de la Diputació de Barcelona",
      rights: "© 2026 BUM Tiana FEST · Tots els drets reservats.",
    },
    es: {
      tagline: "Festival de Artes, Talleres y Comunidad Familiar en Tiana (Maresme).",
      location: "Tiana, Barcelona",
      linksTitle: "Navegación",
      linkConcepte: "El Concepto",
      linkTallers: "Talleres Didácticos",
      linkXerrades: "Charlas de Crianza",
      linkHoraris: "Horarios",
      linkEspais: "Localizaciones",
      linkFaq: "Preguntas Frecuentes",
      link2lb: "2LB Producciones",
      organizers:
        "Organizan 2LB Produccions + el Ayuntamiento de Tiana con la colaboración de la Diputación de Barcelona",
      rights: "© 2026 BUM Tiana FEST · Todos los derechos reservados.",
    },
  }[lang];

  return (
    <footer className="bg-[var(--color-primary-dark)] text-[#EFEEE0]/80 pt-16 pb-12 border-t border-[#C19463]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Left Column: Brand, Tagline, Location, Organization note and Escut */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={FESTIVAL_LOGOS.bumFest}
                alt="BUM Tiana FEST"
                width={160}
                height={36}
                className="h-9 sm:h-11 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#EFEEE0]/75 leading-relaxed max-w-md">
              {t.tagline}
            </p>

            <div className="text-xs text-[#EFEEE0]/90 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#C19463]" />
              <span>{t.location}</span>
            </div>

            {/* Unified Organization & Collaboration */}
            <div className="pt-2 space-y-4">
              <p className="text-xs sm:text-sm text-[#C19463] font-bold max-w-xl leading-relaxed">
                {t.organizers}
              </p>

              {/* Three logos with '+' and thin vertical separator for Diputació */}
              <div className="flex items-center flex-wrap gap-8 sm:gap-10 md:gap-12 pt-2">
                {/* 1. Ajuntament de Tiana */}
                <a
                  href="https://tiana.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group shrink-0"
                  title="Ajuntament de Tiana"
                >
                  <img
                    src={FESTIVAL_LOGOS.tiana}
                    alt="Escut de l'Ajuntament de Tiana"
                    width={100}
                    height={100}
                    className="h-14 sm:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                </a>

                {/* Plus sign divider */}
                <span
                  className="text-xl sm:text-2xl font-bold text-[#C19463] select-none -mx-2 sm:-mx-3"
                  aria-hidden="true"
                >
                  +
                </span>

                {/* 2. 2LB Produccions */}
                <a
                  href="#organitzacio"
                  className="inline-block group shrink-0"
                  title="2LB Produccions"
                >
                  <img
                    src={FESTIVAL_LOGOS.twoLb}
                    alt="2LB Produccions"
                    width={100}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                </a>

                {/* Thin vertical separator */}
                <div
                  className="h-8 sm:h-10 w-px bg-white/20 self-center shrink-0"
                  aria-hidden="true"
                />

                {/* 3. Diputació de Barcelona */}
                <a
                  href="https://www.diba.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group shrink-0"
                  title="Diputació de Barcelona"
                >
                  <img
                    src={FESTIVAL_LOGOS.diputacio}
                    alt="Diputació de Barcelona"
                    width={100}
                    height={60}
                    className="h-8 sm:h-9 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links Navigation & Espai Families */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6 md:pl-6 lg:pl-12">
            {/* Espai Famílies logo (Mobile only: appears before Navegació) */}
            <div className="block md:hidden pb-1">
              <img
                src={FESTIVAL_LOGOS.espaiFamilies}
                alt="Espai Famílies"
                width={120}
                height={28}
                className="h-7 w-auto object-contain opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <p
                className="text-xs font-bold uppercase tracking-wider text-white"
                role="heading"
                aria-level="2"
              >
                {t.linksTitle}
              </p>
              <ul className="space-y-2.5 text-xs text-[#EFEEE0]/70">
                <li>
                  <a href="#concepte" className="hover:text-[#C19463] transition">
                    {t.linkConcepte}
                  </a>
                </li>
                <li>
                  <a href="#tallers" className="hover:text-[#C19463] transition">
                    {t.linkTallers}
                  </a>
                </li>
                <li>
                  <a href="#xerrades" className="hover:text-[#C19463] transition">
                    {t.linkXerrades}
                  </a>
                </li>
                <li>
                  <a href="#programa" className="hover:text-[#C19463] transition">
                    {t.linkHoraris}
                  </a>
                </li>
                <li>
                  <a href="#espais" className="hover:text-[#C19463] transition">
                    {t.linkEspais}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#C19463] transition">
                    {t.linkFaq}
                  </a>
                </li>
                <li>
                  <a href="#organitzacio" className="hover:text-[#C19463] transition">
                    {t.link2lb}
                  </a>
                </li>
              </ul>
            </div>

            {/* Espai Famílies logo (Desktop only: appears after Navegació) */}
            <div className="hidden md:block pt-8 mt-5 border-t border-white/10">
              <img
                src={FESTIVAL_LOGOS.espaiFamilies}
                alt="Espai Famílies"
                width={120}
                height={32}
                className="h-7 sm:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFEEE0]/60">
          <div>
            © 2026 BUM Tiana FEST ·{" "}
            {lang === "ca" ? "Tots els drets reservats." : "Todos los derechos reservados."} ·{" "}
            {lang === "ca" ? "Disseny web: " : "Diseño web: "}
            <a
              href="https://kimografico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C19463] hover:text-white transition font-medium"
            >
              kimografico.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
