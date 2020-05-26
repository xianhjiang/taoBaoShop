var fs = require("fs");
var dbpath = "./user.json"
//保存当前用户
exports.save = function(user,callback){
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err){
            callback(err)
        }
        let usersObject = JSON.parse(data)
        let users = usersObject.users
        users.push(user)
        fs.writeFile(dbpath,JSON.stringify(usersObject),function(err,data){
            if(err){
                callback(err)
            }
            console.log("保存成功");
            callback(null)
        })
    })

    
}
//查找是否有此用户
exports.find = function(tel,callback){
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err){
            callback(err)
        } 
    
        let usersObject = JSON.parse(data)
        let users =usersObject.users
        let user = users.find(item=>item.tel===tel)
        let isHave = user==undefined?false:true
        callback(null,isHave)
    })
}
//登录状态时的验证 返回当前有用户
exports.findOne = function(user,callback){
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err){
            callback(err)
        }
        let usersObject = JSON.parse(data)
        let users = usersObject.users
        let userDate = users.find(item=>{
            return item.tel === user.tel
        })
        callback(null,userDate)
    })
}
//获取用户商品数据的验证 返回当前有用户
exports.UserDatafindOne = function(user,callback){
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err){
            callback(err)
        }
        let usersObject = JSON.parse(data)
        let users =usersObject.users
        let userDate = users.find(item=>{
            return item.tel === user.tel&&item.name === user.name
        })
        callback(null,userDate)
    })
}