<template>
  <div class="purchasenav">
    <div class="tb-shop">
      <div class="col-main">
        <div class="nav-ch-all">
          <a href="#" class="link">
            <span>所有分类</span>
            <i class="popup-icon"></i>
          </a>
          <div class="nav-ch-it">
            <ul class="its">
              <li class="its-item" v-for="(bao,index) in baoList" :key="index">
                <h4>
                  <a href="#">{{bao.name}}</a>
                </h4>
                <div class="nav-ch-mt" v-if="index==0">
                  <ul class="mits">
                    <li class="mits-item" v-for="(cao,index) in bao.caoList" :key="index">
                      <h4>
                        <a href="#">{{cao}}</a>
                      </h4>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul class="menu-list">
          <li class="menu" v-for="(menu,index) in menuList" :key="index">
            <a href="#" class="link">
              <span>{{menu}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "purchasenav",
  props: {},
  data() {
    return {
      menuList: ["首页", "衣服", "鞋子", "手机", "电脑", "手表", "戒指"],
      baoList: [
        { name: "所有宝贝", caoList: ["按销量", "按价格", "按排名"] },
        { name: "单鞋" },
        { name: "靴子" },
        {
          name: "凉鞋"
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='css' scoped>
.tb-shop {
  height: 30px;
  width: 1190px;
  margin: 0 auto;
}
.tb-shop .col-main {
  width: 950px;
  margin: 0 auto;
}
.col-main .col-main-nav {
  margin: 0 auto;
}
.nav-ch-all {
  padding: 0;
  background: #1d1d1d;
  height: 30px;
  max-width: 111px;
  float: left;
  position: relative;
}
.link {
  background: #1d1d1d;
  border: 0;
  padding: 0 20px;
  width: auto;
  font-size: 14px;
  font-weight: 700;
  float: left;
  display: block;
  color: #fff;
}
.link span {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 100;
  margin: 0;
  float: left;
}
.link .popup-icon {
  height: 8px;
  width: 9px;
  background: url(//gdp.alicdn.com/tps/i1/T18WsRFcpdXXXPXsT8-51-381.gif) 0 -50px
    no-repeat;
  margin-left: 7px;
  margin-top: 11px;
  display: inline-block;
}
.link:hover {
  background: #fff;
  color: #1d1d1d;
}
.nav-ch-all :hover .link {
  background: #fff;
  color: #1d1d1d;
}
.nav-ch-all :hover .popup-icon {
  background: url(//gdp.alicdn.com/tps/i1/T18WsRFcpdXXXPXsT8-51-381.gif) -20px -50px
    no-repeat;
}
.nav-ch-it {
  width: 180px;
  position: absolute;
  top: 30px;
  display: none;
  z-index: 100000000;
  background: #000;
  border: 0;
}
.nav-ch-all:hover .nav-ch-it {
  display: block;
}
.nav-ch-it .its {
  background-color: #fff;
  margin: 0;
}
.nav-ch-it .its .its-item {
  height: 30px;
  width: 180px;
  border-bottom: 1px solid #333;
  float: left;
  overflow: hidden;
}
.nav-ch-it .its .its-item h4 {
  padding-left: 20px;
}
.nav-ch-it .its .its-item a {
  color: #fff;
  font-size: 12px;
  font-weight: 100;
}
.nav-ch-it .its-item:hover {
  cursor: pointer;
  background: #fff;
}
.nav-ch-it .its-item:hover a {
  color: #1d1d1d;
}
.its-item::after {
  clear: both;
  display: table;
}
.nav-ch-it .its-item:hover .nav-ch-mt {
  display: block;
}
.nav-ch-it .nav-ch-mt {
  position: absolute;
  top: 0;
  left: 180px;
  width: 180px;
  height: 396px;
  background: #000;
  display: none;
}
.nav-ch-it .nav-ch-mt .mits {
  color: #ccc;
  background: #000;
  position: relative;
  padding-top: 15px;
}
.nav-ch-it .its-item .nav-ch-mt .mits .mits-item {
  height: 30px;
  line-height: 30px;
  font-weight: 100;
  background: #000;
}
.nav-ch-it .its-item .nav-ch-mt .mits .mits-item h4 {
  padding-left: 15px;
}
.nav-ch-it .its-item .nav-ch-mt .mits .mits-item a {
  color: #ccc;
  font-size: 12px;
  font-weight: 100;
}
.nav-ch-it .its-item .nav-ch-mt .mits-item:hover {
  cursor: pointer;
  background-color: #fff;
}
.nav-ch-it .its-item .nav-ch-mt .mits-item:hover a {
  color: #1d1d1d;
}
.menu-list {
  height: 30px;
  background: #1d1d1d;
  overflow: hidden;
  width: 839px;
  float: left;
}
.menu-list .menu {
  display: inline-block;
  background: #1d1d1d;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  font-weight: 100;
}
.menu-list .menu:hover .link {
  background: #fff;
  color: #1d1d1d;
}
</style>