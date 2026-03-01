import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://omnia.host',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
