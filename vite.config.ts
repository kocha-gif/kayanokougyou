import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Github Pages serves from a subpath usually, './' ensures assets are loaded relatively
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
})