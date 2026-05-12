import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://viresh.github.io',
  output: 'static',
  server: { host: '0.0.0.0' },
});
