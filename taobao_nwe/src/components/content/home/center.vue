<template>
  <div class="center">
    <div class="i_t mar_10">
      <span class="floor_num">{{index+1}}F</span>
      <span class="fl">{{shop.fl}}</span>
      <span class="i_mores fr">
        <a href="#">{{shop.fr1}}</a>&nbsp; &nbsp; | &nbsp; &nbsp;
        <a href="#">{{shop.fr2}}</a>&nbsp; &nbsp; | &nbsp; &nbsp;
        <a href="#">{{shop.fr3}}</a>&nbsp; &nbsp; | &nbsp; &nbsp;
        <a href="#">{{shop.fr4}}</a>&nbsp; &nbsp; | &nbsp; &nbsp;
        <a href="#">{{shop.fr5}}</a>
      </span>
    </div>
    <div class="content">
      <div class="food_left">
        <div class="food_ban">
          <rotationChart @currentImg="shopClick"
            :isSlider="false"
            :picList="shop.centerLeft.imgs"
          ></rotationChart>
        </div>
        <div class="fresh_txt">
          <div class="fresh_txt_c">
            <a href="#" v-for="item in shop.centerLeft.freshTxt" :key="item">{{item}}</a>
          </div>
        </div>
      </div>
      <div class="fresh_mid">
        <ul>
          <li @click="shopClick(item)" v-for="(item,i) in shop.centerMid" :key="i">
            <div class="img">
              <a href="javascript:;">
                <img :src="item.src" width="185" height="155" />
              </a>
            </div>
            <div class="name">
              <a href="javascript:;">{{item.title}}</a>
            </div>
            <div class="price">
                <font>
                  ￥
                  <span>{{item.price}}</span>
                </font>
                &nbsp; 
                <i>{{item.price1}}</i>
            </div>
            
          </li>
        </ul>
      </div>
      <div class="fresh_right">
        <ul>
          <li @click="shopClick(item)" v-for="(item,i) in shop.centerRight" :key="i">
            <a href="javascript:;">
              <img :src="item.src" width="260" height="220" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import rotationChart from "components/common/rotationChart";
export default {
  name: "center",
  props: {
    shop: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      marginLeft: 0,
      timer: "",
      i: 0
    };
  },
  components: {
    rotationChart
  },
  methods: {
    shopClick(item) {
      let src = item.src
      let res = src.match(/^http:\/\/localhost:8080\/images\/home(\S*)/)
      let imgsrc = res[1]
      sessionStorage.goods = JSON.stringify(item)

      this.$store.commit("seegoods", item);
      this.$router.push("/purchase"+imgsrc);
    }
  },
  mounted() {}
};
</script>
<style scoped>
a {
  color: #555;
}
a:hover {
  color: #f40;
}
.floor_num {
  width: 33px;
  height: 34px;
  line-height: 40px;
  overflow: hidden;
  background: url(~assets/images/home/center/common/floor.png) no-repeat center top;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  text-indent: 6px;
  float: left;
  margin-right: 15px;
}
.fresh_txt {
  width: 211px;
  height: 155px;
  background: url(~assets/images/home/center/common/s_txt.png) no-repeat center top;
  padding-top: 1px;
}
.fresh_txt_c {
  height: 120px;
  line-height: 30px;
  overflow: hidden;
  margin-top: 10px;
}
.fresh_txt_c a {
  display: inline-block;
  margin-left: 20px;
  margin-right: 12px;
}

.fresh_mid {
  width: 729px;
  height: 441px;
  overflow: hidden;
  background-color: #fff;
  float: left;
}
.fresh_mid ul li {
  width: 242px;
  height: 220px;
  overflow: hidden;
  float: left;
  border-left: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.fresh_mid ul li .name {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  width: 188px;
  margin:  2px auto 5px;
  /* text-indent: 50px; */
}
.fresh_mid ul li .price {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  color: #999999;
  text-indent: 50px;
  text-transform: uppercase;
}
.fresh_mid ul li .price font {
  color: #ff4e00;
  font-size: 14px;
}
.fresh_mid ul li .price span {
  font-size: 18px;
}
.fresh_mid ul li .price i{
  text-decoration: line-through;
}

.fresh_mid ul li .img {
  width: 220px;
  height: 167px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 5px;
}
.fresh_mid ul li .img img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
.fresh_mid ul li:hover .img img {
  -moz-transform: scale(1.1, 1.1);
  -webkit-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}

.fresh_right {
  width: 260px;
  height: 441px;
  overflow: hidden;
  background-color: #fff;
  float: right;
}
.fresh_right ul li {
  width: 260px;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
}
.imgs {
  transition: all 0.5s ease;
}
.i_t {
  width: 1190px;
  height: 39px;
  line-height: 39px;
  overflow: hidden;
  color: #ff4e00;
  font-size: 18px;
  padding: 0 5px;
  border-bottom: 2px solid #ff4e00;
}
.i_mores {
  font-size: 12px;
  color: #555555;
}
.content {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
}
.fresh_mid {
  width: 729px;
  height: 441px;
  overflow: hidden;
  background-color: #fff;
  float: left;
}
.fresh_mid ul li {
  width: 242px;
  height: 220px;
  overflow: hidden;
  float: left;
  border-left: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.food_left {
  width: 211px;
  height: 441px;
  overflow: hidden;
  background-color: #f3e89b;
  float: left;
}
.food_ban {
  width: 211px;
  height: 286px;
  overflow: hidden;
}
</style>