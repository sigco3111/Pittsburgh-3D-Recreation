import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Pittsburgh-3D-Recreation/',
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 2000,
  },
});
