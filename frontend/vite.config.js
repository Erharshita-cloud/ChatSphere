import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 change from '/lander/' to '/'
  server: {
   host: '0.0.0.0',   // important: listens on 0.0.0.0
    port: 80      // container port matches service targetPort
  }
})
