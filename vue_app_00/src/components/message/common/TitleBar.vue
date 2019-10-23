<template>
  <div class="titlebar">
    <span>{{title}}</span>
    <div class="right-img">
      <div>
        <img @click="mySearch" :src="imgSearch" slot="icon">
      </div>
      <div>
        <img @click="myAdd" :src="imgAdd" slot="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    title:{default:""},
    imgSearch:{default:""},
    imgAdd:{default:""},
    mySearch:{type:Function},
    myAdd:{type:Function}
  },
  methods:{
   
  }
}
</script>

<style scoped>
  .titlebar{
    box-sizing: border-box;
    background-color: #393A3E;
    display: flex;
    position: fixed;
    z-index:999;
    width:100%;
    height:4rem;
    justify-content:space-between; 
    align-items: center;
    border-radius:0.2rem;
    padding:0 0.5rem 0;
    color:#fff;
    font-size: 1.3rem;
  }
  .right-img{
    display: flex;
  }
   img{
    width:1.8rem;
    margin-left:1rem;
  }
</style>

