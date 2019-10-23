<template>
  <div class="p_login">
    <h3 class="title">用户登录</h3>
    <div class="login_content">
      <mt-field label="用户名" type="text" placeholder="请输入用户名" v-model="uname" ></mt-field>
      <mt-field label="密码" type="password" placeholder="请输入用户密码" v-model="upwd"></mt-field>
      <mt-button size="large" @click="test">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      uname:"tom",
      upwd:"123"
    }
  },
  methods:{
    test(){
      var reg=/^[a-z\d]{3,12}$/;
      if(!reg.test(this.uname)){
        this.$messagebox("","用户名格式错误");
        return;
      }
      if(!reg.test(this.upwd)){
        this.$messagebox("","密码格式错误");
        return;
      }
      (async ()=>{
        var res=await this.axios.get("login",{
          params:{
            uname:this.uname,
            upwd:this.upwd
          }
        });
      console.log(res.data);
      if(res.data.code==1){
        this.$toast("登录成功");
        this.$router.push('Product');
      }else{
        this.$messagebox("","用户名或密码错误");
      }
      this.uname="";
      this.upwd="";
      })();
        
      
    },
    
  },
  created(){
    var data=[1,2,3,4,5];
    console.log(data.slice(2,4));

  }
}
</script>

<style scoped>
  .login_content{
    padding:0 0.6rem;
  }
  .title{
    text-align:center;
    background-color:lightcoral;
    margin:0;
    padding:1rem 0;
  }
</style>
