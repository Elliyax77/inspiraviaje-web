import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: 'C:/Users/ReneBond/.gemini/antigravity-ide/brain/2cd4e6d1-41b4-40ee-8a38-f1b2b3ecef87/scratch/vite-cache',
  build: {
    emptyOutDir: false
  }
})
