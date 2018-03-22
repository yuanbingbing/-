<template>
  <div id="main">
    <el-container direction="vertical">
      <el-header is="publicHeader"></el-header>
      <el-container direction="horizontal">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 引入公共的头部
import publicHeader from '@/components/publicHeader/publicHeader'
export default {
  components: {
    publicHeader
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
</style>
