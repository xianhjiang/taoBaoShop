var fs = require("fs")
const purchasepath = "./data/home.json"
const User = require("./user")
const dbpath = "./user.json"
const hDpath = "./data/home.json"
//用户请求home中的数据
exports.getHomeData =async(type,callback)=>{
    let homeData = fs.readFileSync(hDpath,"utf8")
    homeData = JSON.parse(homeData)
    let data 
    if(typeof type == "string"){
        for(let item in homeData){
            if(item == type){
                data = homeData[item]
                callback&&callback(null,data)
            }
        }
    }else if(type instanceof Array){
        data = {}
        for(let name of type){
            for(let item in homeData){
                if(name == item){
                    data[item] = homeData[item]
                    break
                }
            }
        }
        callback&&callback(null,data)
    }
    return data
}

//查找当前商品数据
exports.findimgdata = function(imgsrc,Mname,callback){
    fs.readFile(purchasepath,"utf8",function(err,data){
        if(err){
            callback(err)
        }
       let Data = JSON.parse(data)
       if(Mname=="center"){
            for(let i = 0;i < Data.center.length;i++){
                let data1 = Data.center[i].centerLeft.imgs.find(item=>{
                    return item.src == imgsrc
                })
                if(data1!=undefined){
                    return callback(null,data1)
                }
                let data2 = Data.center[i].centerMid.find(item=>{
                    return item.src == imgsrc
                })
                if(data2!=undefined){
                    return callback(null,data2)
                }
                let data3 = Data.center[i].centerRight.find(item=>{
                    return item.src == imgsrc
                })
                if(data3!=undefined){
                    return callback(null,data3)
                }
                return callback(true,null)
            }
       }
       else if(Mname=="flashsale"){
            let flashsale = Data.flashsale
            let sellLeft = flashsale.sellLeft
            let shellSmall1 = flashsale.sellRight.shellSmall[0]
            let shellSmall2 = flashsale.sellRight.shellSmall[1]
            let shellBig = flashsale.sellRight.shellBig
            let data1 = sellLeft.find((item)=>{
                return item.src == imgsrc
            })
            if(data1!=undefined){
                return callback(null,data1)
            }
            let data2 = shellSmall1.find((item)=>{
                return item.src == imgsrc
            })
            if(data2!=undefined){
                return callback(null,data2)
            }
            let data3 = shellSmall2.find((item)=>{
                return item.src == imgsrc
            })
            if(data3!=undefined){
                return callback(null,data3)
            }
            let data4 = shellBig.find((item)=>{
                return item.src == imgsrc
            })
            if(data4!=undefined){
                return callback(null,data4)
            }
            return callback(true,null)
       }
       else{
           callback(true,null)
       }
       
    })
}

//保存当前用户的购物车数据
exports.saveUserShopping = function(user,data,callback){
    let UserShoppingCar = data
    //查找是否有这个用户
    User.find(user.tel,(err,isHave)=>{
        if(err){
            callback(err)
        }
        if(isHave){
            fs.readFile(dbpath,"utf8",(err,data)=>{
                if(err){
                    callback(err)
                }
                let usersObject = JSON.parse(data)
                let users = usersObject.users
                let userDate = users.find(item=>{
                    return item.tel === user.tel
                })
                userDate.ShoppingCar = JSON.parse(UserShoppingCar)
                fs.writeFile(dbpath,JSON.stringify(usersObject),function(err,data){
                    if(err){
                        callback(err)
                    }
                    console.log("保存成功");
                    callback(null)
                })
            })
        }else{
            //一般情况是不会进去的 因为不可能不存在用户
            User.save(user,(err)=>{
                if(err){
                    callback(err)
                }
                console.log("保存成功")
                callback(null)
            })
        }
    })
}

//获取用户的购物车数据
exports.getUserShopping = (user,callback)=>{
    User.UserDatafindOne(user,(err,data)=>{
        if(err){
            callback(err)
        }
        let UserShoppingCart
        if(data==undefined){
            callback({msg:"没有此用户,请重新登录"})
        }else{
            if(data.ShoppingCar){
                UserShoppingCart = data.ShoppingCar
            }else{
                UserShoppingCart = []
            }
            callback(null,UserShoppingCart)
        }
        
    })
}

//修改用户的购物车商品数量 shopCountData为一个对象 包括了当前的索引和count最新值
exports.changeShopCount = (user,shopCountData,callback)=>{
    fs.readFile(dbpath,"utf8",(err,data)=>{
        if(err){
            callback(err)
        }
        if(data){
            let usersObject = JSON.parse(data)
            let users =usersObject.users
            let userDate = users.find(item=>{
                return item.tel == user.tel
            })
            userDate.ShoppingCar[shopCountData.i].count = parseInt(shopCountData.n)
            fs.writeFile(dbpath,JSON.stringify(usersObject),(err)=>{
                if(err){
                    callback(err)
                }
                callback(null)
            })
        }
        
    })
}

//删除用户购物车的此商品
exports.deleteShop = (user,i,callback)=>{
    fs.readFile(dbpath,"utf8",(err,data)=>{
        if(err){
            callback(err)
        }
        let usersObject = JSON.parse(data)
        let users =usersObject.users
        let userDate = users.find(item=>{
            return item.tel == user.tel
        })
        
        let UserShoppingCar = userDate.ShoppingCar
        UserShoppingCar.splice(i,1)
        
        fs.writeFile(dbpath,JSON.stringify(usersObject),(err)=>{
            if(err){
                callback(err)
            }
            console.log("删除成功");
            
            callback(null)
        })
        
    })
}

//保存用户的订单
exports.saveUserOrder =(user,order,callback)=>{
    User.find(user.tel,(err,isHave)=>{
        if(err){
            callback&&callback(err)
        }
        if(isHave){
            fs.readFile(dbpath,"utf8",(err,data)=>{
                if(err){
                    callback&&callback(err)
                }
                let usersObject = JSON.parse(data)
                let users = usersObject.users
                let userDate = users.find(item=>{
                    return item.tel === user.tel
                })
                userDate.ShoppingCar = []
                userDate.myOrder = userDate.myOrder?userDate.myOrder:[]
                userDate.myOrder.unshift(order)
                fs.writeFile(dbpath,JSON.stringify(usersObject),function(err,data){
                    if(err){
                        callback&&callback(err)
                    }
                    console.log("订单保存成功");
                    callback&&callback(null)
                })
            })
        }
    })
}

//获取用户的数据 type为要获取的类型
exports.getUserData = async(user,type,callback)=>{
    let data =await fs.readFileSync(dbpath,"utf8")
    let data1 = JSON.parse(data)
    let users = data1.users
    let User = users.find(item=>{
        return item.tel == user.tel
    })
    if(User&&User[type]){
        callback&&callback(null,User[type])
        return User[type]
    }else if(User&&(User[type]==undefined)){
        User[type] = []
        callback&&callback(User[type])
        return User[type]
    }else{
        callback&&callback(null)
        return null
    }
}