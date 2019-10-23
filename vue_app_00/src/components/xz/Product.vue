<template>
  <div class="page_pro">
    <h2>商品列表</h2>
    <div class="pros">
      <div class="pros_item" v-for="(item,index) of products" :key="index">
        <div>
          <img :src="img_baseurl+item.img_url" alt="">
        </div>
        <h4 class="ptitle">{{item.lname}}</h4>
        <p>￥{{item.price.toFixed(2)}}</p>
        <mt-button @click="addCart(index)"  size="large">加入购物车</mt-button>
      </div>
      <mt-button  @click="nextPage" size="large">查看更多</mt-button>
        <mt-button @click="go_carts">查看购物车</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      img_baseurl:"http://127.0.0.1:5050/",
      products:[],
      pno:0
    }
  },
  methods:{
    loadMore(){
      this.pno++;
      (async ()=>{
        var res=await this.axios.get("product",{
          params:{
            pno:this.pno
          }
      });
        this.products=this.products.concat(res.data.data);
        console.log(this.products);
      })();
    },
    nextPage(){
      console.log("next");
      this.loadMore();
    },
    addCart(i){
      (async ()=>{
        var res=await this.axios.get("addcart",{
          params:{
            lid:this.products[i].lid,
            lname:this.products[i].lname,
            price:this.products[i].price
          }
        });
        console.log(res.data);
        if(res.data.code==-1){
          // 通常提供的组件是异步的 需要注意
          this.$messagebox("","请先登录").then((res)=>{
            this.$router.push('/Login');
          }); 
        }else if(res.data.code==-2){
          this.$messagebox("","添加失败");
        }else{
          this.$toast(res.data.msg);
        }
      })();
    },
    go_carts(){
      this.$router.push('/Cart');
    }
  },
  created() {
   this.loadMore();
  },
}
</script>

<style  scoped>
  .page_pro h2{
    margin:0;
    padding:1rem 0;
    background-color: lightcoral;
    font-weight: normal;
  }
  .pros{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:0.6rem 0.5rem 0.5rem;
  }
  .pros>div.pros_item{
    box-sizing: border-box;
    width:49%;
    border:0.6px solid #ccc;
    padding:0.4rem 0.6rem;
    margin-bottom:0.5rem;
    border-radius: 0.2rem;
  }
  .pros_item .ptitle{
    margin:0.6rem 0;
  }
  .pros_item p{
    color:brown;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    text-align: left;
  }
  .pros_item div:first-child{
    text-align: center;
  }
  .pros_item img{
    height:134px;
  }

</style>
