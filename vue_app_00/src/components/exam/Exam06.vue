<template>
  <div>
    <!-- 切换子面板的两种方法 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">美食子面板</mt-tab-container-item>
      <mt-tab-container-item id="tab2">购物子面板</mt-tab-container-item>
      <mt-tab-container-item id="tab3">休闲子面板</mt-tab-container-item>
    </mt-tab-container>
    <div>
      <mt-button data-b="tab1" @click="active='tab1'">美食</mt-button>
      <mt-button data-b="tab2" @click="active='tab2'">购物</mt-button>
      <mt-button data-b="tab3" @click="active='tab3'">休闲</mt-button>
    </div>
    <!-- <div @click="change">
      <mt-button data-b="tab1">美食</mt-button>
      <mt-button data-b="tab2">购物</mt-button>
      <mt-button data-b="tab3">休闲</mt-button>
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:"tab1"
    }
  },
  methods:{
    // change(e){
    //   if(e.target.nodeName=="BUTTON"){
    //     this.active=e.target.dataset.b;
    //   }
    // }
  }
}
</script>
