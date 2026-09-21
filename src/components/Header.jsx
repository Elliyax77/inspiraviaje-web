import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './Header.css';

const Header = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo a la izquierda */}
        <a href="#" className="header-logo" aria-label="InspiraViaje Inicio">
          <img src="/logo.png?v=2" alt="InspiraViaje Logo" className="logo-image" />
        </a>

        {/* Contacto a la derecha */}
        <div className="header-actions">
          <button 
            type="button" 
            onClick={onOpenContact} 
            className="btn-contact-header"
            aria-label="Abrir opciones de contacto"
          >
            <MessageCircle size={18} className="contact-icon-mobile" />
            <PhoneCall size={17} className="contact-icon-desktop" />
            <span className="contact-label">Contacto</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
