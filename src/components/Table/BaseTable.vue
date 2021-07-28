<template>
  <div>
    <a-table :dataSource="tableData" :columns="tableColumns" rowKey="prop" key="prop">
      <template #handle="e" v-if="tableHandles && Array.isArray(tableHandles) && tableHandles.length > 0">
        <a-button
            class="table-handle-btn"
            v-for="(button,index) in tableHandles"
            :key="index"
            v-bind="button.option || {}"
            @click="button.click(e)">
          {{ button.title }}
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: "BaseTable",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableHandles: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {

    return {}
  }
})
</script>

<style scoped>
.table-handle-btn {
  margin-right: 10px;
}
</style>