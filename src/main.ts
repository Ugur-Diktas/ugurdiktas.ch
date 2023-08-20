import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import { createI18n, type I18nOptions } from 'vue-i18n'
import enUS from './locales/en-GB.json'
import deCH from './locales/de-CH.json'
import frCH from './locales/fr-CH.json'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

let app = createApp(App)
const pinia = createPinia()

const options: I18nOptions = {
  legacy: false,
  locale: 'de-CH',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'de-CH': deCH,
    'fr-CH': frCH
  }
}

const i18n = createI18n<typeof options>(options)

app.use(router)
app.use(pinia)
app.use(i18n)

app.use(Quasar, {
    plugins: {},
})

app.mount('#app')
