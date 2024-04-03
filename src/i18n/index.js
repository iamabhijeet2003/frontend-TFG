// src/i18n/index.js

import {createI18n} from "vue-i18n"
import en from "./locales/en.json"
import es from "./locales/es.json"

export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: { en, es }
})