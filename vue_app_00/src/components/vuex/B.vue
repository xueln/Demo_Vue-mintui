<template>
  <div>
    <h1>B.vue 演示使用vuex集中保存数据</h1>
    <h2>成亮老师的年龄{{$store.getters.getAge}}</h2>
    <h2>{{$store.getters.getList}}</h2>
    <h2>{{$store.getters.getCar}}</h2>
    <button @click="clearAge">清空年龄[异步]</button>
  </div>
</template>
<script>
export default {
  methods:{
    clearAge(){
      this.$store.dispatch("modifyAge");
    }
  }
}
</script>
