import { motion } from 'framer-motion'

const marcas = [
  { group: 'Cemento y Cal', items: [
    { name: 'Holcim', src: '/images/holcim-rio-ceballos-corralon-ceballos.webp', alt: 'Logo Holcim' },
    { name: 'Cal Andina', src: '/images/andina-cal-rio-ceballos-corralon-ceballos.webp', alt: 'Logo Cal Andina' },
    { name: 'FGH', src: '/images/fgh-cal-rio-ceballos-corralon-ceballos.webp', alt: 'Logo FGH' },
    { name: 'Canteras Amadeo', src: '/images/cantera-amadeo-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo Canteras Amadeo' },
    { name: 'Abacor', src: '/images/logo-abacor-verde-corralon-ceballos.webp', alt: 'Logo Abacor' },
  ]},
  { group: 'Hierros y Estructuras', items: [
    { name: 'Serin', src: '/images/serin-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo Serin' },
  ]},
  { group: 'Bloques y Ladrillos', items: [
    { name: 'Fantini', src: '/images/fantini-ceramicos-ladrillos-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo Fantini' },
    { name: 'BlockX', src: '/images/blockx-bloque-hormigon-ceramicos-ladrillos-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo BlockX' },
  ]},
  { group: 'Premoldeados', items: [
    { name: 'Pretencord', src: '/images/logo-pretencord-corralon-ceballos.webp', alt: 'Logo Pretencord' },
  ]},
  { group: 'Tanques y Cañerías', items: [
    { name: 'Talpelit', src: '/images/talpelit-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo Talpelit' },
    { name: 'IPS', src: '/images/ips-rio-ceballos-corralon-ceballos-conexiones-canerias.webp', alt: 'Logo IPS' },
    { name: 'Awaduct', src: '/images/logo-awaduct-rio-ceballos-corralon-ceballos.webp', alt: 'Logo Awaduct' },
  ]},
  { group: 'Otros', items: [
    { name: 'Sika', src: '/images/sika-logo-corralon-ceballos-rio-ceballos.webp', alt: 'Logo Sika' },
  ]},
]

// Fila 1 (desktop, 6 logos): Cemento y Cal + Hierros y Estructuras
const filaUno = [
  ...marcas[0].items.map(item => ({ ...item, group: 'Cemento y Cal', firstOfGroup: false })),
  ...marcas[1].items.map(item => ({ ...item, group: 'Hierros y Estructuras', firstOfGroup: false })),
].map((item, i, arr) => ({
  ...item,
  firstOfGroup: i === 0 || item.group !== arr[i - 1].group,
}))

// Fila 2 (desktop, 7 logos): Bloques y Ladrillos + Premoldeados + Tanques y Cañerías + Otros
const filaDos = [
  ...marcas[2].items.map(item => ({ ...item, group: 'Bloques y Ladrillos', firstOfGroup: false })),
  ...marcas[3].items.map(item => ({ ...item, group: 'Premoldeados', firstOfGroup: false })),
  ...marcas[4].items.map(item => ({ ...item, group: 'Tanques y Cañerías', firstOfGroup: false })),
  ...marcas[5].items.map(item => ({ ...item, group: 'Otros', firstOfGroup: false })),
].map((item, i, arr) => ({
  ...item,
  firstOfGroup: i === 0 || item.group !== arr[i - 1].group,
}))

// Mobile (sin nombres de categoría): 3 filas explícitas con su propia cantidad de columnas.
// Fila 1 (5 logos, 5 columnas): Holcim, Cal Andina, FGH, Canteras Amadeo, Abacor
// Fila 2 (4 logos, 4 columnas): Serin, Fantini, BlockX, Pretencord
// Fila 3 (4 logos, 4 columnas): Talpelit, IPS, Awaduct, Sika
const mobileFilaUnoNombres = ['Holcim', 'Cal Andina', 'FGH', 'Canteras Amadeo', 'Abacor']
const mobileFilaDosNombres = ['Serin', 'Fantini', 'BlockX', 'Pretencord']
const mobileFilaTresNombres = ['Talpelit', 'IPS', 'Awaduct', 'Sika']

function MarcaCard({ name, src, alt }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-3 border border-slate-200 rounded-lg bg-white gap-2">
      <img src={src} alt={alt} className="w-full h-14 object-contain" />
      <span className="hidden md:block text-[0.72rem] text-slate-600 font-medium text-center">{name}</span>
    </div>
  )
}

function MobileRow({ items, cols }) {
  const gridColsClass = cols === 5 ? 'grid-cols-5' : 'grid-cols-4'
  return (
    <div className={`grid ${gridColsClass} gap-2 w-full`}>
      {items.map((item) => (
        <MarcaCard key={item.name} name={item.name} src={item.src} alt={item.alt} />
      ))}
    </div>
  )
}

function DesktopRow({ items, cols = 6 }) {
  const gridColsClass = cols === 7 ? 'grid-cols-7' : 'grid-cols-6'
  return (
    <div className={`grid ${gridColsClass} gap-x-5 gap-y-1 w-full`}>
      {/* Títulos de categoría — una fila de N celdas */}
      {items.map((item, i) => (
        <div key={`label-${i}`} className="flex items-end h-5">
          {item.firstOfGroup && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 truncate">
              {item.group}
            </span>
          )}
        </div>
      ))}
      {/* Logos — segunda fila de N celdas */}
      {items.map((item, i) => (
        <div key={`card-${i}`} className="w-full">
          <MarcaCard name={item.name} src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}

export default function BrandsSection() {
  const itemsByName = Object.fromEntries(marcas.flatMap(g => g.items).map(item => [item.name, item]))
  const mobileFilaUno = mobileFilaUnoNombres.map(name => itemsByName[name])
  const mobileFilaDos = mobileFilaDosNombres.map(name => itemsByName[name])
  const mobileFilaTres = mobileFilaTresNombres.map(name => itemsByName[name])

  return (
    <section id="marcas" className="pt-8 pb-8 bg-muted/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nuestros proveedores</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Marcas que nos <span className="text-primary">acompañan</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Trabajamos con las marcas líderes del mercado para garantizarte materiales de primera calidad en cada proyecto.
          </p>
        </motion.div>

        {/* Desktop: fila 1 con 6 columnas (6 logos), fila 2 con 7 columnas (7 logos) */}
        <div className="hidden md:flex flex-col gap-8 w-full">
          <DesktopRow items={filaUno} cols={6} />
          <DesktopRow items={filaDos} cols={7} />
        </div>

        {/* Mobile: 3 filas explícitas, sin nombres de categoría. Fila 1 con 5 columnas (Abacor incluido), filas 2 y 3 con 4 columnas (Pretencord en fila 2) */}
        <div className="flex flex-col gap-2 md:hidden">
          <MobileRow items={mobileFilaUno} cols={5} />
          <MobileRow items={mobileFilaDos} cols={4} />
          <MobileRow items={mobileFilaTres} cols={4} />
        </div>
      </div>
    </section>
  )
}
