import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入第三方组件库 mint-ui
// 完整引入所有组件
import MintUI from "mint-ui";
// 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
// 将mint-ui注册到Vue
Vue.use(MintUI);
// 引入图标字体文件
import "./font/iconfont.css"
// 引入axios
import axios from 'axios'
// 设置属性 axios请求发送时保存session信息
axios.defaults.withCredentials=true;
// 设置ajax请求基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/";
// 将axios注册Vue实例
// Vue.use(axios);  axios不支持这种绑定写法 所以直接放在原型链上
Vue.prototype.axios=axios;
//功能 使用Vuex保存共享的数据
//1、引入第三方模块vuex
import Vuex from "vuex"
//2、注册实例 (先注册再创建存储对象)
Vue.use(Vuex);
//3、创建存储对象
var store=new Vuex.Store({
  state:{ //集中管理数据方法
    age:23,
    list:[1,2,3,4],
    car:"QQ",
    cartsCount:0
  },
  getters:{ //集中获取数据函数
    getAge(state){ //所有函数都有参数
      return state.age;
    },
    getList(state){
      return state.list;
    },
    getCar(state){
      return state.car;
    },
    // 获取购物车数量
    getCart(state){
      return state.cartsCount;
    }
  },
  mutations:{ //集中修改数据函数属性
    clear(state){
      state.age=0;
    },
    setCar(state){
      state.car="二手夏利";
    },
    // 传参数
    setAge(state,age){
      state.age=age;
    },
    // 购物车++
    addCart(state){
      state.cartsCount++;
    },
    // 购物车--
    subCart(state){
      state.cartsCount--;
    },
    // 清空购物车
    clearCart(state){
      state.cartsCount=0;
    }
  },
  actions:{ //集中保存异步修改数据函数
    modifyAge:(context)=>{
    // 异步调用clear
      setTimeout(() => {
        context.commit("clear");
      }, 2500);
    }

  }
});

//4、将存储对象添加vue实例添加属性

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
