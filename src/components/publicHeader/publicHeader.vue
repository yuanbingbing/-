<template>
  <el-header id="header">
    <el-row>
      <el-col :span="4">
        周报管理系统
      </el-col>
      <el-col :span="12" :offset="8">
        用户信息
      </el-col>
    </el-row>
  </el-header>
</template>
<script></script>
<style lang="scss" scoped="" type="text/css">
// 引入公共的scss文件
@import '../../assets/css/puclicStyle.scss';
// 定义导航条的宽高样式
#header{
  text-align: left;
  margin-bottom: 0;
  padding-right: 20px;
  background: $bg-color;
  border-radius: 0;
  @include line-height;
  @include font-size;
}
</style>
