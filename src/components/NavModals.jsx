import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  Sun,
  Users,
  Smartphone,
  Wallet,
  Banknote,
  CalendarCheck
} from 'lucide-react';
import { 
  agencyInfo, 
  fullDayTours, 
  paymentMethods, 
  aboutAgency, 
  agencyFaq,
  insuranceInfo,
  insurancePlans
} from '../data/travelData';
import './NavModals.css';

const NavModals = ({ activeModal, onClose }) => {
  // Bloquear scroll mientras el modal esté abierto
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  if (!activeModal) return null;

  const openWhatsApp = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const renderContent = () => {
    switch (activeModal) {
      /* ========================================================
         1. INFORMACIÓN (Guía de reserva y Preguntas Frecuentes)
         ======================================================== */
      case 'informacion':
        return (
          <div className="nav-modal-body">
            <div className="nav-modal-intro">
              <span className="nav-modal-kicker">GUÍA DEL VIAJERO</span>
              <h3 className="nav-modal-heading">Información y Preguntas Frecuentes</h3>
              <p className="nav-modal-lead">
                Todo lo que necesitas saber para planificar y reservar tus próximas vacaciones con total seguridad.
              </p>
            </div>

            {/* Pasos para viajar */}
            <div className="info-steps-card">
              <h4 className="info-section-title">¿Cómo reservar en 3 simples pasos?</h4>
              <div className="info-steps-grid">
                <div className="info-step-item">
                  <div className="step-number">1</div>
                  <div>
                    <h5>Elige tu destino</h5>
                    <p>Revisa nuestros paquetes o cuéntanos qué lugar sueñas visitar.</p>
                  </div>
                </div>
                <div className="info-step-item">
                  <div className="step-number">2</div>
                  <div>
                    <h5>Cotización formal</h5>
                    <p>Un asesor te enviará detalles de hotel, traslados y métodos de pago.</p>
                  </div>
                </div>
                <div className="info-step-item">
                  <div className="step-number">3</div>
                  <div>
                    <h5>¡Prepara tus maletas!</h5>
                    <p>Reserva con tu abono inicial y recibe tus vouchers y asistencia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preguntas frecuentes */}
            <div className="info-faq-section">
              <h4 className="info-section-title">Dudas comunes</h4>
              <div className="faq-list">
                {agencyFaq.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-question">
                      <HelpCircle size={18} className="faq-icon" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-modal-cta-box">
              <h4>¿Tienes una consulta específica?</h4>
              <p>Habla en vivo con uno de nuestros asesores turísticos vía WhatsApp.</p>
              <button 
                type="button" 
                onClick={() => openWhatsApp("¡Hola InspiraViaje! Quisiera asesoría para planificar un viaje.")}
                className="btn-modal-action-primary"
              >
                <MessageCircle size={18} />
                <span>Contactar a un Asesor</span>
              </button>
            </div>
          </div>
        );

      /* ========================================================
         2. FULL DAYS (Escapadas de 1 día)
         ======================================================== */
      case 'full-days':
        return (
          <div className="nav-modal-body">
            <div className="nav-modal-intro">
              <span className="nav-modal-kicker">ESCAPADAS DE UN DÍA</span>
              <h3 className="nav-modal-heading">Full Days Disponibles</h3>
              <p className="nav-modal-lead">
                Disfruta de un día inolvidable de sol, playa y recreación con todo organizado de ida y vuelta.
              </p>
            </div>

            <div className="fulldays-grid">
              {fullDayTours.map((tour) => (
                <div key={tour.id} className="fullday-card">
                  <div className="fullday-img-wrap">
                    <img src={tour.image} alt={tour.title} className="fullday-img" />
                    <span className="fullday-price-tag">{tour.price} <small>p/p</small></span>
                  </div>
                  <div className="fullday-info">
                    <h4 className="fullday-title">{tour.title}</h4>
                    <div className="fullday-meta">
                      <span><MapPin size={14} /> {tour.destination}</span>
                      <span><Clock size={14} /> {tour.departure}</span>
                    </div>
                    <div className="fullday-includes-list">
                      <strong>Incluye:</strong>
                      <ul>
                        {tour.includes.map((inc, idx) => (
                          <li key={idx}><CheckCircle2 size={13} className="inc-icon" /> {inc}</li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => openWhatsApp(tour.waMessage)}
                      className="btn-fullday-book"
                    >
                      <MessageCircle size={16} />
                      <span>Más información & Reserva</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      /* ========================================================
         3. QUIÉNES SOMOS (Misión, valores y trayectoria)
         ======================================================== */
      case 'quienes-somos':
        return (
          <div className="nav-modal-body">
            <div className="nav-modal-intro">
              <span className="nav-modal-kicker">CONOCE NUESTRO EQUIPO</span>
              <h3 className="nav-modal-heading">{aboutAgency.title}</h3>
              <p className="nav-modal-lead">{aboutAgency.subtitle}</p>
            </div>

            <div className="about-stats-row">
              {aboutAgency.stats.map((st, i) => (
                <div key={i} className="about-stat-box">
                  <span className="stat-number">{st.value}</span>
                  <span className="stat-label">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="about-description-box">
              <p>{aboutAgency.description}</p>
            </div>

            <div className="about-values-section">
              <h4 className="info-section-title">Nuestros Pilares de Confianza</h4>
              <div className="values-grid">
                {aboutAgency.values.map((val, i) => (
                  <div key={i} className="value-card">
                    <div className="value-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h5 className="value-title">{val.title}</h5>
                      <p className="value-text">{val.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-modal-cta-box">
              <h4>¿Listo para vivir la experiencia InspiraViaje?</h4>
              <p>Déjanos cuidar cada detalle de tus próximas vacaciones.</p>
              <button 
                type="button" 
                onClick={() => openWhatsApp("¡Hola! Me gustaría conocer las promociones actuales de InspiraViaje.")}
                className="btn-modal-action-primary"
              >
                <MessageCircle size={18} />
                <span>Conversar con el Equipo</span>
              </button>
            </div>
          </div>
        );

      /* ========================================================
         4. MÉTODOS DE PAGO (Zelle, Pago Móvil, Efectivo, Cuotas)
         ======================================================== */
      case 'metodos-pago':
        return (
          <div className="nav-modal-body">
            <div className="nav-modal-intro">
              <span className="nav-modal-kicker">FLEXIBILIDAD Y CONFIANZA</span>
              <h3 className="nav-modal-heading">Métodos de Pago Aceptados</h3>
              <p className="nav-modal-lead">
                Te ofrecemos diversas alternativas seguras para pagar tu viaje de la manera más cómoda y transparente.
              </p>
            </div>

            <div className="payment-methods-grid">
              {paymentMethods.map((pm) => (
                <div key={pm.id} className="payment-method-card">
                  <div className="payment-card-top">
                    <div className="pm-icon-wrap">
                      <CreditCard size={20} />
                    </div>
                    <span className="pm-badge">{pm.badge}</span>
                  </div>
                  <h4 className="pm-name">{pm.name}</h4>
                  <p className="pm-desc">{pm.description}</p>
                </div>
              ))}
            </div>

            {/* Destacado Plan de Cuotas */}
            <div className="installments-highlight-card">
              <div className="installments-header">
                <CalendarCheck size={24} className="installments-icon" />
                <div>
                  <h4 className="installments-title">Plan de Reserva en Cuotas Quincenales</h4>
                  <span className="installments-tag">¡Sin Intereses!</span>
                </div>
              </div>
              <p className="installments-text">
                Congela la tarifa de tu paquete hoy mismo con un abono del <strong>30%</strong> y cancela cómodas cuotas hasta 10 días antes de tu viaje. ¡Viajar nunca fue tan accesible!
              </p>
            </div>

            <div className="nav-modal-cta-box">
              <h4>¿Deseas solicitar los datos de pago o una cotización en cuotas?</h4>
              <p>Escríbenos y un asesor te enviará los datos bancarios oficiales al instante.</p>
              <button 
                type="button" 
                onClick={() => openWhatsApp("¡Hola InspiraViaje! Quisiera conocer los datos bancarios y formas de pago para un paquete.")}
                className="btn-modal-action-primary"
              >
                <MessageCircle size={18} />
                <span>Solicitar Datos de Pago</span>
              </button>
            </div>
          </div>
        );

      /* ========================================================
         5. SEGUROS DE VIDA Y ASISTENCIA AL VIAJERO
         ======================================================== */
      case 'seguros':
        return (
          <div className="nav-modal-body">
            <div className="nav-modal-intro">
              <span className="nav-modal-kicker">PROTECCIÓN INTEGRAL</span>
              <h3 className="nav-modal-heading">{insuranceInfo.title}</h3>
              <p className="nav-modal-lead">{insuranceInfo.description}</p>
            </div>

            {/* Beneficios / Highlights */}
            <div className="insurance-highlights-grid">
              {insuranceInfo.highlights.map((item, idx) => (
                <div key={idx} className="insurance-highlight-card">
                  <div className="insurance-highlight-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 className="insurance-highlight-title">{item.title}</h5>
                    <p className="insurance-highlight-desc">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Listado de Planes de Seguros */}
            <div className="insurance-plans-list">
              {insurancePlans.map((plan) => (
                <div key={plan.id} className="insurance-plan-card">
                  <div className="insurance-plan-header">
                    <span 
                      className="insurance-plan-badge"
                      style={{ backgroundColor: `${plan.badgeColor}15`, color: plan.badgeColor, borderColor: `${plan.badgeColor}40` }}
                    >
                      {plan.badge}
                    </span>
                    <h4 className="insurance-plan-title">{plan.title}</h4>
                  </div>

                  <p className="insurance-plan-description">{plan.description}</p>

                  <div className="insurance-coverage-box">
                    <span className="insurance-coverage-heading">Coberturas Principales:</span>
                    <ul className="insurance-coverage-list">
                      {plan.coverage.map((cov, i) => (
                        <li key={i} className="insurance-coverage-item">
                          <CheckCircle2 size={16} className="coverage-icon" />
                          <span>{cov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => openWhatsApp(plan.waMessage)}
                    className="btn-quote-insurance"
                  >
                    <MessageCircle size={17} />
                    <span>Cotizar Póliza por WhatsApp</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Destacado o Soporte */}
            <div className="nav-modal-cta-box insurance-cta-bottom">
              <h4>¿Tienes un viaje próximo o deseas proteger a tu familia?</h4>
              <p>Nuestros asesores certificados te brindan cotización inmediata según destino, días o beneficiarios.</p>
              <button 
                type="button" 
                onClick={() => openWhatsApp("¡Hola InspiraViaje! Quisiera una cotización y asesoría personalizada sobre sus pólizas de seguros de vida y viaje.")}
                className="btn-modal-action-primary"
              >
                <MessageCircle size={18} />
                <span>Hablar con un Asesor de Seguros</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="nav-modal-overlay">
        {/* Fondo oscurecido con desenfoque */}
        <motion.div 
          className="nav-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Contenedor Modal */}
        <motion.div 
          className="nav-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
        >
          {/* Barra superior con botón de cerrar */}
          <div className="nav-modal-top-bar">
            <img src="/logo.png?v=2" alt="InspiraViaje" className="nav-modal-logo" />
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-modal-close"
              aria-label="Cerrar ventana"
            >
              <X size={20} />
            </button>
          </div>

          {/* Contenido renderizado según la sección */}
          {renderContent()}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default NavModals;
