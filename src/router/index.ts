import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Test from '../views/Test.vue'
import Fun from '../views/Fun.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },

    {
        path: '/test',
        name: 'Test',
        component: Test,
    },

    {
        path: '/fun',
        name: 'Fun',
        component: Fun,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
