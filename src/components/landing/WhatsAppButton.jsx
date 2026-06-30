import { Phone } from 'lucide-react'
const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.847L.057 23.5l5.805-1.522A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.587-.476-5.099-1.31l-.366-.216-3.443.903.919-3.354-.236-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)
export default function WhatsAppButton() {
  return (
    <>
      {/* CORRECCIÓN: fixed primero, luego hidden, luego sm:flex para override correcto */}
      <a
        href="https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20una%20lista%20de%20materiales."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed hidden sm:flex bottom-6 right-6 z-50 items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 wa-pulse transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        {WA_ICON}
        <span>03543 15-530984</span>
      </a>
      {/* Barra fija inferior — solo mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-200 bg-white shadow-lg">
        <a
          href="tel:+543543451079"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-semibold">Llamar</span>
        </a>
        <div className="w-px bg-gray-200" />
        <a
          href="https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20una%20lista%20de%20materiales."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
        >
          {WA_ICON}
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
      </div>
    </>
  )
}
