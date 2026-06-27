import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_BG = '/images/bloques-ceramicos-camion-flete-rio-ceballos-corralon-ceballos.webp'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex items-center overflow-hidden pt-24 pb-8">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Materiales de construcción Corralón Ceballos Río Ceballos"
          className="w-full h-full object-cover object-center"
          width="1920"
          height="1080"
          fetchpriority="high"
          loading="eager"
        />
        {/* Overlay único modificado: eliminado el degradado gris/negro en toda la sección */}
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Decorative lines - ELIMINADAS (Líneas decorativas en T horizontal quitadas) */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 w-full">
        <div className="max-w-2xl sm:max-w-5xl lg:max-w-6xl">
          {/* Tarjeta gris eliminada en mobile (removido bg-black/55 y backdrop-blur) */}
          <div className="p-0 sm:p-0 bg-transparent">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Río Ceballos, Córdoba · Más de 55 años de experiencia
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <h1 className="font-extrabold tracking-tighter text-foreground sm:text-foreground sm:drop-shadow-md">
                <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] text-primary sm:text-primary">Corralón Ceballos.</span>
                <span className="block mt-1 text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] leading-[1.15] max-w-2xl">
                  Todo para tu obra{' '}
                  <span className="text-primary sm:text-primary">en un solo lugar.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg leading-relaxed max-w-lg sm:max-w-2xl lg:max-w-3xl text-muted-foreground sm:text-muted-foreground sm:drop-shadow-md"
            >
              Materiales de primera calidad, maquinaria para alquilar y la logística que tu obra en Sierras Chicas necesita.
              Más de 55 años de respaldo, stock permanente y entregas seguras incluso en los terrenos más difíciles.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-2 text-sm text-muted-foreground/80 sm:text-muted-foreground/80 max-w-lg sm:max-w-2xl lg:max-w-3xl sm:drop-shadow-md"
            >
              Entregas en Río Ceballos, Unquillo y Salsipuedes. También llegamos a Agua de Oro y Mendiolaza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <Button
                onClick={() => {
                  const el = document.getElementById('catalogo')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full text-base shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Ver Catálogo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 rounded-full text-base font-semibold"
                style={{ background: '#25D366', color: '#ffffff', border: 'none' }}
              >
                <a href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar" target="_blank" rel="noopener noreferrer">Cotizá tu lista por WhatsApp</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex gap-10 sm:gap-14"
            >
              <div>
                <p className="text-xl sm:text-2xl font-extrabold tracking-tighter text-primary sm:text-primary sm:drop-shadow-md">55+</p>
                <p className="text-xs text-muted-foreground sm:text-muted-foreground mt-0.5">Años de trayectoria en el rubro</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold tracking-tighter text-primary sm:text-primary sm:drop-shadow-md">Miles</p>
                <p className="text-xs text-muted-foreground sm:text-muted-foreground mt-0.5">de obras abastecidas en la región</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold tracking-tighter text-primary sm:text-primary sm:drop-shadow-md">3</p>
                <p className="text-xs text-muted-foreground sm:text-muted-foreground mt-0.5">Obradores disponibles</p>
              </div>
            </motion.div>
          </div>

          {/* Service chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">🚛 Entrega en zona</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">🏗️ Retropala CAT disponible</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">📦 3 Obradores disponibles</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">💳 Efectivo, débito, crédito y transferencia</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - en su propio contenedor max-w-7xl, alineado con el resto de las secciones de la página */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center mt-2 mb-4"
      >
        <a href="#servicios" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-[10px] font-medium uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
