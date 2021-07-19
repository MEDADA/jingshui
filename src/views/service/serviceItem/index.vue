<template>
  <div>
    <BaseFilter :filters="filters">
      <template #end>

      </template>
    </BaseFilter>
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
        type: 'button',
        label: '搜索',
        handle: (form:object) => {
          console.log(form);
        }
      },
      {
        type: 'button',
        label: '添加',
        handle: (form:object) => {
          console.log(form);
        }
      }
    ]);
    const tableData = ref([
      {
        id: '123',
        key: '1'
      }
    ]);
    const tableColumns = ref([
      {
        title: '服务项ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '类目名称',
        dataIndex: '2',
        key: '2',
        width: '30%'
      },
      {
        title: '状态',
        dataIndex: '3',
        key: '3'
      },
      {
        title: '操作',
        key: 'handle',
        width: '200px',
        slots: {customRender: 'handle'},
      },
    ]);
    const tableHandles = [
      {
        title: '编辑',
        click() {
          console.log('编辑 click')
        }
      },
      {
        title: '删除',
        click: () => {
          console.log('删除 click')
        }
      }
    ]
    return {filters, tableData, tableColumns, tableHandles}
  }
})
</script>

<style scoped>

</style>