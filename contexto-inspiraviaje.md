# CONTEXTO — InspiraViaje Web

> ⚠️ **REGLA OBLIGATORIA**
> Cada vez que se realice cualquier cambio en la web (nuevo componente, nueva sección, cambio de paquetes, ajuste de precios, nuevos enlaces de contacto, etc.), este archivo **debe actualizarse** para reflejar el estado actual del proyecto. El contexto siempre debe estar sincronizado con el código.

---

## ¿Qué es este proyecto?
Sitio web oficial de **InspiraViaje**, una agencia de viajes especializada en experiencias turísticas nacionales e internacionales (playas paradisíacas, paquetes todo incluido, escapadas de aventura y viajes internacionales).

La plataforma está diseñada con una filosofía **Mobile-First** orientada a que los usuarios que navegan desde sus teléfonos celulares puedan explorar rápidamente paquetes turísticos y contactar a asesores por WhatsApp en un solo clic.

---

## Stack tecnológico
- **Framework:** React + Vite
- **Animaciones:** Framer Motion (transiciones de slides, efectos de entrada y gestos táctiles)
- **Íconos:** Lucide React
- **Tipografías:**
  - Títulos y acentos: **Montserrat** (Google Fonts)
  - Cuerpo y lectura: **Plus Jakarta Sans** / **Inter** (Google Fonts)
- **CSS:** Vanilla CSS modular por componente (sin Tailwind CSS)
- **Paleta de Colores de Marca:**
  - **Blanco principal:** `#FFFFFF`
  - **Amarillo Sol:** `#FFB800` (energía, detalles, llamados de atención)
  - **Azul Cielo:** `#009EE3` (viajes, mar, confianza, botones de acción)
  - **Fondo secundario:** `#F8FAFC` (gris muy claro para tarjetas y contrastes suaves)
  - **Texto principal:** `#0F172A` (azul pizarra oscuro para lectura óptima)
  - **Texto secundario:** `#64748B` (pizarra neutro para descripciones)

---

## Estructura del proyecto
```
inspiraviaje-web/
├── public/
│   ├── logo.png             ← Logo oficial InspiraViaje (amarillo y azul cielo)
│   └── favicon.svg
├── src/
│   ├── App.jsx              ← Ensamblador principal de la web
│   ├── App.css              ← Estilos del contenedor general
│   ├── index.css            ← Variables globales, fuentes Google, utilidades
│   ├── data/
│   │   └── travelData.js    ← Base de datos local (slides, paquetes, full days, métodos de pago, quiénes somos, FAQ)
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado con logo grande, botón de contacto y botón de 3 rayitas (Menú)
│       ├── NavDrawer.jsx / .css     ← Panel lateral desplegable con las 6 opciones de navegación
│       ├── NavModals.jsx / .css     ← Modales detallados para Información, Full Days, Quiénes Somos y Métodos de Pago
│       ├── HeroSlider.jsx / .css    ← Slider 16:9 con autoplay, swipe y botón "Más información" (id="promociones")
│       ├── Packages.jsx / .css      ← Cuadrícula de Paquetes en proporción 3:4 con botón "Más información" (id="paquetes")
│       ├── ContactModal.jsx / .css  ← Modal interactivo para contacto inmediato por WhatsApp
│       └── Footer.jsx / .css        ← Pie de página con redes, información y soporte
└── contexto-inspiraviaje.md         ← Documento de contexto y reglas del proyecto
```

---

## Secciones y Elementos de la Web (en orden)
1. **Header:** 
   - Logotipo oficial de InspiraViaje a la izquierda (dimensiones optimizadas para alta legibilidad).
   - A la derecha: Botón de **Contacto** directo + **Botón de 3 rayitas (Menú)**.
2. **Menú de 3 rayitas (Desplegable lateral):**
   - **1. Información:** Guía en 3 pasos para reservar y preguntas frecuentes (FAQ).
   - **2. Paquetes:** Desplazamiento fluido a la sección de paquetes turísticos (3:4).
   - **3. Full Days:** Tours de 1 día (Morrocoy Cayo Sombrero, Isla Larga, Colonia Tovar) con precios, inclusiones y reserva inmediata.
   - **4. Promociones:** Desplazamiento fluido al slider de promociones principales.
   - **5. Quiénes Somos:** Respaldo, trayectoria de más de 5 años, valores y asesoría personalizada.
   - **6. Métodos de Pago:** Zelle, Pago Móvil (tasa BCV), Efectivo USD, Binance Pay (USDT), Tarjetas Internacionales y Plan de Reserva en Cuotas (desde 30% inicial).
3. **Hero Slider (16:9):** Carrusel dinámico de proporción panorámica 16:9 con 3 destinos estelares que rotan hacia la derecha automáticamente y por interacción táctil. Cada slide incluye en la esquina inferior izquierda su botón **"Más información"**.
4. **Paquetes Turísticos (3:4):** Sección destacada con 3 tarjetas en formato vertical 3:4 (ideal para visualización en teléfonos móviles) con fotos espectaculares, precio referencial, detalles y su botón **"Más información"** en la parte inferior izquierda.
5. **Footer:** Canales de atención (WhatsApp, teléfono, correo), redes sociales y derechos reservados.

---

## Reglas de diseño a respetar
- Mantener la estética limpia, luminosa y vacacional: fondos predominantemente blancos con acentos en `#009EE3` y `#FFB800`.
- Proporciones obligatorias:
  - Slider Hero: **16:9** estricto (`aspect-ratio: 16 / 9`).
  - Tarjetas de Paquetes: **3:4** estricto (`aspect-ratio: 3 / 4`).
- Ubicación del botón de acción en las imágenes: Siempre en la **parte inferior izquierda**.
- Máxima optimización para teléfonos móviles: botones táctiles generosos (mínimo 44px de altura), tipografías legibles y soporte para arrastrar/swipe.
- No usar Tailwind CSS (Vanilla CSS puro y modular).
