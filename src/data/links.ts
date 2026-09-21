// ── External links centralized in one file ──────────────────────────
// Modify here to update any URL across the whole project.

export const LINKS = {
  // ── Google Maps (static queries) ──────────────────────────────────
  maps: {
    salaAlbeniz: 'https://www.google.com/maps/search/?api=1&query=Sala+Albeniz+Tiana',
    /** Build a Google Maps search URL for a given venue name + address */
    venue: (name: string, address: string) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`,
  },

  // ── Google Search (fallback) ───────────────────────────────────────
  google: {
    searchRestaurant: (name: string) =>
      `https://www.google.com/search?q=${encodeURIComponent(`${name} Tiana`)}`,
  },

  // ── Reservar plaça (placeholder – replace with real form URLs) ─────
  forms: {
    reservarPlaca: 'https://www.google.com',
  },

  // ── Instagram ──────────────────────────────────────────────────────
  instagram: {
    armandoBastida: 'https://www.instagram.com/armandobastidaep',
    casalDeTiana: 'https://www.instagram.com/elcasaldetiana/',
    barbar: 'https://www.instagram.com/sombarbarstiana/',
  },

  // ── Speaker websites ───────────────────────────────────────────────
  speakers: {
    armandoBastida: 'https://www.armandobastida.com/',
  },

  // ── Restaurant / Commerce websites ─────────────────────────────────
  restaurants: {
    casal: 'https://www.instagram.com/elcasaldetiana/',
    barbar: 'https://www.instagram.com/sombarbarstiana/',
    casino: 'https://casinodetiana.com/',
    tiriti: 'https://tiriti.es/',
    aviMingo: 'https://www.avimingo.com/',
    verdEsBo: 'https://floristeriastop.com/floristeria-verd-es-bo-tiana/',
    espaiEco: 'https://espaiecologic.com/',
  },

  // ── Institutional / Colophon ───────────────────────────────────────
  institutional: {
    ajuntamentTiana: 'https://tiana.cat/',
    diputacioBarcelona: 'https://www.diba.cat/',
  },

  // ── Credits ────────────────────────────────────────────────────────
  credits: {
    webDesign: 'https://kimografico.com',
  },
} as const;
