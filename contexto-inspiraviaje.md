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
- **Estilo Visual:** Glassmorphism moderno (Modo Glass en Header, tarjetas y pie de página) combinado con fondo colorido y vivo.
- **Paleta de Colores de Marca y Fondo:**
  - **Fondo General Colorido:** Base luminosa `#F0F8FE` con malla de resplandores radiales fijas en Amarillo Sol (`#FFB800`) y Azul Cielo (`#009EE3`), más un patrón SVG de viaje repetitivo (soles, olas marinas, estrellas de brújula, rutas aéreas y constelaciones).
  - **Amarillo Sol:** `#FFB800` (energía, detalles, llamados de atención)
  - **Azul Cielo:** `#009EE3` (viajes, mar, confianza, botones de acción)
  - **Efecto Glass:** Translucidez (`rgba(255, 255, 255, 0.72 - 0.92)`), `backdrop-filter: blur(20px)` y bordes sutiles reflectivos.
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
│   ├── App.jsx              ← Ensamblador principal de la web
│   ├── App.css              ← Estilos del contenedor general (fondo transparente para proyectar el fondo global)
│   ├── index.css            ← Variables globales, tokens de Glassmorphism, fondo colorido con patrones SVG, utilidades
│   ├── data/
│   │   └── travelData.js    ← Base de datos local (slides, paquetes, full days, métodos de pago, quiénes somos, FAQ)
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado en Modo Glass (frosted glass con blur y reflejos) con logo grande, botón de contacto y botón de 3 rayitas (Menú)
│       ├── NavDrawer.jsx / .css     ← Panel lateral desplegable con las 6 opciones de navegación
│       ├── NavModals.jsx / .css     ← Modales detallados para Información, Full Days, Quiénes Somos y Métodos de Pago
│       ├── HeroSlider.jsx / .css    ← Slider 16:9 con autoplay, swipe y botón "Más información" (id="promociones")
│       ├── Packages.jsx / .css      ← Cuadrícula de Paquetes en proporción 3:4 con tarjetas frosted glass y botón "Más información" (id="paquetes")
│       ├── ContactModal.jsx / .css  ← Modal interactivo para contacto inmediato por WhatsApp
│       └── Footer.jsx / .css        ← Pie de página en modo frosted glass con redes, información y soporte
└── contexto-inspiraviaje.md         ← Documento de contexto y reglas del proyecto
```

---

## Secciones y Elementos de la Web (en orden)
1. **Header (Modo Glass):** 
   - Diseño estilo **frosted glass** translúcido con `backdrop-filter: blur(20px)` y bordes reflectivos sutiles que se adaptan al hacer scroll.
   - Logotipo oficial de InspiraViaje a la izquierda (dimensiones optimizadas para alta legibilidad).
   - A la derecha: Botón de **Contacto** directo con borde y destello de cristal + **Botón de 3 rayitas (Menú)** en contenedor de vidrio esmerilado.
2. **Menú de 3 rayitas (Desplegable lateral):**
   - **1. Información:** Guía en 3 pasos para reservar y preguntas frecuentes (FAQ).
   - **2. Paquetes:** Desplazamiento fluido a la sección de paquetes turísticos (3:4).
   - **3. Full Days:** Tours de 1 día (Morrocoy Cayo Sombrero, Isla Larga, Colonia Tovar) con precios, inclusiones y reserva inmediata.
   - **4. Promociones:** Desplazamiento fluido al slider de promociones principales.
   - **5. Quiénes Somos:** Respaldo, trayectoria de más de 5 años, valores y asesoría personalizada.
   - **6. Métodos de Pago:** Zelle, Pago Móvil (tasa BCV), Efectivo USD, Binance Pay (USDT), Tarjetas Internacionales y Plan de Reserva en Cuotas (desde 30% inicial).
3. **Hero Slider (16:9):** Carrusel dinámico de proporción panorámica 16:9 con 3 destinos estelares que rotan hacia la derecha automáticamente y por interacción táctil. Cada slide incluye en la esquina inferior izquierda su botón **"Más información"**.
4. **Paquetes Turísticos (3:4):** Sección destacada con 3 tarjetas en formato vertical 3:4 con acabado frosted glass (ideal para visualización en teléfonos móviles) con fotos espectaculares, precio referencial, detalles y su botón **"Más información"** en la parte inferior izquierda.
5. **Footer:** Canales de atención (WhatsApp, teléfono, correo), redes sociales y derechos reservados sobre un contenedor esmerilado elegante.

---

## Reglas de diseño a respetar
- **Fondo:** Fondo vibrante y vacacional compuesto por resplandores en degradé amarillo y azul fijados al fondo, acompañado de un patrón SVG con temática turística (soles, olas, brújulas y estrellas).
- **Header:** Mantener el efecto **Modo Glass** (`backdrop-filter` con saturación y desenfoque, bordes translúcidos y sombras sutiles).
- **Proporciones obligatorias:**
  - Slider Hero: **16:9** estricto (`aspect-ratio: 16 / 9`).
  - Tarjetas de Paquetes: **3:4** estricto (`aspect-ratio: 3 / 4`).
- **Ubicación del botón de acción en las imágenes:** Siempre en la **parte inferior izquierda**.
- **Máxima optimización para teléfonos móviles:** botones táctiles generosos (mínimo 44px de altura), tipografías legibles y soporte para arrastrar/swipe.
- **No usar Tailwind CSS** (Vanilla CSS puro y modular).
