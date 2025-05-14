import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/DGME168-Sebastian/' : '/',
  server: {
    host: '::', // Allow access on the local network (optional)
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
