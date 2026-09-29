import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { agencyFaq, agencyInfo } from '../data/travelData';
import './FaqSection.css';

const FaqSection = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState(0); // Primera abierta por defecto

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        
        <div className="faq-header">
          <div className="faq-eyebrow">
            <HelpCircle size={16} className="text-yellow" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <p className="faq-subtitle">
            Todo lo que necesitas saber antes de empacar tus maletas y comenzar tu próxima aventura con InspiraViaje.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {agencyFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <p className="faq-answer-text">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Caja de ayuda lateral / inferior */}
          <div className="faq-cta-box">
            <div className="cta-icon-wrapper">
              <MessageCircle size={28} />
            </div>
            <h4 className="cta-box-title">¿Tienes una duda diferente?</h4>
            <p className="cta-box-desc">
              Nuestro equipo de asesores turísticos está conectado en WhatsApp para responderte en tiempo real.
            </p>
            <button
              type="button"
              className="btn-faq-chat"
              onClick={onOpenContact}
            >
              <span>Preguntar por WhatsApp</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
