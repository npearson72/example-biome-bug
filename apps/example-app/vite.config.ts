import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
    sourcemap: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
});
