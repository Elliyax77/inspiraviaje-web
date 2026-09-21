import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './ContactModal.css';

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const openWhatsApp = () => {
    const text = encodeURIComponent("¡Hola InspiraViaje! Quisiera información y asesoría sobre paquetes turísticos.");
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="contact-overlay" onClick={onClose}>
        <motion.div 
          className="contact-modal-sheet"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        >
          {/* Barra de agarre para móviles */}
          <div className="sheet-drag-handle"></div>

          <div className="contact-header">
            <div>
              <span className="contact-badge">ATENCIÓN PERSONALIZADA</span>
              <h3 className="contact-title">Hablemos de tu Próximo Viaje</h3>
            </div>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-close-modal"
              aria-label="Cerrar ventana de contacto"
            >
              <X size={20} />
            </button>
          </div>

          <p className="contact-intro">
            Nuestros asesores turísticos están disponibles para planificar cada detalle de tus vacaciones soñadas.
          </p>

          <div className="contact-channels">
            {/* Opción WhatsApp */}
            <button 
              type="button"
              onClick={openWhatsApp}
              className="channel-card whatsapp-channel"
            >
              <div className="channel-icon-circle whatsapp-bg">
                <MessageCircle size={22} color="#FFFFFF" />
              </div>
              <div className="channel-info">
                <span className="channel-name">Chatear por WhatsApp</span>
                <span className="channel-sub">Respuesta inmediata en minutos</span>
              </div>
            </button>

            {/* Opción Teléfono */}
            <a 
              href={`tel:+${agencyInfo.whatsappNumber}`}
              className="channel-card"
            >
              <div className="channel-icon-circle blue-bg">
                <Phone size={20} color="#FFFFFF" />
              </div>
              <div className="channel-info">
                <span className="channel-name">Llamar a un Asesor</span>
                <span className="channel-sub">{agencyInfo.whatsappFormatted}</span>
              </div>
            </a>

            {/* Opción Correo */}
            <a 
              href={`mailto:${agencyInfo.email}`}
              className="channel-card"
            >
              <div className="channel-icon-circle slate-bg">
                <Mail size={20} color="#FFFFFF" />
              </div>
              <div className="channel-info">
                <span className="channel-name">Enviar Correo</span>
                <span className="channel-sub">{agencyInfo.email}</span>
              </div>
            </a>

            {/* Opción Instagram */}
            <a 
              href={`https://instagram.com/${agencyInfo.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="channel-card"
            >
              <div className="channel-icon-circle yellow-bg">
                <InstagramIcon size={20} color="#0F172A" />
              </div>
              <div className="channel-info">
                <span className="channel-name">Instagram</span>
                <span className="channel-sub">{agencyInfo.instagram}</span>
              </div>
            </a>
          </div>

          <div className="contact-extra-info">
            <div className="extra-item">
              <Clock size={16} className="text-yellow" />
              <span>{agencyInfo.hours}</span>
            </div>
            <div className="extra-item">
              <MapPin size={16} className="text-blue" />
              <span>{agencyInfo.location}</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
