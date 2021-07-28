<template>
  <div>
    <a-skeleton v-if="loading" active/>
    <BaseFilter :filters="tableFilters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns" :tableHandles="tableHandles"></BaseTable>
    <BaseDialog :visible="dialogVisible" :data="dialogData" :form="dialogForm" @close="dialogClose"></BaseDialog>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, createVNode} from "vue";
import {ExclamationCircleOutlined} from '@ant-design/icons-vue';
import {Modal} from 'ant-design-vue';

import BaseTable from "@/components/Table/BaseTable.vue";
import BaseFilter from "@/components/Common/BaseFilter.vue";
import BaseDialog from "@/components/BaseDialog.vue";

export default defineComponent({
  name: "index",
  components: {BaseDialog, BaseFilter, BaseTable},
  setup() {
    //dialog
    const dialogForm = ref<object[]>([
      {
        type: 'input',
        label: '用户名称：',
        prop: 'a'
      },
      {
        type: 'inputPassword',
        label: '登录密码：',
        prop: 'b'
      },
      {
        type: 'select',
        label: '状态：',
        prop: 'c',
        options: [
          {
            label: '可用',
            value: '1'
          },
          {
            label: '禁用',
            value: '0'
          }
        ]
      }
    ]);
    const dialogData = reactive({data: {}});
    const dialogVisible = ref<boolean>(false);
    //form
    const loading = ref<boolean>(false);
    const addHandle = (data?: object) => {
      dialogVisible.value = true
      dialogData.data = data ? {...data} : {};
    };
    const tableFilters = reactive([
      {
        type: 'input',
        prop: '1',
        label: '用户名'
      },
      {
        type: 'input',
        prop: '2',
        label: '手机号'
      },
      {
        type: 'select',
        prop: '3',
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
        handle: (form: object) => {
          console.log(form);
        }
      },
      {
        type: 'button',
        label: '添加',
        handle: () => addHandle()
      }
    ]);
    const tableColumns = ref([
      {
        title: '用户ID',
        dataIndex: 'a',
        key: 'a'
      },
      {
        title: '用户名称',
        dataIndex: 'b',
        key: 'b'
      },
      {
        title: '状态',
        dataIndex: 'c',
        key: 'c'
      },
      {
        title: '操作',
        key: 'handle',
        width: '200px',
        slots: {customRender: 'handle'},
      },
    ]);
    //table handles
    const tableHandles = ref([
      {
        title: '编辑',
        click(row: { text: object }) {
          console.log('编辑 click', row)
          addHandle({...row.text})
        },
        show(row: object, col: object, value: string) {

        }
      },
      {
        title: '删除',
        click: () => {
          console.log('删除 click')
          Modal.confirm({
            title: '确定删除？',
            icon: createVNode(ExclamationCircleOutlined),
            content: ``,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
        }
      }
    ]);
    const tableData = ref([{
      'a': '3', 'b': '2', 'c': '1'
    }]);

    const dialogClose = () => {
      dialogVisible.value = false;
    };
    return {
      dialogClose,
      loading,
      tableColumns,
      tableData,
      tableHandles,
      tableFilters,
      dialogForm,
      dialogData,
      dialogVisible
    }
  }
})
</script>

<style scoped>

</style>