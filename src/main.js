// frontend/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'


createApp(App).use(bootstrap).use(router).mount('#app')