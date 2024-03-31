// frontend/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import Buefy from '@ntohq/buefy-next';
import './index.css'

createApp(App)
    .use(bootstrap)
    .use(router)
    .use(store)
    .use(createVuestic())
    .use(Buefy)
    .mount('#app')