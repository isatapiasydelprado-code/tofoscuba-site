import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://tofoscuba.netlify.app',
  integrations: [icon()],
});
