import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` evita caminhos absolutos para os assets no build,
// o que resolve o ecrã branco quando o site é servido no subpath do GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})
