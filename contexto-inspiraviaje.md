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
│   ├── App.jsx              ← Ensamblador principal de la web
│   ├── App.css              ← Estilos del contenedor general (fondo transparente)
│   ├── index.css            ← Variables globales, tokens de Header amarillo-blanco, utilidades
│   ├── data/
│   │   └── travelData.js    ← Base de datos local (slides, paquetes, full days, métodos de pago, quiénes somos, FAQ)
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado sólido en degradado amarillo a blanco con logo, botón de contacto (oculto en móviles) y botón de Menú circular a juego
│       ├── NavDrawer.jsx / .css     ← Panel lateral desplegable con las 7 opciones de navegación (incluye Contacto)
│       ├── NavModals.jsx / .css     ← Modales detallados para Información, Full Days, Quiénes Somos y Métodos de Pago
│       ├── HeroSlider.jsx / .css    ← Slider 16:9 con autoplay, swipe y botón "Más información" (id="promociones")
│       ├── Packages.jsx / .css      ← Cuadrícula de Paquetes en proporción 3:4 y banner 'Cotiza tu viaje aquí' con botón directo a contacto
│       ├── ContactModal.jsx / .css  ← Modal interactivo para contacto inmediato por WhatsApp
│       └── Footer.jsx / .css        ← Pie de página en modo frosted glass con redes, información y soporte
└── contexto-inspiraviaje.md         ← Documento de contexto y reglas del proyecto
```

---

## Secciones y Elementos de la Web (en orden)
1. **Header (Amarillo desvanecido a Blanco):** 
   - Diseño sólido en degradado cálido de amarillo suave a blanco puro (`#FEE685` / `#FEF08A` a `#FFFFFF`), sin transparencias ni desenfoque para evitar tintes verdosos.
   - Logotipo oficial de InspiraViaje a la izquierda sobre fondo amarillo cálido.
   - A la derecha: Botón de **Contacto** azul directo (visible en pantallas de escritorio y tablets; se oculta en teléfonos móviles para brindar mayor limpieza visual) + **Botón de Menú** circular estilizado en blanco y amarillo sutil.
2. **Menú de opciones (Desplegable lateral):**
   - **1. Información:** Guía en 3 pasos para reservar y preguntas frecuentes (FAQ).
   - **2. Paquetes:** Desplazamiento fluido a la sección de paquetes turísticos (3:4).
   - **3. Full Days:** Tours de 1 día (Morrocoy Cayo Sombrero, Isla Larga, Colonia Tovar) con precios, inclusiones y reserva inmediata.
   - **4. Promociones:** Desplazamiento fluido al slider de promociones principales.
   - **5. Quiénes Somos:** Respaldo, trayectoria de más de 5 años, valores y asesoría personalizada.
   - **6. Métodos de Pago:** Zelle, Pago Móvil (tasa BCV), Efectivo USD, Binance Pay (USDT), Tarjetas Internacionales y Plan de Reserva en Cuotas (desde 30% inicial).
   - **7. Contacto:** Opción destacada con acceso directo a canales de atención personalizada (WhatsApp, llamadas, correo e Instagram).
3. **Hero Slider (16:9):** Carrusel dinámico de proporción panorámica 16:9 con 3 destinos estelares que rotan hacia la derecha automáticamente y por interacción táctil. Cada slide incluye en la esquina inferior izquierda su botón **"Más información"**.
4. **Paquetes Turísticos (3:4) y Banner de Cotización:** Sección destacada con 3 tarjetas en formato vertical 3:4 con acabado frosted glass (ideal para visualización en teléfonos móviles) con fotos espectaculares, precio referencial, detalles y su botón **"Más información"** en la parte inferior izquierda. Al final de la sección incluye el banner interactivo **'Cotiza tu viaje aquí'** con información de asesoría a la medida, facilidades de pago en cuotas y botón directo de contacto.
5. **Footer:** Canales de atención (WhatsApp, teléfono, correo), redes sociales y derechos reservados sobre un contenedor esmerilado elegante.

---

## Reglas de diseño a respetar
- **Fondo:** Azul clarito claramente visible (`#BAE6FD` a `#7DD3FC`) con desvanecido al medio, creando un marco vacacional refrescante.
- **Header:** Mantener el degradado sólido amarillo desvanecido a blanco, sin transparencias ni efecto glass sobre el fondo azul.
- **Proporciones obligatorias:**
  - Slider Hero: **16:9** estricto (`aspect-ratio: 16 / 9`).
  - Tarjetas de Paquetes: **3:4** estricto (`aspect-ratio: 3 / 4`).
- **Ubicación del botón de acción en las imágenes:** Siempre en la **parte inferior izquierda**.
- **Máxima optimización para teléfonos móviles:** botones táctiles generosos (mínimo 44px de altura), tipografías legibles y soporte para arrastrar/swipe.
- **No usar Tailwind CSS** (Vanilla CSS puro y modular).
