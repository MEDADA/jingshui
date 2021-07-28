import router from "@/router/router";
import asyncRoutes from '@/router/asyncRoutes'
import {Modal} from "ant-design-vue";
router.beforeEach((to, from) => {
    Modal.destroyAll();//销毁对话框
    if (asyncRoutes && asyncRoutes.length > 0) {
        let addRoutes = asyncRoutes.filter(i => !router.hasRoute(i.name || ''));
        if(addRoutes.length > 0){
            addRoutes.forEach(i=>{
                router.addRoute(i)
            })
            return to.fullPath
        }
    }
    return true
})