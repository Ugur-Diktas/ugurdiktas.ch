import './assets/main.css'

import { createApp } from '../node_modules/vue'
import { createPinia } from '../node_modules/pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
