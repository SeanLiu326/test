import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
