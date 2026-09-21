import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Info, 
  Palmtree, 
  Sun, 
  Sparkles, 
  Users, 
  CreditCard, 
  ChevronRight, 
  MessageCircle,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { agencyInfo } from '../data/travelData';
import './NavDrawer.css';

const menuItems = [
  { 
    id: 'informacion', 
    label: 'Información', 
    icon: Info, 
    desc: 'Cómo reservar, preguntas frecuentes y asesoría',
    badge: 'Guía'
  },
  { 
    id: 'paquetes', 
    label: 'Paquetes', 
    icon: Palmtree, 
    desc: 'Destinos todo incluido (Los Roques, Margarita, Europa)',
    badge: 'Destacados'
  },
  { 
    id: 'full-days', 
    label: 'Full Days', 
    icon: Sun, 
    desc: 'Escapadas de 1 día (Morrocoy, Isla Larga, Colonia Tovar)',
    badge: 'Popular'
  },
  { 
    id: 'promociones', 
    label: 'Promociones', 
    icon: Sparkles, 
    desc: 'Ofertas especiales y temporadas turísticas',
    badge: 'Especial'
  },
  { 
    id: 'quienes-somos', 
    label: 'Quiénes Somos', 
    icon: Users, 
    desc: 'Nuestra trayectoria, valores y garantía de viaje',
    badge: 'Agencia'
  },
  { 
    id: 'metodos-pago', 
    label: 'Métodos de Pago', 
    icon: CreditCard, 
    desc: 'Zelle, Pago Móvil a tasa BCV, Efectivo $, Cuotas',
    badge: 'Flexible'
  },
];

const NavDrawer = ({ isOpen, onClose, onSelectMenuItem }) => {
  // Bloquear scroll de la página cuando el drawer esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleItemClick = (id) => {
    onClose();
    setTimeout(() => {
      onSelectMenuItem(id);
    }, 150);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("¡Hola InspiraViaje! Me gustaría información general sobre sus servicios y destinos.");
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="nav-drawer-overlay">
          {/* Fondo oscuro traslúcido */}
          <motion.div 
            className="nav-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel Lateral que se despliega desde la derecha */}
          <motion.div 
            className="nav-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            role="dialog"
            aria-label="Menú de Navegación"
          >
            {/* Cabecera del Drawer */}
            <div className="nav-drawer-header">
              <div className="nav-drawer-brand">
                <img src="/logo.png?v=2" alt="InspiraViaje" className="nav-drawer-logo" />
              </div>
              <button 
                type="button" 
                onClick={onClose} 
                className="btn-close-drawer"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            {/* Lista de Navegación con los 6 elementos solicitados */}
            <div className="nav-drawer-content">
              <div className="nav-menu-eyebrow">EXPLORA CON NOSOTROS</div>
              <nav className="nav-drawer-links">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      className="nav-menu-card"
                      onClick={() => handleItemClick(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="nav-menu-icon-wrap">
                        <Icon size={20} className="nav-item-icon" />
                      </div>
                      <div className="nav-menu-info">
                        <div className="nav-menu-title-row">
                          <span className="nav-menu-title">{item.label}</span>
                          <span className="nav-menu-badge">{item.badge}</span>
                        </div>
                        <p className="nav-menu-desc">{item.desc}</p>
                      </div>
                      <ChevronRight size={18} className="nav-menu-arrow" />
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            {/* Pie del Drawer con contacto directo por WhatsApp */}
            <div className="nav-drawer-footer">
              <div className="nav-footer-support">
                <div className="nav-support-title">¿Dudas o necesitas cotización inmediata?</div>
                <button 
                  type="button" 
                  onClick={openWhatsApp}
                  className="btn-drawer-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Escribir por WhatsApp</span>
                </button>
              </div>

              <div className="nav-footer-meta">
                <span>📍 {agencyInfo.location}</span>
                <span>•</span>
                <span>{agencyInfo.hours}</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavDrawer;
