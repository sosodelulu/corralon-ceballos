import { useEffect, useRef } from 'react'

export default function ReviewsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
            const script = document.createElement('script')
            script.src = 'https://elfsightcdn.com/platform.js'
            script.async = true
            document.body.appendChild(script)
          }
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resenas" ref={sectionRef} className="pt-8 pb-8 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Reseñas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Lo que dicen <span className="text-primary">nuestros clientes</span>.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">La confianza de los vecinos, respaldada en cada entrega.</p>
        </div>

        <div className="reviews-container" style={{ minHeight: '300px' }}>
          <div className="elfsight-app-41039118-db08-4178-93d3-00dd1bfa5a7d" data-elfsight-app-lazy></div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ¿Querés ser el próximo en contarnos tu experiencia? Empezá tu obra con nosotros.
          </p>
        </div>
      </div>
    </section>
  )
}
