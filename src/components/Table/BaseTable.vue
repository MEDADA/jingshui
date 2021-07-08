<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseTable",
  setup(props) {
    const dataSource: any[] = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
    ]
    const columns: any[] = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
    ]
    return {dataSource,columns}
  }
})
</script>

<style scoped>

</style>