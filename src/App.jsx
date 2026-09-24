import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Packages from './components/Packages';
import ContactModal from './components/ContactModal';
import NavDrawer from './components/NavDrawer';
import NavModals from './components/NavModals';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'informacion' | 'full-days' | 'quienes-somos' | 'metodos-pago' | null

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

      {/* 4. Footer con canales de atención y copyright */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* 5. Modal / Drawer para Contacto Inmediato */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

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
    </div>
  );
}

export default App;

