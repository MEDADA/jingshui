<template>
  <a-modal
      title="Title"
      :visible="visible"
      :confirm-loading="params.confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
  >
    <BaseDynamicForm :form="formList" :data="data" @update:data="updateData"></BaseDynamicForm>
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
    }
  },
  methods: {},
  setup(props, {emit}) {
    const params = reactive({
      confirmLoading: false
    })
    const formList = ref([...props.form]);
    const handleOk = () => {
      dialogClear();
    }
    const form = reactive({
      data: {} as object
    })
    const updateData = (e: object) => {
      form.data = {...e};
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
      form,
    }
  },
  components: {BaseDynamicForm}
})
</script>

<style scoped>

</style>