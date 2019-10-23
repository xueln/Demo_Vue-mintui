<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="title-bar">
        <title-bar title="微信(111)" :imgSearch="require('../../assets/ic_search.png')" :imgAdd="require('../../assets/ic_add.png')" :mySearch="mysearch" :myAdd="myadd"></title-bar>
      </div>
      <!-- 面板 里面是消息列表 -->
      <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab_message">
        <message-list></message-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="contacts"></mt-tab-container-item>
      <mt-tab-container-item id="find"></mt-tab-container-item>
      <mt-tab-container-item id="me"></mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航条 -->
      <mt-tabbar fixed v-model="active" class="tabbar">
        <mt-tab-item id="tab_message" @click.native="selectChange(0)">
          <!-- 切换图标 -->
          <!--第一种方法 :focused="active=='tab_message'?true:false" -->
          <!--第二种方法：给组件添加原生的点击事件 -->
          <tabbar-icon :focused="allSelect[0].isSelected" :selectedImg="require('../../assets/ic_weixin_selected.png')" :narmalImg="require('../../assets/ic_weixin_normal.png')"></tabbar-icon>
          微信
        </mt-tab-item>
        <mt-tab-item id="contacts" @click.native="selectChange(1)">
          <tabbar-icon :focused="allSelect[1].isSelected" :selectedImg="require('../../assets/ic_contacts_selected.png')" :narmalImg="require('../../assets/ic_contacts_normal.png')"></tabbar-icon>
          通讯录
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="selectChange(2)">
          <tabbar-icon :focused="allSelect[2].isSelected" :selectedImg="require('../../assets/ic_find_selected.png')" :narmalImg="require('../../assets/ic_find_normal.png')"></tabbar-icon>
          发现
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="selectChange(3)">
          <tabbar-icon :focused="allSelect[3].isSelected" :selectedImg="require('../../assets/ic_me_selected.png')" :narmalImg="require('../../assets/ic_me_normal.png')"></tabbar-icon>
          我
        </mt-tab-item>
      </mt-tabbar>
    </div> 
    </div> 
</template>

<script>
import TitleBar from './common/TitleBar.vue';
import MessageList from './common/MessageList.vue';
import TabBarIcon from './common/TabBarIcon.vue';
// 引入底部导航条图片组件

export default {
  data(){
    return {
      active:"tab_message",
      allSelect:[{isSelected:true},{isSelected:false},{isSelected:false},{isSelected:false}]
    }
  },
  components:{
    "title-bar":TitleBar,
    "message-list":MessageList,
    "tabbar-icon":TabBarIcon
  },
  methods:{
    mysearch(){
      console.log("搜索");
    },
    myadd(){
      console.log("添加");
    },
    selectChange(i){
      console.log(i);
      for(var j=0;j<this.allSelect.length;j++){
        if(j==i){
          this.allSelect[j].isSelected=true;
        }else{
          this.allSelect[j].isSelected=false;
        }
      }  
    }
  }
 
}
</script>

<style scoped>
.page-wrap{
  overflow: auto;
  padding-bottom:3.5rem;
}
 .title-bar{
   height:64px;
 }
 /* 覆盖原生组件-底部导航栏的样式 文字颜色*/
 /* 默认样式 */
 .mint-tabbar > .mint-tab-item{
   color:#999;
   font-weight:bold;
 }
 /* 选中时的样式 */
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: transparent;
  color:#45C018;
}
</style>
