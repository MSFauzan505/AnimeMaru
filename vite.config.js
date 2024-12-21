import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AniMaru/',
  build: {
    outDir: 'docs', // Output folder untuk GitHub Pages
  },
})
