import { useState } from 'react'
import { ShoppingBag, ChevronDown } from 'lucide-react'

function IntroText({ children }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{ gridColumn: '1 / -1', marginBottom: '0.75rem' }}>
      <p className={`text-sm leading-relaxed text-gray-600 ${expanded ? '' : 'line-clamp-2 sm:line-clamp-none'}`}>{children}</p>
      <button onClick={() => setExpanded(!expanded)} className="sm:hidden mt-1 text-xs font-semibold text-primary underline">
        {expanded ? 'Leer menos' : 'Leer más'}
      </button>
    </div>
  )
}

function StockBadge() {
  return (
    <div style={{ gridColumn: '1 / -1' }}>
      <p style={{ fontSize: '12px', color: '#166534', background: '#f0fdf4', display: 'inline-block', padding: '2px 10px', borderRadius: '99px', marginBottom: '8px' }}>
        ✓ Disponible ahora · Stock permanente
      </p>
    </div>
  )
}

function CTACategoria({ href }) {
  return (
    <div style={{ gridColumn: '1 / -1' }}>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', margin: '16px auto 0', border: '2px solid #166534', color: '#166834', background: 'transparent', borderRadius: '8px', padding: '10px 20px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}>
        💬 Cotizá esta categoría por WhatsApp
      </a>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-border rounded-2xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 bg-secondary/40 hover:bg-secondary/70 transition-colors text-left">
        <span className="font-bold text-foreground text-base tracking-tight">{title}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="p-4 bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {children}
        </div>
      )}
    </div>
  )
}

function ProductCard({ id, src, alt, title, desc, waText }) {
  const waUrl = `https://wa.me/5493543530984?text=${encodeURIComponent('Hola, quisiera consultar el precio de ' + waText)}`

  return (
    <div className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:border-[#166534]/20 overflow-hidden flex flex-col transition-all duration-300">
      
      {/* Contenedor de Imagen con Efectos Hover en Desktop */}
      <div className="relative w-full h-[160px] flex-shrink-0 overflow-hidden">
        <img
          id={id}
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Botón Hover de Escritorio (Oculto en móviles y táctiles por defecto) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar precio de ${title} por WhatsApp`}
          className="hidden sm:flex absolute bottom-2 left-2 right-2 items-center justify-center gap-1.5 bg-[#166534] hover:bg-[#114f29] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out no-underline whitespace-nowrap z-10"
        >
          <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
          Consultar precio
        </a>
      </div>

      {/* Textos y Botón Mobile */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <p className="text-sm font-bold text-foreground leading-snug">{title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>

        {/* Botón Mobile Fijo (Oculto automáticamente en pantallas sm en adelante) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 sm:hidden"
        >
          <ShoppingBag className="w-3 h-3" />
          Consultar precio
        </a>
      </div>
    </div>
  )
}

const BASE = 'https://media.base44.com/images/public/6a13a0a6728a7c4bad01483f/'
const BASE2 = 'https://media.base44.com/images/public/6a2a0f48c1091dffe80ef0d6/'

const cementoItems = [
  { id: 'img-cemento-holcim-fuerte', src: BASE+'85762a06c_holcim-cemento-fuerte-ecoplanet-rio-ceballos-corralon-ceballos.webp', alt: 'Cemento Fuerte Holcim CPF 40 alta resistencia bolsa 25 kg Río Ceballos', title: 'Cemento Fuerte Holcim', desc: 'CPF 40 · Alta resistencia · Bolsa x 25 kg', waText: 'Cemento Fuerte Holcim' },
  { id: 'img-cemento-maestro', src: BASE+'a27535b53_holcim-maestro-cemento-rio-ceballos-corralon-ceballos.webp', alt: 'Cemento Maestro Holcim albañilería bolsa 25 kg', title: 'Cemento Maestro Holcim', desc: 'Cemento de albañilería · Bolsa x 25 kg', waText: 'Cemento Maestro Holcim' },
  { id: 'img-cemento-tector', src: BASE+'483ada209_holcim-tector-rio-ceballos-corralon-ceballos.webp', alt: 'Pegamento Tector Holcim impermeable bolsa 25 kg', title: 'Pegamento Tector Holcim', desc: 'Bolsa x 25 kg · Impermeable', waText: 'Pegamento Tector Holcim' },
  { id: 'img-cemento-cal-fgh', src: BASE+'0f1080661_fgh-cal-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Cal FGH bolsa 25 kg Río Ceballos', title: 'Cal FGH', desc: 'Bolsa x 25 kg', waText: 'Cal FGH' },
  { id: 'img-cemento-cal-andina', src: BASE+'e8494d4a1_fgh-andina-cal-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Cal Andina bolsa 25 kg', title: 'Cal Andina', desc: 'Bolsa x 25 kg', waText: 'Cal Andina' },
  { id: 'img-cemento-estuco-abacor', src: BASE+'d2e488e51_estuko-rio-ceballos-corralon-ceballos-bolsa.webp', alt: 'Estuco Abacor bolsa 25 kg', title: 'Estuco Abacor', desc: 'Bolsa x 25 kg', waText: 'Estuco Abacor' },
]

const aridosItems = [
  { id: 'img-aridos-arena-fina-comun', src: BASE+'3313ca5b1_arena-fina-corralon-ceballos-rio-ceballos.webp', alt: 'Arena Fina Común por m³ o bolsón', title: 'Arena Fina Común', desc: 'Por m³ o bolsón · Río Ceballos y aledaños', waText: 'Arena Fina Común' },
  { id: 'img-aridos-arena-fina-parana', src: BASE+'98ee145e8_arena-fina-parana-corralon-ceballos-rio-ceballos.webp', alt: 'Arena Fina del Paraná por m³ o bolsón', title: 'Arena Fina del Paraná', desc: 'Por m³ o bolsón', waText: 'Arena Fina del Paraná' },
  { id: 'img-aridos-arena-gruesa', src: BASE+'5437d08af_arena-gruesa-corralon-ceballos.webp', alt: 'Arena Gruesa Lavada por m³ o bolsón', title: 'Arena Gruesa Lavada', desc: 'Por m³ o bolsón', waText: 'Arena Gruesa Lavada' },
  { id: 'img-aridos-granito-triturado', src: BASE+'7f3b96d4b_granito-triturado-granza-corralon-ceballos-rio-ceballos.webp', alt: 'Granito Triturado por m³ bolsón o bolsa 15 kg', title: 'Granito Triturado', desc: 'Por m³, bolsón o bolsa x 15 kg', waText: 'Granito Triturado' },
  { id: 'img-aridos-trit-blanco', src: BASE+'473765325_Piedra-Triturado-Blanco-Jardineria-Paisajismo-Macetas-Rio-ceballos-corralon-ceballos.webp', alt: 'Piedra Triturado Blanco jardinería decoración', title: 'Piedra Triturado Blanco', desc: 'Para jardinería y decoración · Por m³, bolsón o bolsa x 15 kg', waText: 'Piedra Triturado Blanco' },
]

const ladrillsItems = [
  { id: 'img-ladrillos-comun', src: BASE+'e3fecfcb9_ladrillo-comun-corralon-ceballos.webp', alt: 'Ladrillo Común por millar', title: 'Ladrillo Común', desc: 'Por millar', waText: 'Ladrillo Común' },
  { id: 'img-ladrillos-semivisto', src: BASE+'41d56a0cf_ladrillo-semivisto-corralon-ceballos.webp', alt: 'Ladrillo Semivisto por millar', title: 'Ladrillo Semivisto', desc: 'Por millar', waText: 'Ladrillo Semivisto' },
  { id: 'img-ladrillos-ladrillon', src: BASE+'9c2c0e890_ladrillon-corralon-ceballos.webp', alt: 'Ladrillón por millar', title: 'Ladrillón', desc: 'Por millar', waText: 'Ladrillon' },
  { id: 'img-ladrillos-bovedilla', src: BASE+'d66bb1ed1_bovedilla-corralon-ceballos.webp', alt: 'Bovedilla unidad', title: 'Bovedilla', desc: 'Unidad', waText: 'Bovedilla' },
  { id: 'img-ladrillos-liston', src: BASE+'84afbaffc_ladrillo-liston-corralon-ceballos.webp', alt: 'Listón unidad', title: 'Listón', desc: 'Unidad', waText: 'Listón' },
  { id: 'img-ladrillos-block-ceramico', src: BASE+'8e537d14d_fantini-ladrillo-ceramico-portante-block-techo-rio-ceballos-corralon-ceballos.webp', alt: 'Block Cerámico Cerámica Fantini unidad varias medidas', title: 'Block Cerámico (Cerámica Fantini)', desc: 'Unidad · Varias medidas', waText: 'Block Cerámico' },
  { id: 'img-ladrillos-block-x', src: BASE+'afc4c3d55_blockx-block-hormigon-portante-rio-ceballos-corralon-ceballos.webp', alt: 'Block de Hormigón Común y Block X unidad', title: 'Block de Hormigón (Común y Block X)', desc: 'Unidad', waText: 'Block de Hormigón Block X' },
]

const hierrosItems = [
  { id: 'img-hierros-varilla', src: BASE+'bcbcb4f30_varilla-hierro-corralon-ceballos.webp', alt: 'Hierro en Varilla normas IRAM venta por unidad', title: 'Hierro en Varilla', desc: 'Venta por unidad · Normas IRAM', waText: 'Hierro en Varilla' },
  { id: 'img-hierros-malla-soldada', src: BASE+'f784b818c_malla-electrosoldada-corralon-ceballos.webp', alt: 'Malla Electrosoldada venta por plancha', title: 'Malla Electrosoldada', desc: 'Venta por plancha', waText: 'Malla Electrosoldada' },
  { id: 'img-hierros-canos-estructurales', src: BASE+'3fd124739_cano-estructural-cao-corralon-ceballos.webp', alt: 'Caños Estructurales y Perfilería consultar sección y largo', title: 'Caños Estructurales y Perfilería', desc: 'Consultar sección y largo · Venta por unidad', waText: 'Caños Estructurales y Perfilería' },
  { id: 'img-hierros-columnas-armadas', src: BASE+'260b5e2ee_columnas-armadas-corralon-ceballos-rio-ceballos.webp', alt: 'Columnas Armadas venta por unidad', title: 'Columnas Armadas', desc: 'Venta por unidad', waText: 'Columnas Armadas' },
  { id: 'img-hierros-alambres', src: BASE+'530ac6278_alambres-corralon-ceballos-rio-ceballos.webp', alt: 'Alambres venta por unidad', title: 'Alambres', desc: 'Venta por unidad', waText: 'Alambres' },
  { id: 'img-hierros-estribos', src: BASE+'849257858_estribos-armados-corralon-ceballos-rio-ceballos.webp', alt: 'Estribos Armados venta por unidad', title: 'Estribos Armados', desc: 'Venta por unidad', waText: 'Estribos Armados' },
]

const instalacionesItems = [
  { id: 'img-instalaciones-tanque-talpelit', src: BASE+'b8721ddb4_tanque-agua-talpelit-corralon-ceballon-rio-ceballos.webp', alt: 'Tanque de Agua Talpelit consultar capacidad', title: 'Tanque de Agua Talpelit', desc: 'Consultar capacidad y medidas', waText: 'Tanque de Agua Talpelit' },
  { id: 'img-instalaciones-casilla-gas', src: BASE+'416ec44db_casilla-gas-premoldeada-talpelit-corralon-ceballos-rio-ceballos.webp', alt: 'Casilla de Gas Premoldeada unidad', title: 'Casilla de Gas Premoldeada', desc: 'Unidad · Consultar disponibilidad', waText: 'Casilla de Gas Premoldeada' },
  { id: 'img-instalaciones-tubos-alcantarilla', src: BASE+'59bacfdbf_tubo-alcantarilla-corralon-ceballos-rio-ceballos.webp', alt: 'Tubo de Alcantarilla consultar diámetro y largo', title: 'Tubo de Alcantarilla', desc: 'Consultar diámetro y largo', waText: 'Tubo de Alcantarilla' },
  { id: 'img-instalaciones-tapa-camara', src: BASE+'b5f82514d_tapa-camara-talpelit-corralon-ceballos-rio-ceballos.webp', alt: 'Tapa de Cámara unidad', title: 'Tapa de Cámara', desc: 'Unidad', waText: 'Tapa de Cámara' },
  { id: 'img-instalaciones-camara-septica', src: BASE2+'1215c5e79_camara-septica-talpelit-corralon-ceballos.webp', alt: 'Cámara Séptica consultar medidas', title: 'Cámara Séptica', desc: 'Consultar medidas', waText: 'Cámara Séptica' },
  { id: 'img-instalaciones-canos-pvc', src: BASE2+'8a61d0080_cao-cano-pvc-corralon-ceballos-rio-ceballos.webp', alt: 'Caños y Accesorios PVC agua y cloaca', title: 'Caños y Accesorios PVC', desc: 'Agua y Cloaca · No incluye PVC para gas', waText: 'Caños y Accesorios PVC' },
]

const techosItems = [
  { id: 'img-techos-chapas', src: BASE+'2653d2aad_chapa-corralon-ceballos.webp', alt: 'Chapa consultar medidas y disponibilidad', title: 'Chapa', desc: 'Consultar medidas y disponibilidad', waText: 'Chapa' },
  { id: 'img-techos-teja-colonial', src: BASE+'ac2d46db1_teja-colonial-techo-corralon-ceballos-rio-ceballos.webp', alt: 'Teja Colonial unidad consultar color y disponibilidad', title: 'Teja Colonial', desc: 'Unidad · Consultar color y disponibilidad', waText: 'Teja Colonial' },
]

const bolsonItems = [
  { id: 'img-bolson-aridos', src: BASE+'9a4f2d6e8_bolson-grua-corralon-ceballos.webp', alt: 'Bolsón de Áridos entrega Río Ceballos', title: 'Bolsón de Áridos', desc: 'Entrega de áridos en bolsón. No incluye retiro.', waText: 'Bolsón de Áridos' },
  { id: 'img-bolson-grua-hidraulica', src: BASE+'a7735a5ae_grua-bolson-alquiler-corralon-ceballos-rio-ceballos.webp', alt: 'Servicio de Grúa Hidráulica descarga en obra', title: 'Servicio de Grúa Hidráulica', desc: 'Descarga en obra y movimientos especiales en espacios reducidos. Consultar disponibilidad.', waText: 'Servicio de Grúa Hidráulica' },
]

export default function FeaturedProducts() {
  return (
    <section id="catalogo" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Catálogo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Catálogo de <span className="text-primary">Materiales</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Holcim, cal Andina, FGH, Block X, ladrillos, hierros, áridos y más.</p>
          <p className="mt-2 text-sm font-semibold text-primary">Entregas en Río Ceballos, Unquillo y Salsipuedes. También llegamos a Agua de Oro y Mendiolaza.</p>
        </div>

        <div className="mb-14" />

        <Accordion title="Cemento y Cal" defaultOpen={true}>
          <IntroText>Trabajamos con productos Holcim: Cemento Fuerte CPF 40, Cemento Maestro de albañilería y Pegamento Tector Impermeable. También cales FGH (viva e hidratada), y estuco Abacor. Stock permanente siempre.</IntroText>
          <StockBadge />
          {cementoItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20Cemento%20y%20Cal" />
        </Accordion>

        <Accordion title="Áridos">
          <IntroText>Contamos con arena fina común y del Paraná, arena gruesa lavada, granito triturado, piedra triturado blanco y más. Entrega a granel o en bolsón.</IntroText>
          <StockBadge />
          {aridosItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20%C3%81ridos" />
        </Accordion>

        <Accordion title="Ladrillos y Bloques">
          <IntroText>Tenemos ladrillo común, semivisto, ladrillón, bovedilla y listón. En bloques, trabajamos con bloque cerámico y bloque de hormigón.</IntroText>
          <StockBadge />
          {ladrillsItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20Ladrillos%20y%20Bloques" />
        </Accordion>

        <Accordion title="Hierros y Estructuras">
          <IntroText>Aceros bajo normas IRAM: hierro en varilla, malla electrosoldada, caños estructurales, perfilería, columnas armadas, alambres y estribos armados.</IntroText>
          <StockBadge />
          {hierrosItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20Hierros%20y%20Estructuras" />
        </Accordion>

        <Accordion title="Instalaciones">
          <IntroText>Distribuidor oficial Talpelit: tanques de agua, casillas de gas premoldeadas, tubos de alcantarilla, tapas de cámara y cámaras sépticas. También PVC para agua y cloaca.</IntroText>
          <StockBadge />
          {instalacionesItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20Instalaciones" />
        </Accordion>

        <Accordion title="Techos">
          <IntroText>Trabajamos con chapas y tejas para todo tipo de techado. Consultanos por WhatsApp para disponibilidad de medidas y colores.</IntroText>
          <StockBadge />
          {techosItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20productos%20de%20Techos" />
        </Accordion>

        <Accordion title="Servicio de Bolsón y Grúa">
          <IntroText>Servicio de áridos en bolsones para tu obra en Río Ceballos y alrededores. El bolsón no se alquila y no incluye retiro. También contamos con grúa hidráulica.</IntroText>
          {bolsonItems.map(p => <ProductCard key={p.id} {...p} />)}
          <CTACategoria href="https://wa.me/5493543530984?text=Hola%2C%20quisiera%20cotizar%20el%20Servicio%20de%20Grua%20y%20Bolson" />
        </Accordion>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5493543530984?text=Hola!%20Quisiera%20consultar%20el%20stock%20completo%20de%20materiales."
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
