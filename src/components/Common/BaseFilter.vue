<template>
  <div style="margin-bottom:30px;margin-top:10px;">
    <a-form layout="inline" :model="formState">
      <template v-for="query in filterList">
        <a-button
            style="margin:0 5px;"
            v-if="query['type'] === 'button'"
            @click="onClick(query['handle'],formState)"
        >
          {{ query['label'] }}
        </a-button>
        <a-form-item v-else :label="query['label']">
          <a-input
              v-if="query['type'] === 'input'"
              v-model:value.trim="formState[query['prop']]"
              v-bind="query['params']"/>
          <a-select
              v-if="query['type'] === 'select'"
              v-model:value="formState[query['prop']]"
              v-bind="query['params']"
              style="width:170px;"
          >
            <template v-for="option in query['options']">
              <a-select-option :value="option.value">
                {{
                  option.label
                }}
              </a-select-option>
            </template>
          </a-select>
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive,PropType} from 'vue';
export default defineComponent({
  props: {
    filters: {
      type: Array as PropType<object>,
      default: () => []
    }
  },
  setup(props) {
    const filterList = computed(() => props.filters || [])
    const formState = reactive({});
    const onClick = (handle: Function, formState: object) => {
      let data = {...formState}
      if (handle) handle(data)
      return false
    }
    return {
      filterList,
      formState,
      onClick
    };
  },
});
</script>

<style scoped>

</style>