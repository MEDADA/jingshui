<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from "moment";
import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn')
export default defineComponent({
  name: 'App',
  data() {
    return {
      locale: ref(zhCN)
    }
  }
})
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>