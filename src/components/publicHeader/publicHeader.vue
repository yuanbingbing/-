<template>
  <el-header id="header">
    <el-row>
      <el-col :span="4">
        周报管理系统
      </el-col>
      <el-col :span="12" :offset="8">
        <el-col :span="4" :offset="20" id="sname" @click.native="modifyPsd()">
          <el-col :span="12">
            <img src="@/assets/imgs/Headportrait.png" width="40" alt="">
          </el-col>
          <span v-html="sname"></span>
        </el-col>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default{
  data () {
    return {
      // 定义用户名默认是猪八戒
      sname: '猪八戒'
    }
  },
  methods: {
    // 定义修改密码的函数
    modifyPsd: function () {
      this.$router.push('/home/main/mdfPwd')
    }
  },
  created () {
  }
}
</script>
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
  color:#fff;
  @include line-height;
  @include font-size;
}
/*定义用户信息的样式开始*/
#header #sname{
  height:60px;
  @include padding(0,10px,0,10px);
}
#header #sname:hover{
  background:$hover-bgcolor;
  @include cursor;
  color:$color;
}
/*定义用户名开始*/
#header #sname>span{
  display:inline-block;
  @include line-height(60px);
  @include font-size(14px,normal);
}
/*定义用户名结束*/
/*定义用户头像开始*/
#header #sname img{
  margin-top:10px;
}
/*定义用户头像结束*/
/*定义用户信息的样式结束*/
</style>
