<template>
  <div>
    <h2>Sub09子组件</h2>
    <!-- h3绑定事件 事件处理函数是由父组件传过来的 -->
    <h3 @click="add3">{{msg}}</h3>
    <img :src="img3" alt="">
  </div>
</template>
<script>
export default {
  props:{
    msg:{default:""},
    add3:{type:Function},  //type 接收类型 Function 函数类型
    img3:{default:""}     //图片路径
  }
}
</script>