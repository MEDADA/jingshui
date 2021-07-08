<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"/>
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
      <a-sub-menu v-for="nav in navList" :key="nav.name">
        <template #title>
            <span>
              <user-outlined/>
              <span> {{ nav.meta && nav.meta.title || '--' }}</span>
            </span>
        </template>
        <a-menu-item :key="childNav.name" v-for="childNav in nav.children">
          <router-link :to="childNav.path">{{ childNav.meta.title || '--' }}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue";
import asyncRoutes from "@/router/asyncRoutes";

export default defineComponent({
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),

    }
  },
  setup() {
    const navList = ref(asyncRoutes.map(i=>{

    }))
    const hiddenRoutes = function (nav: any[]): any[]{
      return nav.filter(i=>{
        if(i.hidden) return false
        if(i.children){
          i.children = hiddenRoutes(i.children)
        }
      })
    }
    console.log(navList);
    return {navList}
  }
})
</script>

<style scoped>

</style>