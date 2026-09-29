import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Packages from './components/Packages';
import ContactModal from './components/ContactModal';
import NavDrawer from './components/NavDrawer';
import NavModals from './components/NavModals';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'informacion' | 'full-days' | 'quienes-somos' | 'metodos-pago' | null

  // Estados de cumplimiento legal normativo
  const [activeLegalDoc, setActiveLegalDoc] = useState(null); // 'avisoLegal' | 'privacidad' | 'cookies' | 'terminos' | null
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  const handleSelectMenuItem = (id) => {
    if (id === 'paquetes') {
      const el = document.getElementById('paquetes');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'promociones') {
      const el = document.getElementById('promociones');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'contacto') {
      setContactOpen(true);
    } else {
      // informacion, full-days, quienes-somos, metodos-pago
      setActiveModal(id);
    }
  };

  return (
    <div className="inspiraviaje-app">
      {/* 1. Header con Logo a la izquierda y a la derecha Contacto + 3 rayitas (Menú) */}
      <Header 
        onOpenContact={() => setContactOpen(true)} 
        onOpenMenu={() => setMenuOpen(true)}
      />

      <main>
        {/* 2. Slider Principal en proporción 16:9 con rotación a la derecha y botón Más Información */}
        <HeroSlider onOpenContact={() => setContactOpen(true)} />

        {/* 3. Sección Paquetes Turísticos con 3 imágenes en proporción 3:4 y botón Más Información */}
        <Packages onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* 4. Footer con canales de atención, copyright y barra legal accesible */}
      <Footer 
        onOpenContact={() => setContactOpen(true)}
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
        onOpenCookieSettings={() => setCookieSettingsOpen(true)}
      />

      {/* 5. Modal / Drawer para Contacto Inmediato (con consentimiento de privacidad previo) */}
      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)}
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
      />

      {/* 6. Menú Desplegable de las 3 rayitas con las 6 opciones */}
      <NavDrawer 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        onSelectMenuItem={handleSelectMenuItem}
      />

      {/* 7. Modales de Información, Full Days, Quiénes Somos y Métodos de Pago */}
      <NavModals 
        activeModal={activeModal} 
        onClose={() => setActiveModal(null)} 
      />

      {/* 8. Modales Legales y Normativos (Aviso Legal, Privacidad, Cookies, Términos) */}
      <LegalModals 
        activeLegalDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        onSwitchDoc={(docKey) => setActiveLegalDoc(docKey)}
      />

      {/* 9. Banner de Consentimiento de Cookies (RGPD / ePrivacy con bloqueo previo) */}
      <CookieBanner 
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
        forceOpenSettings={cookieSettingsOpen}
        onCloseSettings={() => setCookieSettingsOpen(false)}
      />
    </div>
  );
}

export default App;

