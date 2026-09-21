import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './Footer.css';

const Footer = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("¡Hola InspiraViaje! Quisiera comunicarme con un asesor turístico.");
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top-grid">
          {/* Columna Logo y Descripción */}
          <div className="footer-brand-col">
            <img src="/logo.png" alt="InspiraViaje" className="footer-logo" />
            <p className="footer-slogan">
              {agencyInfo.slogan}. Especialistas en crear momentos inolvidables y vacaciones a tu medida.
            </p>
            <div className="footer-badge-city">
              📍 {agencyInfo.location}
            </div>
          </div>

          {/* Columna Enlaces */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navegación</h4>
            <ul className="footer-nav-list">
              <li><a href="#">Inicio</a></li>
              <li><a href="#paquetes">Paquetes Turísticos</a></li>
              <li><button type="button" onClick={onOpenContact} className="footer-link-btn">Contacto Directo</button></li>
            </ul>
          </div>

          {/* Columna WhatsApp */}
          <div className="footer-action-col">
            <h4 className="footer-heading">¿Listo para viajar?</h4>
            <p className="footer-action-text">
              Escríbenos directamente y recibe una cotización personalizada sin compromiso.
            </p>
            <button 
              type="button" 
              onClick={openWhatsApp}
              className="btn-whatsapp-footer"
            >
              <MessageCircle size={18} />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} InspiraViaje. Todos los derechos reservados.
          </p>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="btn-scroll-top"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
