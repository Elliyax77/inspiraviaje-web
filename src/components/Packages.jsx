import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { travelPackages, agencyInfo } from '../data/travelData';
import './Packages.css';

const Packages = ({ onOpenContact }) => {
  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="packages-section" id="paquetes">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <div className="packages-header">
          <div className="packages-eyebrow">
            <Sparkles size={16} className="eyebrow-icon" />
            <span>EXPERIENCIAS INOLVIDABLES</span>
          </div>
          <h2 className="packages-title">Paquetes Turísticos</h2>
          <p className="packages-subtitle">
            Seleccionamos los destinos más solicitados con tarifas especiales y atención personalizada de inicio a fin.
          </p>
        </div>

        {/* Cuadrícula de 3 Tarjetas en Proporción 3:4 */}
        <div className="packages-grid">
          {travelPackages.map((pkg, index) => (
            <motion.article 
              key={pkg.id} 
              className="package-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Contenedor estricto con Proporción 3:4 */}
              <div className="package-image-wrapper">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="package-img" 
                  loading="lazy"
                />

                {/* Degradado oscuro para que los textos y botón inferior izquierdo resalten */}
                <div className="package-gradient-overlay"></div>

                {/* Badge Superior */}
                <div className="package-top-badge">
                  <span className="badge-pill" style={{ backgroundColor: pkg.badgeColor }}>
                    {pkg.badge}
                  </span>
                </div>

                {/* Contenido en la Parte Inferior Izquierda */}
                <div className="package-bottom-left-content">
                  <div className="package-location-row">
                    <MapPin size={14} className="location-pin" />
                    <span>{pkg.destination}</span>
                  </div>

                  <h3 className="package-name">{pkg.title}</h3>

                  <div className="package-meta-row">
                    <div className="meta-item">
                      <Clock size={13} />
                      <span>{pkg.duration}</span>
                    </div>
                    <span className="package-price-tag">{pkg.price}</span>
                  </div>

                  {/* BOTÓN OBLIGATORIO: Inferior Izquierda -> 'Más información' */}
                  <button
                    type="button"
                    className="btn-more-info package-btn"
                    onClick={() => openWhatsApp(pkg.waMessage)}
                    aria-label={`Más información sobre paquete ${pkg.title}`}
                  >
                    <span>Más información</span>
                    <ArrowRight size={15} className="btn-arrow-icon" />
                  </button>
                </div>

              </div>

              {/* Inclusiones destacadas del paquete */}
              <div className="package-footer-features">
                <ul className="features-list">
                  {pkg.features.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <span className="check-bullet">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Banner: Cotiza tu viaje aquí */}
        <motion.div 
          className="quote-cta-banner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="quote-cta-glow-decor"></div>
          
          <div className="quote-cta-content">
            <h3 className="quote-cta-title">
              <span className="quote-title-main">¿No encuentras tu destino soñado?</span>
              <span className="quote-title-accent">Cotiza tu viaje aquí</span>
            </h3>

            <p className="quote-cta-desc">
              Creamos paquetes personalizados con boletos aéreos, posadas u hoteles todo incluido, tours exclusivos y planes de reserva en cuotas. ¡Cuéntanos a dónde quieres ir y nosotros lo hacemos realidad!
            </p>

            <div className="quote-cta-pills">
              <div className="quote-pill">
                <CheckCircle2 size={15} className="quote-pill-icon" />
                <span>Asesoría 100% personalizada</span>
              </div>
              <div className="quote-pill">
                <CheckCircle2 size={15} className="quote-pill-icon" />
                <span>Planes de reserva en cuotas</span>
              </div>
              <div className="quote-pill">
                <CheckCircle2 size={15} className="quote-pill-icon" />
                <span>Destinos nacionales e internacionales</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="btn-quote-contact"
              aria-label="Cotiza tu viaje aquí con un asesor"
            >
              <MessageCircle size={20} />
              <span>Contactar a un Asesor</span>
              <ArrowRight size={18} className="quote-btn-arrow" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Packages;
