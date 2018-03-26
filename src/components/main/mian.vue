<template>
  <div id="main">
    <el-container direction="vertical">
      <el-header is="publicHeader"></el-header>
      <el-container direction="horizontal">
        <el-aside width="200px">左侧导航栏</el-aside>
        <el-main>内容区域</el-main>
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
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 540px;
  }
</style>
