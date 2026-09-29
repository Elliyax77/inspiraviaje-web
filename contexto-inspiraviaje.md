# CONTEXTO — InspiraViaje Web

> ⚠️ **REGLA OBLIGATORIA**
> Cada vez que se realice cualquier cambio en la web (nuevo componente, nueva sección, cambio de paquetes, ajuste de precios, nuevos enlaces de contacto, etc.), este archivo **debe actualizarse** para reflejar el estado actual del proyecto. El contexto siempre debe estar sincronizado con el código.

---

## ¿Qué es este proyecto?
Sitio web oficial de **InspiraViaje**, una agencia de viajes especializada en experiencias turísticas nacionales e internacionales (playas paradisíacas, paquetes todo incluido, escapadas de aventura y viajes internacionales).

La plataforma está diseñada con una filosofía **Mobile-First** orientada a que los usuarios que navegan desde sus teléfonos celulares puedan explorar rápidamente paquetes turísticos y contactar a asesores por WhatsApp en un solo clic.

- **Repositorio oficial en GitHub:** [https://github.com/Elliyax77/inspiraviaje-web](https://github.com/Elliyax77/inspiraviaje-web)
- **Rama principal:** `main`

---

## Stack tecnológico
- **Framework:** React + Vite
- **Animaciones:** Framer Motion (transiciones de slides, efectos de entrada y gestos táctiles)
- **Íconos:** Lucide React
- **Tipografías:**
  - Títulos y acentos: **Montserrat** (Google Fonts)
  - Cuerpo y lectura: **Plus Jakarta Sans** / **Inter** (Google Fonts)
- **CSS:** Vanilla CSS modular por componente (sin Tailwind CSS)
- **Estilo Visual:** Fondo en azul clarito vibrante y fresco (`#BAE6FD` - `#7DD3FC`) con desvanecido al medio (`#E0F4FE`), combinado con **Header en Amarillo Suave con desvanecido a Blanco** (sólido, limpio y sin efecto glass, garantizando nitidez total).
- **Paleta de Colores de Marca y Fondo:**
  - **Fondo:** Azul clarito cielo caribeño visible (`#BAE6FD` a `#7DD3FC`) con desvanecido suave hacia el centro luminoso (`#E0F4FE`) fijado en pantalla.
  - **Header Amarillo a Blanco:** Degradado cálido sólido (`#FEE685` / `#FEF08A` a `#FFFFFF`), sin transparencias ni `backdrop-filter`, con borde sutil dorado y sombra suave.
  - **Amarillo Sol:** `#FFB800` (energía, detalles, llamados de atención)
  - **Azul Cielo:** `#009EE3` (viajes, mar, confianza, botones de acción)
  - **Texto principal:** `#0F172A` (azul pizarra oscuro para lectura óptima)
  - **Texto secundario:** `#64748B` (pizarra neutro para descripciones)

---

## Estructura del proyecto
```
inspiraviaje-web/
├── public/
│   ├── logo.png             ← Logo oficial completo InspiraViaje (horizontal con texto)
│   ├── favicon.png          ← Isotipo oficial (ala azul y sol amarillo) para pestaña del navegador
│   ├── favicon.ico          ← Favicon formato ICO para navegadores
│   └── apple-touch-icon.png ← Ícono de alta resolución para móviles y marcadores
├── src/
│   ├── App.jsx              ← Ensamblador principal de la web y control de modales
│   ├── App.css              ← Estilos del contenedor general (fondo transparente)
│   ├── index.css            ← Variables globales, tokens de Header amarillo-blanco, utilidades
│   ├── data/
│   │   ├── travelData.js    ← Base de datos local (slides, paquetes, full days, métodos de pago, quiénes somos, FAQ)
│   │   └── legalContent.js  ← Redacción jurídica oficial (Aviso Legal, Privacidad RGPD/ARCO, Cookies, Términos y Cuotas)
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado sólido en degradado amarillo a blanco con logo, botón de contacto (oculto en móviles) y botón de Menú circular a juego
│       ├── NavDrawer.jsx / .css     ← Panel lateral desplegable con las 8 opciones de navegación (incluye Contacto y Seguros de Vida)
│       ├── NavModals.jsx / .css     ← Modales detallados para Información, Full Days, Quiénes Somos, Métodos de Pago y Seguros de Vida & Asistencia
│       ├── HeroSlider.jsx / .css    ← Slider 16:9 con autoplay, swipe y botón "Más información" (id="promociones")
│       ├── Packages.jsx / .css      ← Cuadrícula de Paquetes en proporción 3:4 y banner 'Cotiza tu viaje aquí' con botón directo a contacto
│       ├── FullDaysSection.jsx/.css ← Tours de 1 día (Morrocoy, Isla Larga, Colonia Tovar) en grilla 3 columnas desktop con reserva directa
│       ├── TripPlanner.jsx / .css   ← Cotizador interactivo en 3 pasos con casilla de privacidad y botón bloqueado hasta aceptar
│       ├── FeaturesSection.jsx/.css ← Barra de 4 estadísticas (+5 Años, +3200 viajeros, 99.4%, 24/7) y 4 pilares de excelencia turística
│       ├── PaymentMethodsSection.jsx/.css ← Métodos de pago (Pago Móvil BCV, Zelle, Binance, Divisas, Tarjetas) y banner estrella de cuotas al 30%
│       ├── FaqSection.jsx / .css    ← Acordeón interactivo de preguntas frecuentes con caja de soporte directo por WhatsApp
│       ├── ContactModal.jsx / .css  ← Modal interactivo para contacto con checkbox obligatoria de privacidad y botón de WhatsApp bloqueado hasta aceptación
│       ├── LegalModals.jsx / .css   ← Visor modal accesible de textos legales con navegación por pestañas y botón de impresión
│       ├── CookieBanner.jsx / .css  ← Banner de cookies equilibrado (Aceptar, Rechazar, Configurar) con bloqueo previo y panel granular
│       └── Footer.jsx / .css        ← Pie de página frosted glass con redes, información y barra accesible de enlaces legales
└── contexto-inspiraviaje.md         ← Documento de contexto y reglas del proyecto
```

---

## Secciones y Elementos de la Web (en orden)
1. **Header (Amarillo desvanecido a Blanco):** 
   - Diseño sólido en degradado cálido de amarillo suave a blanco puro (`#FEE685` / `#FEF08A` a `#FFFFFF`), sin transparencias ni desenfoque para evitar tintes verdosos.
   - Logotipo oficial de InspiraViaje a la izquierda sobre fondo amarillo cálido.
   - A la derecha: Botón de **Contacto** azul directo (visible en pantallas de escritorio y tablets; se oculta en teléfonos móviles para brindar mayor limpieza visual) + **Botón de Menú** circular estilizado en blanco y amarillo sutil.
   - Comportamiento de Scroll estabilizado: Implementa histéresis de desplazamiento (compacta a > 60px y expande a < 15px) junto con `overflow-anchor: none` y `requestAnimationFrame`, previniendo bucles de redimensionamiento y parpadeos en cualquier dispositivo.
2. **Hero Slider:** Carrusel dinámico con destinos estelares, rotación automática hacia la derecha y soporte táctil de gestos (swipe). En pantallas de escritorio conserva su formato panorámico **16:9**; en teléfonos celulares se expande con **min-height: 340px (aspect-ratio: 4:3)** para un impacto visual imponente, tipografía de mayor tamaño y subtítulos visibles. Cada slide incluye en la esquina inferior izquierda su botón **"Más información"**.
3. **Paquetes Turísticos (3:4) y Banner de Cotización:** Sección destacada con 3 tarjetas en formato vertical 3:4 con acabado frosted glass (ideal para visualización en teléfonos móviles) con fotos espectaculares, precio referencial, detalles y su botón **"Más información"** en la parte inferior izquierda. Al final de la sección incluye el banner interactivo **'Cotiza tu viaje aquí'** con información de asesoría a la medida, facilidades de pago en cuotas y botón directo de contacto.
4. **Full Days & Escapadas Cortas:**
   - Tours de 1 día (Morrocoy Cayo Sombrero, Isla Larga y Colonia Tovar) con detalles de transporte, lanchas e hidratación en grilla de 3 columnas en computadoras.
5. **Cotizador Interactivo ("Diseña tu Viaje a la Medida"):**
   - Selector dinámico en 3 pasos: Destino -> Época -> Pasajeros.
   - Casilla de verificación de privacidad obligatoria (no pre-marcada) con enlaces a Política de Privacidad y Términos.
   - Botón "Solicitar Cotización por WhatsApp" en estado estrictamente deshabilitado hasta marcar la casilla.
6. **¿Por qué viajar con InspiraViaje?:**
   - Barra horizontal de 4 estadísticas (+5 Años de trayectoria, +3,200 viajeros, 99.4% opiniones 5 estrellas, 24/7 asistencia).
   - 4 tarjetas de pilares de servicio (Atención 100% personalizada, Tarifas transparentes, Garantía y confianza, Seguridad y soporte permanente).
7. **Métodos de Pago & Banner de Cuotas al 30%:**
   - Métodos de pago admitidos: Pago Móvil a tasa oficial BCV, Zelle en USD, Binance Pay USDT, Efectivo en divisas y Tarjetas internacionales.
   - Banner destacado "Plan Reserva en Cuotas": congelamiento de tarifa pagando desde el 30% inicial y cuotas quincenales cómodas.
8. **Preguntas Frecuentes (FAQ):**
   - Acordeón interactivo con respuestas inmediatas a reservas, anticipación, vuelos y personalización.
   - Caja de atención lateral para consultas específicas con enlace directo a WhatsApp.
9. **Footer con Barra Legal Accesible:** Canales de atención (WhatsApp, teléfono, correo), redes sociales, derechos reservados y **Barra de Enlaces Legales Semántica (`.footer-legal-bar`)** con accesos directos a *Aviso Legal*, *Política de Privacidad*, *Política de Cookies*, *Términos de Contratación & Cuotas* y el botón permanente `⚙️ Configurar Cookies` para revocar o alterar consentimientos en cualquier instante.
10. **Sistema Normativo y Cumplimiento Digital (RGPD / ePrivacy):**
    - **Banner de Consentimiento de Cookies:** Ofrece 3 botones simétricos y equilibrados (*Aceptar todas*, *Rechazar opcionales*, *Configurar*), bloqueo estricto antes de autorización y centro de preferencias con interruptores para Analíticas y Marketing.
    - **Visor Modal de Textos Legales (`LegalModals`):** Lectura clara de los 4 cuerpos normativos con selector por pestañas, diseño a juego con la identidad visual de InspiraViaje y botón de impresión a PDF.
    - **Consentimiento Previo en Contacto (`ContactModal`):** Casilla activa no pre-marcada de aceptación de privacidad. El botón de WhatsApp permanece bloqueado (`disabled`, apariencia inactiva y nota de aviso) hasta que el usuario marque activamente la casilla.

---

## Reglas de diseño a respetar
- **Fondo:** Azul clarito claramente visible (`#BAE6FD` a `#7DD3FC`) con desvanecido al medio, creando un marco vacacional refrescante.
- **Header:** Mantener el degradado sólido amarillo desvanecido a blanco, sin transparencias ni efecto glass sobre el fondo azul.
- **Proporciones:**
  - Slider Hero: **16:9** en desktop / **4:3 con min-height de 340px** en smartphones para destacar y llamar la atención.
  - Tarjetas de Paquetes: **3:4** estricto (`aspect-ratio: 3 / 4`).
- **Ubicación del botón de acción en las imágenes:** Siempre en la **parte inferior izquierda**.
- **Máxima optimización para teléfonos móviles:** botones táctiles generosos (mínimo 44px de altura), tipografías legibles y soporte para arrastrar/swipe.
- **No usar Tailwind CSS** (Vanilla CSS puro y modular).
- **Cumplimiento legal estricto:** Ninguna casilla de consentimiento puede estar pre-marcada. Las opciones de cookies deben ser equilibradas sin *dark patterns*. La configuración de cookies debe ser accesible permanentemente desde el pie de página.
