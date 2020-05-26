<template>
  <div class="personal">
    <div class="member">
      <div class="member-bd">
        <div class="avatar-wrapper">
          <a href="#">
            <img :src="txsrc" alt />
          </a>
        </div>
        <p>
          Hi!
          <strong>{{User?User.name:"你好"}}</strong>
        </p>
        <p class="member-tjb">
          <a href="#" v-for="item in tjb" :key="item.title">
            <span
              class="tbh-icon"
              :style="{background:'url('+item.src+')',backgroundPosition:item.bp}"
            ></span>
            {{item.title}}
          </a>
        </p>
        <div v-if="!User" class="member-logout">
          <a href="#" class="login" @click="login">登录</a>
          <a href="#" @click="register">注册</a>
          <a href="#">开店</a>
        </div>
        <div v-else class="afterLogin">
          <a href="javascript:;" v-for="(item,i) in afterLoginList" @click="optionClick(i)" :key="i">
            <strong>{{number(i)}}</strong>
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="tbh-tipoff">
      <a href="#">
        网上有害信息举报专区
        <span></span>
      </a>
    </div>
    <mobileModule :mobileModuleSize="{width:'266px',height:'85px'}" :titleList="titleList" :moveList="moveList">
      <template #content="{data}">
        <p class="content1 publicity">
          <a
            href="#"
            :class="item.color?'color':''"
            v-for="item in data.content1"
            :key="item.title"
          >{{item.title}}</a>
        </p>
        <p class="content2 publicity">
          <a
            href="#"
            :class="item.color?'color':''"
            v-for="item in data.content2"
            :key="item.title"
          >{{item.title}}</a>
        </p>
      </template>
    </mobileModule>
    <div class="tbh-conve">
      <ul class="conve-list">
        <li
          v-for="(item,i) in convelist"
          :class="(i==conveboxindex)&&(conveboxindex<3)?'selected':''"
          :key="item.title"
          @mouseenter="convelimouse(i)"
        >
          <a href="#">
            <span :style="{backgroundPosition:item.bp}"></span>
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
      <div class="conve-bd-box" v-if="conveboxindex == 0||conveboxindex == 1||conveboxindex == 2">
        <div class="conve-container1 conve-container" v-show="conveboxindex==0">
          <a class="close" @click="closeClick">x</a>
          <mobileModule
            :titleList="titleListconve1"
            :moveList="moveListconve1"
            :moveLitransition="'all .3s'"
            :moveliSize="{width:'266px',height:'110px'}"
          >
            <template #content="{data}">
              <div class="conve-combox">
                <div class="form-item" v-if="data.carrier">
                  <input type="radio" name="carrier" checked />联通
                  <input type="radio" name="carrier" />电信
                </div>
                <span class="tel">
                  <input
                    type="text"
                    @focus="telfocus(data.id)"
                    @blur="telblur(data.id)"
                    v-model="data.tel"
                    :placeholder="data.ph"
                  />
                  <div class="telEnlarge" v-if="data.flag&&data.tel">{{data.tel}}</div>
                  <i></i>
                </span>
                <span>
                  <input type="text" v-model="data.money" :placeholder="data.ph1" />
                  <i></i>
                </span>
                <p class="money" v-if="!data.carrier">
                  售价 ￥
                  <span>{{data.money}}</span>
                </p>
                <div class="recharge">
                  <a href="#">立即充值</a>
                  <p class="money" v-if="data.carrier">
                    售价 ￥
                    <span>{{data.money}}</span>
                  </p>
                </div>
              </div>
            </template>
          </mobileModule>
        </div>
        <div class="conve-container2 conve-container" v-show="conveboxindex==1">
          <a class="close" @click="closeClick">x</a>
          <mobileModule
            :titleList="titleListconve2"
            :moveList="moveListconve2"
            :moveLitransition="'all .3s'"
            :moveliSize="{width:'266px',height:'110px'}"
          >
            <template #content="{data}">
              <div class="conve-combox">
                <div class="frequency" v-if="data.frequency1">
                  <label @click="frequency1(data.gobp,data.id)">
                    <input type="radio" :name="'frequency'+data.id" checked />
                    {{data.frequency1}}
                  </label>
                  <label @click="frequency2(data.gobp,data.id)">
                    <input type="radio" :name="'frequency'+data.id" />
                    {{data.frequency2}}
                  </label>
                  <span>{{data.title}}</span>
                </div>
                <div class="trip">
                  <div class="setout">
                    <label :for="'setoutcity'+data.id">{{data.trip1}}</label>
                    <input
                      type="text"
                      name="city"
                      :placeholder="data.trip1ph"
                      :id="'setoutcity'+data.id"
                    />
                    <label for="city" class="tb"></label>
                  </div>
                  <span
                    class="go"
                    :style="{opacity:data.gobp?'1':'0',backgroundPosition:data.gobp}"
                  ></span>
                  <div class="setout">
                    <label :for="'Arrivecity'+data.id">{{data.trip2}}</label>
                    <input
                      type="text"
                      name="city"
                      :placeholder="data.trip2ph"
                      :id="'Arrivecity'+data.id"
                    />
                    <label for="city" class="tb"></label>
                  </div>
                </div>
                <div class="triptime">
                  <div class="setout" v-if="data.triptime1">
                    <label :for="'setoutdate'+data.id">{{data.triptime1}}</label>
                    <input
                      type="date"
                      name="city"
                      :placeholder="data.triptime1ph"
                      :id="'setoutdate'+data.id"
                    />
                    <label for="city" class="tb"></label>
                  </div>
                  <div class="setout" v-if="data.triptime2&&data.returnjourney">
                    <label :for="'Arrivedata'+data.id">{{data.triptime2}}</label>
                    <input
                      type="date"
                      name="city"
                      :placeholder="data.triptime2ph"
                      :id="'Arrivedata'+data.id"
                    />
                    <label for="city" class="tb"></label>
                  </div>
                  <button href="#" class="lookup">{{data.lookup}}</button>
                </div>
              </div>
            </template>
          </mobileModule>
        </div>
        <div class="conve-container3 conve-container" v-show="conveboxindex==2">
          <a class="close" @click="closeClick">x</a>
          <mobileModule
            :titleList="titleListconve3"
            :moveList="moveListconve3"
            :moveLitransition="'all .3s'"
            :moveliSize="{width:'266px',height:'110px'}"
          >
            <template #content="{data}">
              <div class="conve-combox">
                <div class="Choice1">
                  <label :for="'Choice1'+data.id">{{data.Choice1}}</label>
                  <input type="text" name :placeholder="data.Choice1ph" :id="'Choice1'+data.id" />
                  <span></span>
                </div>
                <div class="Choice2" v-if="data.Choice2">
                  <label :for="'Choice2'+data.id">{{data.Choice2}}</label>
                  <input type="text" name :placeholder="data.Choice2ph" :id="'Choice2'+data.id" />
                  <span></span>
                </div>
                <div class="conve-control-group">
                  <a href="#" class="control1">{{data.control1}}</a>
                  <a href="#" class="control2" v-if="data.control2">{{data.control2}}</a>
                  <span>{{data.p}}</span>
                </div>
              </div>
            </template>
          </mobileModule>
        </div>
      </div>
    </div>
    <div class="apps">
      <h3>
        阿里APP
        <a href="#">更多 ></a>
      </h3>
      <movemenu :titleList="appsList">
        <template #title="{data}">
          <a href="#">
            <img class="titleimg" :src="data.src" alt />
          </a>
        </template>
        <template #content="{data}">
          <div class="content">
            <img class="erweima" :src="data.src1" alt />
            <p>{{data.p}}</p>
          </div>
        </template>
      </movemenu>
    </div>
  </div>
</template>

<script>
import mobileModule from "components/common/mobileModule";
import movemenu from "components/common/movemenu";
export default {
  name: "personal",
  props: {},
  data() {
    return {
      afterLoginList: [
        { number: 0, title: "待收货" },
        { number: 0, title: "待发货" },
        { number: 0, title: "待付款" },
        { number: 0, title: "待评价" }
      ],
      txsrc: require("@/assets/images/home/personal/tx.jpg"),
      tjb: [
        {
          src: require("@/assets/images/home/personal/jlt.png"),
          title: "领淘金币抵钱",
          bp: "0 -572.5px"
        },
        {
          src: require("@/assets/images/home/personal/jlt.png"),
          title: "会员俱乐部",
          bp: "0 -528px"
        }
      ],
      titleList: ["公告", "规则", "坛论", "安全", "公益"],
      moveList: [
        {
          content1: [
            { title: "95公益周阿里、腾讯等六家公司同台联合做公益", color: true }
          ],
          content2: [
            { title: "淘宝造物节之城市秘密" },
            { title: "聚划算88红包省钱卡" }
          ]
        },
        {
          content1: [
            { title: "新增《淘宝网汽配行业管理规范》公示通知", color: true },
            { title: "《淘宝网区域零售服务说明》变更公示通知" }
          ],
          content2: [
            { title: "《淘宝网票务行业管理规范》变更公示通知" },
            {
              title:
                "《淘宝网数字娱乐市场须提供官方授权的商品目录》变更公示通知"
            }
          ]
        },
        {
          content1: [
            { title: "淘宝1212大促招商", color: true },
            { title: "在线职业培训招商", color: true }
          ],
          content2: [{ title: "金秋超值购招商" }, { title: "运营神器年中大促" }]
        },
        {
          content1: [
            { title: "魔豆妈妈公益项目" },
            { title: "让母爱永不打烊！" }
          ],
          content2: [
            { title: "卖家注意：风险通报！" },
            { title: "售假获刑又起诉！" }
          ]
        },
        {
          content1: [
            { title: "淘宝公益平台正式更名", color: true },
            { title: "益起来商家招募即将截止", color: true }
          ],
          content2: [
            { title: "卖家如何设置公益宝贝" },
            { title: "公益机构开店全攻略" }
          ]
        }
      ],
      convelist: [
        { title: "充话费", bp: "0 0" },
        { title: "旅行", bp: "0 -87px" },
        { title: "车险", bp: "0 -44px" },
        { title: "游戏", bp: "0 -132px" },
        { title: "彩票", bp: "0 -176px" },
        { title: "电影", bp: "0 -220px" },
        { title: "酒店", bp: "0 -264px" },
        { title: "理财", bp: "0 -308px" }
      ],
      //显示conve的哪个板块
      conveboxindex: null,
      titleListconve1: ["充话费", "充流量", "充固话", "充宽带"],
      titleListconve2: [
        "国内机票",
        "国际机票",
        "酒店客栈",
        "度假门票",
        "火车票"
      ],
      titleListconve3: ["车险", "意外险", "健康险", "旅行险", "财产险"],
      moveListconve1: [
        {
          ph: "请输入手机号码",
          ph1: "请输入金额",
          money: null,
          flag: false,
          id: "hf"
        },
        {
          ph: "请输入手机号码",
          ph1: "请输入流量值",
          money: null,
          flag: false,
          id: "ll"
        },
        {
          ph: "请输入手机号码",
          ph1: "请输入金额",
          carrier: true,
          money: null,
          flag: false,
          id: "gh"
        },
        {
          ph: "请输入宽带账号",
          ph1: "请输入金额",
          money: null,
          flag: false,
          id: "kd"
        }
      ],
      moveListconve2: [
        {
          frequency1: "单程",
          frequency2: "往返",
          title: "中国港澳台请选择国际机票",
          trip1: "出发",
          trip1ph: "城市",
          trip2: "到达",
          trip2ph: "城市",
          triptime1: "出发",
          triptime2: "返程",
          lookup: "查找",
          id: "gnjp",
          gobp: "9px 10px",
          returnjourney: false
        },
        {
          frequency1: "单程",
          frequency2: "往返",
          title: "",
          trip1: "出发",
          trip1ph: "城市",
          trip2: "到达",
          trip2ph: "城市",
          triptime1: "出发",
          triptime2: "返程",
          lookup: "查找",
          id: "gjjp",
          gobp: "9px 10px",
          returnjourney: false
        },
        {
          frequency1: "国内(含港澳台)",
          frequency2: "海外",
          title: "",
          trip1: "入住",
          trip1ph: "城市",
          trip2: "酒店",
          trip2ph: "地标",
          triptime1: "入住",
          triptime2: "离店",
          lookup: "搜索",
          id: "jdkz",
          returnjourney: true
        },
        {
          frequency1: "度假",
          frequency2: "门票",
          title: "",
          trip1: "出发",
          trip1ph: "城市",
          trip2: "到达",
          trip2ph: "城市/景点",
          triptime1: "",
          triptime2: "",
          lookup: "搜索",
          id: "djmp"
        },
        {
          frequency1: "",
          frequency2: "",
          title: "",
          trip1: "出发",
          trip1ph: "城市",
          trip2: "到达",
          trip2ph: "城市",
          triptime1: "出发",
          triptime2: "",
          lookup: "查找",
          id: "hcp"
        }
      ],
      moveListconve3: [
        {
          Choice1: "热门城市",
          Choice1ph: "请输入城市",
          Choice2: "保险公司",
          Choice2ph: "人车保险",
          control1: "立刻报价",
          control2: "快速续保",
          p: "车险活动",
          id: "cx"
        },
        {
          Choice1: "保险类型",
          Choice1ph: "航空意外",
          Choice2: "保险期间",
          Choice2ph: "1年以内",
          control1: "查看适合的保险",
          control2: "",
          p: "",
          id: "ywx"
        },
        {
          Choice1: "保障类型",
          Choice1ph: "重大疾病",
          Choice2: "特色保障",
          Choice2ph: "可保证续保",
          control1: "查看适合的保险",
          control2: "",
          p: "最全人寿险",
          id: "jkx"
        },
        {
          Choice1: "出行地区",
          Choice1ph: "境内",
          Choice2: "出行天数",
          Choice2ph: "七天以内",
          control1: "查看适合的保险",
          control2: "",
          p: "",
          id: "lxx"
        },
        {
          Choice1: "特色保障",
          Choice1ph: "水管爆裂",
          Choice2: "",
          Choice2ph: "",
          control1: "查看适合的保险",
          control2: "",
          p: "",
          id: "ccx"
        }
      ],
      appsList: [
        {
          src: require("@/assets/images/home/personal/apps/1.webp"),
          src1: require("@/assets/images/home/personal/apps/er1.jpg"),
          p: "扫一扫淘宝"
        },
        {
          src: require("@/assets/images/home/personal/apps/2.webp"),
          src1: require("@/assets/images/home/personal/apps/er2.png"),
          p: "扫一扫天猫"
        },
        {
          src: require("@/assets/images/home/personal/apps/3.webp"),
          src1: require("@/assets/images/home/personal/apps/er3.png"),
          p: "扫一扫支付宝"
        },
        {
          src: require("@/assets/images/home/personal/apps/4.webp"),
          src1: require("@/assets/images/home/personal/apps/er4.png"),
          p: "扫一扫钉钉"
        },
        {
          src: require("@/assets/images/home/personal/apps/5.webp"),
          src1: require("@/assets/images/home/personal/apps/er5.png"),
          p: "扫一扫淘小铺"
        }
      ]
    };
  },

  components: {
    mobileModule,
    movemenu
  },
  computed: {
    //当前用户
    User() {
      return this.$store.state.user;
    },
    //因为异步获取数据的原因 巧妙运用计算属性动态获取付款数量
    piece(){
        return (()=>{
            let piece = 0
            for (let item of this.$store.state.order) {
                    piece += item.count;
                }
            // this.afterLoginList[2].number = piece; 此处可以不要了 必须得使用才能激活
            return piece;
        })()
    },
    //因为异步获取数据的原因 巧妙运用计算属性动态获取付款数量
    shipment(){
        return(()=>{
            let harvestCount = 0
            for (let item of this.$store.state.myorder) {
                let orders = item.orders ? item.orders : [];
                if (orders.length >= 0) {
                    for (let item1 of orders) {
                        harvestCount += item1.count;
                    }
                }
            }
            return harvestCount
        })()
    }
  },
  methods: {
    //获取每个当前收获付款等的数量
    number(i){
        if(i==0){
            return this.shipment
        }else if(i==2){
            return this.piece
        }else{
            return 0
        }
    },
    convelimouse(i) {
      this.conveboxindex = i;
    },
    closeClick() {
      this.conveboxindex = -1;
    },
    //gobp为前进图标的位置，id则为当前数据的唯一
    frequency1(gobp, id) {
      let item = this.moveListconve2.find(item => {
        return item.id == id;
      });
      let i = this.moveListconve2.findIndex(item => {
        return item.id == id;
      });
      if (i == 0 || i == 1) {
        item.returnjourney = false;
      }
      item.gobp = "9px 10px";
    },
    frequency2(gobp, id) {
      let item = this.moveListconve2.find(item => {
        return item.id == id;
      });
      let i = this.moveListconve2.findIndex(item => {
        return item.id == id;
      });
      if (i == 0 || i == 1) {
        item.returnjourney = true;
      }
      item.gobp = "7px -64px";
    },
    telfocus(id) {
      let item = this.moveListconve1.find(item => {
        return item.id == id;
      });
      item.flag = true;
    },
    telblur(id) {
      let item = this.moveListconve1.find(item => {
        return item.id == id;
      });
      item.flag = false;
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    //登录后的选项
    optionClick(i){
        if(i==0){
            this.$router.push("myorder")
        }else if(i==2){
            this.$router.push("buycar")
        }
    }
  },
  mounted() {
  }
};
</script>
<style lang='css' scoped>
.personal {
  width: 290px;
  height: 514px;
  margin-top: 10px;
  background-color: #fff;
}
.personal .member {
  width: 290px;
  height: 145px;
  background: url("~assets/images/home/personal/1.png") no-repeat;
  background-size: cover;
}
.personal .mobileModule{
  margin:0 auto;
}
.personal .member .member-bd .avatar-wrapper {
  margin: 0 auto;
  padding-top: 5px;
  width: 50px;
  height: 50px;
}
.personal .member .member-bd .avatar-wrapper a {
  display: inline-block;
}
.personal .member .member-bd .avatar-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.personal .member .member-bd p {
  text-align: center;
  margin-top: 5px;
}
.personal .member .member-bd p strong {
  font-weight: 400;
  margin-left: 3px;
}
.personal .member .member-bd .member-tjb a {
  padding: 3px 10px 3px 0;
  color: #ff5000 !important;
  background: #ffe4db;
  border-radius: 10px;
  margin: 0 2px;
}
p {
  margin: 0;
  padding: 0;
}
.personal .member .member-bd .member-tjb span {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: -4px;
}
.personal .member .member-bd .member-logout {
  height: 25px;
  margin-top: 8px;
  text-align: center;
}
.personal .member .member-bd .member-logout a.login {
  width: 92px;
}
.personal .member .member-bd .member-logout a {
  display: inline-block;
  line-height: 25px;
  width: 75px;
  margin-right: 7px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  background-image: linear-gradient(to right, #ff5000 0, #ff6f06 100%);
}
.personal .member .member-bd .afterLogin {
  display: flex;
  padding: 5px 10px 0;
}
.personal .member .member-bd .afterLogin a {
  width: 100%;
  font-size: 14px;
  color: #f40;
  text-align: center;
}
.personal .member .member-bd .afterLogin a span {
  display: block;
  color: #3c3c3c;
  font-size: 12px;
}
.personal .member .member-bd .afterLogin a:hover span {
  color: #f40;
}
.personal .tbh-tipoff a {
  position: relative;
  padding-left: 82px;
  color: #f40;
  display: block;
  height: 26px;
  line-height: 26px;
  background: #ffe4dd;
  font-size: 12px;
}
.personal .tbh-tipoff span {
  position: absolute;
  right: 52px;
  top: 9px;
  line-height: 0;
  width: 0;
  height: 0;
  border-style: solid;
  margin-left: 32px;
  border-width: 5px 0 5px 7px;
  border-color: transparent transparent transparent #f40;
}
.personal .mobileModule {
  margin-top: 10px;
}
.personal .mobileModule p {
  display: flex;
  height: 16px;
  padding: 5px 0;
}
.personal .mobileModule .publicity > a {
  width: 100%;
  display: inline-block;
  text-align: left;
  overflow: hidden;
}
.personal .mobileModule .publicity > a:hover {
  color: #f40;
}
.personal .mobileModule .publicity > a.color {
  color: #f40;
}
.personal .tbh-conve {
  position: relative;
}
.personal .tbh-conve .conve-list {
  display: flex;
  border-top: 1px solid #f4f4f4;
  flex-wrap: wrap;
}
.personal .tbh-conve .conve-list li {
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  height: 75px;
  border: 1px solid #f4f4f4;
  border-left-color: transparent;
  border-top-color: transparent;
}
.personal .tbh-conve .conve-list li.selected {
  border-color: #f40;
  border-bottom-color: transparent;
  background-color: #fff;
  z-index: 2;
  transition: border-color 0.1s;
}
.personal .tbh-conve .conve-list li a {
  display: block;
  color: #3c3c3c;
}
.personal .tbh-conve .conve-list li a:hover {
  color: #f40;
}
.personal .tbh-conve .conve-list li a p {
  line-height: 24px;
}
.personal .tbh-conve .conve-list li a span {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: 11px;
  background: url("~assets/images/home/personal/jlt.png");
  background-repeat: no-repeat;
}
.personal .tbh-conve .conve-bd-box {
  position: absolute;
  z-index: 1;
  height: 155px;
  width: 100%;
  top: 75px;
}
.personal .tbh-conve .conve-bd-box .conve-container {
  padding-top: 4px;
  height: 100%;
  border: 1px solid #f40;
  background-color: #fff;
}
.personal .tbh-conve .conve-bd-box .conve-container1 {
  position: relative;
}
.personal .tbh-conve .conve-bd-box .conve-container .close {
  position: absolute;
  text-align: center;
  width: 18px;
  height: 18px;
  top: 1px;
  right: 1px;
  color: #999;
}
.personal .tbh-conve .conve-bd-box .conve-container .close:hover {
  color: #666;
  background-color: #eee;
}
.personal .tbh-conve .conve-bd-box .conve-container .conve-combox {
  text-align: left;
  padding: 2px;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox input {
  padding: 4px;
  width: 165px;
  padding-right: 20px;
  border: none;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox span {
  position: relative;
  display: inline-block;
  border: 1px solid #ccc;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox span.tel {
  margin-bottom: -1px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  span.tel
  .telEnlarge {
  position: absolute;
  z-index: 1;
  width: 191px;
  box-sizing: border-box;
  height: 35px;
  left: -1px;
  padding: 0 10px;
  line-height: 35px;
  color: rgb(255, 42, 0);
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #9c9c9c;
  background-color: rgb(255, 235, 228);
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  span:hover
  + span {
  border-top-color: #9c9c9c;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox span:hover {
  border-color: #9c9c9c;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox span i {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 4px;
  bottom: 0;
  margin: auto 0;
  background: url("~assets/images/home/personal/jlt1.png") no-repeat;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox span.tel i {
  background-position: -24px 2px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  span
  + span
  i {
  background-position: -24px -24px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  span.tel:hover
  i {
  background-position: -4px 2px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  span
  + span:hover
  i {
  background-position: -4px -24px;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox .money span {
  display: inline-block;
  width: 100px;
  overflow: hidden;
  border: none;
  color: #f60;
  font-weight: 700;
  font-family: verdana, arial;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox .recharge a {
  display: inline-block;
  width: 52px;
  height: 27px;
  margin: 0 10px 0 0;
  padding: 0 10px;
  margin: 3px 0;
  border-radius: 2px;
  line-height: 27px;
  font-weight: 700;
  color: #fff;
  border: none;
  background: #f40;
  vertical-align: top;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox .recharge p {
  display: inline-block;
  margin-top: 3px;
  margin-left: 6px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  .recharge
  p
  span {
  vertical-align: top;
}
.personal .tbh-conve .conve-bd-box .conve-container1 .conve-combox .form-item {
  margin-bottom: 3px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container1
  .conve-combox
  .form-item
  input {
  width: 13px;
  vertical-align: top;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .frequency
  label {
  color: #333;
  margin-right: 5px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .frequency
  input {
  vertical-align: top;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .frequency
  span {
  color: #bbb;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout {
  position: relative;
  display: inline-block;
  width: 117px;
  height: 24px;
  line-height: 24px;
  border: 1px solid #ccc;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout:hover {
  border-color: #9c9c9c;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout
  label {
  display: inline-block;
  color: #6b6b6b;
  background-color: #f5f5f5;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout
  input {
  width: 65px;
  padding-left: 5px;
  border: none;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout
  label.tb {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background: url("~assets/images/home/personal/jlt1.png") no-repeat;
  background-position: -22px -85px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .trip
  .setout
  label.tb:hover {
  background-position: 5px -85px;
}
.personal .tbh-conve .conve-bd-box .conve-container2 .conve-combox .trip .go {
  display: inline-block;
  width: 24px;
  height: 18px;
  background: url("~assets/images/home/personal/jlt2.png") no-repeat;
  background-position: 7px -64px;
}

.personal .tbh-conve .conve-bd-box .conve-container2 .conve-combox .triptime {
  margin-top: -1px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .lookup {
  float: right;
  font-weight: 700;
  color: #fff;
  border: none;
  background: #f40;
  padding: 6px 15px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .setout {
  position: relative;
  display: inline-block;
  width: 170px;
  height: 24px;
  margin-top: 5px;
  line-height: 24px;
  border: 1px solid #ccc;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .setout:hover {
  border-color: #9c9c9c;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .setout
  label {
  display: inline-block;
  color: #6b6b6b;
  background-color: #f5f5f5;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .setout
  input {
  width: 122px;
  padding-left: 5px;
  border: none;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .setout
  label.tb {
  position: absolute;
  top: 0;
  right: 4px;
  width: 17px;
  height: 20px;
  background: url("~assets/images/home/personal/jlt3.png") no-repeat;
  background-position: right -70px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container2
  .conve-combox
  .triptime
  .go {
  display: inline-block;
  opacity: 0;
  width: 24px;
  height: 18px;
  background: url("~assets/images/home/personal/jlt2.png") no-repeat;
  background-position: 7px -64px;
}
.personal .tbh-conve .conve-bd-box .conve-container3 .conve-combox .Choice1,
.personal .tbh-conve .conve-bd-box .conve-container3 .conve-combox .Choice2 {
  position: relative;
  height: 24px;
  line-height: 24px;
  border: 1px solid #ccc;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1
  label,
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice2
  label {
  display: inline-block;
  padding: 0 8px;
  color: #6b6b6b;
  background-color: #f5f5f5;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1
  input,
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice2
  input {
  border: none;
  padding-left: 4px;
  padding-bottom: 3px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1
  span,
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice2
  span {
  position: absolute;
  width: 20px;
  height: 24px;
  background: url("~assets/images/home/personal/jlt1.png");
  background-position: -24px -22px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1:hover,
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice2:hover {
  border-color: #9c9c9c;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1:hover
  span,
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice2:hover
  span {
  background-position: -4px -22px;
}
.personal .tbh-conve .conve-bd-box .conve-container3 .conve-combox .Choice2 {
  margin-top: -1px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .Choice1:hover
  + .Choice2 {
  border-top-color: #9c9c9c;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .conve-control-group {
  margin-top: 18px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .conve-control-group
  a {
  display: inline-block;
  padding: 3px 10px;
  margin-right: 10px;
  height: 21px;
  line-height: 21px;
  border: 1px solid;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .conve-control-group
  a.control1 {
  background: #f40;
  border-color: #f40;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .conve-control-group
  a.control2 {
  background: #fff;
  border: 1px solid #dcdcdc;
  color: #3e3e3e;
}
.personal
  .tbh-conve
  .conve-bd-box
  .conve-container3
  .conve-combox
  .conve-control-group
  span:hover {
  color: #f60;
  cursor: pointer;
}
.personal .apps {
  margin-top: 8px;
  padding: 0 15px;
}
.personal .apps h3 a {
  float: right;
  color: #3c3c3c;
  font-size: 12px;
}
.personal .apps h3 a:hover {
  color: #f40;
}
.personal .apps .movemenu {
  margin-top: 5px;
}
.personal .apps .movemenu .titleimg {
  width: 32px;
  height: 32px;
}
.personal .apps .movemenu .content {
  top: -109px;
  left: -23px;
  height: 102px;
  background-color: #fff;
}
.personal .apps .movemenu .content .erweima {
  width: 66px;
  height: 66px;
  padding: 12px;
}
.personal .apps .movemenu .content p {
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  height: 20px;
  line-height: 20px;
}
</style>