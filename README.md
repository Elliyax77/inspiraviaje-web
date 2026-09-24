# ✈️ InspiraViaje — Web Oficial & Catálogo Turístico

> **Tu pasaporte a momentos inolvidables.**  
> Aplicación web moderna, dinámica y *mobile-first* diseñada para la agencia de viajes y turismo **InspiraViaje**. Permite a los usuarios explorar paquetes vacacionales, escapadas Full Day, promociones de temporada, información de pagos y contactar asesores vía WhatsApp con un solo clic.

![InspiraViaje Banner](public/logo.png)

---

## 🌟 Características Principales

- 📱 **Enfoque Mobile-First:** Diseñada meticulosamente para teléfonos inteligentes (smartphones) y optimizada para visualización en computadoras y tablets.
- 🏖️ **Hero Slider Panorámico (16:9):** Carrusel dinámico con destinos estelares que rotan automáticamente hacia la derecha cada 5 segundos y con soporte táctil de gestos (*swipe*). Incluye botón interactivo **"Más información"** en la esquina inferior izquierda.
- 📦 **Catálogo de Paquetes Turísticos (3:4):** Tarjetas verticales en proporción 3:4 con fotografías de alta resolución, duración, precios de referencia, lista de inclusiones y botón directo de consulta.
- ☰ **Menú Lateral Desplegable (3 Rayitas):**
  - **1. Información:** Guía paso a paso para cotizar/reservar y preguntas frecuentes resueltas.
  - **2. Paquetes:** Navegación suave directa a la sección de paquetes turísticos.
  - **3. Full Days:** Tours de 1 día (Cayo Sombrero en Morrocoy, Isla Larga y Colonia Tovar) con itinerario, detalles de transporte, alimentación y botón de reserva.
  - **4. Promociones:** Enlace directo a ofertas activas y temporadas especiales.
  - **5. Quiénes Somos:** Historia de la agencia, pilares de confianza, estadísticas (+5 años, +3.200 viajeros satisfechos).
  - **6. Métodos de Pago:** Información transparente sobre Pago Móvil (a tasa oficial BCV), Zelle ($ USD), Efectivo en Divisas, Binance Pay (USDT), Tarjetas Internacionales y Plan de Financiamiento en Cuotas (congelación de tarifa con el 30%).
  - **7. Contacto:** Canales de atención directa e inmediata (WhatsApp, llamadas, correo electrónico e Instagram).
- 💬 **Integración WhatsApp Omnipresente:** Cada paquete y tour genera un mensaje contextual pre-redactado para atención directa con un asesor turístico.
- 🎨 **Paleta de Identidad de Marca:**
  - Blanco Principal (`#FFFFFF`)
  - Amarillo Sol (`#FFB800`)
  - Azul Cielo (`#009EE3`)
  - Fondos Suaves Neutros (`#F8FAFC`, `#0F172A`)
- ⚡ **Tecnología Ligera:** Creada con Vanilla CSS modular para máximo rendimiento, cero dependencias pesadas de estilos y animaciones fluidas con Framer Motion.

---

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
| :--- | :--- |
| **React 19** | Biblioteca principal de interfaz de usuario |
| **Vite 8** | Entorno de desarrollo rápido y empaquetador para producción |
| **Framer Motion** | Animaciones de sliders, paneles y transiciones modales |
| **Lucide React** | Conjunto moderno y coherente de íconos vectoriales |
| **Vanilla CSS** | Estilos modulares puros por componente (sin Tailwind CSS) |
| **Google Fonts** | Tipografía Montserrat (títulos) + Plus Jakarta Sans (lectura) |

---

## 📂 Estructura del Repositorio

```text
inspiraviaje-web/
├── public/
│   ├── logo.png             # Logo oficial InspiraViaje optimizado
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx / .css        # Encabezado con logo y botón 3 rayitas
│   │   ├── NavDrawer.jsx / .css     # Panel lateral de navegación (6 opciones)
│   │   ├── NavModals.jsx / .css     # Modales (Info, Full Days, Quiénes Somos, Pagos)
│   │   ├── HeroSlider.jsx / .css    # Slider 16:9 con autoplay y swipe táctil
│   │   ├── Packages.jsx / .css      # Tarjetas turísticas en proporción 3:4
│   │   ├── ContactModal.jsx / .css  # Modal rápido para canales de atención
│   │   └── Footer.jsx / .css        # Pie de página con información y derechos
│   ├── data/
│   │   └── travelData.js            # Datos de paquetes, tours, FAQ y métodos de pago
│   ├── App.jsx / .css               # Componente raíz
│   ├── index.css                    # Variables CSS globales y utilidades
│   └── main.jsx                     # Punto de entrada
├── contexto-inspiraviaje.md         # Documento maestro de reglas y arquitectura
└── package.json
```

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Elliyax77/inspiraviaje-web.git
cd inspiraviaje-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que indique la terminal (generalmente `http://localhost:5173/` o `http://localhost:5174/`).

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

---

## 🌐 Opciones de Despliegue

Este proyecto puede desplegarse en segundos en cualquier proveedor estático moderno:

- **Vercel:** Importa el repositorio desde GitHub, framework preset: `Vite`, comando de build: `npm run build`, output: `dist`.
- **Netlify:** Conecta el repositorio de GitHub con comando de publicación `dist/`.
- **GitHub Pages:** Con soporte para GitHub Actions mediante workflow de Vite.

---

## 📄 Licencia

Este proyecto fue desarrollado para la agencia turística **InspiraViaje**. Todos los derechos reservados.
