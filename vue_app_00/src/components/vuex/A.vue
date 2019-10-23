<template>
  <div>
    <h1>A.vue 演示使用vuex集中保存数据</h1>
    <h2>成亮老师的年龄{{$store.getters.getAge}}</h2>
    <h2>{{$store.getters.getList}}</h2>
    <h2>{{$store.getters.getCar}}</h2>
    <button @click="upCar">成亮老师的车升级了</button>
    <button @click="upAge(0)">过了许多年</button>
  </div>
</template>

<script>
export default {
  methods:{
    upCar(){
      // 调用修改共享数据的方式
      this.$store.commit("setCar");
    },
    upAge(a){
      setInterval(()=>{
        a++;
        this.$store.commit("setAge",a);
      },2000);
      
    }
  },
  created() {

    
  },
}
</script>
