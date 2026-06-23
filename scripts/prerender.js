// scripts/prerender.js
//
// Este script se ejecuta DESPUÉS de "vite build", dentro de GitHub Actions
// (no en Vercel). Levanta un servidor local temporal sirviendo la carpeta
// "dist" ya compilada, abre esa página en un Chrome headless real
// (Puppeteer), espera a que React termine de renderizar todo el contenido,
// y reemplaza dist/index.html por el HTML final ya resuelto.
//
// El usuario humano sigue recibiendo la SPA normal: los <script> originales
// quedan intactos, React se "re-hidrata" en el cliente sin problemas.
// Lo que cambia es que ahora el HTML crudo (lo que ve un bot sin JS,
// como GPTBot o PerplexityBot) ya viene con todo el contenido adentro.

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { createReadStream, existsSync, writeFileSync } from 'fs';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const PORT = 4173;

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(distDir, decodeURIComponent(req.url.split('?')[0]));
      if (!existsSync(filePath) || filePath.endsWith('/')) {
        filePath = join(distDir, 'index.html');
      }
      const ext = extname(filePath);
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      createReadStream(filePath).pipe(res);
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (!existsSync(distDir)) {
    console.error('❌ No existe la carpeta "dist". Corré "npm run build" primero.');
    process.exit(1);
  }

  console.log('🚀 Iniciando servidor local temporal...');
  const server = await startServer();

  console.log('🧠 Abriendo Chrome headless...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Bloqueamos el widget de Elfsight (reviews) durante el prerender:
    // es un script externo de terceros que puede tardar o no resolver
    // nunca en este entorno, y no aporta contenido relevante para SEO/GEO.
    // Sigue funcionando normal para usuarios reales en el navegador.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (req.url().includes('elfsightcdn.com') || req.url().includes('elfsight')) {
        req.abort();
      } else {
        req.continue();
      }
    });

    console.log('📄 Cargando la página...');
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

    console.log('⏳ Esperando a que termine de renderizar el contenido...');
    await new Promise((r) => setTimeout(r, 3000));

    console.log('📸 Capturando HTML final...');
    const html = await page.content();

    const outputPath = join(distDir, 'index.html');
    writeFileSync(outputPath, html, 'utf-8');

    console.log('✅ Prerender completado. dist/index.html actualizado con el contenido final.');
  } catch (err) {
    console.error('❌ Error durante el prerender:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
}

prerender();
