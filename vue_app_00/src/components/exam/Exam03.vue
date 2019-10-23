<template>
  <div>
    <h2>Exam03</h2>
    <mt-field label="用户名" placeholder="请输入用户名"
    :attr="{maxlength:10}" v-model="uname" ></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    <mt-field label="年龄" placeholder="请输入年龄" type="number" v-model="age"></mt-field>
    <mt-button size="large" @click="reg">用户注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      age:""
    }
  },
  methods:{
    reg(){
      // 功能：验证用户输入表单
      // 1.创建正则表达式 用来验证用户名和密码
      var reg1=/^[a-z\d]{3,12}$/i;
      // 2.创建正则表达式 验证年龄
      var reg2=/^\d{2}$/;
      // 验证用户名
      if(!reg1.test(this.uname)){
        this.$messagebox("","用户名格式错误");
        this.uname="";
        var u=document.querySelector(`[type=text]`);
        ;
        return;
      }
      if(!reg1.test(this.upwd)){
        this.$messagebox("","密码格式错误");
        this.upwd="";
        return;
      }
      if(!reg2.test(this.age)){
        this.$messagebox("","年龄格式错误");
        this.age="";
        return;
      }
      this.$messagebox("Welcome","注册成功");
      
    }
  }
}
</script>

<style>

</style>
