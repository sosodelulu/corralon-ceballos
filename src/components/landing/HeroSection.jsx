import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_BG = '/images/bloques-ceramicos-camion-flete-rio-ceballos-corralon-ceballos.webp'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-10">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Materiales de construcción Corralón Ceballos Río Ceballos"
          className="w-full h-full object-cover object-center sm:object-[right_center]"
          width="1920"
          height="1080"
          fetchpriority="high"
          loading="eager"
        />
        {/* Overlay único: oscuro a la izquierda (donde está el texto) hacia transparente a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 sm:via-black/20 to-transparent" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-secondary hidden lg:block" />
      <div className="absolute top-1/3 left-8 w-16 h-px bg-secondary hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Tarjeta unificada en mobile: un solo fondo para todo el bloque de texto.
              En desktop (sm+) se vuelve transparente y sin padding, ya que el overlay
              de la imagen alcanza para garantizar el contraste. */}
          <div className="rounded-2xl bg-black/55 backdrop-blur-[2px] p-5 sm:p-0 sm:bg-transparent sm:backdrop-blur-none">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Río Ceballos, Córdoba · Más de 55 años de experiencia
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tighter leading-[1.08] text-white sm:text-foreground sm:drop-shadow-md">
                <span className="text-secondary sm:text-primary block">Corralón Ceballos.</span>
                Todo para tu obra
                <br />
                <span className="text-secondary sm:text-primary">en un solo lugar.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg leading-relaxed max-w-lg text-white/90 sm:text-muted-foreground sm:drop-shadow-md"
            >
              Materiales de primera calidad, maquinaria para alquilar y la logística que tu obra en Sierras Chicas necesita.
              <br />
              Más de 55 años de respaldo, stock permanente y entregas seguras incluso en los terrenos más difíciles.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-3 text-sm text-white/75 sm:text-muted-foreground/80 max-w-lg sm:drop-shadow-md"
            >
              Entregas en Río Ceballos, Unquillo y Salsipuedes.
              <br />
              También llegamos a Agua de Oro y Mendiolaza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
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
              className="mt-14 flex gap-10 sm:gap-14"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-secondary sm:text-primary sm:drop-shadow-md">55+</p>
                <p className="text-xs text-white/70 sm:text-muted-foreground mt-0.5">Años de trayectoria en el rubro</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-secondary sm:text-primary sm:drop-shadow-md">Miles</p>
                <p className="text-xs text-white/70 sm:text-muted-foreground mt-0.5">de obras abastecidas en la región</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-secondary sm:text-primary sm:drop-shadow-md">3</p>
                <p className="text-xs text-white/70 sm:text-muted-foreground mt-0.5">Obradores disponibles</p>
              </div>
            </motion.div>
          </div>

          {/* Service chips (fuera de la tarjeta: ya tienen su propio fondo opaco, no necesitan contraste extra) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">🚛 Entrega en zona</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">🏗️ Retropala CAT disponible</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">📦 3 Obradores disponibles</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/15">💳 Efectivo, débito, crédito y transferencia</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#servicios" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-[10px] font-medium uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
