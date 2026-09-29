import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './Footer.css';

const Footer = ({ onOpenContact, onOpenLegal, onOpenCookieSettings }) => {
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
            <img src="/logo.png?v=2" alt="InspiraViaje" className="footer-logo" />
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
              onClick={onOpenContact}
              className="btn-whatsapp-footer"
            >
              <MessageCircle size={18} />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Barra accesible de enlaces legales y cumplimiento normativo */}
        <nav className="footer-legal-bar" aria-label="Enlaces Legales y Normativos">
          <ul className="legal-links-list">
            <li>
              <button 
                type="button" 
                className="footer-legal-link" 
                onClick={() => onOpenLegal && onOpenLegal('avisoLegal')}
              >
                Aviso Legal
              </button>
            </li>
            <li className="legal-sep" aria-hidden="true">•</li>
            <li>
              <button 
                type="button" 
                className="footer-legal-link" 
                onClick={() => onOpenLegal && onOpenLegal('privacidad')}
              >
                Política de Privacidad
              </button>
            </li>
            <li className="legal-sep" aria-hidden="true">•</li>
            <li>
              <button 
                type="button" 
                className="footer-legal-link" 
                onClick={() => onOpenLegal && onOpenLegal('cookies')}
              >
                Política de Cookies
              </button>
            </li>
            <li className="legal-sep" aria-hidden="true">•</li>
            <li>
              <button 
                type="button" 
                className="footer-legal-link" 
                onClick={() => onOpenLegal && onOpenLegal('terminos')}
              >
                Términos de Contratación & Cuotas
              </button>
            </li>
            <li className="legal-sep" aria-hidden="true">•</li>
            <li>
              <button 
                type="button" 
                className="footer-legal-link cookie-config-trigger" 
                onClick={onOpenCookieSettings}
              >
                ⚙️ Configurar Cookies
              </button>
            </li>
          </ul>
        </nav>

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
