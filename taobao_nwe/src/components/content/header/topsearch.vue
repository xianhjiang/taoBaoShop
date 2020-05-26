<template>
  <div class="T-header">
    <div class="tb-header">
      <div class="tb-header-content" :style="{width:width}">
        <div class="tb-header-logo">
          <a href="#" @click="logoClick">
            <img src="~assets/images/taoheader/toplogo/tb-header.png" />
          </a>
        </div>
        <div class="tb-header-market" v-if="!isShopping">
            <a href="#" class="tb-header-market-hd">
              更多市场
              <i></i>
            </a>
          <div class="tb-header-market-bd">
            <dl v-for="(market,k) in marList" :key="k">
              <dt>{{market.title}}</dt>
              <dd v-for="(other,s) in market.othList" :key="s">
                <a href="#">{{other}}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="tb-header-car" v-else>
          <h1>购物车</h1>
        </div>

        <div class="tb-header-search" v-if="issearchtaobao">
          <div class="search-pannel">
            <form>
              <div class="search-buttons">
                <button type="submit" class="primary">搜淘宝</button>
                <button type="submit" class="secondary">搜本店</button>
              </div>
              <div class="search-pannel-fields">
                <div class="search-combobox">
                  <input type="text" class="search-combobox-input" />
                </div>
                <i></i>
              </div>
            </form>
          </div>
        </div>
        <div class="tb-header-search-more" v-else>
          <ul class="search-banner">
            <li class="search-selected" v-for="(banner,index) in bannerList" :key="index">
              <a href>{{banner}}</a>
            </li>
            <s></s>
          </ul>
          <div class="search-pannel">
            <form>
              <div class="search-buttons">
                <button type="submit">搜索</button>
              </div>
              <div class="search-pannel-fields-more">
                <div class="search-combobox-more">
                  <input type="text" class="search-combobox-input-more" />
                  <i></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  components: {},
  props:{
      width:{
          type:String,
          default:""
      },
      //是否为购物车
      isShopping:{
          type:Boolean,
          default:true
      },
      //是否为搜索淘宝
      issearchtaobao:{
          type:Boolean,
          default:true
      }
  },
  data() {
    return {
      marList: [
        {
          title: "淘宝发现",
          othList: ["淘宝女人", "淘宝男人", "生活家", "情侣"]
        },
        {
          title: "男女服饰",
          othList: ["女装", "新品", "裙子", "男装", "休闲", "T恤"]
        },
        {
          title: "箱包市场",
          othList: ["女包", "男包", "双肩包", "钱包", "旅行箱"]
        },
        {
          title: "女鞋市场",
          othList: ["靴子", "单鞋", "男鞋", "休闲", "商务"]
        },
        { title: "内衣配饰", othList: ["新品", "文胸", "睡衣", "内裤"] },
        {
          title: "运动市场",
          othList: ["跑步鞋", "球鞋", "运动夹克", "运动套装"]
        },
        {
          title: "户外市场",
          othList: ["山地车", "垂钓用品", "广场舞", "冲锋衣"]
        },
        { title: "数码市场", othList: ["手机", "平板电脑", "相机", "笔记本"] },
        {
          title: "家电市场",
          othList: ["家电", "厨房电器", "广场舞", "生活电器"]
        },
        { title: "美妆市场", othList: ["护肤", "彩妆", "香氛", "男士"] },
        { title: "母婴市场", othList: ["童装", "童鞋", "奶粉", "男士"] },
        { title: "家居家纺", othList: ["四件套", "窗帘", "摆件", "花瓶"] },
        { title: "家装建材", othList: ["厨房卫浴", "灯饰", "建材", "五金"] },
        { title: "日用百货", othList: ["热门", "餐具", "炊具", "收纳"] },
        {
          title: "阿里汽车",
          othList: ["行车记录仪", "脚垫", "安全座椅", "轮胎"]
        },
        { title: "花鸟市场", othList: ["猫狗", "水族", "鲜花", "园艺"] }
      ],
      bannerList: ["宝贝", "天猫", "店铺"]
    };
  },
  methods:{
    logoClick(){
      this.$router.push("/home")
    }
  }
};
</script>
<style scoped>
.T-header {
  height: 70px;
}
.T-header .tb-header {
  background-color: #fff;
  width: 100%;
  padding-top: 10px;
}
.tb-header-content {
  margin: 0 auto;
  height: 60px;
  width: 1140px;
  box-sizing: border-box;
}
.tb-header-logo {
  /* display: inline-block;  */
  float: left;
  word-wrap: break-word;
  text-decoration: none !important;
  font-size: 0;
  margin-top: 5px;
  cursor: pointer;
}
.tb-header-logo img {
  height: 38px;
  width: 96px;
}
.tb-header-market {
    position: relative;
  float: left;
  margin: 14px 20px;
}
.tb-header-market-hd {
  position: relative;
  z-index: 2;
  display: block;
  border: 1px solid #e2e2e2;
  padding-left: 8px;
  width: 62px;
  height: 18px;
  line-height: 18px;
  _line-height: 22px;
  color: #666;
  background: #fff;
  text-decoration: none;
  cursor: default;
}
.tb-header-market:hover>.tb-header-market-hd{
    border-bottom-color: transparent;
}
.tb-header-market-hd>i{
    display: inline-block;
    width: 0;
    height: 0;
    border: 4px solid #6c6c6c;
    vertical-align: middle;
    transition: all .5s;
    transform-origin:50% 25%;
    border-left-color: #fff;
    border-right-color: #fff;
    border-bottom-color: #fff;
}
.tb-header-market:hover>.tb-header-market-hd>i{
    transform: rotate(180deg);
}
.tb-header-market:hover .tb-header-market-bd {
  display: block;
  animation: active .5s;
}
.tb-header-market-bd {
  position: absolute;
  top: 19px;
  width: 286px;
  height: 465px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  padding: 8px 0 8px 0;
  overflow: hidden;
  box-sizing: border-box;
  display: none;
  z-index: 1;
}
@keyframes active {
    0%{
        height: 0;
    }
    100%{
        height: 465px;
    }
}
.tb-header-market-bd dl {
  border-top: solid 1px #fff;
  border-bottom: solid 1px #fff;
  padding: 0 15px;
  height: 26px;
  line-height: 26px;
  overflow: hidden;
}
.tb-header-market-bd dl:hover {
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #f5f5f5;
}
.tb-header-market-bd dt {
  float: left;
  font-weight: 700;
}
.tb-header-market-bd dd {
  float: left;
  margin-left: 10px;
}
.tb-header-market-bd dd a {
  color: #666;
}
.tb-header-car {
  float: left;
  margin: 10px 15px;
}
.tb-header-car h1 {
  font-size: 20px;
  font-weight: 800;
  color: rgb(61,61,61);
}
.tb-header-search {
  margin-top: 10px;
  float: right;
  width: 427px;
}
.search-pannel {
  position: relative;
}
.search-pannel form {
  display: block;
}
.search-pannel-fields {
  height: 30px;
  position: relative;
  overflow: hidden;
  background: #f40;
}

.search-combobox {
  margin-left: 2px;
  margin-right: 0;
  margin-top: 2px;
  height: 26px;
  background: #fff;
}
.search-combobox .search-combobox-input {
  font-size: 14px;
  position: relative;
  height: 20px;
  line-height: 20px;
  padding: 3px;
  vertical-align: middle;
  border: 0 none;
  width: 100%;
  outline: 0;
  text-indent: 5px;
}
.search-buttons {
  position: relative;
  z-index: 1;
  float: right;
  background-color: #fff;
}
.search-buttons button {
  cursor: pointer;
  border: 0;
  font-size: 12px;
  float: left;
  width: 72px;
  height: 30px;
  background-color: #f40;
  color: #fff;
  margin-left: -1px;
}
.primary:hover {
  background-color: #f22b00;
}
.search-buttons .secondary {
  background-color: #ffe4d0;
  color: #f40;
  border: 1px solid #ffb086;
  margin-left: 3px;
}
.secondary:hover {
  background-color: #ffd9b3;
}
.tb-header-search-more {
  float: right;
  width: 515px;
  height: 35px;
  background: #f40;
  margin-top: 8px;
  position: relative;
}
.tb-header-search-more .search-buttons button {
  height: 35px;
  font-size: 18px;
  width: 93px;
  letter-spacing: 0.5em;
}
.tb-header-search-more .search-combobox-more {
  margin-left: 79px;
  margin-right: 0;
  margin-top: 3px;
  background: #fff;
  height: 29px;
}
.tb-header-search-more .search-pannel-fields-more{
  background: #f50;
  position: relative;
  overflow: hidden;
  font-size: 12px;
}
.tb-header-search-more .search-combobox-more .search-combobox-input-more {
  height: 29px;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.tb-header-search-more .search-combobox-more input {
  margin-left: 0;
  text-indent: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  outline: 0;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border: 0 none;
  z-index: 2;
}
.tb-header-search-more .search-combobox-more input:focus+i{
  display: none;
}
.tb-header-search-more i {
  z-index: 2;
  position: absolute;
  top: 13px;
  left: 86px;
  width: 12px;
  height: 12px;
  background-position: -380px -20px;
  background-image: url(//gtd.alicdn.com/tps/i4/T1OdGtFaxfXXXa78nI-400-200.png);
  background-repeat: no-repeat;
}
.tb-header-search-more .search-banner {
  width: 74px;
  position: absolute;
  z-index: 1;
  left: 3px;
  top: 3px;
  height: 29px;
  overflow: hidden;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #f5f5f5;
}
.search-selected {
  display: block;
  position: relative;
  height: 29px;
}
.search-selected a {
  background: #f5f5f5;
  border-radius: 0;
  border: 0 none;
  color: #6b6b6b;
  font-weight: 400;
  font-size: 12px;
  padding: 0;
  height: 100%;
  width: 100%;
  text-indent: 15px;
  text-align: left;
  line-height: 29px;
  float: left;
}
.tb-header-search-more .search-banner s {
  line-height: 0;
  border-width: 4px;
  border-color: #666 transparent transparent;
  border-style: solid dashed dashed;
  height: 0;
  position: absolute;
  top: 13px;
  font-size: 0;
  left: 60px;
  z-index: 10;
}
.search-banner:hover {
  overflow: visible;
}
.search-banner li a:hover {
  background: #fff;
}
</style>