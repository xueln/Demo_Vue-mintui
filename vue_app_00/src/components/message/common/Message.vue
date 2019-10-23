<template>
  <div class="messgae_item">
    <div class="left">
      <img :src="imageurl" alt="">
      <div class="content">
        <h3>{{title}}</h3>
        <p>{{subtitle}}</p>
    </div>
    </div>
    
    <div class="time">{{sendtime}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    imageurl:{default:""},
    title:{default:""},
    subtitle:{default:""},
    sendtime:{default:""}
  },
  created(){
   console.log(this.imageurl);
  }
}
</script>

<style>
  .messgae_item{
    display:flex;
    padding:1rem 0.5rem;
    justify-content: space-between;
  }
  .left img{
    width:3.5rem;
    height:3.5rem;
  }
  .left,.content{
    display:flex;
  }
  .content{
    flex-direction: column;
    margin-left:1rem;
  }
  .content p{
    margin-top:0.5rem;
    color:#393A3E;
  }
  .content h3,p{
    margin:0;
  }
</style>

