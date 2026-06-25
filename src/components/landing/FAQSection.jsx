import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Tienen stock permanente de cemento y materiales básicos?',
    answer:
      'Sí, mantenemos stock permanente de cemento Holcim, cal, hierros y áridos para que tu obra no se detenga.',
  },
  {
    question: '¿Hacen envíos a Río Ceballos, Unquillo y Salsipuedes?',
    answer:
      'Sí, hacemos entregas regulares en Río Ceballos, Unquillo y Salsipuedes — son nuestra zona principal de reparto.',
  },
  {
    question: '¿Hacen envíos a Mendiolaza y Agua de Oro?',
    answer:
      'Sí, llegamos también a Mendiolaza y Agua de Oro, especialmente para pedidos de mayor volumen. Para pedidos chicos o zonas de difícil acceso, escribinos por WhatsApp con tu dirección y te confirmamos la mejor opción según tu caso.',
  },
  {
    question: '¿Cuánto cuesta el flete?',
    answer:
      'El costo del flete depende de la zona, el volumen del pedido y la accesibilidad del terreno. Escribinos por WhatsApp con tu dirección y lista de materiales y te confirmamos el costo al toque.',
  },
  {
    question: '¿Cómo organizan las entregas cuando hay varios pedidos el mismo día?',
    answer:
      'Conocemos el ritmo de cada obra y sabemos que los tiempos de la construcción son dinámicos. Organizamos las entregas de forma estratégica para optimizar el reparto. Si tu obra está en un momento crítico —como un colado de losa— avisanos con tiempo por WhatsApp para que podamos coordinar y darle prioridad en la hoja de ruta del día. Siempre que puedas avisarnos con anticipación, nos ayuda a coordinar mejor para que el material llegue cuando realmente lo necesitás.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y tarjetas de crédito (Visa y Mastercard).',
  },
  {
    question: '¿Hacen factura?',
    answer:
      'Sí, emitimos factura A y B según lo que necesite tu obra. Solo pedila al hacer tu pedido por WhatsApp y te la preparamos sin problema.',
  },
  {
    question: '¿Puedo retirar el material por el local?',
    answer:
      'Sí, contamos con amplio estacionamiento propio para que retires tu pedido con cualquier tipo de vehículo, incluso camiones de carga.',
  },
  {
    question: '¿Alquilan obradores para guardar herramientas y materiales en la obra?',
    answer:
      'Sí, contamos con 3 obradores (contenedores metálicos con cerradura) para alquilar y resguardar herramientas y materiales durante tu construcción. Somos uno de los pocos servicios de este tipo disponibles en Río Ceballos y la zona de Sierras Chicas — consultanos disponibilidad por WhatsApp.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity
