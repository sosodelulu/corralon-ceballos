import { motion } from 'framer-motion'
import { Package, Wrench, Container, Truck, MapPin } from 'lucide-react'

function CardMateriales() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src="/images/corralon-ceballos-materiales-venta-rio-ceballos.webp"
          alt="Venta de materiales de construcción Río Ceballos Córdoba"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width="600"
          height="208"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Package className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide shadow">
          <MapPin className="w-2.5 h-2.5" />Envío local
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Venta de Materiales</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Productos de las marcas líderes del mercado, con stock permanente y reparto en la zona.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Productos Holcim: Cemento Fuerte, Maestro y Tector</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Cales FGH y Andina · Estuco Abacor</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Bloques cerámicos y hormigón</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Premoldeados, hierros, áridos y más</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Reparto en Río Ceballos, Unquillo y Salsipuedes.<br />¿Tu obra está en Agua de Oro o Mendiolaza? Consultanos, también te ayudamos con envíos de gran volumen.</li>
        </ul>
        <div className="mt-auto pt-6 w-full">
          <a
            href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20una%20lista%20de%20materiales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            Cotizá tu lista completa por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardMaquinaria() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src="/images/Retroexcavadora-CAT-416E-rio-ceballos-corralon-ceballos-alquiler.webp"
          alt="Retroexcavadora CAT 416E alquiler Río Ceballos Córdoba"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width="600"
          height="208"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Wrench className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide shadow">
          <MapPin className="w-2.5 h-2.5" />Solo Río Ceballos
        </div>
        <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold shadow">
          Disponible ahora
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Alquiler de Maquinaria</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Retroexcavadora CAT 416E para movimientos de tierra y excavaciones. Servicio exclusivo en Río Ceballos.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Ideal para excavaciones, zanjeos y nivelación de terrenos, especializada en movimientos de tierra.</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Operario incluido</li>
        </ul>
        <div className="mt-auto pt-6 w-full">
          <a
            href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20consultar%20el%20alquiler%20de%20la%20Retroexcavadora%20CAT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            Reservá el turno para tu obra por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardObradores() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src="/images/obrador-alquiler-corralon-ceballos-rio-ceballos-container-obra.webp"
          alt="Alquiler de obradores contenedor obra Río Ceballos Córdoba"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded"
          width="600"
          height="208"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Container className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold shadow">
          Disponible ahora
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Alquiler de Obradores</h2>
        <p className="mt-1 text-xs font-semibold text-primary">Protegé tus herramientas y materiales en obra.</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Contamos con 3 obradores para resguardo seguro de herramientas y materiales durante tu construcción.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Contenedor metálico con cerradura</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Entrega y retiro con nuestro servicio de grúa</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Disponibilidad según fechas de obra</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Consultá por precio y condiciones</li>
        </ul>
        <div className="mt-auto pt-6 w-full">
          <a
            href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20de%20obradores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            Reservar obrador por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardGrua() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src="/images/grua-bolson-alquiler-corralon-ceballos-rio-ceballos.webp"
          alt="Camión grúa hidráulica y bolsón áridos Río Ceballos Córdoba"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width="600"
          height="208"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Truck className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold shadow">
          Disponible ahora
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Servicio de Grúa y Bolsón</h2>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed italic">
          ¿Sabías que? Nuestra grúa hidráulica formó parte del montaje de la Dama Blanca, la pieza de ajedrez más alta del mundo, inaugurada en Río Ceballos en 2025.<br />La misma precisión y cuidado que pusimos ahí, los ponemos en tu obra.
        </p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Áridos en bolsones y grúa hidráulica para descarga y movimientos especiales en obra. Río Ceballos y alrededores.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Bolsón de áridos</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Grúa para descarga de materiales en obra</li>
          <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span>Movimientos especiales en espacios reducidos</li>
        </ul>
        <div className="mt-auto pt-6 w-full">
          <a
            href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20consultar%20el%20servicio%20de%20gr%C3%BAa%20y%20bols%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            Consultá disponibilidad y reservá tu turno por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceCards() {
  return (
    <section id="servicios" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nuestros Servicios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Soluciones integrales para que <span className="text-primary">tu obra no se detenga</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Desde el cimiento hasta el techo.<br />
            Hace más de 55 años abastecemos a Río Ceballos, Salsipuedes, Agua de Oro, Unquillo y Mendiolaza con entregas programadas, equipos listos para el suelo serrano y obradores seguros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <CardMateriales />
          <CardMaquinaria />
          <CardObradores />
          <CardGrua />
        </div>
      </div>
    </section>
  )
}
