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
import i18n from './i18n';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import VueLazyload from 'vue-lazyload'
import '@/assets/css/dark-mode.css';
createApp(App)
    .use(bootstrap)
    .use(router)
    .use(store)
    .use(createVuestic())
    .use(Buefy)
    .use(i18n())
    .use(VueSweetalert2)
    .use(VueLazyload)
    .mount('#app')