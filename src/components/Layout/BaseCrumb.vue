<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="item in crumb" :key="item.key">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import {ref, reactive, defineComponent, onMounted, inject, toRefs} from "vue";

interface crumb {
  path: string,
  name: string
  meta: {
    title: string
  }
}

export default defineComponent({
  name: "BaseCrumb",
  data() {
    return {
      crumb: ref<crumb[]>([])
    }
  },
  created() {
    this.$watch(
        () => this.$route,
        () => {
          this.generateCrumb(this.$route)
        },
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        {immediate: true}
    )
  },
  setup: (props) => {

  },
  methods: {
    generateCrumb(route: { matched: any[] }) {
      let {matched} = route;
      let isHome = this.isHome(matched[0]);
      let list = [{
        path: '/home',
        name: 'home',
        meta: {title: '首页'}
      }]
      if (!isHome) list = list.concat(matched);
      this.crumb = list.filter(i => i.meta && i.meta.title);
    },
    isHome(route: { name: string }) {
      const name = route && route.name;
      if (!name) return false;
      return name.trim().toLocaleLowerCase() === 'home'
    }
  }
})
</script>

<style scoped>

</style>