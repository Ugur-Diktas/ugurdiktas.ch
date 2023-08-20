import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

let app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.use(Quasar, {
    plugins: {},
})

app.mount('#app')
