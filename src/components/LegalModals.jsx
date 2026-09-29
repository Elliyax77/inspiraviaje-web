import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Lock, Cookie, Scale, Printer } from 'lucide-react';
import { legalDocuments } from '../data/legalContent';
import './LegalModals.css';

const docTabs = [
  { key: 'avisoLegal', label: 'Aviso Legal', icon: Scale },
  { key: 'privacidad', label: 'Privacidad', icon: Lock },
  { key: 'cookies', label: 'Cookies', icon: Cookie },
  { key: 'terminos', label: 'Términos & Cuotas', icon: FileText }
];

const LegalModals = ({ activeLegalDoc, onClose, onSwitchDoc }) => {
  // Manejo de tecla Escape y bloqueo de scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (activeLegalDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLegalDoc, onClose]);

  if (!activeLegalDoc) return null;

  const currentDoc = legalDocuments[activeLegalDoc] || legalDocuments.avisoLegal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="legal-modal-overlay" 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <motion.div 
          className="legal-modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Header del modal */}
          <div className="legal-modal-header">
            <div className="legal-header-brand">
              <div className="legal-shield-badge">
                <Shield size={20} />
              </div>
              <div>
                <span className="legal-brand-name">InspiraViaje • Marco Legal</span>
                <h2 id="legal-modal-title" className="legal-doc-title">
                  {currentDoc.title}
                </h2>
              </div>
            </div>

            <div className="legal-header-actions">
              <button 
                type="button" 
                className="legal-action-btn print-btn"
                onClick={handlePrint}
                title="Imprimir o guardar como PDF"
                aria-label="Imprimir documento"
              >
                <Printer size={18} />
                <span className="btn-label-desktop">Imprimir</span>
              </button>

              <button 
                type="button" 
                className="legal-close-btn"
                onClick={onClose}
                aria-label="Cerrar ventana legal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Barra de pestañas para cambiar rápidamente entre documentos legales */}
          <div className="legal-tabs-bar" role="tablist" aria-label="Documentos legales">
            {docTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeLegalDoc === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  className={`legal-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSwitchDoc(tab.key)}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Cuerpo de lectura del documento con scroll suave */}
          <div className="legal-modal-body">
            <div className="legal-meta-badge">
              <span>Última revisión: {currentDoc.lastUpdated}</span>
              <span className="badge-legal-verified">✓ Conforme a RGPD y Normativa Digital</span>
            </div>

            <div className="legal-sections-flow">
              {currentDoc.sections.map((sec, idx) => (
                <section key={idx} className="legal-section-block">
                  <h3 className="legal-section-heading">{sec.heading}</h3>
                  <div className="legal-section-text">
                    {sec.content.split('\n').map((line, pIdx) => (
                      <p key={pIdx}>{line}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="legal-footer-notice">
              <p>
                Si tienes dudas relativas a este documento o al tratamiento de tus datos personales, puedes contactar con nuestro equipo legal y de atención en <strong>viajes@inspiraviaje.com</strong> o a través de nuestra línea directa de WhatsApp.
              </p>
            </div>
          </div>

          {/* Pie del modal */}
          <div className="legal-modal-footer">
            <span className="legal-copyright">
              © {new Date().getFullYear()} InspiraViaje — Todos los derechos reservados.
            </span>
            <button 
              type="button" 
              className="legal-confirm-btn"
              onClick={onClose}
            >
              Entendido y Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModals;
