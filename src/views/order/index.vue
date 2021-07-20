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
        label: '服务项名称'
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
        label:'添加'
      }
    ]);
    const tableData = ref([]);
    const tableColumns = ref([
      {
        title: '订单ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '服务项类目',
        dataIndex: '1',
        key: '1'
      },
      {
        title: '服务项名称',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '上门地址',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '联系人',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '联系电话',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '上门时间',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '下单时间',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '需求描述',
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
        title: '确认',
        click: (e:object,data:object) => {
          console.log(e);
          console.log(data)

        }
      },
      {
        title: '取消',
        click: (e) => {

        }
      },
      {
        title: '完成',
        click: (e) => {

        }
      },
      {
        title: '未完成',
        click: (e) => {

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