import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO_URL = 'https://media.base44.com/images/public/6a13a0a6728a7c4bad01483f/2047d2231_image.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493543530984?text=Hola!%20Quiero%20pedir%20un%20presupuesto', '_blank')
  }

  const scrollToSection = (id) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  return (
    <header
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5 pointer-events-auto'
          : 'bg-transparent pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2.5 shrink-0 pointer-events-auto"
          >
            <img src={LOGO_URL} alt="Corralón Ceballos" className="h-14 object-contain" />
          </button>

          <nav className="hidden lg:flex items-center gap-1 pointer-events-auto">
            {['inicio','servicios','catalogo','marcas','resenas','pagos','faq','contacto'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-secondary/60 capitalize"
              >
                {id === 'resenas' ? 'Reseñas' : id === 'pagos' ? 'Medios de Pago' : id === 'faq' ? 'Preguntas Frecuentes' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 pointer-events-auto">
            <Button
              onClick={handleWhatsApp}
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 h-10 rounded-full shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir Presupuesto
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border overflow-hidden shadow-xl pointer-events-auto"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <button onClick={() => scrollToSection('inicio')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('catalogo')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Catálogo</button>
              <button onClick={() => scrollToSection('marcas')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Marcas</button>
              <button onClick={() => scrollToSection('resenas')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Reseñas</button>
              <button onClick={() => scrollToSection('pagos')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Medios de Pago</button>
              <button onClick={() => scrollToSection('faq')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Preguntas Frecuentes</button>
              <button onClick={() => scrollToSection('contacto')} className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors">Contacto</button>
              <Button
                onClick={handleWhatsApp}
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full h-11"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir Presupuesto por WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
