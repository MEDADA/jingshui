<template>
  <a-layout-header class="fixed-header header-style">
    <BaseCrumb></BaseCrumb>
    <a-avatar icon="user" />
  </a-layout-header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import BaseCrumb from "@/components/Layout/BaseCrumb.vue";


export default defineComponent({
  name: "BaseHeader",
  components: {BaseCrumb}
})
</script>

<style scoped lang="scss">
.ant-layout-header{
  padding:0 16px;
}
.fixed-header {
  height: 50px;
  width: 100%;
  transition: width 0.28s;
}

.header-style {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  color: #333;
}
</style>