//not
 locales file must be in public folder

👉 config file
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import Backend from 'i18next-http-backend'

i18next
.use(Backend)
.init({
  debug: true,
  fallbackLng: 'en'
});

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}

👉 vue main.js
import './assets/main.css'
import i18n from './i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = i18n(createApp(App))
app.use(router)
app.mount('#app')

👉 vue page
<template>
  <main>
   <h1>{{ $t('auth.Login') }}</h1>
   <h1>{{ $t('dashboard.Home') }}</h1>
   <div>
    <button @click="$i18next.changeLanguage('tr')">Turkish</button>
    <button @click="$i18next.changeLanguage('en')">English</button>
   </div>
  </main>
</template>



<template>
  <div>
    <h1>{{ $t('dashboard.title') }}</h1>
    <div class="lang-selector">
      <select v-model="$i18n.locale">
        <option value="en">English (EN)</option>
        <option value="de">Deutsch (DE)</option>
        <option value="tr">Türkçe (TR)</option>
      </select>
    </div>
  </div>
</template>

👉 zod ile kullanim in aut.validation.js
import { z } from 'zod'
import i18next from '../i18n.js'

export const getLoginSchema = (lng) => {
  return z.object({
    email: z
      .string()
      .min(1, { message: i18next.t('validation.required', { lng }) })
      .email({ message: i18next.t('validation.invalidEmail', { lng }) }),

    password: z.string().min(6, { message: i18next.t('validation.minChar', { min: 6, lng }) })
  })
}


