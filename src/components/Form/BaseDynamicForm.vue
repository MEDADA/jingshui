<template>
  <div>
    <a-form
        :model="f.data"
        :label-col="labelCol"
        ref="form"
    >
      <template v-for="(item,formIndex) in formList" :key="formIndex">
        <a-form-item :label="item.label" :rules="item.rules" :name="item.prop">
          <!--        input-->
          <a-input v-if="item.type === 'input'" v-model:value="f.data[item.prop]" :placeholder="item.placeholder"/>
          <!--        password-->
          <a-input-password v-if="item.type === 'inputPassword'" v-model:value="f.data[item.prop]"
                            :placeholder="item.placeholder"/>

          <!--        select-->
          <a-select v-if="item.type === 'select'" v-model:value="f.data[item.prop]" :placeholder="item.placeholder"
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
              v-model:value="f.data[item.prop]"
              show-time
              type="date"
              :placeholder="item.placeholder"
              style="width: 100%;"
          />
          <!--        switch-->
          <a-switch v-if="item.type === 'switch'" v-model:value="f.data[item.prop]"/>
          <!--        checkbox-->
          <a-checkbox-group v-if="item.type === 'checkbox'" v-model:value="f.data[item.prop]">
            <template v-if="item.options">
              <a-checkbox :value="option.value" :name="option.label" v-for="(option,i) in item.options" :key="i">
                {{ option.label }}
              </a-checkbox>
            </template>
          </a-checkbox-group>
          <!--        radio-->
          <a-radio-group v-model:value="f.data[item.prop]" v-if="item.type === 'radio'">
            <template v-if="item.options">
              <a-radio :value="option.value" v-for="(option,i) in options" :key="i">
                {{ option.label }}
              </a-radio>
            </template>
          </a-radio-group>
          <!--        textarea-->
          <a-input v-if="item.type === 'textarea'" v-model:value="f.data[item.prop]" type="textarea"/>
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
    let f = reactive({
      data: {}
    });
    const formList = ref([...props.form]);
    watch(() => props.data, (e) => {
      let {data} = e;
      console.log(props.data);
      f.data = {...data};
    }, {deep: true, immediate: true})
    watch(f.data, () => {
      emit('update:data', f.data)
    }, {deep: true, immediate: true})
    return {f, formList, labelCol}
  }
})
</script>

<style scoped>

</style>