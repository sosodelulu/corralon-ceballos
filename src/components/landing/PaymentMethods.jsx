import { Landmark } from 'lucide-react'

const onImgError = (e) => {
  e.target.style.display = 'none'
  if (e.target.nextSibling) e.target.nextSibling.style.removeProperty('display')
}

function IconEfectivo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v1h16V7H4zm0 4v6h16v-6H4zm2 2h4v2H6v-2z"/>
    </svg>
  )
}

function IconDebito() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  )
}

function PayEfectivo() {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-14 h-14 rounded-2xl border border-border bg-secondary/30 group-hover:border-primary/30 group-hover:bg-secondary/60 flex items-center justify-center transition-all duration-300 shadow-sm">
        <IconEfectivo />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground">Efectivo</span>
    </div>
  )
}

function PayTransferencia() {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-14 h-14 rounded-2xl border border-border bg-secondary/30 group-hover:border-primary/30 group-hover:bg-secondary/60 flex items-center justify-center transition-all duration-300 shadow-sm">
        <Landmark className="w-7 h-7 text-primary" strokeWidth={1.75} />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground">Transferencia Bancaria</span>
    </div>
  )
}

function PayDebito() {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-14 h-14 rounded-2xl border border-border bg-secondary/30 group-hover:border-primary/30 group-hover:bg-secondary/60 flex items-center justify-center transition-all duration-300 shadow-sm">
        <IconDebito />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground">Tarjetas de Débito</span>
    </div>
  )
}

function PayVisa() {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-14 h-14 rounded-2xl border border-border bg-secondary/30 group-hover:border-primary/30 group-hover:bg-secondary/60 flex items-center justify-center transition-all duration-300 shadow-sm p-2">
        <img src="/images/visa-logo.webp" alt="Visa" className="w-full h-full object-contain" onError={onImgError} />
        <span style={{ display: 'none' }} className="text-xs font-bold text-blue-700">VISA</span>
      </div>
      <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">Visa<br />Débito y Crédito</span>
    </div>
  )
}

function PayMastercard() {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-14 h-14 rounded-2xl border border-border bg-secondary/30 group-hover:border-primary/30 group-hover:bg-secondary/60 flex items-center justify-center transition-all duration-300 shadow-sm p-2">
        <img src="/images/mastercard-logo.webp" alt="Mastercard" className="w-full h-full object-contain" onError={onImgError} />
        <span style={{ display: 'none' }} className="text-xs font-bold text-red-600">MC</span>
      </div>
      <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">Mastercard<br />Débito y Crédito</span>
    </div>
  )
}

export default function PaymentMethods() {
  return (
    <section id="pagos" className="bg-white border-t border-b border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Medios de Pago</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tighter text-foreground">
            Todas las formas de pago que <span className="text-primary">aceptamos</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Aceptamos: Efectivo · Transferencia Bancaria · Tarjetas de Débito · Tarjetas de Crédito (Visa y Mastercard)</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
          <PayEfectivo />
          <PayTransferencia />
          <PayDebito />
          <PayVisa />
          <PayMastercard />
        </div>
      </div>
    </section>
  )
}
