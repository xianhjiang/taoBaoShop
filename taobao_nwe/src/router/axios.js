import originAxios from "axios";

export default function axios(config){
    let axiosInstance = originAxios.create({
        // baseURL:"http://localhost:8080",
        timeout: 8000
    })
    // 配置请求和响应拦截
    //请求拦截
	axiosInstance.interceptors.request.use(option => {
		let Token = localStorage.token?localStorage.getItem('token'):sessionStorage.getItem('token')
		option.headers.Authorization = Token
		return option
	},err=>{
		
	})
	//响应拦截
	axiosInstance.interceptors.response.use(res => {
		return res.data
	},err=>{
		// console.log(err);
		// console.log(err.response)
		return Promise.reject(err.response) //这里相当于 是让后续的执行catch里面的方法
		// return err
	})
    return axiosInstance(config) //这里相当于return了一个promise对象
}