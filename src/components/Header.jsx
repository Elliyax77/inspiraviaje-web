import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Menu } from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './Header.css';

const Header = ({ onOpenContact, onOpenMenu }) => {
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

        {/* Acciones a la derecha: Contacto + Menú Armónico */}
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

          {/* Botón Menú en mismo color Liquid Glass del Header */}
          <button 
            type="button" 
            onClick={onOpenMenu}
            className="btn-menu-header"
            aria-label="Abrir menú de opciones"
            title="Menú"
          >
            <Menu size={21} className="menu-icon" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
