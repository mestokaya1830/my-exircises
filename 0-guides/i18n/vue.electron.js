👉vite.config.js (unsafe-eval hatasını önleyen alias ile)
import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    plugins: [vue()]
  }
})


👉 src/renderer/i18n.js (Kurulum ve Ayarlar)
import { createI18n } from 'vue-i18n'

import de from '@/locales/de.json'
import en from '@/locales/en.json'
import tr from '@/locales/tr.json'

const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'en',
  messages: {
    de,
    en,
    tr
  }
})

export default i18n



👉 Vue Şablonu İçinde Kullanım (<template>)
<template>
  <div>
    <h2>{{ $t('customers.title') }}</h2>
  </div>
</template>
