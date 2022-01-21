import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://host.jd.com',
      //   ws: true,
      //   changeOrigin: true,
      // },
      // '/api/indicator-factory/': {
      //   target: 'http://other.jd.com',
      //   ws: true,
      //   changeOrigin: true,
      //   rewrite: (p) => p.replace(/^\/api\/indicator-factory\//, '/api/'),
      // },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, './src')}/` },
    ],
  },
});
