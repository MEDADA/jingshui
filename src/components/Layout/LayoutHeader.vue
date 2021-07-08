<template>
  <a-layout-header class="fixed-header header-style">
    <div></div>
    <a-avatar icon="user" />
  </a-layout-header>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: "BaseHeader",
  components: {}
})
</script>

<style scoped lang="scss">
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