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
│   │   └── travelData.js    ← Base de datos local de slides y paquetes turísticos
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado con logo y botón de contacto
│       ├── HeroSlider.jsx / .css    ← Slider 16:9 con autoplay, swipe y botón "Más información"
│       ├── Packages.jsx / .css      ← Cuadrícula de Paquetes en proporción 3:4 con botón "Más información"
│       ├── ContactModal.jsx / .css  ← Modal interactivo para contacto inmediato por WhatsApp
│       └── Footer.jsx / .css        ← Pie de página con redes, información y soporte
└── contexto-inspiraviaje.md         ← Documento de contexto y reglas del proyecto
```

---

## Secciones de la Web (en orden)
1. **Header:** Logotipo oficial de InspiraViaje a la izquierda; botón de **Contacto** directo a la derecha.
2. **Hero Slider (16:9):** Carrusel dinámico de proporción panorámica 16:9 con 3 destinos estelares que rotan hacia la derecha automáticamente y por interacción táctil. Cada slide incluye en la esquina inferior izquierda su botón **"Más información"**.
3. **Paquetes Turísticos (3:4):** Sección destacada con 3 tarjetas en formato vertical 3:4 (ideal para visualización en teléfonos móviles) con fotos espectaculares, precio referencial, detalles y su botón **"Más información"** en la parte inferior izquierda.
4. **Footer:** Canales de atención (WhatsApp, teléfono, correo), redes sociales y derechos reservados.

---

## Reglas de diseño a respetar
- Mantener la estética limpia, luminosa y vacacional: fondos predominantemente blancos con acentos en `#009EE3` y `#FFB800`.
- Proporciones obligatorias:
  - Slider Hero: **16:9** estricto (`aspect-ratio: 16 / 9`).
  - Tarjetas de Paquetes: **3:4** estricto (`aspect-ratio: 3 / 4`).
- Ubicación del botón de acción en las imágenes: Siempre en la **parte inferior izquierda**.
- Máxima optimización para teléfonos móviles: botones táctiles generosos (mínimo 44px de altura), tipografías legibles y soporte para arrastrar/swipe.
- No usar Tailwind CSS (Vanilla CSS puro y modular).
