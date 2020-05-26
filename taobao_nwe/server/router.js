var express = require("express")
var fs = require("fs")
var User = require("./user")
const userData = require("./data")
const md5 = require('blueimp-md5')
const verify = require("./verify")
const secretOrPrivateKey = "xhj*zxl"
const router = express.Router()
const hData = require("./handleData")

router.get("/register",function(req,res){
    var data = req.query
    User.find(data.tel,function(err,isHvae){
        if(err){
            return res.status(500).send('Server error.')
        }
        if(isHvae){
            return res.status(200).json({
                err_code:1,
                msg:"电话号码已经存在 请直接登录"
            })
        }else{
            data.password = md5(data.password)
           User.save(data,function(err){
               if(err){
                return res.status(500).send('Server error.')
               }
               return res.status(200).json({
                   err_code:0,
                   msg:"保存成功 请登录",
               })
           }) 
        }
    })
  

})

router.get("/login",function(req,res){
    let user = req.query
    User.findOne(user,function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        if(data!==undefined){
            if(data.password===md5(user.password)){ 
                user = {name:data.name,tel:data.tel}
                let user1 = {name:data.name,tel:data.tel}
                verify.setToken(user,secretOrPrivateKey,6000).then(token=>{
                    res.status(200).json({
                        err_code:0,
                        user:user1,
                        msg:"登录成功",
                        token,
                    })
                })
                
            }else{
                res.status(200).json({
                    err_code:1,
                    msg:"密码错误！ 登录失败"
                }) 
            }
        }else{
            res.status(200).json({
                err_code:2,
                msg:"没有此账号"
            }) 
        }

    })
    
})
router.get("/Verification",function(req,res){
    let token = req.get('Authorization') 
    if(token !== "null"){
        let Token =  verify.getToken(token,secretOrPrivateKey)
        console.log(Token);
        
        if(Token === 1){
            res.status(403).json({
                err_code:1,
                msg:"用户信息错误，请重新登录"
            })
        }else if(Token === 2){
            res.status(403).json({
                err_code:1,
                msg:"用户信息过期，请重新登录"
            })
        }else{
            res.status(200).json({
                err_code:0,
                msg:"成功"
            })
        }
    }else{
        res.status(403).json({
            err_code:1,
            msg:"用户信息不存在，请重新登录"
        })
    }
    
    
})

//请求home数据 
router.get("/homeData",async function(req,res){
    let type = req.query.type
    if(type == "subject"){
        let options = req.query.options
        let subject = await userData.getHomeData(type)
        let data = await hData.dandleSer(subject,options)
        return res.status(200).send(data)
    }
    userData.getHomeData(type,(err,data)=>{
        if(err){
            res.status(401).send(err)
        }
            res.status(200).send(data)
    })
    
})

//请求头部数据
router.get("/headerData",async(req,res)=>{
    let type = req.query.type
    let options = JSON.parse(req.query.options)
    let header = await userData.getHomeData(type)
    if(header){
        let data =await hData.dandleHeader(header,options)
        return res.status(200).send(data)
    }else{
        return res.status(401).send("数据读取错误！请重试")
    }
    

})

//请求详情页面的数据
router.get("/purchase/imgdata",function(req,res){
    let options = req.query
    let Mname = options.Mname
    let srcimg = `http://localhost:8080/images/home/${options.Mname}/${options.type}/${options.modular}/${options.size}/${options.name}`
    userData.findimgdata(srcimg,Mname,function(err,data){
        if(err){
            return res.status(404).send("没有此商品")
        }
        return res.status(200).send(data)
       
    })
})

//用户请求保存购物车数据
router.post("/saveUserShopping",async function(req,res){
    let user = req.query
    let str=''
    let i=0
    let data1
    req.on('data',function(data){
        console.log(`第${++i}次收到数据`)
        str+=data;
    });//当有一段数据到达的时候
    req.on('end',function(){
        data1 = str
        userData.saveUserShopping(user,data1,(err)=>{
            if(err){
                res.status(401).send(err)
            }
            res.status(200).send("保存成功")
        })
    })

    
    // let data1 = []
    // await req.on("data",async (data)=>{
    //     let Data = JSON.parse(data)
    //     data1 = JSON.stringify(Data)
    // })
    
})

//用户请求获取购物车数据
router.get("/UserShoppingCart",(req,res)=>{
    let user = req.query
    userData.getUserShopping(user,(err,data)=>{
        if(err){
            res.status(401).send(err)
        }
        console.log(data);
        res.status(200).send(data)
    })
})

//用户请求删除购物车的此商品
router.get("/deleteShop",(req,res)=>{
    let user = JSON.parse(req.query.user)
    let i = req.query.shopIndex
    userData.deleteShop(user,i,(err)=>{
        if(err){
            res.status(401).send(err)
        }
        res.status(200).send("删除成功")
    })
    
})

//用户请求改变商品数量
router.get("/changeShopCount",(req,res)=>{
    let user = JSON.parse(req.query.user)
    let shopCountData = JSON.parse(req.query.shopCountData)
    userData.changeShopCount(user,shopCountData,(err)=>{
        if(err){
            res.status(401).send({msg:"处理错误!!!"})
        }
        res.status(200).send("处理成功")
    })
})

//用户提交订单
router.post("/addmyorder",(req,res)=>{
    let user = JSON.parse(req.query.user)
    console.log("我执行了",req.query);
    let str=''
    let data1
    req.on('data',function(data){
        str+=data;
    });//当有一段数据到达的时候
    req.on('end',function(){
        data1 = JSON.parse(str)
        userData.saveUserOrder(user,data1,(err)=>{
            if(err){
                res.status(401).send("请求错误，请稍后再试")
            }
            res.status(200).send("成功")
        })
    })


})

//用户获取自己的一些数据 如购物车 订单等 type即为要获取的数据
router.get("/getUserOrderData",async(req,res)=>{
    let user =JSON.parse(req.query.user) 
    let type = req.query.type
    let order =await userData.getUserData(user,type)
    if(order){
        res.status(200).send(order)
    }else{
        res.status(401).send("请求错误，请稍后再试！")
    }
    
})


module.exports = router