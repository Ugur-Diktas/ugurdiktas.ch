import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Test from '../views/Test.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },

    {
        path: '/test',
        name: 'Test',
        component: Test
    },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
