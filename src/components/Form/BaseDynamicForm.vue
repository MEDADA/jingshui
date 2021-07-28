<template>
  <div>
    <a-form
        :model="form"
        :label-col="labelCol"
    >
      <template v-for="(item,formIndex) in formList" :key="formIndex">
        <a-form-item :label="item.label">
          <!--        input-->
          <a-input v-if="item.type === 'input'" v-model:value="form.data[item.prop]" :placeholder="item.placeholder"/>
          <!--        password-->
          <a-input-password v-if="item.type === 'inputPassword'" v-model:value="form.data[item.prop]"
                            :placeholder="item.placeholder"/>

          <!--        select-->
          <a-select v-if="item.type === 'select'" v-model:value="form.data[item.prop]" :placeholder="item.placeholder"
                    style="width:100%;">
            <template v-if="item.options">
              <a-select-option v-for="(option,i) in item.options" :key="i" :value="option.value">
                {{ option.label }}
              </a-select-option>
            </template>
          </a-select>
          <!--        date picker-->
          <a-date-picker
              v-if="item.type === 'date'"
              v-model:value="form.data[item.prop]"
              show-time
              type="date"
              :placeholder="item.placeholder"
              style="width: 100%;"
          />
          <!--        switch-->
          <a-switch v-if="item.type === 'switch'" v-model:value="form.data[item.prop]"/>
          <!--        checkbox-->
          <a-checkbox-group v-if="item.type === 'checkbox'" v-model:value="form.data[item.prop]">
            <template v-if="item.options">
              <a-checkbox :value="option.value" :name="option.label" v-for="(option,i) in item.options" :key="i">
                {{ option.label }}
              </a-checkbox>
            </template>
          </a-checkbox-group>
          <!--        radio-->
          <a-radio-group v-model:value="form.data[item.prop]" v-if="item.type === 'radio'">
            <template v-if="item.options">
              <a-radio :value="option.value" v-for="(option,i) in options" :key="i">
                {{ option.label }}
              </a-radio>
            </template>
          </a-radio-group>
          <!--        textarea-->
          <a-input v-if="item.type === 'textarea'" v-model:value="form.data[item.prop]" type="textarea"/>
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, watch} from "vue";

export default defineComponent({
  name: "DynamicForm",
  props: {
    data: {
      type: Object, default: () => {
      }
    },
    form: {type: Array, default: () => []}
  },
  setup(props, {emit}) {
    //other set
    const labelCol = reactive({span: 6})
    //form
    let form = reactive({
      data: {}
    });
    watch(() => props.data, (e) => {
      let {data} = e;
      console.log(data);
      form.data = {...data};
    }, {deep: true, immediate: true})
    const formList = ref([...props.form]);
    watch(form.data, () => {
      emit('update:data', form.data)
    }, {deep: true, immediate: true})
    return {form, formList, labelCol}
  }
})
</script>

<style scoped>

</style>