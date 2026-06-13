import { motion } from 'framer-motion'

const reviews = [
  { initials: 'MC', name: 'Mariana Cattuti', color: '#166534', text: '"Respondieron rápido cuando pedí presupuesto y aceptan tarjetas de crédito. También alquilan obradores con buen precio en la zona."' },
  { initials: 'JA', name: 'Juan Alberto Alfonso', color: '#0369a1', text: '"Buenos servicios de máquinas en movimiento de suelo y mejor atención en la compra de materiales y el envío en tiempo y forma."' },
  { initials: 'WM', name: 'Walter Morales', color: '#7c3aed', text: '"Buena atención, precios acorde y son los únicos que pueden subir a casa a dejarme los materiales."' },
  { initials: 'RP', name: 'Román Pedraza', color: '#b45309', text: '"Excelente la atención del dueño, calidad, precios y stock muy buenos y además la flexibilización para la entrega de materiales."' },
  { initials: 'FG', name: 'Flavio Gimenez Electricista', color: '#0f766e', text: '"Gran surtido de materiales para la construcción a muy buen precio. Buen asesoramiento. Recomendado."' },
]

function ReviewCard({ initials, name, color, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ background: 'white', border: '1px solid #d1fae5', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.9rem', flexShrink: 0 }}>{initials}</div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <p style={{ fontWeight: '700', color: '#1a202c', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{name}</p>
          <p style={{ color: '#f59e0b', margin: 0 }}>★★★★★</p>
        </div>
      </div>
      <p style={{ color: '#4a5568', margin: 0 }}>{text}</p>
    </motion.div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="resenas" className="py-20 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Reseñas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Lo que dicen <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Más de 55 años sirviendo a Río Ceballos y la región.</p>
          <div className="mt-5 inline-flex items-center gap-3 bg-white border border-yellow-200 rounded-full px-5 py-3 shadow-sm">
            <span style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1', color: '#1a202c' }}>4.3</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <div>
                <span style={{ color: '#f59e0b', fontSize: '1.5rem' }}>★★★★</span>
                <span style={{ background: 'linear-gradient(to right, #f59e0b 30%, #d1d5db 30%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '1.5rem' }}>★</span>
              </div>
              <span style={{ fontSize: '1rem', fontWeight: '600', color: '#374151' }}>86 reseñas en Google</span>
            </div>
          </div>
        </div>

        {/* Grilla de 3 columnas en desktop que centra las tarjetas sobrantes */}
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <div key={r.initials} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
              <ReviewCard {...r} delay={i * 0.1} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/6a7Bqmhsm25udtuZ6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}
