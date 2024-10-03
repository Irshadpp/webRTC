import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
import 
import * as process from "process";
global.process = process;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // nodePolyfills()
  ],
  
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  define: {
    global: {}
  },
  resolve: {
    alias: {
      "readable-stream": "vite-compatible-readable-stream"
    },
  },
})
