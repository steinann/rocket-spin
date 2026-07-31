import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "react/[name].js",
        chunkFileNames: "react/[name].js",
        assetFileNames: "react/[name].css"
      }
    },
    minify: false
  }
})
