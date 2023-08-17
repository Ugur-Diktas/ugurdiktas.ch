import './assets/main.css'

import { createApp } from '../node_modules/vue/dist/vue.esm-bundler.js'
import { createPinia } from '../node_modules/pinia/dist/pinia.esm-bundler.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
