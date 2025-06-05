import  { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Minor update

export default defineConfig({
  plugins: [react()], 
  server: {  // Minor update
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})