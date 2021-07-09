<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div style="height:50px;">
      logo
    </div>
    <a-menu theme="dark"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys" mode="inline">
      <template v-for="navItem in navList" :key="navItem.name">
        <a-sub-menu v-if="hasOneChildShow(navItem)" :key="navItem.name">
          <template #title>
              <span>
                <user-outlined/>
                <span> {{ navItem.meta && navItem.meta.title || '--' }}</span>
              </span>
          </template>
          <a-menu-item :key="childNav.name" v-for="childNav in navItem.children">
            <router-link :to="childNav.path">{{ childNav.meta.title || '--' }}</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item :key="navItem.children[0].name" v-else>
          <router-link :to="navItem.children[0].path">{{ navItem.children[0].meta.title }}</router-link>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {ref, defineComponent, computed, watch} from "vue";
import asyncRoutes from "@/router/asyncRoutes";
import {useRouter, useRoute} from "vue-router";

export default defineComponent({
  data() {
    return {
      collapsed: ref<boolean>(false)
    }
  },
  setup() {
    //导航树 生成
    const navList = ref(asyncRoutes.filter(i => !(i.meta || {}).hidden));

    //单独子级不展示父级菜单
    const hasOneChildShow = function (nav: {
      children: [], meta?: {
        alwaysShow?: boolean
      }
    }): boolean {
      let childrenLength = nav.children.length || 0;
      if (nav.meta && nav.meta.alwaysShow) return true
      return !(childrenLength === 1)
    }
    //设置默认选中菜单

    let {name} = useRoute();
    watch(name, () => {
      this.selectedKeys = [name];
    })
    const route = Object.assign({},useRoute())
    //默认展开顶级菜单
    const openKeys = ref<string[]>([route.matched[0].name]);
    const selectedKeys = ref([name])
    return {navList, hasOneChildShow, selectedKeys, openKeys}
  }
})
</script>

<style scoped>

</style>