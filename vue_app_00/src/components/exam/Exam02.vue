<template>
  <div>
    <button @click="del">删除</button>
    <button @click="handle2">显示一个交互式的提示框</button>
    <button  @click="handle3">显示确认框</button>
    <button @click="handle4">输入框</button>
  </div>  
</template>
<script>
export default {
  methods:{
    handle4(){
      this.$messagebox.prompt("请输入手机号").then(value=>{
        console.log(value);//点击确定后执行的回调函数
      }).catch(err=>{
        console.log(err);//点击取消后执行的回调函数
      })
    },
     handle2(){
      //  显示交互式的提示框
      // this.$messagebox("消息","数据加载成功");
      this.$messagebox("","数据加载成功");
    },
    handle3(){
      // 显示确认框   异步
      this.$messagebox.confirm("是否删除指定的数据").then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
      
    },
    del(){
      this.$toast({
        iconClass:"iconfont icon-chenggong",
        message:"删除成功",
        position:"bottom"
        });
    }
   
  }
}
</script>

