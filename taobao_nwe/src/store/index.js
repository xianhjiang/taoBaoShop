import Vue from 'vue'
import Vuex from 'vuex'
import $axios from "../router/axios"
import $router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	//当前详情的商品
	goods:{},
	//购物车里面的商品 
	order:[],
	//订单里面的商品
	myorder:[],
	//总价
	totalPrice:0,
	user:null,
	token:null,
  },
  mutations: {
	  //添加商品到详情
  		seegoods(state,item){
			state.goods=item
			if(item.count){
				return
			}else{
				state.goods.count=1
			}
			
		},
		//设置当前商品的数量
		setgoodsCount(state,count){
			state.goods.count = count
			let Sgoods = JSON.parse(sessionStorage.goods)
			Sgoods.count = count
			sessionStorage.goods = JSON.stringify(Sgoods)
		},
		//加入购物车
		ordergoods(state){
			let order = []
			if(sessionStorage.order == undefined){
				
			}else{
				order = JSON.parse(sessionStorage.order)
			}
			for(let item of state.order){
				if (item.title==state.goods.title) {
					item.count=state.goods.count
					let i = state.order.findIndex((data)=>{
						return data.title == item.title
					})
					let Sorder = JSON.parse(sessionStorage.order)
					Sorder[i].count = state.goods.count
					sessionStorage.order = JSON.stringify(Sorder)
					return
				}
			}
			if (state.goods.count==null) {
				state.goods.count=1
			}
			
			state.order.push(state.goods)
			order.push(state.goods)
			sessionStorage.order = JSON.stringify(order)
		},
		//设置购物车中的商品
		setOrder(state,data){
			state.order = data
			sessionStorage.order = JSON.stringify(data)
		},
		//设置此商品的数量
		setshopCount(state,data){
			state.order[data.i].count = data.n
			sessionStorage.order = JSON.stringify(state.order)
			let price = 0;
			for (let item of state.order){
				price += item.count * parseInt(item.price);
			}
			state.totalPrice = price;
		},
		//设置总价
		settotalPrice(state,data){
			state.totalPrice = data
		},
		//删除此用户购物车的该商品
		deletegoods(state,i){
			state.order.splice(i,1)
			let Sorder = JSON.parse(sessionStorage.order)
			Sorder.splice(i,1)
			sessionStorage.order = JSON.stringify(Sorder)
			let price = 0;
			for (let item of state.order){
				price += item.count * parseInt(item.price);
			}
			state.totalPrice = price;
		},
		//添加订单
		addmyorder(state,items){
			state.myorder.push(items)
			state.order = []
			sessionStorage.order = "[]"
			let Smyorder = sessionStorage.myorder?JSON.parse(sessionStorage.myorder):[]
			Smyorder.unshift(items)
			sessionStorage.myorder = JSON.stringify(Smyorder)
		},
		//设置用户的订单
		setmyorder(state,data){
			state.myorder = data
		},
		//添加用户
		addUser(state,data){
			let isRemember = data.isRemember
			state.user = data.user
			if(isRemember){
				localStorage.user = JSON.stringify(data.user)
			}else{
				sessionStorage.user = JSON.stringify(data.user)
			}
			
		},
		//添加凭证
		addToken(state,data){
			let isRemember = data.isRemember
			state.token = data.token
			if(isRemember){
				localStorage.token = data.token
			}else{
				sessionStorage.token = data.token
			}
			
		},
		//刷新用户
		updataUser(state){
			if(localStorage.user){
				state.user = JSON.parse(localStorage.user)
				state.token = localStorage.token
			}else if(sessionStorage.user){
				state.user = JSON.parse(sessionStorage.user)
				state.token = sessionStorage.token
			}
		}

  	
  },
  actions: {
		//设置此商品的数量
		setshopCount({commit,state},data){
			$axios({
				method:"get",
				url:"http://localhost:8080/Verification"
			}).then(res=>{
				$axios({
					method:"get",
					url:"http://localhost:8080/changeShopCount",
					params:{
						user:state.user,
						shopCountData:{
							i:data.i,
							n:data.n
						}
					}
				}).then(res=>{
					commit("setshopCount",data)
				}).catch(err=>{
					console.log(err);
				})
			}).catch(err=>{
				alert(err.data.msg)
				$router.push("/login")
			})
		},
		//删除此用户购物车的该商品
		deletegoods({commit,state},i){
			commit("deletegoods",i)
			$axios({
				method:"get",
				url:"http://localhost:8080/Verification"
			}).then(res=>{
				$axios({
					method:"get",
					url:"http://localhost:8080/deleteShop",
					params:{
						user:state.user,
						shopIndex:i
					}
				}).then(res=>{
					//放在此处页面有点卡顿 所以建议放在这 
				}).catch(err=>{
					console.log(err);
				})
			}).catch(err=>{
				alert(err.data.msg)
				$router.push("/login")
			})	
		},
		//添加订单
		addmyorder({commit,state},items){
			$axios({
				method:"post",
				url:"http://localhost:8080/addmyorder",
				params:{
					user:{
						name:state.user.name,
						tel:state.user.tel
					}
				},
				data:items
			}).then(res=>{
				commit("addmyorder",items)
			}).catch(err=>{
				console.log(err);
			})
		}
  },
  modules: {
  }
})
