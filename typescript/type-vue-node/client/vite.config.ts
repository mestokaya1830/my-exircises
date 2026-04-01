import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{//for development short url (http://localhost:3000)
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
})
