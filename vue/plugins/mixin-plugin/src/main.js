import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MixinPlugin from './plugins/mixin-plugin';

createApp(App)
.use(router)
.use(store)
.use(MixinPlugin)
.mount('#app')
