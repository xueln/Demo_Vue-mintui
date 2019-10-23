import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 引入Exam01组件
import Exam01 from "./components/exam/Exam01"
import Exam02 from "./components/exam/Exam02"
import Exam03 from "./components/exam/Exam03"
import Exam04 from "./components/exam/Exam04"
import Exam05 from "./components/exam/Exam05"
import Exam06 from "./components/exam/Exam06"
import Exam07 from "./components/exam/Exam07"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"
import Home from "./components/message/Home.vue"
import MyContainer from "./components/exam/my_ex/MyContainer.vue"
import Login from "./components/xz/Login.vue"
import Product from "./components/xz/Product.vue"
import Cart from "./components/xz/Cart.vue"
import A from "./components/vuex/A.vue"
import B from "./components/vuex/B.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    // 配置自定义组件路径
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam07',component:Exam07},
    {path:'/Fa08',component:Fa08},
    {path:'/Fa09',component:Fa09},
    {path:'/Home',component:Home},
    {path:'/MyContainer',component:MyContainer},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product},
    {path:'/Cart',component:Cart},
    {path:'/A',component:A},
    {path:'/B',component:B}
  ]
})
