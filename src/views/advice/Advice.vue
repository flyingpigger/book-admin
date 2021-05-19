<template>

  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        prop="title"
        label="书籍名称"
        width="1000">
    </el-table-column>
    <el-table-column
        prop="value"
        label="书籍得分"
        width="180">
    </el-table-column>
    <el-table-column
        prop="rank"
        label="书籍排名">
    </el-table-column>
  </el-table>

</template>

<script>

import {getAdvice} from "@/network/advice"

export default {
  name: "Advice",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    getAdvice().then((res) => {
      this.tableData = res
    })
  }
}

</script>

<style scoped>

</style>