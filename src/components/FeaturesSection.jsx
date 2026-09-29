import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, DollarSign, Clock, Award, Users, Star, Compass } from 'lucide-react';
import { aboutAgency } from '../data/travelData';
import './FeaturesSection.css';

const icons = [HeartHandshake, DollarSign, ShieldCheck, Clock];

const stats = [
  { value: '+5 Años', label: 'De trayectoria turística', icon: Award },
  { value: '+3,200', label: 'Viajeros felices', icon: Users },
  { value: '99.4%', label: 'Opiniones 5 estrellas', icon: Star },
  { value: '24/7', label: 'Asistencia en tus viajes', icon: Clock }
];

const FeaturesSection = () => {
  return (
    <section className="features-section" id="quienes-somos">
      <div className="container">
        
        {/* Barra de Estadísticas de Confianza */}
        <div className="stats-strip">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={idx} 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="stat-icon-box">
                  <Icon size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Encabezado de Pilares */}
        <div className="features-header">
          <div className="features-eyebrow">
            <Compass size={16} className="text-blue" />
            <span>EXCELENCIA Y RESPALDO</span>
          </div>
          <h2 className="features-title">¿Por qué viajar con InspiraViaje?</h2>
          <p className="features-subtitle">
            Cuidamos cada detalle para que tus únicas preocupaciones sean disfrutar, descansar y coleccionar momentos inolvidables.
          </p>
        </div>

        {/* 4 Tarjetas de Pilares */}
        <div className="features-grid">
          {aboutAgency.values.map((val, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <motion.div 
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={26} />
                </div>
                <h3 className="feature-card-title">{val.title}</h3>
                <p className="feature-card-text">{val.text}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
