import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// GitHub Pages serves the site from /tofoscuba-site/; Netlify or a custom domain serve it from /.
const ghPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: ghPages ? 'https://isatapiasydelprado-code.github.io' : 'https://www.tofoscuba.com',
  base: ghPages ? '/tofoscuba-site' : '/',
  integrations: [icon()],
});
