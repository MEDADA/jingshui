import Layout from "@/views/layout/Layout.vue";
import {RouteRecordRaw} from "vue-router";

const accessRoutes: Array<RouteRecordRaw> = [
    {
        path: '/system',
        redirect: '/system/user',
        name: 'system',
        component: Layout,
        children: [
            {
                path: '/system/user',
                name: 'user',
                component: () => import('@/views/system/user/index.vue'),
                meta: {
                    title: '用户管理'
                }
            }
        ],
        meta: {
            alwaysShow: true,
            title: '系统设置'
        }
    },
    {
        path: '/service',
        redirect: '/service/category',
        name: 'service',
        component: Layout,
        children: [
            {
                path: '/system/category',
                name: 'category',
                component: () => import('@/views/service/category/index.vue'),
                meta: {
                    title: '服务类目'
                }
            },
            {
                path: '/system/serviceItem',
                name: 'serviceItem',
                component: () => import('@/views/service/serviceItem/index.vue'),
                meta: {
                    title: '服务项'
                }
            }
        ],
        meta: {
            alwaysShow: true,
            title: '服务管理'
        }
    },
    {
        path: '/productLayout',
        redirect: '/product',
        name: 'productLayout',
        component: Layout,
        children: [
            {
                path: '/product',
                name: 'product',
                component: () => import('@/views/product/index.vue'),
                meta: {
                    title: '商品管理'
                }
            }
        ]
    },
    {
        path: '/operate',
        redirect: '/operate/notice',
        name: 'operate',
        component: Layout,
        children: [
            {
                path: '/operate/notice',
                name: 'notice',
                component: () => import('@/views/operate/notice/index.vue'),
                meta: {
                    title: '消息管理'
                }
            }
        ],
        meta: {
            title: '用户运营',
            alwaysShow: true
        }
    },
    {
        path: '/orderLayout',
        redirect: '/order',
        name: 'orderLayout',
        component: Layout,
        children: [
            {
                path: '/order',
                name: 'order',
                component: () => import('@/views/order/index.vue'),
                meta: {
                    title: '订单管理'
                }
            }
        ]
    },

]
export default accessRoutes