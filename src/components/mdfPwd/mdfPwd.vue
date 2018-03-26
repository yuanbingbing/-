<template>
  <el-row id="pwd">
    <el-col :span="10" :offset="7" style="marginTop:120px">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <!-- 原密码开始 -->
        <el-form-item label="原始密码" prop="OriginalPass">
          <el-input type="password" v-model="ruleForm2.OriginalPass" auto-complete="off" placeholder="请输入6-10位的密码"></el-input>
        </el-form-item>
        <!-- 原密码结束 -->
        <!-- 新密码开始 -->
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入6-10位的新密码"></el-input>
        </el-form-item>
        <!-- 新密码结束 -->
        <!-- 确认密码开始 -->
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="两次输入的密码要一致"></el-input>
        </el-form-item>
        <!-- 确认密码结束 -->
        <!-- 提交按钮开始 -->
        <el-button type="success" :disabled="disabled">确认</el-button>
        <!-- 提交按钮结束 -->
      </el-form>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped="" type="text/css">
// 引入公共样式的scss文件
@import '../../assets/css/puclicStyle.scss';
// 定义容器的高度开始
#pwd {
	height:500px;
}
#pwd>.el-col{
	height:80%;
}
/*定义确认密码容器的高度开始*/
#pwd .el-form{
  @include height(80%)
  @include line-height(60px)
}
/*定义确认密码容器高度结束*/
</style>
<script>
export default {
  data () {
    // 调用验证原始密码的函数
    var validateOrigin = (rule, value, callback) => {
      // console.log(rule)
      // 判断输入的值是否为空
      if (!value) {
        // 如果为空停止当前函数的执行
        callback(new Error('请输入6-10位的密码!'))
        return false
      }
      // 判断当前的密码是否符合规则
      // 定义验证密码规则的正则表达式
      var valReg = /^[a-z0-9]{6,10}$/
      var testOrigin = valReg.test(value)
      if (!testOrigin) {
        // 如果密码格式不正确停止当前的函数执行
        callback(new Error('密码格式不正确,请重新输入!'))
      }
      // 验证通过调用回调函数
      callback()
      // 验证通过将标志改为真
      this.originPwd = true
    }
    // 调用验证首次输入新密码的函数
    var validatePass = (rule, value, callback) => {
      // 判断旧密码是否输入了
      if (!this.originPwd) {
        // 提示信息
        callback(new Error('请先输入旧密码!'))
        // 停止函数执行
        return false
      }
      // 新密码不能为空
      if (!value) {
        // 提示
        callback(new Error('密码不能为空'))
      }
      // 验证新密码的长度
      // 定义验证新密码的正则表达式
      var newReg = /^[a-z0-9]{6,10}$/
      var valnewPwd = newReg.test(value)
      // 判断密码格式是否正确
      if (!valnewPwd) {
        callback(new Error('新密码格式不正确!'))
      }
      // 判断旧密码是否与新密码一致
      if (this.ruleForm2.OriginalPass === this.ruleForm2.pass) {
        callback(new Error('旧密码不能与新密码一样!'))
        return false
      }
      // 格式验证通过
      callback()
      this.newPwd = true
    }
    // 调用验证再次输入密码的函数
    var validatecheckPass = (rule, value, callback) => {
      // 判断原密码是否已将输入
      if (!this.originPwd) {
        // 显示提示信息
        callback(new Error('请先输入旧密码!'))
        // 停止函数执行
        return false
      }
      // 判断新密码是否已经输入
      if (!this.newPwd) {
        // 显示提示信息
        callback(new Error('请先输入新密码!'))
        // 停止函数执行
        return false
      }
      // 判断输入是否为空
      if (!value) {
        // 提示信息
        callback(new Error('输入不能为空!'))
        // 停止函数执行
        return false
      }
      // 判断两次输入的密码是否一致
      if (this.ruleForm2.pass !== this.ruleForm2.checkPass) {
        // 提示信息
        callback(new Error('两次输入的密码不一致!'))
        // 停止函数执行
        return false
      }
      // 验证通过执行回调函数
      callback()
      // 把标志改为true
      this.checkPwd = true
      // 把按钮禁用标志给为false
      this.disabled = false
    }
    // 定义数据
    return {
      // 定义变量执行新密码的提交事件标志
      originPwd: false,
      newPwd: false,
      checkPwd: false,
      // 定义按钮是否禁用
      disabled: true,
      // 定义表单的数据对象
      ruleForm2: {
        OriginalPass: '',
        pass: '',
        checkPass: ''
      },
      // 定义表单验证规则对象
      rules2: {
        OriginalPass: [
          { validator: validateOrigin, trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatecheckPass, trigger: 'blur' }
        ]
      }
    }
  },
  // 定义函数
  methods: {

  }
}
</script>
