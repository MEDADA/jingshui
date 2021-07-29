<template>
  <div>
    <BaseFilter :filters="filters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns"></BaseTable>
    <BaseDialog :visible="dialog.visible" :data="dialog.data" :form="dialog.form" @close="dialogClose" />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, UnwrapRef} from 'vue'
import BaseFilter from "@/components/Common/BaseFilter.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import BaseDialog from "@/components/BaseDialog.vue";

export default defineComponent({
  name: "index",
  components: {BaseDialog, BaseTable, BaseFilter},
  setup() {
    const dialog = reactive({
      visible: false,
      data: {},
      form: [
        {
          label: '消息标题：',
          prop: 'a',
          type: 'input',
          rules: {
            required: true,
            message: '请输入消息标题',
          }
        },
        {
          label: '消息内容：',
          prop: 'b',
          type: 'textarea',
          rules: {
            required: true,
            message: '请输入消息内容',
          }
        }
      ]
    });
    const dialogClose = ()=>{
      dialog.visible = false;
      dialog.data = {};
    }
    const dialogOpen = ()=>{
      console.log('dialogopen');
      dialog.visible = true;
      dialog.data = {};
    }
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
        label:'新建消息',
        handle:dialogOpen
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
      tableColumns,
      dialog,
      dialogClose
    }
  }
})
</script>

<style scoped>

</style>