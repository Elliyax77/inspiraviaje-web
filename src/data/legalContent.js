/**
 * legalContent.js — Marco Jurídico y Normativo Oficial de InspiraViaje
 * Redacción profesional conforme al RGPD (Reglamento UE 2016/679), Directiva ePrivacy (2002/58/CE),
 * Ley de Comercio Electrónico y normativa de protección de datos y defensa del consumidor.
 */

import { agencyInfo } from './travelData';

export const legalDocuments = {
  avisoLegal: {
    id: 'aviso-legal',
    title: 'Aviso Legal e Información General',
    lastUpdated: 'Septiembre 2026',
    sections: [
      {
        heading: '1. Datos Identificativos del Titular',
        content: `En cumplimiento del deber de información y transparencia legal digital, se informa que este sitio web (en adelante, "el Sitio Web") es titularidad y está operado bajo la denominación comercial InspiraViaje (en adelante, "INSPIRAVIAJE"), con domicilio operativo en ${agencyInfo.location}, correo electrónico oficial de contacto ${agencyInfo.email} y línea directa de atención ${agencyInfo.whatsappFormatted}.`
      },
      {
        heading: '2. Objeto y Ámbito de Aplicación',
        content: `El presente Aviso Legal regula el acceso, navegación y uso del Sitio Web de INSPIRAVIAJE. La utilización del Sitio Web atribuye la condición de Usuario e implica la adhesión plena y sin reservas a todas y cada una de las disposiciones incluidas en este documento, así como en nuestra Política de Privacidad, Política de Cookies y Términos de Contratación.`
      },
      {
        heading: '3. Régimen de Intermediación Turística',
        content: `INSPIRAVIAJE actúa en calidad de agencia de viajes intermediaria y organizadora de experiencias turísticas, facilitando la contratación de transporte aéreo nacional e internacional, posadas y alojamientos todo incluido, excursiones, traslados marítimos y terrestres, seguros de asistencia médica y paquetes vacacionales en alianza con prestatarios finales debidamente autorizados.`
      },
      {
        heading: '4. Propiedad Intelectual e Industrial',
        content: `Todos los contenidos del Sitio Web, incluyendo a título enunciativo logotipos, isotipo de ala y sol, combinaciones cromáticas (Azul Cielo, Amarillo Sol y Blanco Puro), diseños gráficos, código fuente, compilaciones, textos descriptivos e imágenes, son propiedad exclusiva de INSPIRAVIAJE o de terceros que han autorizado legítimamente su explotación, quedando estrictamente prohibida su reproducción, distribución o comunicación pública sin autorización expresa y previa por escrito.`
      },
      {
        heading: '5. Limitación de Responsabilidad',
        content: `INSPIRAVIAJE aplica sus mejores esfuerzos tecnológicos para asegurar la disponibilidad ininterrumpida del servicio digital. No obstante, no se responsabiliza de posibles caídas temporales de red, retrasos o reprogramaciones imputables a aerolíneas o prestadores finales, ni de contingencias meteorológicas, actos de autoridad gubernamental o supuestos de fuerza mayor que escapen a su control razonable.`
      }
    ]
  },

  privacidad: {
    id: 'politica-privacidad',
    title: 'Política de Privacidad y Protección de Datos',
    lastUpdated: 'Septiembre 2026',
    sections: [
      {
        heading: '1. Responsable del Tratamiento',
        content: `El responsable del tratamiento de los datos personales recabados a través de los formularios, canales de mensajería (WhatsApp) y solicitudes de cotización es InspiraViaje, con correo para el ejercicio de derechos: ${agencyInfo.email}.`
      },
      {
        heading: '2. Datos Recabados y Finalidad del Tratamiento',
        content: `Tratamos los datos que nos facilitas voluntariamente (nombre y apellido, documento de identidad/pasaporte, fecha de nacimiento, número telefónico, correo electrónico, destino de interés y datos de acompañantes) con las siguientes finalidades exclusivas:
• Elaborar y remitir presupuestos e itinerarios turísticos a medida.
• Formalizar y gestionar reservas de vuelos, posadas, hoteles y traslados.
• Gestionar planes de pago fraccionado (reserva en cuotas desde 30%).
• Emisión de vouchers, pólizas de asistencia médica y billetes de viaje.
• Brindar atención al cliente antes, durante y después del viaje.`
      },
      {
        heading: '3. Base Jurídica del Tratamiento',
        content: `La base legal para el tratamiento de tus datos es la ejecución de medidas precontractuales o de un contrato de servicios turísticos (Art. 6.1.b RGPD) y el consentimiento explícito manifestado al marcar la casilla de verificación en nuestros formularios y canales de cotización (Art. 6.1.a RGPD).`
      },
      {
        heading: '4. Conservación y Destinatarios de los Datos',
        content: `Tus datos se conservarán durante el tiempo necesario para cumplir las finalidades turísticas contratadas y los plazos de prescripción legal fiscal. Para la correcta ejecución de tu reserva, tus datos esenciales podrán ser comunicados a aerolíneas, proveedores de hospedaje, empresas navieras y aseguradoras internacionales exclusivamente para la emisión de tus boletos y reservas.`
      },
      {
        heading: '5. Derechos del Usuario (ARCO-POL)',
        content: `Tienes derecho a acceder, rectificar, suprimir sus datos, limitar su tratamiento, oponerte al mismo o solicitar su portabilidad. Puedes ejercer cualquiera de estos derechos enviando una solicitud a ${agencyInfo.email} con el asunto "Protección de Datos - InspiraViaje", adjuntando copia de tu documento de identidad.`
      }
    ]
  },

  cookies: {
    id: 'politica-cookies',
    title: 'Política de Cookies y Tecnologías de Rastreo',
    lastUpdated: 'Septiembre 2026',
    sections: [
      {
        heading: '1. ¿Qué son las Cookies?',
        content: `Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que el sitio web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página, almacenar tus preferencias y recopilar estadísticas anónimas de uso.`
      },
      {
        heading: '2. Clasificación de Cookies que Utilizamos',
        content: `En InspiraViaje clasificamos las cookies de la siguiente manera:
• Cookies Técnicas / Necesarias: Imprescindibles para la navegación, funcionamiento de modales, carrusel y almacenamiento de tu consentimiento. No requieren consentimiento y no pueden desactivarse.
• Cookies Analíticas / Estadísticas: Nos ayudan a entender cómo interactúan los usuarios con nuestra web para mejorar la experiencia (por ejemplo, páginas más vistas y duración de sesión) mediante métricas agregadas y anonimizadas.
• Cookies de Publicidad y Redes Sociales: Utilizadas para conectar con nuestras redes sociales (Instagram/WhatsApp) y mostrar recomendaciones personalizadas acordes a tus preferencias de viaje.`
      },
      {
        heading: '3. Bloqueo Previo y Consentimiento Simétrico',
        content: `En estricto cumplimiento de la normativa europea y las directrices de protección de datos, ninguna cookie de analítica o publicidad se instala en tu dispositivo hasta que pulses expresamente "Aceptar todas" o las actives en "Configurar preferencias". Dispones siempre de la opción "Rechazar opcionales" con el mismo nivel de accesibilidad.`
      },
      {
        heading: '4. Cómo Gestionar o Revocar tus Preferencias',
        content: `Puedes modificar o revocar tu consentimiento en cualquier momento haciendo clic en el enlace "⚙️ Configurar Cookies" situado permanentemente en el pie de página de nuestro sitio web, o ajustando la configuración de privacidad en las opciones de tu navegador.`
      }
    ]
  },

  terminos: {
    id: 'terminos-condiciones',
    title: 'Términos de Contratación, Cuotas y Cancelación',
    lastUpdated: 'Septiembre 2026',
    sections: [
      {
        heading: '1. Cotizaciones y Validez de Tarifas',
        content: `Las cotizaciones emitidas a través de WhatsApp, correo electrónico o nuestro sitio web tienen carácter referencial y una validez temporal delimitada debido a la alta fluctuación de asientos aéreos e inventario hotelero. Ninguna tarifa se considera congelada hasta la confirmación del pago del anticipo estipulado.`
      },
      {
        heading: '2. Plan de Reserva en Cuotas (Desde 30%)',
        content: `Para facilitar la planificación vacacional de nuestros clientes, INSPIRAVIAJE ofrece planes de pago en cuotas:
• Se requiere un anticipo inicial mínimo del 30% del valor total del paquete para formalizar la reserva y congelar cupos terrestres.
• El saldo restante se dividirá en cuotas acordadas en el cronograma de pago, debiendo estar cancelado al 100% al menos 15 a 30 días continuos antes de la fecha de salida (según el destino).
• Los boletos aéreos de emisión inmediata requieren el pago del 100% de la tarifa aérea en el momento de la emisión, de conformidad con las regulaciones de cada aerolínea.`
      },
      {
        heading: '3. Métodos de Pago Habilitados',
        content: `Aceptamos múltiples modalidades transparentes y seguras:
• Transferencias y Pago Móvil en Bolívares a la tasa oficial del Banco Central de Venezuela (BCV) del día del pago.
• Zelle / transferencias bancarias internacionales en Divisas.
• Binance Pay (USDT) y plataformas cripto autorizadas.
• Efectivo en divisas USD/EUR en nuestras oficinas o puntos autorizados.`
      },
      {
        heading: '4. Políticas de Cancelación, Reprogramación y Reembolsos',
        content: `• Boletos Aéreos: Se rigen estrictamente por las políticas de no-show, cambio de fecha y penalidad impuestas por la aerolínea emisora.
• Paquetes Terrestres y Posadas: Cancelaciones con más de 30 días de antelación conllevan gastos administrativos del 15%. Cancelaciones entre 29 y 15 días conllevan una penalidad del 30%. Cancelaciones con menos de 14 días conllevan hasta el 100% de penalidad según las cláusulas de los hoteles/posadas contratadas.
• Causas de Fuerza Mayor: En caso de restricciones sanitarias, cierres aeroportuarios o fenómenos meteorológicos extraordinarios, INSPIRAVIAJE gestionará reprogramaciones o vouchers de crédito ante los operadores turísticos sin cobro de honorarios adicionales.`
      },
      {
        heading: '5. Documentación y Requisitos Migratorios del Pasajero',
        content: `Es responsabilidad exclusiva del pasajero portar la documentación requerida en vigor (Cédula de Identidad, Pasaporte con vigencia mínima de 6 meses, visados vigentes, permisos de menores de edad y vacunas exigidas por el país de destino). INSPIRAVIAJE ofrece asesoría informativa pero no se responsabiliza por denegaciones de embarque imputables a fallas en la documentación del viajero.`
      }
    ]
  }
};
