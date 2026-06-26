import { motion } from 'framer-motion'
import { Package, Wrench, Container, Truck, MapPin, CheckCircle } from 'lucide-react'

// Componente helper para las etiquetas superiores
const ServiceBadge = ({ children, variant = "default" }: { children: React.ReactNode, variant?: "default" | "green" }) => (
  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide shadow ${variant === "green" ? "bg-green-500 text-white" : "bg-primary text-primary-foreground"}`}>
    {children}
  </div>
)

function CardMateriales() {
  return (
    <motion.div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img src="/images/corralon-ceballos-materiales-venta-rio-ceballos.webp" alt="Venta de materiales de construcción Río Ceballos" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Package className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <ServiceBadge><MapPin className="w-2.5 h-2.5" />Envío local</ServiceBadge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">Venta de Materiales</h3>
        <p className="mt-2 text-sm text-muted-foreground">Productos de marcas líderes con stock permanente.</p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5">• Holcim: Cemento Fuerte, Maestro y Tector</li>
          <li className="flex items-start gap-1.5">• Cales FGH y Andina · Estuco Abacor</li>
          <li className="flex items-start gap-1.5">• Bloques cerámicos, hormigón y áridos</li>
          <li className="flex items-start gap-1.5">• Reparto en Río Ceballos, Unquillo y Salsipuedes. Consultanos por Agua de Oro o Mendiolaza.</li>
        </ul>
        <div className="mt-6">
          <a href="https://wa.me/5493543530984?text=Hola,%20quisiera%20cotizar%20materiales" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-3 rounded-xl transition-all">
            Cotizá tu lista por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardMaquinaria() {
  return (
    <motion.div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img src="/images/Retroexcavadora-CAT-416E-rio-ceballos-corralon-ceballos-alquiler.webp" alt="Retroexcavadora CAT 416E" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Wrench className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          <ServiceBadge>Río Ceballos</ServiceBadge>
          <ServiceBadge variant="green">Disponible</ServiceBadge>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">Alquiler de Maquinaria</h3>
        <p className="mt-2 text-sm text-muted-foreground">Retroexcavadora CAT 416E para movimientos de tierra y excavaciones.</p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5">• Ideal para excavaciones, zanjeos y nivelación.</li>
          <li className="flex items-start gap-1.5">• Operario incluido.</li>
        </ul>
        <div className="mt-6">
          <a href="https://wa.me/5493543530984?text=Hola,%20quisiera%20consultar%20alquiler%20maquinaria" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-3 rounded-xl transition-all">
            Reservar turno por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardObradores() {
  return (
    <motion.div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img src="/images/obrador-alquiler-corralon-ceballos-rio-ceballos-container-obra.webp" alt="Alquiler de obradores" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Container className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4"><ServiceBadge variant="green">Disponible</ServiceBadge></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">Alquiler de Obradores</h3>
        <p className="mt-2 text-sm text-muted-foreground">Contenedores metálicos seguros para proteger tus herramientas y materiales en obra.</p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5">• Entrega y retiro con grúa propia.</li>
          <li className="flex items-start gap-1.5">• Cerradura de alta seguridad.</li>
        </ul>
        <div className="mt-6">
          <a href="https://wa.me/5493543530984?text=Hola,%20quisiera%20consultar%20obradores" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-3 rounded-xl transition-all">
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function CardGrua() {
  return (
    <motion.div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img src="/images/grua-bolson-alquiler-corralon-ceballos-rio-ceballos.webp" alt="Servicio de Grúa" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
          <Truck className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-4 right-4"><ServiceBadge variant="green">Disponible</ServiceBadge></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">Servicio de Grúa y Bolsón</h3>
        <p className="mt-2 text-sm text-muted-foreground italic">
          <span className="font-semibold">¿Sabías que?</span> Nuestra grúa hidráulica participó en el montaje de la Dama Blanca en Río Ceballos. Esa misma precisión cuidará tu obra.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground flex-1">
          <li className="flex items-start gap-1.5">• Bolsón de áridos a domicilio.</li>
          <li className="flex items-start gap-1.5">• Descarga de materiales y movimientos especiales.</li>
        </ul>
        <div className="mt-6">
          <a href="https://wa.me/5493543530984?text=Hola,%20consultar%20grúa" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-3 rounded-xl transition-all">
            Reservar servicio por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceCards() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nuestros Servicios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Soluciones integrales para que <span className="text-primary">tu obra no se detenga</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hace más de 55 años abastecemos a Río Ceballos, Salsipuedes, Agua de Oro, Unquillo y Mendiolaza con entregas programadas, equipos listos para el suelo serrano y obradores seguros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardMateriales /><CardMaquinaria /><CardObradores /><CardGrua />
        </div>
      </div>
    </section>
  )
}
