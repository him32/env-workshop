import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress' }) // Enable Brotli compression
  ],
  define:{
   'process.env.VITE_VERIFY_FORM':JSON.stringify(process.env.VITE_VERIFY_FORM)
  },
  assetsInclude: ["**/*.JPG"], // Ensure JPG files are included in the build
  build: {
    minify: "esbuild",  // Use esbuild for fast optimizations
    rollupOptions: {
      treeshake: true,   // Ensure tree shaking is enabled
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      treeShaking: true, // Explicitly enable tree shaking
    },
  },
})
