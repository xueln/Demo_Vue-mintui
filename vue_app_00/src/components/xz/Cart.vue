<template>
  <div class="page_cart">
    <h2>购物车</h2>
    <div class="cart_list">
      <nav>
          <label class="check"><input type="checkbox" v-model="allchecked" @change="checkAllchange"> 全选</label> 
          <span class="pro">商品</span>
          <span class="price">单价</span>
          <!-- <span class="price">数量</span> -->
          <span class="delete">操作</span>
      </nav>
      <div class="cart_item" v-for="(item,index) of cart_list" :key="index" @change="curChange" >
        <label class="check">
          <input type="checkbox" v-model="item.isChecked">
        </label>
          <h4 class="pro">{{item.lname}}</h4>
          <p class="price">￥{{item.price.toFixed(2)}}</p>
          <div class="delete">
            <mt-button @click="del(item.id)" size="small" :data-id="item.id">删除</mt-button>
          </div>
      </div>
      <div style="height:2rem"></div>
      <div class="bottom">
        <mt-button size="small" @click="delAll">清空购物车</mt-button>
        <mt-button size="small" @click="del(someId)">删除指定商品</mt-button>
        <span>总计:¥{{total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cart_list:[],
      allchecked:false
    }
  },
  methods:{
    loadMore(){
      // 获取当前用户的购物车列表
    (async ()=>{
      var res=await this.axios.get("carts");
      console.log(res.data);
      if(res.data.code==-1){
        this.$messagebox("","请登录").then((res)=>{
          this.$router.push('/Login');
        });
      }else if(res.data.code==1){
        for (const c of res.data.data) {
          c.isChecked=false;
        }
        this.cart_list=res.data.data;
        console.log(res.data.data);
      }else{
        this.cart_list=[];
      }
    })();
    },
    checkAllchange(){
      for (const c of this.cart_list) {
        c.isChecked=this.allchecked;
      }   
    },
    curChange(e){
      if(e.target.nodeName=="INPUT"){
        if(this.cart_list.filter(elem=>elem.isChecked).length==this.cart_list.length){
          this.allchecked=true;
        }else{
          this.allchecked=false;
        }
      }
    },
    del(myId){
      if(myId.length==0){
        this.$toast("没有选中的商品");
        return;
      }
      console.log(myId);
    // this.$messagebox.confirm("",`确定删除这件商品吗?`).then(res=>{
      (async ()=>{
        try {
          await this.$messagebox.confirm("",`确定删除吗?`);
          var res=await this.axios.get("delItem",{
            params:{
              // id:e.target.dataset.id
              id:myId
            }
          });
          console.log(res.data);
          if(res.data.code==-2){
            this.$messagebox("","请登录").then(res=>{
              this.$router.push('/Login');
            });
          }else if(res.data.code==1){
            this.loadMore();
            this.$toast("删除成功");    
          }else{
            this.$toast("删除失败");
          }
        } catch (error) {
          console.log("取消");
        }
      })();
    // }).catch(err=>{
    //   console.log("已取消");
    // });  
    },
    delAll(){
      (async ()=>{
        try{
          await this.$messagebox.confirm("确定清空购物车所有商品吗")
          var res=await this.axios.get("delAll");
          if(res.data.code==-2){
            this.$messagebox("","请登录").then(res=>{
              this.$router.push('/Login');
            });
          }else if(res.data.code==1){
              this.$toast("删除成功");
              this.cart_list=[];
          }else{
              this.$toast("删除失败");
          }
        }catch(err){
          console.log("取消");
        }
      })();
    }
  
  },
  created() {
    this.loadMore(); 
  },
  computed:{
    total(){
      if(this.cart_list.length>0){
        return this.cart_list.filter(elem=>elem.isChecked).reduce((prev,elem)=>prev+elem.price*elem.count,0).toFixed(2);
      }
      else{
        return (0).toFixed(2);
      }
    },
    someId(){
      var ids="";
      for (const c of this.cart_list) {
        if(c.isChecked){
          ids+=c.id+",";
        }
      }
      // 去掉最后的一个逗号
      ids=ids.slice(0,-1);
      return ids;
      // return this.cart_list.filter(elem=>elem.isChecked).map(elem=>elem.id).join(","); 
    }
    // allId(){
    //   return this.cart_list.map(elem=>elem.id);
    // }
  }
}
</script>

<style scoped>
  p,h4{
    margin:0;
  }
  .page_cart h2{
    margin:0;
    padding:1rem 0.5rem;
    background-color: lightcoral;
    font-weight: normal;
  }
  .cart_list{
    padding: 0.2rem;
  }
  .cart_list nav{
    width:100%;
    height:2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:#eee;
   
  }
  .cart_list .pro{
    width:40%;
  }
  .check{
    width:13%;
  }
  .price{
    width:20%;
  }
  .delete{
    width:14%;
    background-color:transparent;
  }
  .cart_list .cart_item{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 0.2rem;
    padding:0.3rem 0;
    background-color: #FFF4E8;
  }
  .bottom{
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   bottom: 0;
   width:98%;
   background-color: #fff;
  }
</style>
