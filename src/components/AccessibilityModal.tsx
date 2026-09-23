import React from "react";
import { X } from "lucide-react";

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accesibilitat-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-festcard text-festtext rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 sm:p-10 space-y-5">
        <div className="flex items-center justify-between">
          <h2
            id="accesibilitat-title"
            className="text-xl sm:text-2xl font-extralight uppercase tracking-wider text-primary font-display"
          >
            Accessibilitat
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-secondary/10 transition cursor-pointer"
            aria-label="Tancar"
          >
            <X className="w-5 h-5 text-festlabel" />
          </button>
        </div>

        <div className="text-sm sm:text-base text-festmuted leading-relaxed space-y-4">
          <p>
            Treballem per eliminar les barreres que dificulten l'accés a la
            informació i la comunicació.
          </p>
          <p>
            Aquest web compleix amb les pautes d'accessibilitat web{" "}
            <strong>WCAG 2.1 nivell AA</strong>, establertes pel grup de treball
            WAI (Web Accessibility Initiative) del W3C (World Wide Web
            Consortium), referenciades a la normativa estatal UNE-EN
            301549:2022.
          </p>
          <p>
            Estem revisant tots els continguts del web i adequant-los als criteris
            d'accessibilitat fixats per la legislació vigent per tal de garantir
            l'accés al major nombre possible de persones, tenint en compte
            col·lectius amb discapacitats físiques i col·lectius amb diferents
            entorns tecnològics o d'accés.
          </p>

          <div className="pt-3 border-t border-secondary/20 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-secondary">
              Legislació
            </h3>
            <ul className="text-xs space-y-1 list-disc list-inside text-festmuted">
              <li>Reial decret 1112/2018, de 7 de setembre</li>
              <li>Reial decret 1494/2007, de 12 de novembre</li>
              <li>Llei 13/2014, de 30 d'octubre</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
