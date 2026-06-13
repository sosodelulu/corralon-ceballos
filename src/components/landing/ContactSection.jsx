import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Clock, Phone, MessageCircle, CheckCircle, ParkingCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola Corralón Ceballos! Soy ${formData.name}. Mi tel: ${formData.phone}. ${formData.message}`
    window.open(`https://wa.me/5493543530984?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Contacto</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Pedí tu <span className="text-primary">presupuesto</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Completá el formulario o escribinos por WhatsApp. Te respondemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">Nombre</Label>
                <Input id="name" placeholder="Tu nombre completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold">Teléfono</Label>
                <Input id="phone" placeholder="Ej: 03543 15xxxxxx" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">Lista de materiales / Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Hola, quisiera cotizar 50 bolsas de Cemento Holcim Forte y 20 bolsones de arena con entrega en Río Ceballos."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={submitted}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full text-base shadow-lg shadow-primary/20"
              >
                {submitted ? (
                  <><CheckCircle className="w-4 h-4 mr-2" />¡Enviado por WhatsApp!</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" />Enviar por WhatsApp</>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 text-left">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Dirección</p>
                  <p className="text-xs text-muted-foreground mt-0.5 whitespace-pre-line">{'Av. Remedios de Escalada 975\nRío Ceballos, 5111, Córdoba'}</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ParkingCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Estacionamiento</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Amplio estacionamiento para camiones</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Horarios</p>
                  <p className="text-xs text-muted-foreground mt-0.5 whitespace-pre-line">{'Lun a Vie: 8:30 - 16:30 hs.\nSábado: 8:30 - 12:30 hs.'}</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Teléfono fijo</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    <a href="tel:03543451079" style={{ color: 'inherit', textDecoration: 'none' }}>03543 451079</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 sm:col-span-2">
                <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">WhatsApp / Celular</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    <a href="tel:0354315530984" style={{ color: 'inherit', textDecoration: 'none' }}>03543 15-530984</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-64 sm:h-72">
              <iframe
                title="Ubicación Corralón Ceballos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.885!2d-64.3326!3d-31.1611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6c2a3b1d5555%3A0x1a2b3c4d5e6f7890!2sAv.%20Remedios%20de%20Escalada%20975%2C%20R%C3%ADo%20Ceballos%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              ¿No carga el mapa?{' '}
              <a
                href="https://maps.app.goo.gl/VGTrkhpXCSakaSiE8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Abrir ubicación oficial en Google Maps
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
