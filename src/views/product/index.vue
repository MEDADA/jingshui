<template>
  <div>
    <BaseFilter :filters="filters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns" :tableHandles="tableHandles"></BaseTable>
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
      }
    ]);
    const tableData = ref([]);
    const tableColumns = ref([
      {

      }
    ]);
    const tableHandles = ref([]);
    return {
      filters,
      tableData,
      tableColumns,
      tableHandles
    }
  }
})
</script>

<style scoped>

</style>