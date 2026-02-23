import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://augentic.github.io',
  base: '/omniarun.dev/',
  vite: {
    plugins: [tailwindcss()],
  },
});
