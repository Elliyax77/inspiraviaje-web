import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Wallet, 
  CircleDollarSign, 
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { paymentMethods } from '../data/travelData';
import './PaymentMethodsSection.css';

const iconMap = {
  Smartphone: Smartphone,
  Banknote: Banknote,
  Wallet: Wallet,
  CircleDollarSign: CircleDollarSign,
  CreditCard: CreditCard,
  CalendarCheck: CalendarCheck
};

const PaymentMethodsSection = ({ onOpenContact }) => {
  return (
    <section className="payments-section" id="metodos-pago">
      <div className="container">
        
        {/* Encabezado */}
        <div className="payments-header">
          <div className="payments-eyebrow">
            <CreditCard size={16} className="text-blue" />
            <span>TRANSPARENCIA Y FACILIDADES</span>
          </div>
          <h2 className="payments-title">Métodos de Pago & Planes de Reserva</h2>
          <p className="payments-subtitle">
            Múltiples opciones seguras y sin comisiones ocultas. Cancela en Bolívares a tasa oficial BCV, en divisas o activa nuestro plan de cuotas quincenales.
          </p>
        </div>

        {/* Grilla de Métodos de Pago */}
        <div className="payments-grid">
          {paymentMethods.map((pm, idx) => {
            const Icon = iconMap[pm.icon] || CreditCard;
            return (
              <motion.div 
                key={pm.id}
                className={`payment-card ${pm.id === 'cuotas' ? 'highlight-cuotas' : ''}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="payment-top-row">
                  <div className="payment-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="payment-badge">{pm.badge}</span>
                </div>

                <h3 className="payment-name">{pm.name}</h3>
                <p className="payment-desc">{pm.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Destacado: Reserva en Cuotas al 30% */}
        <motion.div 
          className="installment-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="installment-content">
            <div className="installment-badge">
              <Sparkles size={16} />
              <span>PLAN ESTRELLA</span>
            </div>
            <h3 className="installment-title">¿No tienes el monto completo hoy?</h3>
            <p className="installment-text">
              No dejes pasar tus vacaciones. Reserva y congela tu tarifa pagando solo desde el <strong>30% inicial</strong> y el saldo restante en cómodas cuotas quincenales hasta días antes de tu viaje.
            </p>
            <div className="installment-perks">
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Congelas tarifa de hospedaje y tours</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Sin intereses bancarios ni trámites</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Itinerario 100% garantizado</span>
              </div>
            </div>
          </div>

          <div className="installment-action">
            <button 
              type="button" 
              className="btn-installment-quote"
              onClick={onOpenContact}
            >
              <span>Solicitar Plan en Cuotas</span>
              <ArrowRight size={18} />
            </button>
            <span className="installment-subnote">
              🔒 Respuesta rápida sin compromiso
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PaymentMethodsSection;
