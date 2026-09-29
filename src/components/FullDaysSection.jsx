import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Clock, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';
import { fullDayTours, agencyInfo } from '../data/travelData';
import './FullDaysSection.css';

const FullDaysSection = ({ onOpenContact }) => {
  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="fulldays-section" id="full-days">
      <div className="container">
        
        {/* Encabezado */}
        <div className="fulldays-header">
          <div className="fulldays-eyebrow">
            <Sun size={18} className="eyebrow-icon text-yellow" />
            <span>ESCAPADAS DE UN DÍA</span>
          </div>
          <h2 className="fulldays-title">Full Days & Aventura de Fin de Semana</h2>
          <p className="fulldays-subtitle">
            Escápate de la rutina sin necesidad de pedir vacaciones. Salidas programadas con transporte ejecutivo, lancha, guías y almuerzo playero incluido.
          </p>
        </div>

        {/* Grilla de Full Days */}
        <div className="fulldays-grid">
          {fullDayTours.map((tour, index) => (
            <motion.article 
              key={tour.id}
              className="fullday-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Imagen con badge y botón en esquina inferior izquierda */}
              <div className="fullday-img-wrapper">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="fullday-img"
                  loading="lazy"
                />
                <div className="fullday-gradient-overlay"></div>

                <div className="fullday-badge-top">
                  <span className="fullday-price-badge">{tour.price} <small>/ persona</small></span>
                </div>

                <div className="fullday-bottom-content">
                  <div className="fullday-location">
                    <MapPin size={13} />
                    <span>{tour.destination}</span>
                  </div>

                  <h3 className="fullday-name">{tour.title}</h3>

                  <div className="fullday-meta">
                    <div className="fullday-meta-item">
                      <Clock size={13} />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  {/* Botón obligatorio abajo a la izquierda */}
                  <button
                    type="button"
                    className="btn-fullday-action"
                    onClick={() => openWhatsApp(tour.waMessage)}
                    aria-label={`Reservar ${tour.title}`}
                  >
                    <span>Reservar por WhatsApp</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Inclusiones y salida */}
              <div className="fullday-body">
                <div className="fullday-departure-tag">
                  🚌 <span>{tour.departure}</span>
                </div>

                <ul className="fullday-includes-list">
                  {tour.includes.map((inc, i) => (
                    <li key={i}>
                      <span className="inc-bullet">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FullDaysSection;
