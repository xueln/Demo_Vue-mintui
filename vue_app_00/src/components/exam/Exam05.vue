<template>
  <div>
    <!-- 复选框列表 -->
    <mt-checklist title="复选框列表" v-model="val5" :options="['a选项','b选项','c选项']"></mt-checklist>
    <mt-button @click="get5">获取值</mt-button>
    <!-- 面板 父面板中多个子面板 同一时间只能显示一个面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="item1">子面板1</mt-tab-container-item>
      <mt-tab-container-item id="item2">子面板2</mt-tab-container-item>
      <mt-tab-container-item id="item3">子面板3</mt-tab-container-item>
    </mt-tab-container>
  </div>
  
</template>

<script>
export default {
  data(){
    return {
      val5:[],
      active:'item1'
    }
  },
  methods:{
    get5(){
      console.log(this.val5);
    }
  }
}
</script>

