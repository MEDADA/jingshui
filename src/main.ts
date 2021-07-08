import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/router";
import "@/router/routerGuard.ts" //路由守卫
import Antd from 'ant-design-vue';

import '@/assets/css/reset.css'
import 'ant-design-vue/dist/antd.css';


createApp(App).use(router).use(Antd).mount('#app')
