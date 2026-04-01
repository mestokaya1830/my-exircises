import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'React PWA App',
        short_name: 'MyApp',
        description: 'React PWA App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/icon_x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/icon_x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
     })
  ],
  
})
