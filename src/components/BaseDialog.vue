<template>
  <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="params.confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
  >
    <BaseDynamicForm ref="formRef" :form="formList" :data="data" @update:data="updateData"></BaseDynamicForm>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, watch} from 'vue'
import BaseDynamicForm from "@/components/Form/BaseDynamicForm.vue";

export default defineComponent({
  name: "BaseDialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object, default: () => {
      }
    },
    form: {
      type: Array, default: () => []
    },
    title: {
      type: String, default: '弹框'
    }
  },
  methods: {},
  setup(props, {emit}) {
    const params = reactive({
      confirmLoading: false
    })
    const formList = ref([...props.form]);
    const formRef = ref();
    const handleOk = () => {
      formRef.value._.refs.form.validate()
          .then(() => {
            console.log('values', f.data);
          })
          .catch(error => {
            console.log('error', error);
          });
      dialogClear();
    }
    const f = reactive({
      data: {} as object
    })
    const updateData = (e: object) => {
      f.data = {...e};
    };
    const handleCancel = () => {
      console.log('close')
      emit('close', false)
      dialogClear();
    }
    const dialogClear = () => {

    }
    return {
      params,
      formList,
      handleOk,
      handleCancel,
      updateData,
      f,
      formRef
    }
  },
  components: {BaseDynamicForm}
})
</script>

<style scoped>

</style>