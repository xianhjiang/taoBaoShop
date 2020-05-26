//处理service中的数据
exports.dandleSer =async(data,options,callback)=>{
    let ops = JSON.parse(options)
    let type = ops.type
    let name = ops.name?ops.name:undefined
    if(ops.i>=0){
        let data1 = data[type][name][ops.i]
        callback&&callback(null,data1)
        return data1
    }else if(name==undefined){
        let data1 = data[type]
        callback&&callback(null,data1)
        return data1
    }
    else{
        let data1 = data[type][name]
        callback&&callback(null,data1)
        return data1
    }
    
    
}

//处理header中的数据
exports.dandleHeader =async(data,options,callback)=>{
    let name = options.name
    let data1 = data[name]
    callback&&callback(data1)
    return data1
}