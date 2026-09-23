import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ConceptSection } from "./components/ConceptSection";
import { WorkshopsSection } from "./components/WorkshopsSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { VenuesSection } from "./components/VenuesSection";
import { GastronomySection } from "./components/GastronomySection";
import { ClosingConcertSection } from "./components/ClosingConcertSection";
import { PartnersCarousel } from "./components/PartnersCarousel";
import { FaqSection } from "./components/FaqSection";
import { TwoLBSection } from "./components/TwoLBSection";
import { Footer } from "./components/Footer";

// Code-splitting for detail pages to optimize initial bundle size
const WorkshopDetailPage = lazy(() =>
  import("./components/WorkshopDetailPage").then((m) => ({ default: m.WorkshopDetailPage })),
);
const SpeakerDetailPage = lazy(() =>
  import("./components/SpeakerDetailPage").then((m) => ({ default: m.SpeakerDetailPage })),
);

type ViewMode = "home" | "workshop-detail" | "speaker-detail";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("home");
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string | null>(null);
  const [selectedSpeakerId, setSelectedSpeakerId] = useState<string | null>(null);

  // Sync html lang attribute for screen readers (WCAG 3.1.1)
  useEffect(() => {
    document.documentElement.lang = "ca";
  }, []);

  // Handle URL query parameters for direct links & browser history
  useEffect(() => {
    const handleUrlChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tallerParam = searchParams.get("taller");
      const xerradaParam = searchParams.get("xerrada");

      if (tallerParam) {
        setSelectedWorkshopId(tallerParam);
        setViewMode("workshop-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (xerradaParam) {
        setSelectedSpeakerId(xerradaParam);
        setViewMode("speaker-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setViewMode("home");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleSelectWorkshop = useCallback((id: string) => {
    setSelectedWorkshopId(id);
    setViewMode("workshop-detail");
    window.history.pushState({}, "", `?taller=${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectSpeaker = useCallback((id: string) => {
    setSelectedSpeakerId(id);
    setViewMode("speaker-detail");
    window.history.pushState({}, "", `?xerrada=${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavigateHome = useCallback(() => {
    setViewMode("home");
    setSelectedWorkshopId(null);
    setSelectedSpeakerId(null);
    window.history.pushState({}, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#EFEEE0] text-[#181816] selection:bg-[#0C478D] selection:text-white relative overflow-x-clip">
      {/* Skip to main content link for keyboard & screen reader accessibility (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0C478D] focus:text-white focus:rounded-xl focus:shadow-xl focus:font-bold focus:text-sm focus:outline-none focus:ring-2 focus:ring-[#88643B]"
      >
        Saltar al contingut principal
      </a>

      {/* Frosted ambient background soft illumination in corporate palette */}
      <div aria-hidden="true" className="pointer-events-none -z-10">
        <div className="fixed top-0 right-0 w-[550px] h-[550px] bg-[#0C478D]/8 rounded-full blur-3xl" />
        <div className="fixed top-1/3 left-0 w-[480px] h-[480px] bg-[#88643B]/10 rounded-full blur-3xl" />
        <div className="fixed bottom-10 right-10 w-[500px] h-[500px] bg-[#0C478D]/6 rounded-full blur-3xl" />
      </div>

      {/* Top Navbar */}
      <Navbar onNavigateHome={handleNavigateHome} />

      {/* Live region for screen reader announcements on view changes */}
      <div aria-live="polite" className="sr-only">
        {viewMode === "home" && "Pàgina principal"}
        {viewMode === "workshop-detail" && "Detalls del taller"}
        {viewMode === "speaker-detail" && "Detalls de la xerrada"}
      </div>

      {/* Main Content View Switcher */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C478D] focus-visible:ring-offset-2"
      >
        {viewMode === "workshop-detail" && selectedWorkshopId ?
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center py-20 text-[#88643B]">
                <div className="w-10 h-10 rounded-full border-3 border-[#0C478D] border-t-transparent animate-spin" />
              </div>
            }
          >
            <WorkshopDetailPage
              workshopId={selectedWorkshopId}
              onBack={handleNavigateHome}
              onSelectWorkshop={handleSelectWorkshop}
            />
          </Suspense>
        : viewMode === "speaker-detail" && selectedSpeakerId ?
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center py-20 text-[#88643B]">
                <div className="w-10 h-10 rounded-full border-3 border-[#0C478D] border-t-transparent animate-spin" />
              </div>
            }
          >
            <SpeakerDetailPage
              speakerId={selectedSpeakerId}
              onBack={handleNavigateHome}
              onSelectSpeaker={handleSelectSpeaker}
            />
          </Suspense>
        : <>
            {/* 1. Clean Hero Section with Corporate Image FamiliaMadera */}
            <Hero />

            {/* 2. Concepte & Objectius */}
            <ConceptSection />

            {/* 3. Catàleg de Tallers Didàctics (2 columnes, imatge esquerra) */}
            <WorkshopsSection onSelectWorkshop={handleSelectWorkshop} />

            {/* 4. Cicle de Xerrades & Ponències */}
            <SpeakersSection onSelectSpeaker={handleSelectSpeaker} />

            {/* 5. Horaris i Cronograma (Timeline Vertical) */}
            <ScheduleSection />

            {/* 6. Gastronomia Local & DJ Vermut */}
            <GastronomySection />

            {/* 7. Cloenda: Concert de Sedajazz Young Band */}
            <ClosingConcertSection />

            {/* 8. Carrusel d'Entitats Col·laboradores */}
            <PartnersCarousel />

            {/* 9. Dubtes & Preguntes Freqüents (FAQ) */}
            <FaqSection />

            {/* 10. Localitzacions del Festival a Tiana (amb Google Maps) */}
            <VenuesSection />

            {/* 11. Apartat Organitzadors: 2LB Produccions */}
            <TwoLBSection />

            {/* 12. Slogan final */}
            <section className="py-20 sm:py-28 text-[#181816] text-center border-b border-[#88643B]/25">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  El BUMFEST és el producte del treball conjunt de l'Ajuntament de Tiana i 2LB
                  Produccions.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  Desitgem que tingueu un dia de molta inspiració.
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider pt-4">
                  Viu el BUMFEST!
                </p>
              </div>
            </section>
          </>
        }
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
