<template>
  <div>
    <!-- 面板+底部导航栏 -->
    <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">首页面板</mt-tab-container-item>
        <mt-tab-container-item id="tab2">购物车面板</mt-tab-container-item>
        <mt-tab-container-item id="tab3">面板3</mt-tab-container-item>
      </mt-tab-container>
    <mt-tabbar fixed v-model="active">
      <!-- fixed 将底部导航栏固定在底部 -->
      <mt-tab-item id="tab1">
        <!-- 插槽属性 slot -->
        <img src="../../assets/01.png" alt="" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img src="../../assets/02.png" alt="" slot="icon">
        购物车
      </mt-tab-item>
    </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:'tab1'
    }
  }
}
</script>

