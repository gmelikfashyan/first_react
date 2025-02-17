import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      svgr(),
  ],
  server: {
    host: true,
    port: 3000,
    open: true,

  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
