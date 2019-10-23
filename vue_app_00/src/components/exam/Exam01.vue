<template>
  <div>
    <h1>Exam01</h1>
    <h3>自定义组件Exam01.vue</h3>
  </div>
</template>
<script>
export default {
  created() {
    // 组件创建成功后 执行
    // 默认3s后消失
    this.$toast({message:"添加成功"});
  },
}
</script>

