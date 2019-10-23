<template>
  <div>
    <h1>Exam04</h1>
    <!-- 开关组件 移动端项目使用 -->
    <mt-switch v-model="val2" @change="handle2">开关选项</mt-switch>
    <!-- 单选列表 -->
    <mt-radio title="单选列表" :options="['a','b','c']" v-model="val3"></mt-radio>
    <mt-button size="large" @click="get3">获取</mt-button>
    <mt-radio title="东哥今天多大了？" :options="options" v-model="val4"></mt-radio>
    <mt-button size="large" @click="get4">获取年龄</mt-button>
    <mt-button @click="getU">click</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      val2:false,
      val3:'a',
      options:[
        {label:"去年",value:"24"},
        {label:"今年",value:"23"},
        {label:"明年",value:"22"}
        ],
      val4:''
    }
  },
  methods:{
    handle2(){
      console.log(this.val2);
    },
    get3(){
      // 获取用户选中的单选列表中的值
      console.log(this.val3);
    },
    get4(){
      console.log(this.val4);
    },
    getU(){
        var str="get-element-by-id";
        str=str.replace(/-/g," ");
        str=str.replace(/\b[a-z]/g,function(kw){
          return kw.toUpperCase();
        });
        console.log(str);
    }
  }
}
</script>
