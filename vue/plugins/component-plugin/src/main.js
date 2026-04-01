import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ComponentPlugin from './plugins/compnent-plugin';

createApp(App)
.use(router)
.use(store)
.use(ComponentPlugin)
.mount('#app')
