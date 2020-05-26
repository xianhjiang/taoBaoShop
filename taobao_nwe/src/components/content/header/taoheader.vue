<template>
  <div>
    <topheader></topheader>
    <div class="site-banner">
      <div class="banner-warp">
        <a href="#">
          <img src="~assets/images/taoheader/toplogo/banner.png" />
        </a>
      </div>
    </div>
    <div class="cup">
      <div class="topser">
        <div class="top-warp cleadfix">
          <div class="top-warp-logo">
            <div class="logo">
              <h1>
                <a @click="homeClick" href="#" role="img" class="logo-bd cleadfix"></a>
              </h1>
            </div>
          </div>
          <div class="top-warp-search">
            <div class="search-warp">
              <div class="search-bd">
                <div class="search-tab">
                  <ul>
                    <li
                      v-for="(tab,t) in tabList"
                      :key="t"
                      :class="{selected:a===t}"
                      @click="addClass(t)"
                    >{{tab}}</li>
                  </ul>
                </div>
                <div class="search-panel">
                  <form action>
                    <div class="search-button">
                      <button class="search-btn" :class="{bdSe:a===0 || a===2}" @click="sub">搜索</button>
                    </div>
                    <div class="search-fileds">
                      <div class="search-input">
                        <div class="input-warp">
                          <input
                            type="text"
                            id="q"
                            placeholder="请输入想要的宝贝"
                            @keyup.enter="sub"
                            @input="searchchange"
                            v-model="searchVal"
                          />
                        </div>
                        <div class="input-img"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="search-ft" :class="{seft:a===1}">
                <div class="search-hots-line">
                  <a href="#" v-for="(hotline,h) in hotsList" :key="h">{{hotline}}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="top-warp-qr">
            <div class="qr">
              <a href="#" class="qr-bd clearfix">
                <span>手机淘宝</span>
                <img src="~assets/images/taoheader/toplogo/qr.png" class="qrcode" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tbh-nav">
        <div class="nav clearfix bdSe">
          <h2>主题市场</h2>
          <ul v-for="(nav, n) in navList" class="nav-hd" :key="n" :class="{nav_bd:n==1 || n==2}">
            <li v-for="(navsmall, v) in nav.navsmallList" :key="v">
              <a href="#">{{navsmall}}</a>
            </li>
            <div id="pipe" v-show="n==2 ? false : true"></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topheader from "components/content/header/topheader";
export default {
  name: "taoheader",
  data() {
    return {
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
      mytaobaoList: [
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
          modList: [
            {
              name: "主题市场",
              modsmallList: [
                "女装",
                "男装",
                "内衣",
                "鞋靴",
                "箱包",
                "婴童",
                "家电",
                "数码",
                "手机",
                "美妆",
                "珠宝",
                "眼镜",
                "手表",
                "运动",
                "户外",
                "乐器",
                "游戏",
                "动漫",
                "影视",
                "美食",
                "鲜花",
                "宠物",
                "农资",
                "房产",
                "装修",
                "建材",
                "家居",
                "百货",
                "汽车",
                "二手车",
                "办公",
                "定制",
                "教育",
                "卡券",
                "本地"
              ]
            },
            {
              name: "特色市场",
              modsmallList: [
                "全球购",
                "极有家",
                "阿里拍卖",
                "淘宝众筹",
                "飞猪",
                "农资",
                "天天特卖",
                "Outlets",
                "淘抢购",
                "试用",
                "量贩团",
                "阿里翻译",
                "满300减30"
              ]
            },
            {
              name: "阿里App",
              modsmallList: [
                "淘宝",
                "天猫",
                "支付宝",
                "聚划算",
                "飞猪",
                "蚂蚁聚宝",
                "闲鱼",
                "淘小铺",
                "阿里钱盾",
                "钉钉",
                "高德地图",
                "虾米音乐",
                "淘票",
                "菜鸟裏裏",
                "阿里云",
                "网商银行",
                "阿里邮箱",
                "阿里众包"
              ]
            },
            {
              name: "精彩推荐集",
              modsmallList: [
                "余额宝",
                "大牌捡宝",
                "淘公仔",
                "浏览器",
                "淘宝香港",
                "淘宝台湾",
                "淘宝全球",
                "淘宝东南亚",
                "闺蜜淘货",
                "大众评审",
                "淘工作",
                "阿里巴巴认证"
              ]
            }
          ]
        }
      ],
      tabList: ["宝贝", "天猫", "店铺"],

      icon: [
        "site-nav-icon",
        "site-nav-icon1",
        "site-nav-icon2",
        "site-nav-icon",
        "site-nav-icon",
        "site-nav-icon",
        "site-nav-icon6"
      ],
      hotsList: [
        "新款连衣裙",
        "四件套",
        "潮流T恤",
        "时尚女鞋",
        "短裤",
        "半身裙",
        "男士外套",
        "墙纸",
        "行车记录仪",
        "新款男鞋",
        "时尚女包",
        "沙发"
      ],
      navList: [
        { navsmallList: ["天猫", "聚划算", "天猫超市"] },
        {
          navsmallList: ["淘抢购", "电器城", "司法拍卖", "淘宝新选", "兴农脱贫"]
        },
        { navsmallList: ["飞猪旅行", "智能生活", "苏宁易购"] }
      ],
      issearchul: false,
      a: 0,
      searchVal: "",

      goodsList: [
        { name: "男装" },
        { name: "女装" },
        { name: "男鞋子" },
        { name: "男衣服" },
        { name: "男羽绒服" },
        { name: "男裤" },
        { name: "男童羽绒服" },
        { name: "男休闲皮鞋" },
        { name: "女羽绒服" },
        { name: "女鞋" },
        { name: "女休闲皮鞋" },
        { name: "女裤" },
        { name: "女童羽绒服" },
        { name: "进口生鲜", scrollY: 1920 },
        { name: "食品饮料", scrollY: 1428 },
        { name: "个人美妆", scrollY: 2412 },
        { name: "母婴玩具", scrollY: 2904 },
        { name: "家居生活", scrollY: 3396 },
        { name: "数码家电", scrollY: 3888 },
        { name: "限时特卖", scrollY: 881 }
      ]
    };
  },
  components: {
    topheader
  },
  methods: {
    homeClick(){
        this.$router.push("/home")
    },
    addClass(t) {
      this.a = t;
    },
    carClick() {
      this.$router.push("/buycar");
    },
    shouyeClick() {
      this.$router.push("/home");
    },
    searchliClick(item) {
      this.searchVal = item.name;
      this.sub();
    },
    searchchange() {
      if (this.searchVal != "") {
        this.issearchul = true;
      } else {
        this.issearchul = false;
      }
    },
    sub() {
      for (let item of this.list) {
        if (item.name == this.searchVal) {
          if (item.scrollY) {
            window.scrollTo(0, item.scrollY);
          }
          return;
        }
      }
    },
    myorder() {
      this.$router.push("/myorder");
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    }
  },
  computed: {
    totalPrice() {
      let price = 0;
      for (let item of this.$store.state.order) {
        price += item.count * parseInt(item.price);
      }
      return price;
    },
    list() {
      let arr = [];
      for (let item of this.goodsList) {
        if (item.name.search(this.searchVal) != -1) {
          arr.push(item);
        }
      }
      return arr;
    },
    items() {
      return this.$store.state.order;
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
.site-banner {
  background-color: #f40d4d;
  height: 70px;
  overflow: hidden;
}
.site-banner .banner-warp {
  margin: 0 auto;
  width: 1192px;
}
.site-banner .banner-wrap img {
  display: block;
  margin: 0 auto;
  width: 70px;
  position: relative;
  z-index: 1;
}
.topser {
  padding-top: 24px;
  height: 97px;
  background-color: #fff;
}
.top-warp {
  margin: 0 auto;
  width: 1190px;
  position: relative;
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
.top-warp-logo {
  float: left;
  width: 190px;
}
.logo {
  width: 190px;
  height: 80px;
  padding-top: 8px;
  float: left;
}
.logo h1 {
  position: relative;
}
.logo h1 .logo-bd {
  display: block;
  margin-left: 22px;
  padding-top: 58px;
  width: 142px;
  height: 0;
  background: url(~assets/images/taoheader/toplogo/logo.png) 0 0 no-repeat;
}
.top-warp-search {
  margin-left: 258px;
  margin-right: 302px;
}
.search-warp {
  position: relative;
}
.search-bd {
  position: relative;
  z-index: 30;
  transform: translateZ(0);
}
.search-bd .search-tab {
  height: 22px;
  margin-left: 17px;
}
.search-bd .search-tab li {
  color: #f40;
  text-align: center;
  float: left;
  width: 36px;
  height: 22px;
  line-height: 22px;
  margin-right: 4px;
  cursor: pointer;
}
.search-bd .search-tab li:hover {
  background-color: #ffeee5;
  color: #ff5400;
}
.search-bd .search-tab .selected {
  color: #fff !important;
  font-weight: 700;
  background-image: -o-linear-gradient(left, #ff9000 0, #ff5000 100%);
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
  /* 线性渐变 */
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff9000', endColorstr='#ffff5000', GradientType=1);
  /* 滤镜 */
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.search-tab .search-panel {
  position: relative;
  top: 22px;
}
.search-bd .search-panel .search-button {
  position: absolute;
  right: 0;
  z-index: 100;
  width: 74px;
  height: 40px;
  overflow: hidden;
  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.search-bd .search-panel .search-button .search-btn {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #ff4200;
  cursor: pointer;
  height: 100%;
  border: none;
  width: 100%;
}
.bdSe {
  /* background-image: -webkit-linear-gradient(left,#ff9000 0,#ff5000 100%); */
  background-image: -o-linear-gradient(left, #ff9000 0, #ff5000 100%);
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
  background-repeat: repeat-x;
}
.search-bd .search-panel .search-fileds {
  margin-right: 74px;
  border: 2px solid #ff5000;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right: none;
  overflow: hidden;
  height: 36px;
}
.search-input {
  font-size: 12px;
}
.search-input .input-warp {
  height: 36px;
  overflow: hidden;
  vertical-align: middle;
  position: relative;
}
.search-bd .search-panel #q {
  padding: 6px 0;
  text-indent: 10px;
  height: 24px;
  line-height: 24px;
  width: 472px;
  border: none;
  outline: 0;
  background: #fff;
  margin-top: -2px;
}
.search-ft {
  position: relative;
  padding: 5px 41px 0 0;
  height: 20px;
  overflow: hidden;
}
.search-hots-line {
  overflow: hidden;
  height: 18px;
  line-height: 18px;
  margin-bottom: 5px;
}
.search-hots-line a {
  white-space: nowrap;
  margin-left: 7px;
}
.seft {
  display: none;
}
.top-warp-qr {
  position: absolute;
  top: 0;
  right: 110px;
}
.qr {
  position: relative;
  top: 0;
  z-index: 2;
}
.qr .qr-bd {
  position: relative;
  cursor: pointer;
  display: block;
  text-align: center;
  width: 74px;
  height: 88px;
  color: #666;
  border: 1px solid #eee;
  background-color: #fff;
}
.qr .qr-bd span {
  line-height: 20px;
  margin: 4px auto 0;
  width: 78px;
  color: #ff5000 !important;
}
.qr .qr-bd .qrcode {
  width: 62px;
  height: 62px;
  display: block;
  margin-left: 6px;
}
.tbh-nav {
  background-color: rgb(244, 244, 244);
}
div.tbh-nav .nav {
  width: 1190px;
  margin: 0 auto;
}
.tbh-nav .nav {
  height: 30px;
  line-height: 30px;
  position: relative;
  color: #fff;
}
.tbh-nav h2 {
  float: left;
  width: 190px;
  text-align: center;
  font-size: 16px;
  background: #ff5000;
}
.tbh-nav .nav-hd {
  float: left;
  font-size: 16px;
  font-weight: 700;
}
.tbh-nav ul {
  position: relative;
  z-index: 5;
}
.tbh-nav .nav-hd li {
  margin: 0 3px;
  text-align: center;
  padding: 0 4px;
}
.tbh-nav .nav_bd li {
  font-size: 14px;
}
.tbh-nav .nav_bd li,
.tbh-nav .nav-hd li {
  position: relative;
  float: left;
}
.tbh-nav .nav_bd a,
.tbh-nav .nav-hd a {
  float: left;
  padding: 0 5px;
  font-weight: 700;
}
.tbh-nav li a {
  color: inherit;
}
div#pipe {
  height: 14px;
  border-right: 1.5px solid #fff;
  margin-top: 8px;
}
</style>