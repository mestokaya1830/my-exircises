import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import { createHead } from "@vueuse/head"
const head = createHead()

createApp(App)
.use(router)
.use(store)
.use(head)
.mount('#app')
