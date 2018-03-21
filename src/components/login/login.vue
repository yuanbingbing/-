<template>
  <el-container id="inputLogin" size="mini">
    <el-form :model="form"  ref="form" :rules="rules2"   id="froms" label-position="center" status-icon>
      <el-form-item label="姓名" label-width="100px" prop="name">
        <el-input type="text" v-model="form.name" style="width: 280px;" placeholder="请输入姓名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="100px" prop="pass">
        <el-input type="password" v-model="form.pass" style="width: 280px;" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="6" :push="12">
          <el-form-item>
            <el-button type="primary" v-on:click="submitForm()">登录</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default{
  data () {
    // 定义验证姓名的方法
    var validateName = (rulus, value, callback) => {
      // 判断value是否为空
      if (!value) {
        return callback(new Error('姓名不能为空'))
      }
      // 判断输入的是否为汉字
      // 定义判断汉字的正则表达式
      var han = /[\u4e00-\u9fa5]{2,4}/
      var hans = han.test(value)
      if (!hans) {
        callback(new Error('请输入正确的姓名'))
        this.tName = false
      } else {
        callback()
        // 姓名验证通过之后将标记改为true
        this.tName = true
      }
    }
    // 定义验证密码的函数
    var validatePass = (rulus, value, callback) => {
      // 判断密码是否为空
      if (value === '') {
        callback(new Error('密码不能为空'))
      }
      // 定义判断密码长度的正则
      var pwd = /^[a-z0-9]{1}[a-z0-9_]{5,15}$/
      if (!(pwd.test(value))) {
        callback(new Error('请输入首字符为字母或数字的6-16位的字母数字组合'))
        this.tPwd = false
      } else {
        callback()
        // 密码验证通过之后将标记改为true
        this.tPwd = true
      }
    }
    return {
    // 定义表单的数据
      form: {
        name: '',
        pass: '',
        // 定义验证姓名的标记
        tName: false,
        // 定义验证密码的标记
        tPwd: false
      },
      rules2: {
        // 定义验证姓名的方法
        name: [
          {validator: validateName, trigger: 'blur'}
        ],
        // 定义验证密码的方法
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 定义表单的提交事件
    submitForm () {
      // 判断用户名和密码是否正确
      if (this.tName && this.tPwd) {
        // 跳转到指定的页面
        this.$router.push({path: '/home/main'})
      }
    }
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
// 解决ie9浏览器的兼容问题
.el-container[data-v-3c0fb276]{
  display:-webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
/*定义容器的宽度和大小开始*/
#inputLogin{
  width: 100%;
  height: 600px;
}
/*定义表单开始*/
#froms{
  width:380px;
  height:280px;
  margin:160px auto;
}
/*定义表单结束*/
/*定义容器的宽度和大小结束*/
</style>
