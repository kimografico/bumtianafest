import React, { useState, useEffect } from 'react';
import { Language } from './data/content';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { SpeakersSection } from './components/SpeakersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenuesSection } from './components/VenuesSection';
import { GastronomySection } from './components/GastronomySection';
import { PartnersCarousel } from './components/PartnersCarousel';
import { FaqSection } from './components/FaqSection';
import { TwoLBSection } from './components/TwoLBSection';
import { Footer } from './components/Footer';
import { WorkshopDetailPage } from './components/WorkshopDetailPage';
import { SpeakerDetailPage } from './components/SpeakerDetailPage';

type ViewMode = 'home' | 'workshop-detail' | 'speaker-detail';

export default function App() {
  const [lang, setLang] = useState<Language>('ca');
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string | null>(null);
  const [selectedSpeakerId, setSelectedSpeakerId] = useState<string | null>(null);

  // Handle URL query parameters for direct links & browser history
  useEffect(() => {
    const handleUrlChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tallerParam = searchParams.get('taller');
      const xerradaParam = searchParams.get('xerrada');

      if (tallerParam) {
        setSelectedWorkshopId(tallerParam);
        setViewMode('workshop-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (xerradaParam) {
        setSelectedSpeakerId(xerradaParam);
        setViewMode('speaker-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setViewMode('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleSelectWorkshop = (id: string) => {
    setSelectedWorkshopId(id);
    setViewMode('workshop-detail');
    window.history.pushState({}, '', `?taller=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSpeaker = (id: string) => {
    setSelectedSpeakerId(id);
    setViewMode('speaker-detail');
    window.history.pushState({}, '', `?xerrada=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setViewMode('home');
    setSelectedWorkshopId(null);
    setSelectedSpeakerId(null);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFEEE0] text-[#181816] selection:bg-[#0C478D] selection:text-white relative overflow-x-clip">
      
      {/* Frosted ambient background soft illumination in corporate palette */}
      <div className="fixed top-0 right-0 w-[550px] h-[550px] bg-[#0C478D]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 left-0 w-[480px] h-[480px] bg-[#B0814D]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[500px] h-[500px] bg-[#0C478D]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {viewMode === 'workshop-detail' && selectedWorkshopId ? (
          <WorkshopDetailPage
            workshopId={selectedWorkshopId}
            lang={lang}
            onBack={handleNavigateHome}
            onSelectWorkshop={handleSelectWorkshop}
          />
        ) : viewMode === 'speaker-detail' && selectedSpeakerId ? (
          <SpeakerDetailPage
            speakerId={selectedSpeakerId}
            lang={lang}
            onBack={handleNavigateHome}
            onSelectSpeaker={handleSelectSpeaker}
          />
        ) : (
          <>
            {/* 1. Full-width Image Carousel */}
            <HeroCarousel lang={lang} />

            {/* 2. Clean Hero Section with Corporate Image FamiliaMadera */}
            <Hero lang={lang} />

            {/* 3. Concepte & Objectius */}
            <ConceptSection lang={lang} />

            {/* 4. Catàleg de Tallers Didàctics (2 columnes, imatge esquerra) */}
            <WorkshopsSection
              lang={lang}
              onSelectWorkshop={handleSelectWorkshop}
            />

            {/* 5. Cicle de Xerrades & Ponències */}
            <SpeakersSection
              lang={lang}
              onSelectSpeaker={handleSelectSpeaker}
            />

            {/* 6. Horaris i Cronograma (Timeline Vertical) */}
            <ScheduleSection lang={lang} />

            {/* 7. Localitzacions del Festival a Tiana (amb Google Maps) */}
            <VenuesSection lang={lang} />

            {/* 8. Gastronomia Local & DJ Vermut */}
            <GastronomySection lang={lang} />

            {/* 9. Carrusel d'Entitats Col·laboradores */}
            <PartnersCarousel lang={lang} />

            {/* 10. Dubtes & Preguntes Freqüents (FAQ) */}
            <FaqSection lang={lang} />

            {/* 11. Apartat Organitzadors: 2LB Produccions */}
            <TwoLBSection lang={lang} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
