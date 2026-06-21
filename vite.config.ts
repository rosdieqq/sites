import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
});
