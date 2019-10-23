<template>
  <div>
    <img :src="focused?selectedImg:narmalImg" class="imgstyle">
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  // 声明接收父元素传递数据
  props:{
    focused:false,
    selectedImg:{default:""},
    narmalImg:{default:""}
  }
}
</script>

<style>
  .imgstyle{
    width:2rem;
  }
</style>

