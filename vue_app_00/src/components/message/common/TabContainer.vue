<template>
<!-- 面板 -->
  <div>
    <message v-for="i of 3" :key="i"></message>
  </div>
</template>
<script>
// 引入单条消息记录组件
import Message from './Message.vue'
export default {
  data(){
    return {
      
    }
  },
  components:{
   "message":Message
  }
}
</script>
<style>


</style>
