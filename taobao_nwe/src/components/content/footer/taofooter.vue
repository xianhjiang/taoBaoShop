<template>
  <div>
    <div class="b_btm_bg b_btm_c">
      <div class="b_btm">
        <table
          border="0"
          cellspacing="0"
          cellpadding="0"
          v-for="(btm,index) in tableList"
          :key="index"
        >
          <tr>
            <td>
              <img :src="btm.src" />
            </td>
            <td>
              <h2>{{btm.name}}</h2>
              {{btm.description}}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="b_nav">
      <dl v-for="(ftnav, index) in ftnavList" :key="index">
        <dt>
          <a>{{ftnav.topic}}</a>
        </dt>
        <dd v-for="(titlea,index) in ftnav.titList" :key="index">
          <a>{{titlea}}</a>
        </dd>
      </dl>
      <div class="b_tel_bg">
        <a href="#" class="b_sh1">新浪微博</a>
        <a href="#" class="b_sh2">腾讯微博</a>
        <p>
          服务热线：
          <br />
          <span>400-123-4567</span>
        </p>
      </div>
      <div class="b_er">
        <div class="b_er_c">
          <img src="~assets/images/taofooter/er.gif" />
        </div>
        <img src="~assets/images/taofooter/ss.png" />
      </div>
    </div>
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com Copyright © 2015-2018 淘宝商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group
        <br />
        <p v-for="(fotimg , index) in fotimgList" :key="index">
          <img :src="fotimg.src" />
        </p>
      </div>
    </div>
    <!--End Footer End -->
  </div>
</template>
<script>
export default {
  name: "taofooter",
  data() {
    return {
      tableList: [
        {
          src: require("@/assets/images/taofooter/b1.png"),
          name: "正品保障",
          description: "正品行货  放心购买"
        },
        {
          src: require("@/assets/images/taofooter/b2.png"),
          name: "满38包邮",
          description: "满38包邮 免运费"
        },
        {
          src: require("@/assets/images/taofooter/b3.png"),
          name: "天天低价",
          description: "天天低价 畅选无忧"
        },
        {
          src: require("@/assets/images/taofooter/b4.png"),
          name: "准时送达",
          description: "收货时间由你做主"
        }
      ],
      ftnavList: [
        {
          topic: "新手上路",
          titList: [
            "售后流程",
            "购物流程",
            "订购方式",
            "隐私声明",
            "推荐分享说明"
          ]
        },
        {
          topic: "配送与支付",
          titList: ["货到付款区域", "配送支付查询", "支付方式说明"]
        },
        {
          topic: "会员中心",
          titList: ["资金管理", "我的收藏", "订购方式", "我的订单"]
        },
        {
          topic: "服务保证",
          titList: ["退换货原则", "售后服务保证", "产品质量保证"]
        },
        {
          topic: "联系我们",
          titList: ["网站故障报告", "购物咨询", "订购方式", "投诉与建议"]
        }
      ],
      fotimgList: [
        { src: require("@/assets/images/taofooter/b_1.gif") },
        { src: require("@/assets/images/taofooter/b_2.gif") },
        { src: require("@/assets/images/taofooter/b_3.gif") },
        { src: require("@/assets/images/taofooter/b_4.gif") },
        { src: require("@/assets/images/taofooter/b_5.gif") },
        { src: require("@/assets/images/taofooter/b_6.gif") }
      ]
    };
  },
  components: {}
};
</script>
<style scoped>
.b_btm_bg {
  width: 100%;
  min-width: 1200px;
  height: 122px;
  overflow: hidden;
  margin-top: 30px;
}
.b_btm_c {
  background-color: #fff;
}
.b_btm {
  width: 1200px;
  height: 122px;
  overflow: hidden;
  margin: 0 auto;
}
.b_btm table {
  width: 210px;
  height: 62px;
  float: left;
  margin-left: 75px;
  margin-top: 30px;
  color: #888888;
  font-size: 14px;
}
.b_btm table h2 {
  color: #3e3e3e;
  font-size: 16px;
  font-weight: normal;
}
.b_btm table tr td img {
  width: 62px;
  height: 62px;
}
.b_nav {
  width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
.b_nav dl {
  width: 125px;
  height: 165px;
  overflow: hidden;
  float: left;
  margin-right: 50px;
}
.b_nav dl dt {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  color: #3e3e3e;
  font-size: 16px;
  margin-bottom: 10px;
}
.b_nav dl dt a {
  color: #3e3e3e;
}
.b_nav dl dt a:hover {
  color: #3e3e3e;
  text-decoration: underline;
}
.b_nav dl dd {
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  color: #888888;
}
.b_nav dl dd a {
  color: #888888;
}
.b_nav dl dd a:hover {
  color: #ff4e00;
}
.b_er {
  width: 120px;
  height: 160px;
  overflow: hidden;
  text-align: center;
  float: right;
  margin-right: 22px;
  margin-top: 5px;
}
.b_er_c {
  width: 118px;
  height: 118px;
  overflow: hidden;
  margin-bottom: 10px;
  border: 1px solid #e9e9e9;
}
.b_er_c img {
  width: 118px;
  height: 118px;
}
.b_tel_bg {
  width: 133px;
  height: 140px;
  overflow: hidden;
  color: #888888;
  float: right;
  margin-top: 5px;
}
.b_tel_bg a.b_sh1 {
  width: 100%;
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  background: url(~assets/images/taofooter/b_sh_1.png) no-repeat left center;
  color: #888888;
  font-size: 14px;
  text-indent: 32px;
  display: inline-block;
}
.b_tel_bg a.b_sh1:hover {
  color: #ff4e00;
}
.b_tel_bg a.b_sh2 {
  width: 100%;
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  background: url(~assets/images/taofooter/b_sh_2.png) no-repeat left center;
  color: #888888;
  font-size: 14px;
  text-indent: 32px;
  display: inline-block;
}
.b_tel_bg a.b_sh2:hover {
  color: #ff4e00;
}
.b_tel_bg p {
  margin-top: 10px;
}
.b_tel_bg p span {
  color: #ff4e00;
  font-size: 18px;
}

.btmbg {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  padding: 30px 0 40px 0;
  border-top: 1px solid #eaeaea;
}
.btm {
  width: 1200px;
  overflow: hidden;
  color: #999999;
  font-family: "宋体";
  text-align: center;
  margin: 0 auto;
}
.btm a {
  color: #999999;
}
.btm a:hover {
  color: #999999;
  text-decoration: underline;
}
.btm p {
  display: inline-block;
}
.btm p img {
  width: 98px;
  height: 33px;
  display: inline-block;
  margin: 15px 5px 5px 5px;
  border: 1px solid #d9d9d9;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>33px;