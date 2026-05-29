//crear el vite.config.ts para configurar el proyecto de frontend con Vite y TypeScript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 517,
  },
}); 