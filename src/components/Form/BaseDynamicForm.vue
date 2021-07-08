<template>
<div>
  <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
  >

  </a-form-model>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DynamicForm",
  data(){
    return {
      form: {

      },
      rules:[]
    }
  }
})
</script>

<style scoped>

</style>