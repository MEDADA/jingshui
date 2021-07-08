<template>
  <div>
    <a-skeleton v-if="loading" active/>
    <BaseTable :col="tableCol" :row="tableRow"></BaseTable>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BaseTable from "@/components/Table/BaseTable.vue";

export default defineComponent({
  name: "index",
  components: {BaseTable},
  setup() {
    const loading = ref(false);
    const tableCol = ref([]);
    const tableRow = ref([]);
    return {
      loading,
      tableCol,
      tableRow
    }
  }
})
</script>

<style scoped>

</style>