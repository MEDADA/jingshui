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
      },
      {
        type: 'button',
        label: '查询'
      },
      {
        type: 'button',
        label: '添加'
      }
    ]);
    const tableData = ref([]);
    const tableColumns = ref([
      {
        title: '商品ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '商品名称',
        dataIndex: '1',
        key: '1'
      },
      {
        title: '商品价格',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '商品划线价格',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '商品图片',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '商品描述',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '状态',
        dataIndex: '2',
        key: '2'
      },
    ]);
    const tableHandles = ref([
      {
        title: '编辑',
        click: (e: object, data: object) => {
          console.log(e);
          console.log(data)
          console.log('编辑 click')
        }
      },
      {
        title: '删除',
        click: (e) => {
          console.log('删除 click')
        }
      }
    ]);
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