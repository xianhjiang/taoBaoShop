<template>
   <div class='shop'>
       <div class="details">
           <h3>{{item.title}}</h3>
           <div class="logo">
               <img :src="logoSrc" alt="">
               海量新品 潮流穿搭 玩趣互动
           </div>
           <div class="Price">
               <p>
                    <span>价格</span>
                    <span class="Oprice">￥ {{item.price1}}</span>
               </p>
               <p>
                    <span>淘宝价</span>
                    <span class="presentPrice">￥ {{item.price}}</span>
                    <span class="welfarePrice">粉丝福利价</span>
               </p>
               <div class="comment">
                   <div class="comment1">
                       <p>221</p>
                       <p>累计评论</p>
                   </div>
                   <div class="comment2">
                       <p>301</p>
                       <p>交易成功</p>
                   </div>
               </div>
           </div>
           <div class="discount">
               <p>
                   <span>优惠</span>
                   <span class="J_coin">
                       <i></i>
                           淘金币可抵
                       <strong>2.28</strong>
                            元
                   </span>
               </p>
               <p>
                   <img :src="couponSrc" alt="">
                   <span>10元店铺优惠券，满180元可用</span>
                   <a href="#">领取</a>
               </p>
           </div>
           <div class="delivery">
               <span>配送</span>
               <div class="logisticInfo">
                   <span>四川成都</span>
                   至
                   <!-- <span>四川成都青羊区</span> -->
                   <threeLevelLinkage>
                       <template #title="{data}">
                           <span>
                            {{data.prov=="请选择"?"四川":data.prov}}{{data.city=="请选择"?"成都":data.city}}{{data.district=="请选择"?"":data.district}}
                          </span>
                       </template>
                   </threeLevelLinkage>
                   <span class="express">快递 免运费 <i></i></span>
                   <span>付款后7天内发货</span>
               </div>
           </div>
           <div class="number">
               <span>数量</span>
               <scrollAmaBtn :shopNumber="item.count" :btnImg="btnImg" @getnumber="getnumber" class="control"></scrollAmaBtn>
           </div>
           <div class="pay">
               <a href="#" class="buy">立即购买</a>
               <a href="javascript:;" class="addtocart" @click="buyClick">
                   <i></i>
                   加入购物车
                </a>
           </div>
           <div class="tb-extra">
               <p>
                   <span>承诺</span>
                   <span class="Promise1" v-for="(item,i) in promiseList" :key="i">
                       <img :src="item.src" alt="">
                        {{item.title}}
                   </span>
               </p>
               <p>
                   <span>支付</span>
                   <span class="Promise1" v-for="(item,i) in buyList" :key="i">
                       <img :src="item.src" alt="">
                        {{item.title}}
                   </span>
               </p>
           </div>
       </div>
       <div class="fdj">
           <magnifier :img="img"></magnifier>
           <ul class="selectGroup">
               <li v-for="(item,i) in item.srcList" :key="i">
                   <a href="#" @mouseenter="sleimgmouse(i)" :class="imgindex==i?'selected':''">
                       <img :src="item.minimg" alt="">
                   </a>
               </li>
           </ul>
           <div class="collection">
                <span>
                    <i class="tb-icon"></i>
                    <a href="#">收藏宝贝<span>(6304人气)</span></a>
                </span>
           </div>
       </div>
   </div>
</template>

<script>
import magnifier from 'components/common/magnifier'
import threeLevelLinkage from 'components/common/threeLevelLinkage'
import scrollAmaBtn from 'components/common/scrollAmaBtn'
export default {
   name:'shop',
   props:{
   },
   data () {
      return {
          //购买物品的数量
          number:1,
          couponSrc:require("@/assets/images/purchase/details/coupon.png"),
          logoSrc:require("@/assets/images/purchase/details/logo.png"),
          //当前选中的img索引值
          imgindex:0,
          //当前所选中的图片
          img:{},
          promiseList:[
              {src:require("@/assets/images/purchase/details/p1.png"),title:"订单险"},
              {src:require("@/assets/images/purchase/details/p2.jpg"),title:"7天无理由"},
              {src:require("@/assets/images/purchase/details/p3.png"),title:"公益宝贝"}
          ],
          buyList:[
              {src:require("@/assets/images/purchase/details/b1.png"),title:"蚂蚁花呗"},
              {src:require("@/assets/images/purchase/details/b2.png"),title:"信用卡支付"},
              {src:require("@/assets/images/purchase/details/b3.png"),title:"集分宝"}
          ],
          //按钮组里面的图片
          btnImg:{
              src1:require("@/assets/images/purchase/details/reduce.svg"),
              src2:require("@/assets/images/purchase/details/plus.svg")
          }
      };
   },

   components: {
       magnifier,
       threeLevelLinkage,
       scrollAmaBtn
   },

    computed: {
       //当前的数据
        item:{
            get(){
                return this.$store.state.goods 
            },
            set(newVal){
            }
        },
        //img的计算属性也可以的
        // img:{
        //     get(){
        //         return this.item.srcList[0]
        //     },
        //     set(){}
        // }
   },

    methods: {
        //移入谁显示谁的图片
       sleimgmouse(i){
           this.imgindex = i
           this.img = this.item.srcList[i]
       },
       getnumber(n){
           this.number = n
       },
       //加入购物车
       buyClick(){
           
           this.$axios({
            url: "http://localhost:8080/Verification",
            method: "get"
            }).then(res => {
                this.$store.commit('ordergoods')
                this.$axios({
                    method:"post",
                    url:"http://localhost:8080/saveUserShopping",
                    params:this.$store.state.user,
                    data:this.$store.state.order
                })
                
                this.$router.push({
                    path:'/buycar',
                    query:{
                        name:this.$store.state.user.name,
                        tel:this.$store.state.user.tel
                    }
                })
            }).catch(err=>{
                alert(err.data.msg)
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                this.$store.state.token=null
                this.$store.state.user=null
                this.$router.push('/login')
            })
            // this.$store.commit('ordergoods')
            // this.$router.push('/buycar')
       }
   },
    watch:{
        number(newValue, oldValue){
            this.$store.commit('setgoodsCount',newValue)
        },
        item(newValue, oldValue){
            this.img = newValue.srcList[0]
        }
    },
   mounted(){
        let currentPathOptions = this.$route.params
        let options = `Mname=${currentPathOptions.Mname}&&type=${currentPathOptions.type}&&modular=${currentPathOptions.modular}&&size=${currentPathOptions.size}&&name=${currentPathOptions.name}`
        let Url = "http://localhost:8080/purchase/imgdata?" + options
        let currentPath = this.$route.path
        //当前详情页面的商品
        if(this.$store.state.goods.src == undefined && sessionStorage.goods == undefined){
            this.$axios({
                method:"get",
                url:Url
            }).then(res=>{
                this.item = res
                this.img = res.srcList[0]
                this.$store.commit("seegoods", res)
                sessionStorage.goods = JSON.stringify(res)
            })
        }else{
            if(this.$store.state.goods.src != undefined){
                this.item = this.$store.state.goods
                this.img = this.item.srcList[0]
                sessionStorage.goods = JSON.stringify(this.$store.state.goods)
            }else{
                let goods = JSON.parse(sessionStorage.goods)
                let goodsSrc = goods.src.match(/^http:\/\/localhost:8080\/images\/home(\S*)/)[1]
                let currentSrc = currentPath.match(/^\/purchase(\S*)/)[1]
                
                if(goodsSrc==currentSrc){
                    this.item = JSON.parse(sessionStorage.goods)
                    this.$store.commit("seegoods", JSON.parse(sessionStorage.goods))
                    this.img = this.item.srcList[0]
                }else{
                        this.$axios({
                            method:"get",
                            url:Url
                        }).then(res=>{
                            this.item = res
                            this.img = res.srcList[0]
                            this.$store.commit("seegoods", res)
                            sessionStorage.goods = JSON.stringify(res)
                        }).catch(err=>{
                                console.log(err);
                        })
                 
                }
            }
       }
       //购物车里面的商品
       if(sessionStorage.order){
           this.$store.state.order = JSON.parse(sessionStorage.order)
       }else{
           this.$store.state.order = []
       }
       
   }
}
</script>
<style lang='css' scoped>
.shop{
    
    padding: 20px 0 20px 20px;
}
.shop .fdj{
    width: 400px;
}
.shop .fdj .selectGroup{
    display: flex;
    margin-top: 10px;
}
.shop .fdj .selectGroup li{
    width: 100%;
    text-align: center;
}
.shop .fdj .selectGroup li a{
    display:inline-block;
    border: 2px solid #fff;
    transition: border-color .2s;
}
.shop .fdj .selectGroup li a.selected{
    border-color: #f40;
}
.shop .fdj .selectGroup li img{
    display: block;
    width: 50px;
    height: 50px;
}
.shop .fdj .collection{
    margin-top: 10px;
}
.shop .fdj .collection i{
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: sub;
    background: url("~assets/images/purchase/jlt.png");
    background-position: -120px 0;
}
.shop .fdj .collection a{
    margin-left: 5px;
    color: #6C6C6C;
}
.shop .fdj .collection span:hover i{
    animation:Beat .2s;
}
@keyframes Beat{
    0%{
        transform: translateY(0);
    }
    25%{
        transform: translateY(-2px);
    }
    50%{
        transform: translateY(-5px);
    }
    75%{
        transform: translateY(-2px);
    }
    100%{
        transform: translateY(0);
    }
}
.shop .details{
    width: 480px;
    padding: 0 20px;
    float: right;
    color: #6c6c6c;
}
.shop .details h3{
    font-size: 16px;
    font-weight: 700;
    color: #3C3C3C;
}
.shop .details .logo{
    margin-top: 10px;
}
.shop .details .Price{
    position: relative;
    margin: 20px 0;
    padding: 10px;
    background-color:rgb(255,241,232);
}
.shop .details .Price p{
    height: 25px;
    margin: 0;
    line-height: 25px;
    color: #6c6c6c;
}
.shop .details .Price .Oprice{
    font-size: 14px;
    margin-left: 30px;
    color: rgb(60, 60, 60);
    font-weight: 400;
    text-decoration: line-through;
}
.shop .details .Price .presentPrice{
    color: #F40;
    font-size: 26px;
    font-weight: 700;
    vertical-align: middle;
    margin-left: 15px;
}
.shop .details .Price .welfarePrice{
    color: #FFF;
    background: #FF8E1B;
    vertical-align: sub;
    padding: 1px;
    margin-left: 4px;
}
.shop .details .Price .comment{
    position: absolute;
    top: 0px;
    right: 5px;
}
.shop .details .Price .comment div{
    display: inline-block;
    text-align: center;
    margin: 2px;
    padding: 3px;
    cursor: pointer;
}
.shop .details .Price .comment div:first-child{
    border-right: 1px solid #ffe4d0;
}
.shop .details .Price .comment div p{
    margin: 0;
    height: 16px;
    line-height: 16px;
}
.shop .details .Price .comment div p:first-child{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
}
.shop .details .Price .comment div:hover>p:first-child{
    color: #F40;
}
.shop .details .discount{
    margin: 20px 0;
    padding: 10px;
    color: #6c6c6c;
    background-color: rgb(255,249,245);
}
.shop .details .discount p{
    margin: 0;
    height: 25px;
    line-height: 25px;
}
.shop .details .discount p .J_coin{
    margin-left: 35px;
}
.shop .details .discount p .J_coin i{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: sub;
    background: url("~assets/images/purchase/jlt.png");
    background-position: -160px 0;
}
.shop .details .discount p+p{
    margin-left: 59px;
}
.shop .details .discount p+p img{
    vertical-align: sub;
}
.shop .details .discount p+p span{
    margin: 0 5px;
}
.shop .details .discount p+p a{
    border-bottom: 1px dotted #f40;
    color: #f40;
}
.shop .details .delivery{
    padding: 10px;
}
.shop .details .delivery .threeLevelLinkage{
    display: inline-block;
}
.shop .details .delivery .logisticInfo{
    display: inline-block;
    margin-left: 35px;
    color: #000;
}
.shop .details .delivery .logisticInfo .express{
    margin: 0 10px;
    cursor: pointer;
    border: 1px solid transparent;
}
.shop .details .delivery .logisticInfo .express i{
    display: inline-block;
    width: 0;
    height: 0;
    border-color: #606060 transparent transparent;
    border-width: 4px 4px 0;
    border-style: solid;
    vertical-align: 3px;
}
.shop .details .delivery .logisticInfo .express:hover{
    border: 1px solid #ff5002;
    background-color: #ffefe4;
    color: #ff5d13;
}
.shop .details .delivery .logisticInfo .express:hover>i{
    color: #ff5002;
    border-color: #ff5002 transparent transparent;
}
.shop .details .number{
    padding: 10px;
    margin-top: 50px;
}
.shop .details .number>span{
    vertical-align: 10px;
}
.shop .details .number .control{
    display: inline-block;
    margin-left: 35px;
}
.shop .details .pay{
    margin: 20px 0;
    padding: 10px;
    margin-top: 8px;
}
.shop .details .pay .buy{
    display: inline-block;
    width: 134px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    text-align: center;
    border-radius: 2px;
    color: #E5511D;
    border:1px solid #F0CAB6;
    background: #FFE4D0;
}
.shop .details .pay .addtocart{
    display: inline-block;
    width: 180px;
    margin-left: 10px;
    color: #FFF;
    background: #F40;
    font-size: 16px;
    text-align: center;
    line-height: 38px;
    border: 1px solid #F40;
    border-radius: 2px;
}
.shop .details .pay .addtocart i{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 3px;
    background: url("~assets/images/purchase/details/buy.svg");
    background-size: cover;
    vertical-align: -3px;
}
.shop .details .tb-extra{
    padding: 10px;
}
.shop .details .tb-extra span:first-child{
    margin-right: 40px;
}
.shop .details .tb-extra span img{
    vertical-align: bottom;
    margin-right: 5px;
}
.shop .details .tb-extra span:first-child~span{
    margin-right: 15px;
    cursor: pointer;
}
.shop .details .tb-extra span:first-child~span:hover img{
    animation:Beat .2s;
}
.shop .details .tb-extra p{
    margin: 20px 0;
}
</style>