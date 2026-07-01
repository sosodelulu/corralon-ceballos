import { useState } from 'react'
import { ShoppingBag, ChevronDown, Warehouse, Mountain, Layers, Zap, Droplet, Home, Package } from 'lucide-react'

function IntroText({ children }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="mb-3">
      <p className={`text-sm leading-relaxed text-gray-600 ${expanded ? '' : 'line-clamp-2 sm:line-clamp-none'}`}>{children}</p>
      <button onClick={() => setExpanded(!expanded)} className="sm:hidden mt-1 text-xs font-semibold text-primary underline">
        {expanded ? 'Leer menos' : 'Leer más'}
      </button>
    </div>
  )
}

function StockBadge() {
  return (
    <div>
      <p style={{ fontSize: '12px', color: '#166534', background: '#f0fdf4', display: 'inline-block', padding: '2px 10px', borderRadius: '99px', marginBottom: '8px' }}>
        ✓ Disponible ahora · Stock permanente
      </p>
    </div>
  )
}

function CTACategoria({ href, label }) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', margin: '16px auto 0', border: '2px solid #166534', color: '#166834', background: 'transparent', borderRadius: '8px', padding: '10px 20px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}>
        {label}
      </a>
    </div>
  )
}

// Fila de chips de navegación rápida. Cada chip hace scroll suave hasta el
// Accordion correspondiente y fuerza su apertura a través de onNavigate
// (estado controlado por el padre, FeaturedProducts).
function QuickNavChips({ categories, onNavigate }) {
  const handleClick = (category) => {
    onNavigate(category.id)
    const target = document.getElementById(category.id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <button
            key={category.id}
            onClick={() => handleClick(category)}
            className="inline-flex items-center gap-1.5 bg-secondary/50 hover:bg-secondary/80 text-foreground text-xs font-bold px-4 py-2 rounded-full border border-border transition-colors"
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {category.label}
          </button>
        )
      })}
    </div>
  )
}

// CAMBIO CLAVE: el contenido ya NO se desmonta del DOM cuando isOpen es false.
// Antes: {isOpen && (<div>...</div>)}  -> el contenido desaparecía del HTML.
// Ahora: <div className={isOpen ? 'block' : 'hidden'}>...</div> -> el contenido
// sigue existiendo en el HTML (Google e IAs lo pueden leer), solo se oculta
// visualmente con CSS. El comportamiento visual para el usuario es idéntico.
function Accordion({ id, title, intro, stockBadge = true, products, ctaHref, ctaLabel, isOpen, onToggle }) {
  return (
    <div id={id} className="border border-border rounded-2xl overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-secondary/40 hover:bg-secondary/70 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-foreground text-base tracking-tight">{title}</h3>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`p-4 bg-white ${isOpen ? 'block' : 'hidden'}`}>
        {/* Texto e info de stock - igual en mobile y desktop */}
        <IntroText>{intro}</IntroText>
        {stockBadge && <StockBadge />}

        {/* MOBILE (hasta sm): carrusel horizontal con snap */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {products.map(p => (
            <div key={p.id} className="flex-shrink-0 w-[44%] snap-start">
              <ProductCard {...p} />
            </div>
          ))}
        </div>

        {/* DESKTOP / TABLET (desde sm): grid original, sin cambios de comportamiento */}
        <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>

        <CTACategoria href={ctaHref} label={ctaLabel} />
      </div>
    </div>
  )
}

function ProductCard({ id, src, alt, title, desc, waText }) {
  // Mensaje dinámico: agrega la medida/descripción entre paréntesis solo si existe.
  const baseMsg = 'Hola Corralón Ceballos, ¿cómo están? Les escribo desde la web para consultar el precio de '
  const fullMsg = desc
    ? baseMsg + waText + ' (' + desc + ').'
    : baseMsg + waText + '.'
  const waUrl = 'https://wa.me/5493543530984?text=' + encodeURIComponent(fullMsg)
  const ariaLabelText = 'Consultar precio de ' + title + ' por WhatsApp'

  return (
    <div className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:border-[#166534]/20 overflow-hidden flex flex-col transition-all duration-300 h-full">

      {/* Contenedor de Imagen con Efectos Hover en Desktop */}
      <div className="relative w-full h-[160px] flex-shrink-0 overflow-hidden">
        <img
          id={id}
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          width="400"
          height="160"
          loading="lazy"
          decoding="async"
        />

        {/* Botón Hover de Escritorio (Oculto en móviles y táctiles por defecto) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabelText}
          className="hidden sm:flex absolute bottom-2 left-2 right-2 items-center justify-center gap-1.5 bg-[#166534] hover:bg-[#114f29] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out no-underline whitespace-nowrap z-10"
        >
          <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
          Consultar precio
        </a>
      </div>

      {/* Textos y Botón Mobile */}
      <div className="p-2.5 sm:p-3 flex flex-col gap-1.5 flex-1">
        <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug">{title}</h4>
        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>

        {/* Botón Mobile Fijo (Oculto automáticamente en pantallas sm en adelante) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-[11px] font-semibold px-2 py-1.5 rounded-lg transition-all duration-200 sm:hidden whitespace-nowrap"
        >
          <ShoppingBag className="w-3 h-3 flex-shrink-0" />
          Consultar precio
        </a>
      </div>
    </div>
  )
}

const cementoItems = [
  { id: 'img-cemento-cpc30', src: '/images/holcim-cemento-cpc30-rio-ceballos-corralon-ceballos.webp', alt: 'Cemento Holcim CPC 30 bolsa 25 kg Río Ceballos', title: 'Cemento Holcim CPC 30', desc: 'CPC 30 · Bolsa x 25 kg', waText: 'Cemento Holcim CPC 30' },
  { id: 'img-cemento-maestro', src: '/images/holcim-maestro-cemento-rio-ceballos-corralon-ceballos.webp', alt: 'Cemento Maestro Holcim albañilería bolsa 25 kg', title: 'Cemento de albañilería Maestro Holcim', desc: 'Bolsa x 25 kg', waText: 'Cemento Maestro Holcim' },
  { id: 'img-cemento-tector', src: '/images/holcim-tector-rio-ceballos-corralon-ceballos.webp', alt: 'Pegamento Tector Holcim impermeable bolsa 25 kg', title: 'Pegamento Tector Holcim', desc: 'Bolsa x 25 kg · Impermeable', waText: 'Pegamento Tector Holcim' },
  { id: 'img-cemento-cal-fgh', src: '/images/fgh-cal-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Cal FGH bolsa 25 kg Río Ceballos', title: 'Cal FGH', desc: 'Bolsa x 25 kg', waText: 'Cal FGH' },
  { id: 'img-cemento-cal-andina', src: '/images/fgh-andina-cal-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Cal Andina bolsa 25 kg', title: 'Cal Andina', desc: 'Bolsa x 25 kg', waText: 'Cal Andina' },
  { id: 'img-cemento-estuco-abacor', src: '/images/estuko-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Estuco Abacor bolsa 25 kg', title: 'Estuco Abacor', desc: 'Bolsa x 25 kg', waText: 'Estuco Abacor' },
]

const aridosItems = [
  { id: 'img-aridos-arena-fina-comun', src: '/images/arena-fina-corralon-ceballos-rio-ceballos.webp', alt: 'Arena Fina Común por m³ o bolsón', title: 'Arena Fina Común', desc: 'Por m³, bolsón o bolsa x 15 kg', waText: 'Arena Fina Común' },
  { id: 'img-aridos-arena-fina-parana', src: '/images/arena-fina-parana-corralon-ceballos-rio-ceballos.webp', alt: 'Arena Fina del Paraná por m³ o bolsón', title: 'Arena Fina del Paraná', desc: 'Por m³, bolsón o bolsa x 15 kg', waText: 'Arena Fina del Paraná' },
  { id: 'img-aridos-arena-gruesa', src: '/images/arena-gruesa-corralon-ceballos.webp', alt: 'Arena Gruesa Lavada por m³ o bolsón', title: 'Arena Gruesa Lavada', desc: 'Por m³, bolsón o bolsa x 15 kg', waText: 'Arena Gruesa Lavada' },
  { id: 'img-aridos-granito-triturado', src: '/images/granito-triturado-granza-corralon-ceballos-rio-ceballos.webp', alt: 'Granito Triturado por m³ bolsón o bolsa 15 kg', title: 'Granito Triturado', desc: 'Por m³, bolsón o bolsa x 15 kg', waText: 'Granito Triturado' },
  { id: 'img-aridos-trit-blanco', src: '/images/Piedra-Triturado-Blanco-Jardineria-Paisajismo-Macetas-Rio-ceballos-corralon-ceballos.webp', alt: 'Piedra Triturado Blanco jardinería decoración', title: 'Piedra Triturado Blanco', desc: 'Para jardinería y decoración · Por m³, bolsón o bolsa x 15 kg', waText: 'Piedra Triturado Blanco' },
]

const ladrillsItems = [
  { id: 'img-ladrillos-comun', src: '/images/ladrillo-comun-corralon-ceballos.webp', alt: 'Ladrillo Común por millar', title: 'Ladrillo Común', desc: '', waText: 'Ladrillo Común' },
  { id: 'img-ladrillos-semivisto', src: '/images/ladrillo-semivisto-corralon-ceballos.webp', alt: 'Ladrillo Semivisto por millar', title: 'Ladrillo Semivisto', desc: '', waText: 'Ladrillo Semivisto' },
  { id: 'img-ladrillos-ladrillon', src: '/images/ladrillon-corralon-ceballos-rio-ceballos.webp', alt: 'Ladrillón por millar', title: 'Ladrillón', desc: '', waText: 'Ladrillon' },
  { id: 'img-ladrillos-bovedilla', src: '/images/bovedilla-corralon-ceballos.webp', alt: 'Bovedilla unidad', title: 'Bovedilla', desc: '', waText: 'Bovedilla' },
  { id: 'img-ladrillos-liston', src: '/images/ladrillo-liston-corralon-ceballos.webp', alt: 'Listón unidad', title: 'Listón', desc: '', waText: 'Listón' },
  { id: 'img-ladrillos-block-ceramico', src: '/images/fantini-ladrillo-ceramico-portante-block-techo-rio-ceballos-corralon-ceballos.webp', alt: 'Block Cerámico Cerámica Fantini unidad varias medidas', title: 'Block Cerámico / Cerámica Fantini', desc: 'Varias medidas', waText: 'Block Cerámico' },
  { id: 'img-ladrillos-block-x', src: '/images/blockx-block-hormigon-portante-rio-ceballos-corralon-ceballos.webp', alt: 'Block de Hormigón Común y Block X unidad', title: 'Block de Hormigón / Común y Block X', desc: 'Unidad', waText: 'Block de Hormigón Block X' },
]

const hierrosItems = [
  { id: 'img-hierros-varilla', src: '/images/varilla-hierro-corralon-ceballos.webp', alt: 'Hierro en Varilla normas IRAM venta por unidad', title: 'Hierro en Varilla', desc: 'Venta por unidad · Normas IRAM', waText: 'Hierro en Varilla' },
  { id: 'img-hierros-malla-soldada', src: '/images/malla-electrosoldada-corralon-ceballos.webp', alt: 'Malla Electrosoldada venta por plancha', title: 'Malla Electrosoldada', desc: 'Venta por plancha', waText: 'Malla Electrosoldada' },
  { id: 'img-hierros-canos-estructurales', src: '/images/cano-estructural-corralon-ceballos.webp', alt: 'Caños Estructurales y Perfilería consultar sección y largo', title: 'Caños Estructurales y Perfilería', desc: 'Consultar sección y espesor · Venta por unidad', waText: 'Caños Estructurales y Perfilería' },
  { id: 'img-hierros-columnas-armadas', src: '/images/columnas-armadas-corralon-ceballos-rio-ceballos.webp', alt: 'Columnas Armadas venta por unidad', title: 'Columnas Armadas', desc: 'Venta por unidad', waText: 'Columnas Armadas' },
  { id: 'img-hierros-alambres', src: '/images/alambres-corralon-ceballos-rio-ceballos.webp', alt: 'Alambres venta por unidad', title: 'Alambres', desc: 'Venta por kg', waText: 'Alambres' },
  { id: 'img-hierros-estribos', src: '/images/estribos-armados-corralon-ceballos-rio-ceballos.webp', alt: 'Estribos Armados venta por unidad', title: 'Estribos Armados', desc: 'Venta por paquete', waText: 'Estribos Armados' },
]

const instalacionesItems = [
  { id: 'img-instalaciones-tanque-talpelit', src: '/images/tanque-agua-talpelit-corralon-ceballos-rio-ceballos.webp', alt: 'Tanque de Agua Talpelit consultar capacidad', title: 'Tanque de Agua Talpelit', desc: 'Consultar capacidad y medidas', waText: 'Tanque de Agua Talpelit' },
  { id: 'img-instalaciones-casilla-gas', src: '/images/casilla-gas-premoldeada-talpelit-corralon-ceballos-rio-ceballos.webp', alt: 'Casilla de Gas Premoldeada unidad', title: 'Casilla de Gas Premoldeada', desc: 'Unidad · Consultar disponibilidad', waText: 'Casilla de Gas Premoldeada' },
  { id: 'img-instalaciones-tubos-alcantarilla', src: '/images/tubo-alcantarilla-corralon-ceballos-rio-ceballos.webp', alt: 'Tubo de Alcantarilla consultar diámetro y largo', title: 'Tubo de Alcantarilla', desc: 'Consultar disponibilidad', waText: 'Tubo de Alcantarilla' },
  { id: 'img-instalaciones-tapa-camara', src: '/images/tapa-camara-talpelit-corralon-ceballos-rio-ceballos.webp', alt: 'Tapa de Cámara unidad', title: 'Tapa de Cámara', desc: 'Unidad', waText: 'Tapa de Cámara' },
  { id: 'img-instalaciones-camara-septica', src: '/images/camara-septica-talpelit-corralon-ceballos.webp', alt: 'Cámara Séptica consultar medidas', title: 'Cámara Séptica', desc: 'Consultar medidas', waText: 'Cámara Séptica' },
  { id: 'img-instalaciones-canos-pvc', src: '/images/cano-pvc-corralon-ceballos-rio-ceballos.webp', alt: 'Caños y Accesorios PVC agua y cloaca', title: 'Caños PVC polietileno', desc: 'Agua y Cloaca', waText: 'Caños y Accesorios PVC' },
]

const techosItems = [
  { id: 'img-techos-chapas', src: '/images/chapa-corralon-ceballos-rio-ceballos.webp', alt: 'Chapa consultar medidas y disponibilidad', title: 'Chapa Acanalada', desc: 'Consultar medidas y disponibilidad', waText: 'Chapa' },
  { id: 'img-techos-teja-colonial', src: '/images/teja-colonial-techo-corralon-ceballos-rio-ceballos.webp', alt: 'Teja Colonial unidad consultar color y disponibilidad', title: 'Teja Colonial', desc: 'Unidad · Consultar disponibilidad', waText: 'Teja Colonial' },
]

const bolsonItems = [
  { id: 'img-bolson-aridos', src: '/images/bolson-grua-corralon-ceballos.webp', alt: 'Bolsón de Áridos entrega Río Ceballos', title: 'Bolsón de Áridos', desc: 'Entrega de áridos en bolsón', waText: 'Bolsón de Áridos' },
  { id: 'img-bolson-grua-hidraulica', src: '/images/grua-bolson-alquiler-corralon-ceballos-rio-ceballos.webp', alt: 'Servicio de Grúa Hidráulica descarga en obra', title: 'Servicio de Grúa Hidráulica', desc: 'Descarga en obra y movimientos especiales en espacios reducidos', waText: 'Servicio de Grúa Hidráulica' },
]

// Catálogo de categorías: cada Accordion tiene un id único que se usa tanto
// para el scroll de los chips como para el estado de apertura controlado.
const categories = [
  {
    id: 'accordion-cemento',
    navLabel: 'Cemento y Cal',
    navIcon: Warehouse,
    title: 'Cemento y Cal',
    intro: 'Trabajamos con productos Holcim en Río Ceballos: Cemento Holcim CPC 30, Cemento de albañilería Maestro y Pegamento Tector Impermeable. También cales FGH (viva e hidratada) y estuco Abacor. Stock permanente para que no pares tus tareas de albañilería.',
    products: cementoItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20Cemento%20y%20Cal.',
    ctaLabel: '📋 Pedí tu cotización de cemento y cal',
  },
  {
    id: 'accordion-aridos',
    navLabel: 'Áridos',
    navIcon: Mountain,
    title: 'Áridos',
    intro: 'Contamos con arena fina común y del Paraná, arena gruesa lavada, granito triturado y piedra triturado blanco para tu obra en Río Ceballos y zona. ¿Necesitás a granel por m³ o bolsón? Coordinamos la descarga según la accesibilidad de tu terreno.',
    products: aridosItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20%C3%81ridos.',
    ctaLabel: '📋 Pedí tu cotización de áridos',
  },
  {
    id: 'accordion-ladrillos',
    navLabel: 'Ladrillos y Bloques',
    navIcon: Layers,
    title: 'Ladrillos y Bloques',
    intro: 'Tenemos ladrillo común, semivisto, ladrillón, bovedilla y listón disponibles en Río Ceballos. En bloques, trabajamos con bloque cerámico y bloque de hormigón.',
    products: ladrillsItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20Ladrillos%20y%20Bloques.',
    ctaLabel: '📋 Pedí tu cotización de ladrillos y bloques',
  },
  {
    id: 'accordion-hierros',
    navLabel: 'Hierros',
    navIcon: Zap,
    title: 'Hierros y Estructuras',
    intro: 'Aceros bajo normas IRAM para obras en Río Ceballos: hierro en varilla, malla electrosoldada, caños estructurales, perfilería, columnas armadas, alambres y estribos armados.',
    products: hierrosItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20Hierros%20y%20Estructuras.',
    ctaLabel: '📋 Pedí tu cotización de hierros y estructuras',
  },
  {
    id: 'accordion-instalaciones',
    navLabel: 'Instalaciones',
    navIcon: Droplet,
    title: 'Instalaciones',
    intro: 'Distribuidor de productos Talpelit en Río Ceballos: tanques de agua, casillas de gas premoldeadas, tubos de alcantarilla, tapas de cámara y cámaras sépticas. También PVC para agua y cloaca.',
    products: instalacionesItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20Instalaciones.',
    ctaLabel: '📋 Pedí tu cotización de instalaciones',
  },
  {
    id: 'accordion-techos',
    navLabel: 'Techos',
    navIcon: Home,
    title: 'Techos',
    intro: 'Trabajamos con chapas cincalum acanaladas y tejas coloniales para todo tipo de techado en Río Ceballos y zona. Consultanos por WhatsApp para disponibilidad de medidas.',
    products: techosItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20Techos.',
    ctaLabel: '📋 Pedí tu cotización de techos',
  },
  {
    id: 'accordion-bolson-grua',
    navLabel: 'Bolsón y Grúa',
    navIcon: Package,
    title: 'Servicio de Bolsón y Grúa',
    intro: 'Servicio de áridos en bolsones para tu obra en Río Ceballos y alrededores. También contamos con grúa hidráulica.',
    stockBadge: false,
    products: bolsonItems,
    ctaHref: 'https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20consultar%20por%20el%20servicio%20de%20gr%C3%BAa%20y%20bols%C3%B3n.',
    ctaLabel: '📋 Reservá tu turno de grúa o bolsón',
  },
]

export default function FeaturedProducts() {
  // Único Accordion abierto a la vez, controlado desde el padre.
  // Arrancan todos cerrados; se abren al hacer click en el título o en un chip.
  const [openAccordionId, setOpenAccordionId] = useState(null)

  const handleToggle = (id) => {
    setOpenAccordionId((current) => (current === id ? null : id))
  }

  const handleNavigate = (id) => {
    setOpenAccordionId(id)
  }

  return (
    <section id="catalogo" className="pt-8 pb-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Catálogo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Catálogo de <span className="text-primary">Materiales</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-5xl mx-auto">Todo lo que necesitás para tu obra, de las marcas en las que más confiamos: Holcim, Cal Andina, FGH, Block X y muchas más.</p>
          <p className="mt-2 text-sm font-semibold text-primary max-w-5xl mx-auto">Entregas en Río Ceballos, Unquillo y Salsipuedes. Consultar para entregas de gran volumen en Agua de Oro y Mendiolaza.</p>
          <p className="mt-3 text-xs text-muted-foreground max-w-5xl mx-auto italic">Las imágenes son meramente ilustrativas y pueden no representar exactamente el producto entregado. Ante cualquier duda, consultanos por WhatsApp.</p>
        </div>

        <QuickNavChips
          categories={categories.map((c) => ({ id: c.id, label: c.navLabel, icon: c.navIcon }))}
          onNavigate={handleNavigate}
        />

        {categories.map((category) => (
          <Accordion
            key={category.id}
            id={category.id}
            title={category.title}
            intro={category.intro}
            stockBadge={category.stockBadge}
            products={category.products}
            ctaHref={category.ctaHref}
            ctaLabel={category.ctaLabel}
            isOpen={openAccordionId === category.id}
            onToggle={() => handleToggle(category.id)}
          />
        ))}

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5493543530984?text=Hola%20Corral%C3%B3n%20Ceballos%2C%20%C2%BFc%C3%B3mo%20est%C3%A1n%3F%20Les%20escribo%20desde%20la%20web%20para%20pedirles%20presupuesto%20de%20una%20lista%20de%20materiales."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4" />
            Consultar stock completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
