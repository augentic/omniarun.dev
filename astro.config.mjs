import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://omniarun.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
