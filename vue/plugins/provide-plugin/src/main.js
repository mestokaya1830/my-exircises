import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ProvidePlugin from './plugins/provide-plugin';

createApp(App)
.use(router)
.use(store)
.use(ProvidePlugin)
.mount('#app')
