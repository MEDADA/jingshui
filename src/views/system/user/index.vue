<template>
  <div>
    <a-skeleton v-if="loading" active/>
    <BaseFilter :filters="filters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableCol" :tableHandles="tableHandles"></BaseTable>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import BaseFilter from "@/components/Common/BaseFilter.vue";

export default defineComponent({
  name: "index",
  components: {BaseFilter, BaseTable},
  setup() {
    const loading = ref(false);
    const filters = ref([
      {
        type: 'input',
        prop: 'a',
        label: '用户名'
      },
      {
        type: 'input',
        prop: 'a',
        label: '手机号'
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
      }
    ]);
    const tableCol = ref([
      {
        title: '用户ID',
        dataIndex: '1',
        key: '1'
      },
      {
        title: '用户名称',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '状态',
        dataIndex: '3',
        key: '3'
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
        click: () => {
          console.log('编辑 click')
        },
        show(row,col,value){

        }
      },
      {
        title: '删除',
        click: () => {
          console.log('删除 click')
        }
      }
    ]
    const tableData = ref([{
      1:'123',2:'321'
    }]);
    return {
      loading,
      tableCol,
      tableData,
      tableHandles,
      filters
    }
  }
})
</script>

<style scoped>

</style>