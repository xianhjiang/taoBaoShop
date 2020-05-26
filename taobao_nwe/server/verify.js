const jwt = require("jsonwebtoken")
const verify = {
    setToken(content,secretOrPrivateKey,time){
        return new Promise(resolve=>{
            let token = jwt.sign(content,secretOrPrivateKey,{
                expiresIn:time
            })
            resolve(token)
        })

    },
    // getToken(token,secretOrPrivateKey,callback){
    //     return new Promise((resolve,rejext)=>{
    //         // 判断token是否存在，这里是根据空格分割
    //         if(!token.split(' ').length){
    //             reject({error: 'The token value is empty'})
    //         }else{
    //             let data = jwt.verify(token,secretOrPrivateKey,callback)
    //             // resolve(data)
    //         }
    //     })
    // }
    getToken(token,secretOrPrivateKey){
       return jwt.verify(token,secretOrPrivateKey,(err,decoded)=>{
            if(err){
                switch (err.name) {
                    case 'JsonWebTokenError':
                    // return res.status(403).send({ code: -1, msg: '无效的token' });
                    return 1
                    //   break;
                    case 'TokenExpiredError':
                    // return res.status(403).send({ code: -1, msg: 'token过期' });
                    return 2
                    //   break;
                }
            }
            return decoded
        })
    }
}
module.exports = verify