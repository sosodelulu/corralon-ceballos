import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Tienen stock permanente de cemento y materiales básicos?',
    answer:
      'Sí, mantenemos stock permanente de cemento Holcim, cal, hierros y áridos para que tu obra no se detenga.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y tarjetas de crédito (Visa y Mastercard).',
  },
  {
    question: '¿Hacen envíos a Río Ceballos, Unquillo y Salsipuedes?',
    answer:
      'Sí, hacemos entregas regulares en Río Ceballos, Unquillo y Salsipuedes — son nuestra zona principal de reparto. Si preferís retirar vos mismo, contamos con amplio estacionamiento propio para cualquier tipo de vehículo, incluso camiones de carga.',
  },
  {
    question: '¿Hacen envíos a Mendiolaza y Agua de Oro?',
    answer:
      'Sí, llegamos a Mendiolaza y Agua de Oro, especialmente para pedidos de mayor volumen. Para pedidos chicos o zonas de difícil acceso, escribinos por WhatsApp con tu dirección y te confirmamos la mejor opción según tu caso.',
  },
  {
    question: '¿Hacen factura?',
    answer:
      'Sí, emitimos factura A y B según lo que necesite tu obra. Solo pedila al hacer tu pedido por WhatsApp y te la preparamos sin problema.',
  },
  {
    question: '¿Cuánto cuesta el flete?',
    answer:
      'El costo del flete depende de la zona, el volumen del pedido y la accesibilidad del terreno. Escribinos por WhatsApp con tu dirección y lista de materiales y te confirmamos el costo al toque.',
  },
  {
    question: '¿Cómo organizan las entregas?',
    answer:
      'Conocemos el ritmo de cada obra y sabemos que los tiempos de la construcción son dinámicos. Organizamos las entregas de forma estratégica para optimizar el reparto. Si tu obra está en un momento crítico —como un colado de losa— avisanos con tiempo por WhatsApp para que podamos coordinar y darle prioridad en la hoja de ruta del día.',
  },
  {
    question: '¿Alquilan obradores para guardar herramientas y materiales en la obra?',
    answer:
      'Sí, contamos con 3 obradores (contenedores metálicos con cerradura) para alquilar y resguardar herramientas y materiales durante tu construcción. Somos uno de los pocos servicios de este tipo disponibles en Río Ceballos y la zona de Sierras Chicas — consultanos disponibilidad por WhatsApp.',
    wide: true,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tighter text-foreground whitespace-nowrap">
            Todo lo que necesitás saber antes de <span className="text-primary">pedir tu material</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Si tu duda no está acá, escribinos por WhatsApp y te respondemos en el día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-sm ${
                faq.wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex gap-3 items-start">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  )
}
