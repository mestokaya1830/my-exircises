import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import JsonExcel from "vue-json-excel3";
app.component("downloadExcel", JsonExcel);

import JsonCSV from 'vue-json-csv'
app.component('downloadCsv', JsonCSV)

app.use(router)
app.mount('#app')
