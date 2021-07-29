<template>
  <div>
    <BaseFilter :filters="filters"></BaseFilter>
    <BaseTable :tableData="tableData" :tableColumns="tableColumns" :tableHandles="tableHandles"></BaseTable>
    <BaseDialog :visible="dialog.visible" :data="dialog.data" :form="dialog.form" @close="dialogClose"></BaseDialog>
  </div>
</template>

<script lang="ts">
import {createVNode, defineComponent, reactive, ref, UnwrapRef} from 'vue'
import BaseFilter from "@/components/Common/BaseFilter.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import {Modal} from "ant-design-vue";
import {ExclamationCircleOutlined} from "@ant-design/icons-vue";

interface Dialog {
  visible: boolean;
  data: object;
  form: object[];
}

export default defineComponent({
  name: "index",
  components: {BaseDialog, BaseTable, BaseFilter},
  setup() {
    //dialog
    const dialog: UnwrapRef<Dialog> = reactive({
      visible: false,
      data: {},
      form: [
        {
          label: '商品名称：',
          prop: 'a',
          type: 'input',
          rules: {
            required: true,
            message: '请输入商品名称',
          }
        },
        {
          label: '商品价格：',
          prop: 'b',
          type: 'input',
          rules: {
            required: true,
            message: '请输入商品价格',
          }
        },
        {
          label: '商品划线价格：',
          prop: 'b',
          type: 'input',
          rules: {
            required: true,
            message: '请输入商品划线价格',
          }
        },
        {
          label: '商品图片：',
          prop: 'b',
          type: 'upload',
          rules: {
            required: true,
            message: '请上传商品图片',
          },
          tips: '最多上传4张图片，每张图片不超过2M，第一张图片为商品首图'
        },
        {
          label: '商品描述：',
          prop: 'b',
          type: 'textarea',
          rules: {
            required: true,
            message: '请上传商品图片',
          },
          tips: '最多不超过250个字。'
        },
        {
          type: 'select',
          prop: 'b',
          label: '状态',
          options: [
            {
              label: '上架',
              value: 1
            },
            {
              label: '下架',
              value: 0
            }
          ]
        },
      ]
    });
    const dialogClose = () => {
      dialog.visible = false;
    }
    //table
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
        label: '添加',
        handle:()=>{
          console.log('add');
          dialog.visible = true;
          dialog.data = {}
        }
      }
    ]);
    const tableData = ref([
      {a: '1', id: '12'}
    ]);
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
      {
        title: '操作',
        key: 'handle',
        width: '200px',
        slots: {customRender: 'handle'},
      }
    ]);
    const tableHandles = ref([
      {
        title: '编辑',
        click: (data: object) => {
          console.log(data)
          console.log('编辑 click')
          dialog.visible = true;
        }
      },
      {
        title: '删除',
        click: (e) => {
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
    return {
      filters,
      tableData,
      tableColumns,
      tableHandles,
      dialog,
      dialogClose
    }
  }
})
</script>

<style scoped>

</style>