<template>
  <div>
    <h2>Fa09父组件</h2>
    <!-- 调用子组件 -->
    <sub09 msg="测试数据123" :add3="myadd3" :img3="require('../../assets/01.png')"></sub09>
    <!-- 传给子组件字符串及函数 -->
  </div>
</template>
<script>
// 引入子组件
import Sub09 from './Sub09.vue'
export default {
  data(){
    return {

    }
  },
  components:{"sub09":Sub09},
  // 注册子组件
  methods:{
    myadd3(){
      console.log("父组件传递的函数");
    }
  }
}
</script>

