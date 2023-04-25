import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from "vite-plugin-babel"
// import plugin from "./plugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),babel()],
  server: {
    host: '0.0.0.0', //ip host
    port: 80,
    open: true //auto open browser
  },
  preview:{
    host: 'localhost',
    port: 8090,
    open: true
  }
})
