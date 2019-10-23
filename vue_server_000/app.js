const express=require('express');
const session=require('express-session'); 
const mysql=require('mysql');
const cors=require('cors');

// 创建数据库连接池
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"xz",
  connectionLimit:20
});

const server=express();
server.listen(5050);
// 托管静态资源
server.use(express.static('public'));
// 处理跨域
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));
// session的配置一定要在一切请求之前
// 配置session
server.use(session({
  secret:"128位字符串",   //用于再加密
  resave:true,
  saveUninitialized:true  //保存初始化数据
}));

// 登录接口
server.get("/login",function(req,res){
  var u=req.query.uname;
  var p=req.query.upwd;
  var sql="select id from xz_login where uname=? and upwd=md5(?)";
  pool.query(sql,[u,p],function(err,result){
    if(err) throw err;
    if(result.length>0){
      // req中自动会多出一个session对象
      // 获取当前登录用户的id 将用户的id放入到session对象中
      req.session.uid=result[0].id;
      console.log(req.session);
      res.send({code:1,msg:"登陆成功"});
    }else{
      res.send({code:-1,msg:"用户名或密码错误"});
    }
  });
});

// 商品分页显示
server.get("/product",function(req,res){
  var pn=req.query.pno;
  var psize=req.query.pageSize;
  if(!pn){
    pn=1;
  }
  if(!psize){
    psize=4;
  }
  var start=(pn-1)*psize;
  psize=parseInt(psize);
  var sql="select lid,lname,price,img_url from xz_laptop limit ?,?";
  pool.query(sql,[start,psize],function(err,result){
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result});
    }
    
  });
});

// http://127.0.0.1:5050/login?uname=tom&upwd=123
// http://127.0.0.1:5050/addcart?lid=1&lname=kk&price=9
// 添加购物车 !!此功能必须要求用户登录
// 购物车表中已有这个商品 将表中商品数量+1； 如果没有 代表是第一次添加，向表中添加一条数据
server.get("/addcart",function(req,res){
  // 判断用户是否登录
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请先登录"});
    return;
  }
  var $lid=req.query.lid;
  var $lname=req.query.lname;
  var $price=req.query.price;
  // 判断购物车表中是否有此商品
  var sql="select id from xz_cart where uid=? and lid=?";
  pool.query(sql,[uid,$lid],function(err,result){
    if(err) throw err;
    if(result.length==0){
      var sql1=`INSERT INTO xz_cart VALUES(NULL,${$lid},${$price},1,'${$lname}',${uid})`;
    }else{
      // 说明已经购物车表中已经有了这个商品
      var sql1=`update xz_cart set count=count+1 where uid=${uid} and lid=${$lid}`;
    }
    pool.query(sql1,function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:1,msg:"商品添加成功"});
      }else{
        res.send({code:-2,msg:"商品添加失败"});
      }
    })
  });
});

// 查询指定用户的购物车信息
server.get("/carts",function(req,res){
  // 获取当前用户的uid
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  var sql="select id,lname,price,count from xz_cart where uid=?";
  pool.query(sql,[uid],function(err,result){
    if(err) throw err;
    console.log(result);
    if(result.length>0){
      res.send({code:1,msg:"查询成功",data:result});
    }else if(result.length==0){
      res.send({code:2,msg:"查询成功,数据为空",data:result});
    }
  });
});

// http://127.0.0.1:5050/delItem?id=25
// 根据客户端提供的id  来删除指定的数据
server.get("/delItem",(req,res)=>{
  // 判断是否登录
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请先登录"});
    return;
  }
  var $id=req.query.id;
  var sql="delete from xz_cart where id in (?)";
  pool.query(sql,[$id],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  });
});

// 清空购物车数据
server.get("/delAll",(req,res)=>{
  // 判断是否登录
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请先登录"});
    return;
  }
  var sql="delete from xz_cart";
  pool.query(sql,(err,result)=>{
    if(result.affectedRows>0){
      res.send({code:1,msg:"全部数据删除成功"});
    }else{
      res.send({code:-1,msg:"删除成功"});
    }
  });
});