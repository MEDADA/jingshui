<template>
  <a-layout style="min-height: 100vh">
    <LayoutSideBar />
    <a-layout>
      <LayoutHeader />
      <a-layout-content style="margin: 0 16px">
        <BaseCrumb></BaseCrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',position:'relative',overflow:'hidden' }">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" ref="comp" />
            </transition>
          </router-view>
        </div>
      </a-layout-content>
      <LayoutFooter />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import {defineComponent, provide,watch} from 'vue';
import {useRouter} from "vue-router";
import LayoutSideBar from "@/components/Layout/LayoutSideBar.vue";
import BaseCrumb from "@/components/Layout/BaseCrumb.vue";
import LayoutFooter from "@/components/Layout/LayoutFooter.vue";
import LayoutHeader from "@/components/Layout/LayoutHeader.vue";

export default defineComponent({
  setup(){

  },
  mounted(){

  },
  components: {
    LayoutHeader,
    LayoutFooter,
    BaseCrumb,
    LayoutSideBar,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined
  },
  methods:{

  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter-from{
  transform:translate3d(60px,0,0);
  opacity: 0;
}
.fade-leave-to,.fade-leave-active {
  opacity: 0;
  display:none;
  transition: none;
}
</style>