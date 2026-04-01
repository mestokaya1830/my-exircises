import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import print from 'vue3-print-nb'
import '@/assets/css/global.css'
import '@/assets/css/mobile.css'

createApp(App)
.use(router)
.use(store)
.use(print)
.mount('#app')
