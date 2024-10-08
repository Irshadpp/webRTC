import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import 
// import * as process from "process";
// global.process = process;
import fs from 'fs';
import path from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // nodePolyfills()
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser global polyfills
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
  
server: {
  https: {
    key: fs.readFileSync(path.resolve(__dirname, 'certs/key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'certs/cert.pem')),
  },
  port: 5173, // or any port you prefer
},
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "src/setupTests",
  //   mockReset: true,
  // },
  // define: {
  //   global: {}
  // },
  // resolve: {
  //   alias: {
  //     "readable-stream": "vite-compatible-readable-stream"
  //   },
  // },
})
