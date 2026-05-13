import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://auroramoss.ca',
  output: 'static',
  server: { host: '0.0.0.0' },
});
