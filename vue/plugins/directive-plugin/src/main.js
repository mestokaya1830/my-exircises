import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DirectivePlugin from './plugins/directive-plugin';

createApp(App)
.use(router)
.use(store)
.use(DirectivePlugin)
.mount('#app')
