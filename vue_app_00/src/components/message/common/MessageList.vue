<template>
  <div>
    <message class="itemStyle" v-for="(item,index) of msgs" :key="index" :title="item.title" :subtitle="item.subtitle" :sendtime="item.time" :imageurl="require('../../../assets/a_7.png')"></message>
  </div>
</template>

<script>
// 引入项目的模拟数据文件
import Msg from '../json/messagelist.json'
import Message from './Message.vue'
export default {
  data(){
    return {
      msgs:Msg.data
    }
  },
  created(){
    console.log(Msg.data[0].img);
  },
  components:{
    "message":Message
  }
}
</script>

<style>
  .itemStyle{
    border-bottom:0.5px dotted #d9d9d9;
  }
</style>

