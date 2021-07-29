<template>
  <div>
    <BaseFilter :filters="filters">
    </BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns" :tableHandles="tableHandles"></BaseTable>
    <BaseDialog :visible="dialog.visible" :data="dialog.data" :form="dialog.form" @close="dialogClose"></BaseDialog>
  </div>
</template>

<script lang="ts">
import {createVNode, defineComponent, reactive, ref} from 'vue'
import BaseFilter from "@/components/Common/BaseFilter.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import _default from "ant-design-vue/es/vc-trigger/Popup";
import visible = _default.props.visible;
import BaseDialog from "@/components/BaseDialog.vue";
import {Modal} from "ant-design-vue";
import {ExclamationCircleOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  name: "index",
  components: {BaseDialog, BaseTable, BaseFilter},
  setup() {
    //dialog
    const dialog = reactive({
      visible: false,
      data: {},
      form: [
        {
          label: '服务项名称',
          type: 'input',
          prop: 'a',
          rules: [
            {
              required: true,
              message: '请输入服务项名称'
            }
          ]
        },
        {
          label: '所属服务类目',
          type: 'select',
          prop: 'b',
          rules: [
            {
              required: true,
              message: '请输入所属服务类目'
            }
          ]
        },
        {
          label: '服务项预估价',
          type: 'input',
          prop: 'c',
          rules: [
            {
              required: true,
              message: '请输入服务项预估价'
            }
          ]
        },
        {
          label: '服务项提示',
          type: 'textarea',
          prop: 'd',
          rules: [
            {
              required: true,
              message: '请输入服务项提示'
            }
          ]
        },
        {
          label: '状态',
          type: 'select',
          prop: 'e',
          options: [
            {
              label: '可用',
              value: '1'
            },
            {
              label: '禁用',
              value: '0'
            }
          ],
          rules: [
            {
              required: true,
              message: '请选择状态'
            }
          ]
        }
      ]
    })
    const dialogClose = () => {
      dialog.visible = false;
      dialog.data = {}
    }
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
        handle: (form: object) => {
          console.log(form);
        }
      },
      {
        type: 'button',
        label: '添加',
        handle: (form: object) => {
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
        title: '服务项名称',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '所属服务类目ID',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '所属服务类目名称',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '服务项预估价',
        dataIndex: '2',
        key: '2'
      },
      {
        title: '服务项提示',
        dataIndex: '2',
        key: '2'
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
        click(data: object) {
          console.log('编辑 click')
          dialog.visible = true;
          dialog.data = {...data}
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
    ]
    return {filters, tableData, tableColumns, tableHandles, dialog, dialogClose}
  }
})
</script>

<style scoped>

</style>