<template>
  <div class="myorder">
    <orderheader></orderheader>
    <div class="m_content">
      <management :options="myorderOptins"></management>
      <div class="m_right">
        <p></p>
        <div class="mem_tit">我的订单</div>
        <table border="0" class="order_tab tab1" cellspacing="0" cellpadding="0">
          <tr>
            <td width="20%" v-for="(order,n) in orderList" :key="n" :style="ordc[n]">{{order}}</td>
          </tr>
          <tr v-for="(item,i) in items" :key="i">
            <td>
              <font>{{item.ordernumber}}</font>
            </td>
            <td>{{item.time}}</td>
            <td>￥{{item.totalPrice}}</td>
            <td>已确认，{{item.state1}}，{{item.state2}}</td>
            <td>
              <a @click="payment(i)">付款</a> ;
              <a @click="cancel(i)">取消</a>
            </td>
          </tr>
        </table>
        <div class="mem_tit">查看订单</div>
        <table border="0" class="order_tab tab2" cellspacing="0" cellpadding="0">
          <tr>
            <td width="135" align="right">主订单</td>
            <td width="220">
              <select class="jj" v-model="selval" name="order1">
                <option value="请选择" selected="selected">请选择...</option>
                <option v-for="(item,index) in items" :key="index">{{item.ordernumber}}</option>
              </select>
            </td>
            <td>
              <div class="btn_u">
                <a>查找订单</a>
              </div>
            </td>
          </tr>
        </table>
        <table border="0" class="order_tab tab3" cellspacing="0" cellpadding="0">
          <tr>
            <td class="car_th" v-for="(topall,e) in topallList" :key="e" :style="topa[e]">{{topall}}</td>
          </tr>

          <tr v-for="(item,i) in showitem" :key="i">
            <td>
              <div class="c_s_img">
                <img :src="item.src" />
              </div>
              <span class="c_s_name">{{item.title}}</span>
            </td>
            <td align="center">￥{{item.price}}</td>
            <td align="center">{{item.count}}</td>
            <td align="center">{{Math.floor(item.count*item.price/10)}}R</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import orderheader from "components/content/myOrder/orderheader";
import management from "components/content/myOrder/management";
import taofooter from "components/content/footer/taofooter";
export default {
  name: "myorder",
  data() {
    return {
      selval: "请选择",
      orderList: ["订单号", "下单时间", "订单总金额", "订单状态", "操作"],
      ordc: ["width:20%", "width:25%", "width:15%", "width:25%", "width:15%"],
      topallList: ["商品名称", "单价", "购买数量", "返还积分"],
      topa: ["width:340px", "width:140px", "width:150px", "width:140px"],
      myorderOptins: { title: "订单中心", childTitle: "我的订单" }
    };
  },
  components: {
    orderheader,
    management,
    taofooter
  },
  computed: {
    items() {
      return this.$store.state.myorder;
    },
    showitem() {
      for (let item of this.items) {
        if (this.selval == item.ordernumber) {
          return item.orders;
        }
      }
    }
  },
  methods: {
    payment(i) {
      this.items[i].state1 = "已付款";
      this.items[i].state2 = "未取消";
    },
    cancel(i) {
      this.items[i].state1 = "未付款";
      this.items[i].state2 = "已取消";
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
                    path:"/myorder",
                    query:{
                        name:User.name,
                        tel:User.tel
                    }
                })
                //获取当前用户的数据
                this.$axios({
                        method:"get",
                        url:"http://localhost:8080/getUserOrderData",
                        params: {
                            user: {
                                name: User.name,
                                tel: User.tel
                            },
                            type: "myOrder"
                        }
                        }).then(res=>{
                            this.$store.commit("setmyorder",res)
                            sessionStorage.myorder = JSON.stringify(res);
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
                        method: "get",
                        url: "http://localhost:8080/getUserOrderData",
                        params: {
                            user: {
                                name: this.$store.state.user.name,
                                tel: this.$store.state.user.tel
                            },
                            type: "myOrder"
                        }
                }).then(res=>{
                        this.$store.commit("setmyorder",res)
                        sessionStorage.myorder = JSON.stringify(res);
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
  }
};
</script>
<style scoped>
td font {
  color: #ff4e00;
}
.m_content {
  width: 1210px;
  overflow: hidden;
  margin-top: 20px;
  margin: 0 auto;
}
.m_right {
  width: 970px;
  height: auto !important;
  min-height: 737px;
  height: 737px;
  background-color: #fff;
  float: right;
  margin: 5px;
  padding-bottom: 50px;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  box-shadow: 0 0 5px #e0e0e0;
}
.mem_tit {
  width: 930px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  color: #333333;
  font-size: 16px;
}
table.order_tab {
  border-collapse: collapse;
  border: 1px solid #eaeaea;
  width: 930px;
  text-align: center;
  margin-bottom: 30px;
}
table.order_tab tr td {
  border-collapse: collapse;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  text-align: center;
}
table.tab1 {
  width: 930px;
  text-align: center;
  margin-bottom: 30px;
}
table.tab2 {
  width: 930px;
}
table.tab3 {
  width: 930px;
  margin-top: 10px;
}
.btn_u {
  width: 90px;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  background-color: #ff4e00;
  color: #fff;
  font-size: 12px;
  font-family: "宋体";
  text-align: center;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
  margin-left: 210px;
}
.btn_u a {
  color: #fff;
}
.c_s_img {
  width: 71px;
  height: 71px;
  float: left;
  margin: 0px 167px;
  border: 1px solid #eaeaea;
}
.c_s_img img {
  width: 73px;
  height: 73px;
}
.c_s_name {
  padding-top: 10px;
  font-size: 12px;
  line-height: 12px;
  overflow: hidden;
}
</style>