import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const internalPlugin = {
  install(app){
    app.config.globalProperties.$sayHello = function(param){
      return param
    }
  }
}
createApp(App)
.use(router)
.use(store)
.use(internalPlugin)
.mount('#app')
