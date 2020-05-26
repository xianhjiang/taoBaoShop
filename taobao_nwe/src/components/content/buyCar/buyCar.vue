<template>
  <div class="buyCar">
	  <topheader navWidth="990px" navmenuWidth="990px" :isHome="false"></topheader>
	  <topsearch width="990px" :issearchtaobao="false"></topsearch>
    <div class="i_bg">
      <div class="content marAuto">
        <table border="0" class="car_tab" cellspacing="0" cellpadding="0">
          <tr>
            <td
              class="car_th"
              :style="carstyle[index]"
              v-for="(car, index) in carList"
              :key="index"
            >{{car}}</td>
          </tr>
          <tr v-show="isshow" v-for="(item,i) in items" :key="i">
            <td>
              <div class="c_s_img">
                <img :src="item.src" />
              </div>
              <div class="c_s_name">{{item.title}}</div>
            </td>
            <td align="center">￥{{item.price}}</td>
            <td align="center">
			        <scrollAmaBtn :shopNumber="items[i].count" @getnumber="getnumber(i,item,$event)" :inputOption="inputOption" :buttonSize="buttonSize"></scrollAmaBtn>
            </td>
            <td align="center" style="color:#ff4e00;">￥{{parseInt(item.price)*item.count}}</td>
            <td align="center">{{shopIntegral(parseInt(item.price)*item.count)}}</td>
            <td align="center">
              <a @click="deleteClick(i)">删除</a>
            </td>
          </tr>
          <tr class="car_tab_1">
            <td colspan="6">
              <span class="fr">
                商品总价：
                <b>￥{{totalPrice}}</b>
              </span>
            </td>
          </tr>
          <tr valign="top" height="150">
            <td colspan="6" align="right">
              <a @click="back">
                <img src="@/assets/images/buycar/buy1.gif" />
              </a>
              &nbsp; &nbsp;
              <a href="#">
                <img @click="placeorder" src="@/assets/images/buycar/buy2.gif" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
	<taofooter></taofooter>
    <mongolia :Data="mcData" :flag="mcFlag" :flagOut="flagOut" @cancel="mccancel" @outActive="outActive">
        <template #content="{Data}">
            <div class="content">
                <h2>
                    <span>你的订单号为 :</span>
                    <span>{{Data.ordernumber}}</span>
                </h2>
                <h2>
                    <span>你支付的金额为 :</span>
                    <span>￥{{Data.totalPrice}}</span>
                </h2>
                <h2>
                    <span>你下单的时间为 :</span>
                    <span>{{Data.time}}</span>
                </h2>
                <div class="Choice">
                    <input type="button" @click="homeClick" value="返回首页">
                    <input type="button" @click="getMyOrder"  value="查看订单">
                </div>
            </div>
        </template>
    </mongolia>
  </div>
</template>
<script>
import topheader from "components/content/header/topheader";
import topsearch from "components/content/header/topsearch";
import taofooter from "components/content/footer/taofooter";
import scrollAmaBtn from 'components/common/scrollAmaBtn';
import mongolia from 'components/common/mongolia'
export default {
  name: "buyCar",
  data() {
    return {
      isshow: true,
      totalPrice: 0,
      carList: ["商品名称", "单价", "购买数量", "小计", "返还积分", "操作"],
      carstyle: [
        "width:490px",
        "width:140px",
        "width:150px",
        "width:130px",
        "width:150px",
        "width:150px"
	  ],
	  //输入框的参数
	  inputOption:{
		  width:"42px",
		  height:"22px",
		  fs:"14px"
	  },
	  //按钮组的参数
	  buttonSize:{
		width:"22px",
		height:"22px", 
      },
      //蒙层是否显示
      mcFlag:false,
      //蒙层退出动画
      flagOut:false,
      //蒙层所要展示的数据
      mcData:{}
    };
  },
  components: {
      topheader,
      topsearch,
      taofooter,
      scrollAmaBtn,
      mongolia
  },
  computed: {
    items:{
      get(){
          return this.$store.state.order;
      },
      set(){

      }
    },
    //每个商品 返回的积分
    shopIntegral(){
		return (Tprice)=>{
			return	(Math.floor(Tprice/10)+"R")
		}
    }
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    getMyOrder(){
        this.$router.push({
            path:'/myorder',
            query:{
                name:this.$store.state.user.name,
                tel:this.$store.state.user.tel
            }
        })
    },
    //获取此商品的数量以及总价格然后进行修改
    getnumber(i,item,n){
        
      if(n!=""&&this.$store.state.order&&this.$store.state.order[i]){
        //用巧妙的异步操作 解决了删除的同时会触发getnumber的方法 所引起的后台数据不匹配
        setTimeout(() => {
            if(item.src===this.$store.state.order[i].src){
                this.$store.dispatch("setshopCount",{i,n})
                let price = 0;
                for (let item of this.items){
                    price += item.count * parseInt(item.price);
                }
                    this.totalPrice = price;
        }
        }, 100)
      }
      
    },
    deleteClick(i) {
      this.$store.dispatch("deletegoods",i);
      let price = 0;
      for (let item of this.items) {
        price += item.count * parseInt(item.price);
      }
      this.totalPrice = price;
    },
    back() {
      this.$router.push("/home");
    },
    //退出蒙层
    mccancel(){
        this.mcFlag = false
        this.flagOut = false
    },
    //设置退出蒙层动画
    outActive(){
      this.flagOut = true
    },
    placeorder() {
      let item = {};
      let times = new Date();
      let y = times.getFullYear();
      let mm = times.getMonth() + 1;
      let d = times.getDate();
      let h = times.getHours();
      let m =
        times.getMinutes() < 10 ? "0" + times.getMinutes() : times.getMinutes();
      let s =
        times.getSeconds() < 10 ? "0" + times.getSeconds() : times.getSeconds();
      let time = y + "-" + mm + "-" + d + " " + h + ":" + m + ":" + s;
      item.time = time;
      item.totalPrice = this.totalPrice;
      item.state1 = "未付款";
      item.state2 = "未取消";
      item.ordernumber = "9912080711" +Math.floor(Math.random()*(100-10+1)+10)+this.totalPrice;
      item.orders = this.items;
      this.mcData = item
      this.$axios({
				method:"get",
				url:"http://localhost:8080/Verification"
            }).then(res=>{
                this.mcFlag = true
                this.$store.dispatch('addmyorder',item)
            }).catch(err=>{
                alert(err.data.msg)
				$router.push("/login")
            })
    }
  },
  watch:{
    totalPrice(newVal,oldVal){
      this.$store.commit("settotalPrice",newVal) 
    },
    items(newVal,oldVal){
        let price = 0;
        for (let item of this.items) {
        price += item.count * parseInt(item.price);
        }
        this.totalPrice = price;
    }
  },
  mounted() {
    let user = this.$route.query
    let User = this.$store.state.user
    
    if(user.tel==undefined||user.name==undefined){
        if(User&&User.name&&User.tel){
            this.$axios({
                method:"get",
                url: "http://localhost:8080/Verification"
            }).then(res=>{
                //更改当前路径
                this.$router.push({
                    path:"/buycar",
                    query:{
                        name:User.name,
                        tel:User.tel
                    }
                })
                //获取当前用户的数据
                this.$axios({
                        method:"get",
                        url:"http://localhost:8080/UserShoppingCart",
                        params:User
                        }).then(res=>{
                            this.$store.commit("setOrder", res)
                            sessionStorage.order = JSON.stringify(res)
                        })
            }).catch(err=>{
                alert(err.data.msg)
                this.$router.push("/login")
            })
        }else{
            alert("请先登录")
            this.$router.push("/login")
        }
        
    }
    else{
        if(User&&User.name&&User.tel&&user.name==User.name&&user.tel==User.tel){
            this.$axios({
                method:"get",
                url: "http://localhost:8080/Verification"
            }).then(res=>{
                    this.$axios({
                        method:"get",
                        url:"http://localhost:8080/UserShoppingCart",
                        params:user
                        }).then(res=>{
                            this.$store.commit("setOrder", res)
                            sessionStorage.order = JSON.stringify(res)
                        }).catch(err=>{
                            alert(err.data.msg)
                            this.$router.push("/login")
                        })
            }).catch(err=>{
                alert(err.data.msg)
                this.$router.push("/login")
            })
        }else{
            alert("此用户名还没有登录!请登录")
            this.$router.push("/login")
        }
        
    }
    let price = 0;
    for (let item of this.items) {
      price += item.count * parseInt(item.price);
    }
    this.totalPrice = price;
  }
};
</script>
<style scoped>
.buyCar>.mongolia .content{
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
}
.buyCar>.mongolia .content>h2{
    line-height: 50px;
}
.buyCar>.mongolia .content>h2>span{
    margin: 0 10px;
}
.buyCar>.mongolia .content .Choice input{
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    color:#fff;
    background-color: #f40;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 40px 10px;
}
.content {
  width: 990px;
  overflow: hidden;
}
.i_bg {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
}
.marAuto {
  margin: 0 auto;
}
table.car_tab {
  border-collapse: collapse;
  border: 1px solid #eaeaea;
  width: 990px;
  margin-bottom: 50px;
  font-family: "宋体";
}
table.car_tab tr td {
  border-collapse: collapse;
  line-height: 22px;
  border: 0;
  border-bottom: 1px solid #eaeaea;
  padding: 15px 20px;
}
table.car_tab tr td.car_th {
  background-color: #f6f6f6;
  font-size: 14px;
  border-right: 1px solid #eaeaea;
  padding: 8px 20px;
  font-family: "Microsoft YaHei";
  text-align: center;
}
.c_s_img {
  width: 73px;
  height: 73px;
  overflow: hidden;
  float: left;
  /* display:inline; */
  margin-right: 10px;
  border: 1px solid #eaeaea;
}
.c_s_img img{
	width: 100%;
	height: 100%;
}
.c_s_name {
  line-height: 16px;
  margin-top: 31px;
}
.car_tab_1 {
  height: 70px;
  font-family: "Microsoft YaHei";
  border-bottom: 0;
}
.car_tab_1 .fr {
  float: right;
}
.fr b {
  font-size: 22px;
  color: #ff4e00;
}
</style>