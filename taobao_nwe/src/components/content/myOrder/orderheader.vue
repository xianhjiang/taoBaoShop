<template>
  <div>
    <topheader :isHome="false"></topheader>
    <div class="search">
      <div class="searchall">
        <img @click="homeClick" src="~assets/images/taoheader/toplogo/orderheader.png" />
        <ul class="searchnav">
          <li>
            <a href="#">首页</a>
            <i class="arrow"></i>
          </li>
          <li>
            <a href>账户设置</a>
            <i class="arrow-t"></i>
            <span class="navmore">
              <i class="arrow-m"></i>
              <dl v-for="(navmore,index) in navmoreList " :key="index">
                <dt :class="more[index]">{{navmore.name}}</dt>
                <dd>
                  <p v-for="(moreother,i) in navmore.moretherList" :key="i">
                    <a href="#">{{moreother}}</a>
                  </p>
                </dd>
              </dl>
            </span>
          </li>
        </ul>
        <span class="searchinput">
          <input type="text" />
          <button>搜索</button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import topheader from "components/content/header/topheader";
export default {
  name: "orderheader",
  components: { topheader },
  data() {
    return {
      navmoreList: [
        {
          name: "安全设置",
          moretherList: ["修改登录密码", "手机绑定", "密保问题设置", "其他"]
        },
        {
          name: "个人资料",
          moretherList: ["收货地址", "修改头像、昵称", "消息提醒设置"]
        },
        { name: "账号绑定", moretherList: ["支付宝绑定", "微博绑定"] }
      ],
      more: ["navmorecolor1", "navmorecolor2", "navmorecolor3"]
    };
  },
  methods:{
    homeClick(){
        this.$router.push("/home")
    }
  }
};
</script>
<style scoped>
.search {
  background: #ff4401;
}
.search .searchall {
  width: 1190px;
  height: 60px;
  margin: 0 auto;
}
.search img {
  float: left;
  width: 140px;
  height: 36px;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  margin: 12px 0;
}
.searchnav {
  width: 280px;
  height: 60px;
  float: left;
  margin-left: 100px;
}
.searchnav li {
  position: relative;
  float: left;
  cursor: pointer;
  height: 60px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  font-family: tahoma;
}
.searchnav li a {
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 19px 25px;
  color: #fff;
  position: relative;
}
.searchnav li .arrow {
  border-style: solid;
  border-width: 6px;
  position: absolute;
  border-color: #ff4401 #ff4401 #fff;
  left: 50%;
  margin-left: -6px;
  bottom: 0;
}
.searchnav li .arrow-t {
  position: absolute;
  width: 0;
  height: 0;
  left: 92px;
  top: 29px;
  border-color: rgba(255, 255, 255, 0);
  border-style: solid;
  overflow: hidden;
  border-width: 3px 3px 0;
  border-top-color: #fff;
}
.searchnav .navmore {
  cursor: default;
  position: absolute;
  z-index: 3;
  border: 1px solid #e1e1e1;
  border-top: 0 none;
  padding: 18px 0;
  left: -190px;
  background: #fff;
  width: 470px;
  box-shadow: 0 1px 2px #ddd;
  display: none;
  opacity: 0;
}
.searchnav .navmore .arrow-m {
  border-style: solid;
  border-width: 6px;
  font-size: 0;
  height: 0;
  line-height: 0;
  position: absolute;
  width: 0;
  border-color: transparent transparent #fff;
  left: 50%;
  top: -12px;
  margin-left: -6px;
  box-shadow: 0 1px 0 #fff;
  bottom: 2px;
}
.searchnav .navmore dl {
  width: 33%;
  float: left;
}
.searchnav .navmorecolor1 {
  color: #3aac8a;
}
.searchnav .navmorecolor2 {
  color: #ea746b;
}
.searchnav .navmorecolor3 {
  color: #398ee8;
}
.searchnav .navmore dl dt {
  font-size: 16px;
  padding-left: 38px;
}
.searchnav .navmore dl p {
  margin: 0;
}
.searchnav .navmore dl a {
  display: block;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  line-height: 40px;
  padding: 0;
  padding-left: 38px;
  color: #000;
  text-align: left;
  font-family: tahoma;
}
.searchnav .navmore dl a:hover {
  color: #f40;
}
.searchnav li:nth-child(2):hover .navmore {
  display: block;
  animation: active 1s;
  opacity: 1;
}
@keyframes active {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.searchinput {
  float: right;
  width: 322px;
  background: #fff;
  height: 26px;
  margin: 17px 0;
}
.searchinput input {
  border: 0;
  width: 246px;
  height: 20px;
  padding: 3px 2px;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
}
.searchinput button {
  border: 0;
  width: 72px;
  height: 29px;
  padding: 0;
  text-indent: 0;
  font-size: 12px;
  color: #666;
  background: #f5f5f5;
  border-left: 1px solid #d9d9d9;
  letter-spacing: 0.5em;
}
</style>