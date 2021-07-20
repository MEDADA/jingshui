<template>
  <div>
    <BaseFilter :filters="filters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns"></BaseTable>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import BaseFilter from "@/components/Common/BaseFilter.vue";
import BaseTable from "@/components/Table/BaseTable.vue";

export default defineComponent({
  name: "index",
  components: {BaseTable, BaseFilter},
  setup() {
    const filters = ref([
      {
        type: 'input',
        prop: 'a',
        label: '商品名称'
      },
      {
        type: 'select',
        prop: 'b',
        label: '状态',
        options: [
          {
            label: '全部',
            value: null
          },
          {
            label: '可用',
            value: 1
          },
          {
            label: '禁用',
            value: 0
          }
        ]
      },
      {
        type:'button',
        label:'查询'
      },
      {
        type:'button',
        label:'新建消息'
      }
    ]);
    const tableData = ref([]);
    const tableColumns = ref([
      {
        title: '消息ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '消息标题',
        dataIndex: '1',
        key: '1'
      },
      {
        title: '消息内容',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '发送时间',
        dataIndex: '2',
        key: '2'
      }
    ]);
    return {
      filters,
      tableData,
      tableColumns
    }
  }
})
</script>

<style scoped>

</style>