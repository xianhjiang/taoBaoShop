var express = require("express");
var app = express()
var router = require("./router")
//解决跨域问题
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });
//开放public下面的目录
  app.use(express.static("./public"))

  //使用路由
  app.use(router)
  app.listen(8080,function(){
      console.log("连接服务器成功 请访问http://localhost:8080");
      
  })