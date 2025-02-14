import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/Prakash-7382012092/shopping.git',
  plugins: [
    
    react(),
    tailwindcss()
  ],
 
})
