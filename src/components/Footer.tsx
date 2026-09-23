import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FESTIVAL_LOGOS } from "../assets/images";
import { LINKS } from "../data/links";
import { AccessibilityModal } from "./AccessibilityModal";

export const Footer: React.FC = () => {
  const [showAccessibility, setShowAccessibility] = useState(false);
  const t = {
    tagline: "Festival de criança, tallers i comunitat a Tiana (Maresme).",
    location: "Tiana, Barcelona",
    linksTitle: "Navegació",
    linkConcepte: "El Concepte",
    linkTallers: "Tallers Didàctics",
    linkXerrades: "Xerrades de Criança",
    linkHoraris: "Horaris",
    linkEspais: "Localitzacions",
    linkCloenda: "Concert de Cloenda",
    linkFaq: "Preguntes Freqüents",
    link2lb: "2LB Produccions",
    rights: "© 2026 BUMFEST TIANA · Tots els drets reservats.",
  };

  return (
    <footer className="bg-primary text-[#EFEEE0] pt-16 pb-12 border-t border-[#88643B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Left Column: Brand, Tagline, Location, Organization note and Escut */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={FESTIVAL_LOGOS.bumFest}
                alt="BUMFEST"
                width={459}
                height={102}
                className="h-9 sm:h-11 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#EFEEE0]/75 leading-relaxed max-w-md">
              {t.tagline}
            </p>

            <div className="text-xs text-[#EFEEE0]/90 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{t.location}</span>
            </div>

            {/* Logos organitzadors */}
            <div className="pt-2">
              <div className="flex items-center flex-wrap gap-8 sm:gap-10 md:gap-12 pt-2">
                {/* 1. Ajuntament de Tiana */}
                <a
                  href={LINKS.institutional.ajuntamentTiana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group shrink-0"
                  title="Ajuntament de Tiana"
                >
                  <img
                    src={FESTIVAL_LOGOS.tiana}
                    alt=""
                    width={100}
                    height={100}
                    className="h-14 sm:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 brightness-0 invert"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                {/* 2. 2LB Produccions */}
                <div
                  className="inline-block shrink-0"
                  title="2LB Produccions"
                >
                  <img
                    src={FESTIVAL_LOGOS.twoLb}
                    alt=""
                    width={100}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 brightness-0 invert"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Thin vertical separator */}
                <div
                  className="h-8 sm:h-10 w-px bg-white/20 self-center shrink-0"
                  aria-hidden="true"
                />

                {/* 3. Espai Famílies */}
                <a
                  href="#"
                  className="inline-block group shrink-0"
                  title="Espai Famílies"
                >
                  <img
                    src={FESTIVAL_LOGOS.espaiFamilies}
                    alt=""
                    width={120}
                    height={32}
                    className="h-7 sm:h-8 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                {/* Thin vertical separator */}
                <div
                  className="h-8 sm:h-10 w-px bg-white/20 self-center shrink-0"
                  aria-hidden="true"
                />

                {/* 4. Diputació de Barcelona */}
                <a
                  href={LINKS.institutional.diputacioBarcelona}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group shrink-0"
                  title="Diputació de Barcelona"
                >
                  <img
                    src={FESTIVAL_LOGOS.diputacio}
                    alt=""
                    width={100}
                    height={60}
                    className="h-8 sm:h-9 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links Navigation */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6 md:pl-6 lg:pl-12">
            <div className="space-y-3">
              <h2
                className="text-xs font-bold uppercase tracking-wider text-white"
              >
                {t.linksTitle}
              </h2>
              <ul className="space-y-2.5 text-xs text-[#EFEEE0]/70">
                <li>
                  <a href="#concepte" className="hover:text-accent transition">
                    {t.linkConcepte}
                  </a>
                </li>
                <li>
                  <a href="#tallers" className="hover:text-accent transition">
                    {t.linkTallers}
                  </a>
                </li>
                <li>
                  <a href="#xerrades" className="hover:text-accent transition">
                    {t.linkXerrades}
                  </a>
                </li>
                <li>
                  <a href="#programa" className="hover:text-accent transition">
                    {t.linkHoraris}
                  </a>
                </li>
                <li>
                  <a href="#espais" className="hover:text-accent transition">
                    {t.linkEspais}
                  </a>
                </li>
                <li>
                  <a href="#cloenda" className="hover:text-accent transition">
                    {t.linkCloenda}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition">
                    {t.linkFaq}
                  </a>
                </li>
                <li>
                  <a href="#organitzacio" className="hover:text-accent transition">
                    {t.link2lb}
                  </a>
                </li>
              </ul>

              {/* Separator */}
              <div className="border-t border-white/10 pt-3 mt-3">
                <button
                  onClick={() => setShowAccessibility(true)}
                  className="text-xs text-[#EFEEE0]/70 hover:text-accent transition cursor-pointer"
                >
                  Accessibilitat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFEEE0]/70">
          <div>
            © 2026 BUMFEST TIANA · Tots els drets reservats. · Disseny web:{" "}
            <a
              href={LINKS.credits.webDesign}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition font-medium"
            >
              kimografico.com
            </a>
          </div>
        </div>
      </div>

      <AccessibilityModal
        isOpen={showAccessibility}
        onClose={() => setShowAccessibility(false)}
      />
    </footer>
  );
};
