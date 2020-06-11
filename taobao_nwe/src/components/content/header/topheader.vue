<template>
  <div class="topnav">
    <div class="site-nav">
      <div class="site-nav-bd" :style="{width:navWidth}">
        <ul class="site-nav-bd-l">
          <li class="site-nav-menu">
            <div class="site-nav-menu-hd">
              <span class="site-nav-region">中国大陆</span>
              <span class="site-nav-arrow">
                <img src="~assets/images/taoheader/toplogo/1.gif" />
              </span>
            </div>
            <div class="site-nav-menu-bd">
              <ul class="site-nav-region-list">
                <li
                  class="site-nav-region-item"
                  role="option"
                  v-for="(region,i) in regionList"
                  :key="i"
                >{{region}}</li>
              </ul>
            </div>
          </li>
          <li class="site-nav-menu" v-if="!user">
            <div class="site-nav-menu-hd">
              <div class="site-nav-sign">
                <a href="#" target="_top" @click="login" class="h">亲，请登录</a>
                <a href="#" target="_top" @click="register">免费注册</a>
              </div>
            </div>
          </li>
          <li class="site-nav-menu" v-else>
            <div class="site-nav-menu-hd">
              <div class="site-nav-user">
                <a href="#">{{user.name}}</a>
                <span class="site-nav-arrow">
                  <img src="~assets/images/taoheader/toplogo/1.gif" />
                </span>
              </div>
            </div>
            <div class="site-nav-menu-bd">
              <div class="site-nav-menu-bd-panel" id="users">
                <div class="site-nav-user-wrapper">
                  <a href="#" class="site-nav-user-avatar">
                    <img src="~assets/images/taoheader/toplogo/user.jpg" />
                  </a>
                </div>
                <div class="site-nav-user-info">
                  <p class="site-nav-user-operate">
                    <a href="#">账号管理</a>
                    <span>&#124;</span>
                    <a href="#" @click="Logout">退出</a>
                  </p>
                  <p class="level-info tao-score">淘气值：{{naughtyVal}}</p>
                  <p class="level-info">普通会员</p>
                </div>
                <a href="#" id="site-nav-user-privilege">查看你的专属权益</a>
              </div>
            </div>
          </li>
          <li class="site-nav-menu" v-if="user&&!isHome">
            <div class="site-nav-menu-hd">
              <a href="#">消息</a>
              <span class="site-nav-arrow">
                <img src="~assets/images/taoheader/toplogo/1.gif" />
              </span>
            </div>
          </li>
          <li class="site-nav-menu site-nav-mobile">
            <div class="site-nav-menu-hd">
              <a href="#" class="site-nav-login-info-nick">手机逛淘宝</a>
            </div>
          </li>
        </ul>
        <ul class="site-nav-bd-r">
          <li class="site-nav-menu" @mouseenter="getmodList(n)" @click="navliClick(mytaobao.name)" v-show="isHome?n>0:n>=0" v-for="(mytaobao,n) in mytaobaoList" :key="n">
            <div class="site-nav-menu-hd">
              <span
                class="site-nav-arrow site-nav-icon"
                :class="icon[n]"
                v-if="n==2 || n==3 || n==7? true : false"
              ></span>
              <a href="javascript:;">
                {{mytaobao.name}}
                <strong class="h" v-if="n==2 ? true : false">{{items.length}}</strong>
              </a>
              <li class="site-nav-pipe" v-if="n==4 ? true : false">|</li>
              <span class="site-nav-arrow" v-if="n==0 || n==4 ? false : true ">
                <img src="~assets/images/taoheader/toplogo/1.gif" />
              </span>
            </div>
            <div class="site-nav-menu-bd" v-if=" n==0 || n==4 ? false : true">
              <div class="site-nav-menu-bd-panel">
                <a href="#" v-for="(small,e) in mytaobao.smallList" :key="e">{{small}}</a>
                <div class="mini-cart" v-if=" n==2 ? true:false">
                  <ul class="shopList">
                    <li class="clearfix" @click.stop="shopClick(item)" v-for="(item,i) in items" :key="i">
                      <div class="details">
                        <a class="title">{{item.title}}</a>
                        <div>
                          <span class="price">￥{{item.price}} </span>
                          <span class="count">X {{item.count}}</span>
                        </div>
                      </div>
                      <div>
                        <img :src="item.src" alt="">
                      </div>
                    </li>
                  </ul>
                  <div class="mini-cart-ft">
                    <p>
                      <span v-if="!items[0]">您购物车里还没有任何宝贝。</span>
                      <span v-else class="totalPrice">
                        总价：
                        ￥{{$store.state.totalPrice}}
                        </span>
                      <a target="_top" @click.stop="buyCarClick" class="site-nav-btn">查看我的购物车</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-nav-menu-bd" v-if="n==7">
              <div class="site-nav-menu-panel" id="J_SiteMapBd" :style="{width:navmenuWidth}">
                <div class="site-nav-sitemap-mod" v-for="(mod,x) in modList" :key="x">
                  <div class="site-nav-sitemap-mod-wrap">
                    <div class="site-nav-sitemap-mod-bd">
                      <h4>{{mod.name}}</h4>
                    </div>
                    <div class="site-nav-sitemap-mod-hd">
                      <ul>
                        <li v-for="(modsmall,m) in mod.modsmallList" :key="m">
                          <a href="#">{{modsmall}}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topheader",
  props:{
    //当前导航的宽度
    navWidth:{
      type:String,
      default:"1190px"
    },
    //当前是否为首页
    isHome:{
      type:Boolean,
      default:true
    },
    //最后一个菜单的宽度
    navmenuWidth:{
      type:String,
      default:"1190px"
    }
  },
  data() {
    return {
      //当前是否有用户名
    //   user: this.$store.state.user,
      //当前是否有商品
      // items:this.$store.state.order,
      regionList: [
        "全球",
        "中国大陆",
        "中国香港",
        "中国台湾",
        "中国澳门",
        "韩国",
        "马来西亚",
        "澳大利亚",
        "新加坡",
        "新西兰",
        "加拿大",
        "美国",
        "日本"
      ],
      icon: [
        "site-nav-icon",
        "site-nav-icon",
        "site-nav-icon2",
        "site-nav-icon3",
        "site-nav-icon",
        "site-nav-icon",
        "site-nav-icon",
        "site-nav-icon7"
      ],
      mytaobaoList: [
        { name: "淘宝网首页" },
        { name: "我的淘宝", smallList: ["已买到的宝贝", "我的足迹"] },
        { name: "购物车" },
        { name: "收藏夹", smallList: ["收藏的店铺", "收藏的宝贝"] },
        { name: "商品分类" },
        {
          name: "千牛卖家中心",
          smallList: [
            "免费开店",
            "已卖出的宝贝",
            "出售中的宝贝",
            "卖家服务市场",
            "卖家培训中心",
            "体验中心",
            "问商友"
          ]
        },
        { name: "联系客服", smallList: ["消费者客服", "卖家客服"] },
        {
          name: "网站导航",
        }
      ],
      modList:[]
    };
  },
  computed:{
        //当前是否有用户名
        user:{
            get(){
                return this.$store.state.user
            },
            set(){

            }
        },
        items:{
            get(){
                return this.$store.state.order
            },
            set(){

            }
            
        },
        //用户的淘气值
        naughtyVal(){
            return (()=>{
                let Val = 0
                for(let item of this.$store.state.myorder){
                    Val += Math.floor(item.totalPrice/100)
                }
                return Val
            })()
        }
  },
  methods:{
    register(){
      this.$router.push("/register")
    },
    login(){
       this.$router.push("/login")
    },
    buyCarClick(){
        if(this.$route.name=="buycar"){
            return
        }else{
            this.$router.push("/buyCar")
        }
    },
    //购物车点击了当前商品
    shopClick(item){
      let src = item.src
      let res = src.match(/^http:\/\/localhost:8080\/images\/home(\S*)/)
      let imgsrc = res[1]
      sessionStorage.goods = JSON.stringify(item)
      this.$store.commit("seegoods", item)
      this.$router.push("/purchase"+imgsrc)
    },
    Logout(){
      this.user = null
      this.$store.state.user = null
      this.$store.state.token = null
      this.$store.state.order = []
      this.$store.state.goods = {}
      this.$store.state.myorder = []
      localStorage.user&&localStorage.removeItem("user")
      localStorage.token&&localStorage.removeItem("token")
      sessionStorage.user&&sessionStorage.removeItem("user")
      sessionStorage.token&&sessionStorage.removeItem("token")
      sessionStorage.removeItem("order")
      sessionStorage.removeItem("goods")
      sessionStorage.removeItem("myorder")
      if(this.$route.name == "buycar" || this.$route.name == "myorder"){
          this.$router.push("/login")
      }
    },
    navliClick(name){
      if(name=="淘宝网首页"){
        this.$router.push("/home")
      }else if(name=="我的淘宝"){
          if(this.$route.name=="myorder"){
              return
          }else{
                this.$router.push("/myorder")
          }
      }else if(name=="购物车"){
          if(this.$route.name=="buycar"){
              return
          }else{
                this.$router.push("/buycar")
          }
      }

    },
    //网站导航移入请求数据
    getmodList(i){
        if(i==7){
            let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
            let SmodList = (home.header&&home.header.modList)?home.header.modList:[]
            if(SmodList.length){
                this.modList = SmodList
            }else{
                this.$axios({
                mounted:"get",
                url:"http://localhost:8080/headerData",
                params:{
                    type:"header",
                    options:{
                        name:"modList"
                    }
                }
                }).then(res=>{
                    this.modList = res
                    let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
                    home.header = home.header?home.header:{}
                    home.header.modList = res
                    sessionStorage.home = JSON.stringify(home)
                })
            }
        }
    }
  },
  mounted(){
      let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
      let Sheader = home.header?home.header:{}
    //   let user = this.$store.state.user
    //   let User = localStorage.user?JSON.parse(localStorage.user):null
    let User = this.$store.state.user
        if(Sheader.mytaobaoList){
            this.mytaobaoList = Sheader.mytaobaoList
        }
        else{
            this.$axios({
            method:"get",
            url:"http://localhost:8080/headerData",
            params:{
                type:"header",
                options:{
                    name:"mytaobaoList"
                }
            }
            }).then(res=>{
                this.mytaobaoList = res
                let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
                home.header = home.header?home.header:{}
                home.header.mytaobaoList = res
                sessionStorage.home = JSON.stringify(home)
            })
      }
    
    let Sorder = sessionStorage.order?JSON.parse(sessionStorage.order):undefined    
    if(User&&Sorder){
        this.items = JSON.parse(sessionStorage.order)
        this.$store.commit("setOrder",JSON.parse(sessionStorage.order))
        let price = 0
        for (let item of this.$store.state.order) {
            price += item.count * parseInt(item.price)
        }
	    this.$store.state.totalPrice = price
    }else if(User&&Sorder==undefined){
        this.$axios({
            method: "get",
            url: "http://localhost:8080/Verification"
		}).then(res => {
			this.$axios({
                method: "get",
                url: "http://localhost:8080/getUserOrderData",
                params: {
                    user: {
                        name: User.name,
                        tel: User.tel
                    },
                    type: "ShoppingCar"
                }
            }).then(res => {
                this.$store.commit("setOrder",res)
                sessionStorage.order = JSON.stringify(res);
                let price = 0
                for (let item of this.$store.state.order) {
                    price += item.count * parseInt(item.price)
                }
                this.$store.state.totalPrice = price
            }).catch(err => {
                console.log(err);
                });
        }).catch(err => {
                alert(err.data.msg);
                this.$store.state.user = null
                this.$store.state.token = null
                this.$store.state.order = []
                this.$store.state.goods = {}
                this.$store.state.myorder = []
                localStorage.user&&localStorage.removeItem("user")
                localStorage.token&&localStorage.removeItem("token")
                sessionStorage.user&&sessionStorage.removeItem("user")
                sessionStorage.token&&sessionStorage.removeItem("token")
                sessionStorage.order&&sessionStorage.removeItem("order")
                sessionStorage.goods&&sessionStorage.removeItem("goods")
                sessionStorage.myorder&&sessionStorage.removeItem("myorder")
                this.$router.push("/login");
            });
    }else if(!User){
        // return
        //console.log("没有这个用户哦");
    }
    
    //我的订单数据

    //订单中的商品
    let Smyorder = sessionStorage.myorder?JSON.parse(sessionStorage.myorder):null

    if (User&&Smyorder==null) {
      this.$axios({
        method: "get",
        url: "http://localhost:8080/Verification"
      })
        .then(res => {
          this.$axios({
            method: "get",
            url: "http://localhost:8080/getUserOrderData",
            params: {
              user: {
                name: User.name,
                tel: User.tel
              },
              type: "myOrder"
            }
          })
            .then(res => {
                this.$store.commit("setmyorder",res)
                sessionStorage.myorder = JSON.stringify(res);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
            alert(err.data.msg);
            this.$store.state.user = null
            this.$store.state.token = null
            this.$store.state.order = []
            this.$store.state.goods = {}
            this.$store.state.myorder = []
            localStorage.user&&localStorage.removeItem("user")
            localStorage.token&&localStorage.removeItem("token")
            sessionStorage.user&&sessionStorage.removeItem("user")
            sessionStorage.token&&sessionStorage.removeItem("token")
            sessionStorage.order&&sessionStorage.removeItem("order")
            sessionStorage.goods&&sessionStorage.removeItem("goods")
            sessionStorage.myorder&&sessionStorage.removeItem("myorder")
            this.$router.push("/login");
        });
    }else if(User&&Smyorder){
        this.$store.commit("setmyorder",Smyorder)
    }else if(!User){
        return
        // console.log("没有用户,请登录！");
    }
    
  }
};
</script>
<style scoped>
a {
  color: #555555;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: #ff4e00;
  text-decoration: none;
  cursor: pointer;
}
.clearfix::before {
  content: "";
  display: table;
}
.clearfix::after {
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}
.topnav .site-nav {
  z-index: 10000;
  width: 100%;
  height: 36px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}
.site-nav .site-nav-bd {
  margin: 0 auto;
  height: 35px;
  background: #f5f5f5;
}
.site-nav .site-nav-bd .site-nav-bd-l {
  float: left;
}
.site-nav .site-nav-bd .site-nav-bd-r {
  float: right;
}
.site-nav .site-nav-menu {
  float: left;
}
.site-nav .site-nav-menu .site-nav-menu-hd {
  z-index: 10002;
  position: relative;
  padding: 0 6px;
  height: 35px;
  line-height: 35px;
}
.site-nav .site-nav-region {
  margin-right: 7px;
  height: 34px;
  float: left;
}
.site-nav .site-nav-arrow {
  width: 12px;
  height: 7px;
  line-height: 7px;
  display: block;
  margin-top: 13px;
  float: left;
  cursor: text;
}
.site-nav-arrow > img {
  width: 6px;
  height: 4.6px;
}
.site-nav .site-nav-menu:hover .site-nav-menu-bd {
  display: block;
}
.site-nav .site-nav-menu .site-nav-menu-bd {
  z-index: 10001;
  position: relative;
  display: none;
  margin-top: -1px;
}
.site-nav .site-nav-menu .site-nav-menu-md {
  z-index: 10001;
  position: relative;
  display: none;
  margin-top: -1px;
}
.site-nav .site-nav-menu .site-nav-menu-bd .site-nav-region-list {
  padding: 8px 0;
  position: absolute;
  left: 0;
  top: 0;
  line-height: normal;
  border: 1px solid #eee;
  background: #fff;
  max-height: 270px;
  overflow-y: scroll;
  border: 1 solid #f4f4f4;
}
.site-nav-region-item {
  width: 242px;
  height: 29px;
  line-height: 29px;
  padding-left: 8px;
  cursor: pointer;
}
.site-nav-region-item:hover {
  background-color: #f5f5f5;
}
.site-nav .site-nav-menu .site-nav-menu-hd {
  z-index: 10002;
  position: relative;
  padding: 0 6px;
  height: 35px;
  line-height: 35px;
}
.site-nav-menu-hd .site-nav-sign {
  display: block;
}
.site-nav .site-nav-bd .h {
  color: #f22e00 !important;
}
.site-nav .site-nav-menu .site-nav-menu-hd a {
  float: left;
  margin-right: 7px;
  font-size: 12px;
  color: #6c6c6c;
}
.site-nav-menu-hd a:hover {
  color: #f22e00 !important ;
}
.site-nav-menu-hd .site-nav-login-info-nick {
  display: inline-block;
  max-width: 98px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.site-nav .site-nav-icon {
  color: #f40;
  height: 12px !important;
  width: 12px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 3px;
}
.site-nav .site-nav-icon2 {
  background: url(~assets/images/taoheader/toplogo/car.svg) no-repeat center;
  background-size: cover;
}
.site-nav .site-nav-icon3 {
  background: url(~assets/images/taoheader/toplogo/col.png) no-repeat center;
  background-size: cover;
}
.site-nav .site-nav-icon7 {
  background: url(~assets/images/taoheader/toplogo/nav.svg) no-repeat center;
  background-size: cover;
}
.site-nav .site-nav-bd .site-nav-bd-r .site-nav-pipe {
  height: 35px;
  line-height: 35px;
  float: right;
}
.site-nav .site-nav-bd .site-nav-bd-r .site-nav-menu:hover {
  background: #fff;
}
.site-nav .site-nav-bd .site-nav-pipe {
  padding: 0 1.5px;
  font-style: normal;
  color: #ddd;
}
.site-nav .site-nav-menu .site-nav-menu-bd .site-nav-menu-bd-panel {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  line-height: normal;
  background: #fff;
  z-index: 10003;
  border: 1px solid #eee;
  border-top: 0 solid #f5f5f5;
}
.site-nav .site-nav-menu .site-nav-menu-bd .site-nav-menu-bd-panel a {
  display: block;
  padding: 0 5px;
  line-height: 28px;
  white-space: nowrap;
  color: #6c6c6c;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel a:hover {
  color: #6c6c6c;
  background: #f5f5f5;
}
#users {
  width: 248px;
}
.site-nav .site-nav-menu-bd .site-nav-user-wrapper {
  float: left;
  margin-right: 10px;
  margin-left: 9px;
  width: 62px;
  height: 62px;
  padding: 9px;
  box-sizing: content-box;
}
.site-nav .site-nav-menu-bd .site-nav-user-avatar {
  display: block;
  overflow: hidden;
  border: 3px solid #fff;
  border-radius: 50%;
  padding: 0 !important;
}
.site-nav-user-avatar img {
  display: block;
  width: 56px;
  height: 56px;
}
.site-nav-user-info {
  height: 80px;
  overflow: hidden;
}
.site-nav .site-nav-menu-bd .site-nav-menu-bd-panel .site-nav-user-info p {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}
.site-nav .site-nav-menu-bd .site-nav-menu-bd-panel .site-nav-user-info p a {
  color: #131212;
}
.site-nav-menu-bd
  .site-nav-menu-bd-panel
  .site-nav-user-info
  .site-nav-user-operate {
  margin: 0;
}
.site-nav-menu-bd
  .site-nav-menu-bd-panel
  .site-nav-user-info
  .site-nav-user-operate
  a {
  display: inline;
  color: #131212;
}
.site-nav
  .site-nav-menu-bd
  .site-nav-menu-bd-panel
  .site-nav-user-info
  .site-nav-user-operate {
  text-align: right;
}
.site-nav
  .site-nav-menu-bd
  .site-nav-menu-bd-panel
  .site-nav-user-info
  a:hover {
  color: #f40;
  background-color: #fff;
}
.site-nav .site-nav-user-info .site-nav-user-operate span {
  padding: 0 5px;
  font-style: normal;
  color: #ddd;
}
.site-nav-menu-bd .site-nav-menu-bd-panel .site-nav-user-info .level-info {
  color: #3c3c3c;
  margin: 0;
}
.site-nav-menu-bd .site-nav-menu-bd-panel .site-nav-user-info .tao-score {
  margin-top: 5px;
}
#site-nav-user-privilege {
  display: block;
  text-align: center;
  border: 1px solid #ffe8de;
  background: #fff0e8;
  padding: 4px 0;
  color: #131212;
  line-height: 14px;
}
#site-nav-user-privilege:hover {
  color: #f40;
  background: #fff0e8;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart {
  width: 296px;
  line-height: 20px;
  min-height: 40px;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList li{
  margin: 5px 0;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList img{
  display: block;
  cursor: pointer;
  width: 70px;
  height: 70px;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList .details{
  float: right;
  width: 220px;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList .details .title{
    white-space: break-spaces;
    line-height: inherit;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList .details .title:hover{
  color: #f40;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart .shopList .details .price{
  color: #f40;
}
.site-nav .site-nav-menu .site-nav-menu-bd-panel .mini-cart-ft {
  text-align: right;
}
.site-nav .mini-cart-ft p {
  margin-top: 10px;
  color: #000;
}
.site-nav .mini-cart-ft p>span.totalPrice{
  color: #f40;
  font-size: 18px;
  font-weight: bold;
  vertical-align: sub;
}
.site-nav
  .site-nav
  .site-nav-menu
  .site-nav-menu-bd-panel
  .mini-cart-ft
  p
  a:hover {
  color: #fff;
}
.site-nav .site-nav-bd .site-nav-menu-bd-panel .mini-cart-ft .site-nav-btn {
  display: inline-block;
  vertical-align: middle;
  padding: 0 10px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  background: #f40;
  border-radius: 2px;
}
#J_SiteMapBd {
  width: 1188px;
  position: absolute;
  overflow: hidden;
  right: 0;
  left: auto;
  min-height: 258px;
  line-height: normal;
  border: 1px solid #eee;
  background: #fff;
}
.site-nav .site-nav-sitemap-mod {
  float: left;
  width: 25%;
  overflow: hidden;
}
.site-nav .site-nav-sitemap-mod .site-nav-sitemap-mod-wrap {
  padding: 0 5px;
  overflow: hidden;
  border-right: 1px solid #eee;
}
.site-nav .site-nav-sitemap-mod .site-nav-sitemap-mod-bd h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
  overflow: hidden;
}
.site-nav .site-nav-sitemap-mod:nth-child(1) .site-nav-sitemap-mod-bd h4 {
  color: #fc4200;
}
.site-nav .site-nav-sitemap-mod:nth-child(2) .site-nav-sitemap-mod-bd h4 {
  color: #9fb838;
}
.site-nav .site-nav-sitemap-mod:nth-child(3) .site-nav-sitemap-mod-bd h4 {
  color: #d75696;
}
.site-nav .site-nav-sitemap-mod:nth-child(4) .site-nav-sitemap-mod-bd h4 {
  color: #2e9fdb;
}
.site-nav .site-nav-sitemap-mod .site-nav-sitemap-mod-hd li {
  float: left;
  padding-top: 5px;
  width: 24%;
  height: 25px;
  overflow: hidden;
}
.site-nav .site-nav-sitemap-mod:nth-child(1) .site-nav-sitemap-mod-wrap li {
  width: 24%;
  /* jquery选择器nth-child */
}
.site-nav .site-nav-sitemap-mod:nth-child(2) .site-nav-sitemap-mod-wrap li {
  width: 33%;
}
.site-nav .site-nav-sitemap-mod:nth-child(3) .site-nav-sitemap-mod-wrap li {
  width: 33%;
}
.site-nav .site-nav-sitemap-mod:nth-child(4) .site-nav-sitemap-mod-wrap li {
  width: 49%;
}
.site-nav .site-nav-sitemap-mod-wrap a {
  position: relative;
  float: left;
  height: 25px;
  line-height: 25px;
  margin: 0 2px;
  padding: 0 8px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.site-nav .site-nav-sitemap-mod-wrap a:hover {
  color: #fff;
}
.site-nav
  .site-nav-sitemap-mod:nth-child(1)
  .site-nav-sitemap-mod-wrap
  a:hover {
  background-color: #f50;
}
.site-nav
  .site-nav-sitemap-mod:nth-child(2)
  .site-nav-sitemap-mod-wrap
  a:hover {
  background-color: #9fb838;
}
.site-nav
  .site-nav-sitemap-mod:nth-child(3)
  .site-nav-sitemap-mod-wrap
  a:hover {
  background-color: #d75696;
}
.site-nav
  .site-nav-sitemap-mod:nth-child(4)
  .site-nav-sitemap-mod-wrap
  a:hover {
  background-color: #2e9fdb;
}
</style>>
