import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Test from '../views/Test.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/test',
        name: 'Test',
        component: Test
    },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
