<template>
  <div>
    <a-table :dataSource="tableData" :columns="tableColumns">
      <template #handle="e">
        <a-button
            class="table-handle-btn"
            v-for="(button,index) in tableHandles"
            :key="index"
            @click="button.click($event,e)">
          <div>
            {{ button.title }}
          </div>
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

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
    const tableData = props.tableData;
    const tableColumns = props.tableColumns;
    const tableHandles = props.tableHandles
    return {tableData, tableColumns, tableHandles}
  }
})
</script>

<style scoped>
.table-handle-btn {
  margin-right: 10px;
}
</style>