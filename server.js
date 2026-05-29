/* Servidor estático sin dependencias para Guanajuato Restaurante.
   Sirve los archivos del sitio y escucha en el puerto que asigna Railway. */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.mov':  'video/quicktime',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  // Evita salir del directorio raíz (path traversal)
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 - Prohibido');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404</h1><p>Página no encontrada.</p>');
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = TYPES[ext] || 'application/octet-stream';
    const total = stat.size;
    const range = req.headers.range;

    // Soporte de "range requests" (necesario para hacer seek en el video)
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      let start = m && m[1] ? parseInt(m[1], 10) : 0;
      let end = m && m[2] ? parseInt(m[2], 10) : total - 1;
      if (isNaN(start)) start = 0;
      if (isNaN(end) || end >= total) end = total - 1;
      if (start > end) {
        res.writeHead(416, { 'Content-Range': `bytes */${total}` });
        return res.end();
      }
      res.writeHead(206, {
        'Content-Type': type,
        'Accept-Ranges': 'bytes',
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Content-Length': end - start + 1,
      });
      return fs.createReadStream(filePath, { start, end }).pipe(res);
    }

    // HTML/CSS/JS se revalidan siempre; imágenes/video/fuentes con caché largo
    const revalidate = ext === '.html' || ext === '.css' || ext === '.js';
    res.writeHead(200, {
      'Content-Type': type,
      'Accept-Ranges': 'bytes',
      'Content-Length': total,
      'Cache-Control': revalidate ? 'no-cache' : 'public, max-age=604800',
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌮 Guanajuato sirviendo en el puerto ${PORT}`);
});
