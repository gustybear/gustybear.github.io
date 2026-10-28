// Exercise the production HTML at its deployment subpath, with real theme CSS.
import { createServer } from 'node:http';
import { readFile, readdir, mkdir, stat } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const root = resolve(process.argv[2] || 'public');
const prefix = '/~yaozheng/';
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (!url.pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
    let file = resolve(root, '.' + decodeURIComponent(url.pathname.slice(prefix.length - 1)));
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true });
const routes = [''];
// Include each main section and a representative detail page.
for (const section of ['grant', 'publication', 'projects', 'teaching', 'event', 'team', 'facility']) {
  routes.push(section + '/');
  for (const entry of await readdir(join(root, section), { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'page') continue;
    try {
      await stat(join(root, section, entry.name, 'index.html'));
      routes.push(`${section}/${entry.name}/`);
      break;
    } catch { /* Skip asset directories. */ }
  }
}
const errors = [];
await mkdir('layout-screenshots', { recursive: true });
let checked = 0;
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport, colorScheme: theme, reducedMotion: 'reduce' });
      // Disable external embeds and analytics to keep checks deterministic.
      await context.route('**/*', route => route.request().url().startsWith(origin) || route.request().url().startsWith('data:') ? route.continue() : route.abort());
      const page = await context.newPage();
      for (const route of routes) {
        const response = await page.goto(origin + prefix + route, { waitUntil: 'networkidle' });
        if (!response?.ok()) throw new Error(`Page failed: ${route}`);
        await page.evaluate(theme => {
          document.documentElement.classList.toggle('dark', theme === 'dark');
        }, theme);
        await page.evaluate(() => document.fonts.ready);
        const result = await page.evaluate(() => {
          const width = document.documentElement.clientWidth;
          const overflow = document.documentElement.scrollWidth - width;
          const offenders = overflow > 1 ? [...document.querySelectorAll('main *')].filter(el => {
            const box = el.getBoundingClientRect();
            return box.width && (box.right > width + 1 || box.left < -1);
          }).slice(0, 8).map(el => `${el.tagName}.${el.className}`) : [];
          return { overflow, offenders, background: getComputedStyle(document.body).backgroundColor };
        });
        const name = `${viewport.width}-${theme}-${route.replaceAll('/', '-') || 'home'}`;
        if (result.overflow > 1) errors.push({ route, viewport, theme, ...result });
        await page.screenshot({ path: `layout-screenshots/${name}.png`, fullPage: true });
        checked++;
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
  server.close();
}
if (errors.length) {
  console.error(JSON.stringify(errors, null, 2));
  process.exitCode = 1;
} else {
  console.log(`Passed ${checked} desktop/mobile and light/dark page checks without horizontal overflow.`);
}
