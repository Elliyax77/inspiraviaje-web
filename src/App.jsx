import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Packages from './components/Packages';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="inspiraviaje-app">
      {/* 1. Header con Logo a la izquierda y Contacto a la derecha */}
      <Header onOpenContact={() => setContactOpen(true)} />

      <main>
        {/* 2. Slider Principal en proporción 16:9 con rotación a la derecha y botón Más Información */}
        <HeroSlider onOpenContact={() => setContactOpen(true)} />

        {/* 3. Sección Paquetes Turísticos con 3 imágenes en proporción 3:4 y botón Más Información */}
        <Packages />
      </main>

      {/* 4. Footer con canales de atención y copyright */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* 5. Modal / Drawer para Contacto Inmediato */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default App;
