import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Cats from '../views/Cats.vue'
import About from '../views/About.vue'
import Vision from '../views/Vision.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },

    {
        path: '/cats',
        name: 'Cats',
        component: Cats,
    },

    {
        path: '/about',
        name: 'About',
        component: About,
    },

    {
        path: '/vision',
        name: 'Vision',
        component: Vision,
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
