import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import { heroSlides, agencyInfo } from '../data/travelData';
import './HeroSlider.css';

const HeroSlider = ({ onSelectSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: sliding right, -1: sliding left
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-avance hacia la derecha cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Soporte táctil para smartphones (Swipe)
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swipe hacia la izquierda -> siguiente slide
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe hacia la derecha -> slide anterior
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlide = heroSlides[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.7 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="hero-slider-section">
      <div className="container">
        
        {/* Contenedor estricto en proporción 16:9 */}
        <div 
          className="slider-ratio-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              className="slide-item"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Imagen 16:9 de fondo */}
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title} 
                className="slide-image"
              />

              {/* Degradado para legibilidad perfecta */}
              <div className="slide-overlay-gradient"></div>

              {/* Información y botón en la parte inferior izquierda */}
              <div className="slide-caption-bottom-left">
                <motion.span 
                  className="slide-badge"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentSlide.badge}
                </motion.span>
                
                <motion.h2 
                  className="slide-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentSlide.title}
                </motion.h2>

                <motion.p 
                  className="slide-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* BOTÓN OBLIGATORIO: Inferior Izquierda -> 'Más información' */}
                <motion.button
                  type="button"
                  className="btn-more-info slider-btn"
                  onClick={() => openWhatsApp(currentSlide.waMessage)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Más información sobre ${currentSlide.title}`}
                >
                  <span>Más información</span>
                  <ArrowRight size={16} className="btn-arrow-icon" />
                </motion.button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Flechas de navegación (visibles en desktop/tablet) */}
          <button 
            type="button"
            onClick={handlePrev} 
            className="slider-arrow arrow-prev" 
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            type="button"
            onClick={handleNext} 
            className="slider-arrow arrow-next" 
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de puntos (Dots) */}
          <div className="slider-dots" role="tablist">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                onClick={() => handleDotClick(idx)}
                className={`dot-indicator ${idx === currentIndex ? 'active' : ''}`}
                aria-label={`Ir al slide ${idx + 1}: ${slide.title}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
