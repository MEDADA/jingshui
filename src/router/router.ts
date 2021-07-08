import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: () => import("@/views/layout/Layout.vue"),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("@/views/home/home.vue")
            }
        ],
        meta:{}
    },
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: import("@/views/NotFound.vue")},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router