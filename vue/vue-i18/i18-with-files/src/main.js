import './assets/main.css'
import i18n from './i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = i18n(createApp(App))
app.use(router)
app.mount('#app')
