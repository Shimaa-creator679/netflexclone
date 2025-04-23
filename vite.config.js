import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      external: ['react-router-dom'],  // تأكد من أن Vite يعامل react-router-dom كموديول خارجي
    },
  },
});


