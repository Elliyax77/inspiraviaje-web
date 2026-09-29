import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, Check, X, Settings2 } from 'lucide-react';
import './CookieBanner.css';

const CONSENT_STORAGE_KEY = 'inspiraviaje_cookie_consent_v1';

const CookieBanner = ({ onOpenLegal, forceOpenSettings, onCloseSettings }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Categorías de cookies
  const [preferences, setPreferences] = useState({
    necessary: true,   // Obligatoria, no se puede desactivar
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) {
        // Primera visita: mostrar banner
        setIsVisible(true);
      } else {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Abrir panel granular forzado desde el footer
  useEffect(() => {
    if (forceOpenSettings) {
      setShowSettings(true);
      setIsVisible(true);
    }
  }, [forceOpenSettings]);

  const saveConsent = (consentData) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
    } catch (err) {
      console.warn("No se pudo guardar consentimiento de cookies:", err);
    }

    // Despacho de evento global para activar scripts autorizados
    window.dispatchEvent(new CustomEvent('inspiraviajeConsentChanged', {
      detail: { ...consentData, timestamp: new Date().toISOString() }
    }));

    setIsVisible(false);
    setShowSettings(false);
    if (onCloseSettings) onCloseSettings();
  };

  // 1. Aceptar todas
  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(fullConsent);
    saveConsent(fullConsent);
  };

  // 2. Rechazar opcionales (Solo necesarias)
  const handleRejectNonEssential = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(minimalConsent);
    saveConsent(minimalConsent);
  };

  // 3. Guardar preferencias personalizadas
  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible && !showSettings) return null;

  return (
    <AnimatePresence>
      <motion.aside 
        className="cookie-banner-container"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        role="region"
        aria-label="Consentimiento de cookies"
      >
        <div className="container">
          <div className="cookie-banner-card">
            
            {!showSettings ? (
              /* Vista Principal del Banner */
              <div className="cookie-main-row">
                <div className="cookie-text-col">
                  <div className="cookie-badge-row">
                    <div className="cookie-icon-wrapper">
                      <Cookie size={20} />
                    </div>
                    <span className="cookie-badge-title">Tu Privacidad es Nuestra Prioridad</span>
                  </div>
                  
                  <p className="cookie-description">
                    En <strong>InspiraViaje</strong> utilizamos cookies propias y de terceros técnicas, analíticas y de personalización para garantizar el correcto funcionamiento del sitio web, recordar tus preferencias de viaje y ofrecerte contenido relevante. Puedes aceptar todas las cookies, rechazar las opcionales o configurar tus preferencias detalladas. Consulta nuestra{' '}
                    <button 
                      type="button" 
                      className="cookie-inline-link"
                      onClick={() => onOpenLegal && onOpenLegal('cookies')}
                    >
                      Política de Cookies
                    </button>{' '}
                    y{' '}
                    <button 
                      type="button" 
                      className="cookie-inline-link"
                      onClick={() => onOpenLegal && onOpenLegal('privacidad')}
                    >
                      Política de Privacidad
                    </button>.
                  </p>
                </div>

                {/* 3 Botones Simétricos y Equilibrados según directrices RGPD */}
                <div className="cookie-actions-group">
                  <button 
                    type="button" 
                    className="btn-cookie btn-accept"
                    onClick={handleAcceptAll}
                  >
                    <Check size={16} />
                    <span>Aceptar todas</span>
                  </button>

                  <button 
                    type="button" 
                    className="btn-cookie btn-reject"
                    onClick={handleRejectNonEssential}
                  >
                    <X size={16} />
                    <span>Rechazar opcionales</span>
                  </button>

                  <button 
                    type="button" 
                    className="btn-cookie btn-settings"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings2 size={16} />
                    <span>Configurar</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Panel Granular de Configuración */
              <div className="cookie-settings-panel">
                <div className="settings-panel-header">
                  <div className="settings-header-title">
                    <Settings2 size={20} className="text-blue" />
                    <h4>Centro de Preferencias de Cookies</h4>
                  </div>
                  <button 
                    type="button" 
                    className="settings-back-btn"
                    onClick={() => {
                      setShowSettings(false);
                      if (forceOpenSettings && onCloseSettings) onCloseSettings();
                    }}
                  >
                    Volver
                  </button>
                </div>

                <p className="settings-panel-desc">
                  Puedes activar o desactivar cada categoría de cookies de forma independiente. Las cookies necesarias siempre están activas para permitir la navegación segura.
                </p>

                <div className="cookie-categories-list">
                  
                  {/* 1. Técnicas / Necesarias */}
                  <div className="cookie-category-item">
                    <div className="category-info">
                      <div className="category-title-row">
                        <span className="category-name">Cookies Técnicas & Necesarias</span>
                        <span className="category-status-locked">Siempre Activas</span>
                      </div>
                      <p className="category-desc">
                        Esenciales para la navegación, seguridad de la sesión, visualización de paquetes y registro de tus preferencias de consentimiento. No recopilan datos con fines comerciales.
                      </p>
                    </div>
                    <div className="category-toggle">
                      <input type="checkbox" checked={true} disabled readOnly className="cookie-toggle-input" />
                    </div>
                  </div>

                  {/* 2. Analíticas */}
                  <div className="cookie-category-item">
                    <div className="category-info">
                      <div className="category-title-row">
                        <span className="category-name">Cookies Analíticas & Métricas</span>
                        <span className="category-status-optional">Opcionales</span>
                      </div>
                      <p className="category-desc">
                        Nos permiten cuantificar el número de usuarios y analizar estadísticamente cómo interactúan con las secciones y ofertas de viaje para mejorar su rendimiento de forma anónima.
                      </p>
                    </div>
                    <div className="category-toggle">
                      <label className="switch-label">
                        <input 
                          type="checkbox" 
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="cookie-toggle-input" 
                        />
                        <span className="switch-slider"></span>
                      </label>
                    </div>
                  </div>

                  {/* 3. Publicitarias y Marketing */}
                  <div className="cookie-category-item">
                    <div className="category-info">
                      <div className="category-title-row">
                        <span className="category-name">Cookies de Publicidad & Redes Sociales</span>
                        <span className="category-status-optional">Opcionales</span>
                      </div>
                      <p className="category-desc">
                        Almacenan información del comportamiento de los usuarios obtenida a través de la observación de sus hábitos de navegación para mostrar promociones personalizadas acordes a sus destinos preferidos.
                      </p>
                    </div>
                    <div className="category-toggle">
                      <label className="switch-label">
                        <input 
                          type="checkbox" 
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="cookie-toggle-input" 
                        />
                        <span className="switch-slider"></span>
                      </label>
                    </div>
                  </div>

                </div>

                <div className="settings-footer-actions">
                  <button 
                    type="button" 
                    className="btn-cookie btn-reject"
                    onClick={handleRejectNonEssential}
                  >
                    Rechazar Todas Opcionales
                  </button>

                  <button 
                    type="button" 
                    className="btn-cookie btn-save-custom"
                    onClick={handleSaveCustom}
                  >
                    Guardar Mis Preferencias
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default CookieBanner;
