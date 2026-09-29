import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin, Calendar, Users, ShieldCheck } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './TripPlanner.css';

const destinations = [
  { id: 'los-roques', label: '🏝️ Los Roques VIP' },
  { id: 'margarita', label: '🌴 Margarita All Inclusive' },
  { id: 'cancun', label: '🌊 Cancún & Caribe' },
  { id: 'europa', label: '🏰 Europa Mágica' },
  { id: 'fullday', label: '⚡ Full Day Aventura' },
  { id: 'vuelos', label: '✈️ Boletos & Visas' }
];

const dates = [
  { id: 'inmediato', label: 'Este mes / Próximos 30 días' },
  { id: 'vacaciones', label: 'Temporada Vacacional' },
  { id: 'fin-ano', label: 'Navidad / Fin de Año' },
  { id: 'flexible', label: 'Fechas Flexibles 2026' }
];

const partySizes = [
  { id: '1', label: '1 Viajero (Solo)' },
  { id: '2', label: '2 Personas (Pareja)' },
  { id: 'grupo', label: 'Familia o Grupo (3+)' }
];

const TripPlanner = ({ onOpenLegal }) => {
  const [selectedDest, setSelectedDest] = useState(destinations[0].id);
  const [selectedDate, setSelectedDate] = useState(dates[0].id);
  const [selectedParty, setSelectedParty] = useState(partySizes[1].id);
  
  // Cumplimiento RGPD: Casilla obligatoria no pre-marcada
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleGenerateQuote = () => {
    if (!privacyAccepted) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const destObj = destinations.find(d => d.id === selectedDest);
    const dateObj = dates.find(d => d.id === selectedDate);
    const partyObj = partySizes.find(p => p.id === selectedParty);

    const message = `¡Hola InspiraViaje! 🌴 Quisiera una cotización personalizada para mi viaje:
📍 Destino: ${destObj?.label}
🗓️ Fecha estimada: ${dateObj?.label}
👥 Pasajeros: ${partyObj?.label}
(He aceptado la Política de Privacidad y Términos en inspiraviaje.com)
¿Podrían compartirme paquetes disponibles y facilidades de pago en cuotas?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="trip-planner-section" id="cotizador">
      <div className="container">
        
        <div className="planner-card">
          
          {/* Encabezado */}
          <div className="planner-header">
            <div className="planner-eyebrow">
              <Sparkles size={16} className="text-yellow" />
              <span>COTIZADOR INTERACTIVO</span>
            </div>
            <h2 className="planner-title">Diseña tu Viaje a la Medida</h2>
            <p className="planner-subtitle">
              Selecciona tus preferencias y un asesor experto de InspiraViaje te armará una propuesta personalizada en minutos.
            </p>
          </div>

          {/* Paso 1: Destino */}
          <div className="planner-step-group">
            <label className="step-label">
              <MapPin size={17} className="step-icon text-blue" />
              <span>1. ¿Hacia dónde quieres viajar?</span>
            </label>
            <div className="options-grid">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`option-pill ${selectedDest === d.id ? 'active' : ''}`}
                  onClick={() => setSelectedDest(d.id)}
                >
                  {selectedDest === d.id && <span className="pill-check">✓</span>}
                  <span>{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 2: Época */}
          <div className="planner-step-group">
            <label className="step-label">
              <Calendar size={17} className="step-icon text-yellow" />
              <span>2. ¿En qué época planeas viajar?</span>
            </label>
            <div className="options-grid">
              {dates.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`option-pill ${selectedDate === d.id ? 'active' : ''}`}
                  onClick={() => setSelectedDate(d.id)}
                >
                  {selectedDate === d.id && <span className="pill-check">✓</span>}
                  <span>{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 3: Pasajeros */}
          <div className="planner-step-group">
            <label className="step-label">
              <Users size={17} className="step-icon text-blue" />
              <span>3. ¿Quiénes viajan?</span>
            </label>
            <div className="options-grid">
              {partySizes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`option-pill ${selectedParty === p.id ? 'active' : ''}`}
                  onClick={() => setSelectedParty(p.id)}
                >
                  {selectedParty === p.id && <span className="pill-check">✓</span>}
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Casilla obligatoria de privacidad */}
          <div className="planner-consent-wrapper">
            <label className={`planner-consent-label ${showError && !privacyAccepted ? 'error' : ''}`}>
              <input
                type="checkbox"
                id="inspira-planner-check"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (e.target.checked) setShowError(false);
                }}
                className="planner-checkbox"
                required
              />
              <span className="consent-text">
                He leído y acepto la{' '}
                <button
                  type="button"
                  className="legal-inline-link"
                  onClick={() => onOpenLegal && onOpenLegal('privacidad')}
                >
                  Política de Privacidad
                </button>{' '}
                y los{' '}
                <button
                  type="button"
                  className="legal-inline-link"
                  onClick={() => onOpenLegal && onOpenLegal('terminos')}
                >
                  Términos de Contratación
                </button>.
              </span>
            </label>

            {showError && !privacyAccepted && (
              <p className="consent-error-msg" role="alert">
                ⚠️ Por favor marque la casilla para aceptar la Política de Privacidad antes de cotizar.
              </p>
            )}
          </div>

          {/* Botón de envío a WhatsApp (Deshabilitado mientras no se acepte) */}
          <div 
            className="planner-action-box"
            onClick={() => {
              if (!privacyAccepted) setShowError(true);
            }}
          >
            <button
              type="button"
              className={`btn-planner-send ${!privacyAccepted ? 'is-disabled' : ''}`}
              onClick={handleGenerateQuote}
              disabled={!privacyAccepted}
              aria-disabled={!privacyAccepted}
              title={!privacyAccepted ? 'Debes marcar la casilla arriba para habilitar la cotización' : 'Solicitar Cotización por WhatsApp'}
            >
              <Send size={18} />
              <span>Solicitar Cotización por WhatsApp</span>
            </button>
            
            {!privacyAccepted ? (
              <p className="planner-lock-warning">
                🔒 Debes aceptar la casilla de arriba para habilitar la cotización
              </p>
            ) : (
              <p className="planner-subnote">
                🔒 Respuesta rápida sin compromiso • Asesoría 100% personalizada
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TripPlanner;
