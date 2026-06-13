# Corralón Ceballos — Sitio Web

Sitio web institucional para Corralón Ceballos, materiales de construcción en Río Ceballos, Córdoba.

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd corralonceballos

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editá .env.local con tus valores reales

# 4. Correr en desarrollo
npm run dev
```

## Variables de entorno

Crear un archivo `.env.local` con:

```
VITE_BASE44_APP_ID=tu_app_id
VITE_BASE44_APP_BASE_URL=https://tu-app.base44.app
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |

## Tecnologías

- React 18 + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router v6
- TanStack Query
