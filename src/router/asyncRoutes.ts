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
            title: '系统设置'
        }
    },
    {
        path: '/component',
        redirect: '/component/form',
        name: 'component',
        component: Layout,
        children: [
            {
                path: '/component/form',
                name: 'form',
                component: () => import('@/views/form/index.vue'),
                meta: {
                    title: '表单'
                }
            },
            {
                path: '/component/file',
                name: 'file',
                component: () => import('@/views/file/file.vue'),
                meta: {
                    title: '文件上传'
                }
            }
        ],
        meta: {
            title: '组件'
        }
    },
    {
        path: '/user',
        redirect: '/user/index',
        name: 'userIndex',
        component: Layout,
        children: [
            {
                path: '/component/form',
                name: 'form',
                component: () => import('@/views/form/index.vue'),
                meta: {
                    title: '表单'
                }
            },
            {
                path: '/component/file',
                name: 'file',
                component: () => import('@/views/file/file.vue'),
                meta: {
                    title: '文件上传'
                }
            }
        ],
        meta: {
            title: '组件'
        }
    },

]
export default accessRoutes