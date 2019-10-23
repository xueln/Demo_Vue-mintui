<template>
  <div>
    <!-- 表单 复选框 -->
    <mt-checklist title="喜欢的城市" :options="['天津','北京','杭州']" v-model="val"></mt-checklist>
    <!-- 因为是复选框 选中的会是多个值 所以val中保存的是数组  -->
    <mt-button @click="getCity">提交</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      val:[]
    }
  },
  methods:{
    getCity(){
      console.log(this.val);
    }
  }
  
}
</script>
<style>

</style>

