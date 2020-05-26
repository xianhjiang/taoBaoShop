<template>
  <div v-if="shop.sellRight">
    <div class="i_t">
      <span class="fl">限时特卖</span>
      <span class="i_mores fr">
        <a href="#">更多</a>
      </span>
    </div>
    <div class="content clearfix">
      <div class="i_sell">
        <rotationChart @currentImg="sellClick"
          :isSlider="false"
          :picList="shop.sellLeft"
        ></rotationChart>
      </div>
      <div class="sell_right">
        <div class="sellgorup">
          <div v-for="(item,i) in shop.sellRight.shellSmall[0]" :key="i" class="sell" @click="sellClick(item)">
            <div class="s_img">
              <a href="javascript:;">
                <img :src="item.src" width="185" height="155" />
              </a>
            </div>
            <div class="s_price">
              ￥
              <span>{{item.price}}</span>
            </div>
            <div class="s_name">
              <h2>
                <a href="javascript:;">{{item.title}}</a>
              </h2>倒计时：
              <span>{{day}}</span> 天
              <span>{{hour}}</span> 时
              <span>{{min}}</span> 分
              <span>{{second}}</span> 秒
            </div>
          </div>
        </div>
        <div class="sell_b" @click="sellClick(shop.sellRight.shellBig[0])">
          <div class="sb_img">
            <a href="javascript:;">
              <img :src="shop.sellRight.shellBig[0].src" width="242" height="356" />
            </a>
          </div>
          <div class="s_price">
            ￥
            <span>{{shop.sellRight.shellBig[0].price}}</span>
          </div>
          <div class="s_name">
            <h2>
              <a href="javascript:;">{{shop.sellRight.shellBig[0].title}}</a>
            </h2>倒计时：
            <span>{{day}}</span> 天
            <span>{{hour}}</span> 时
            <span>{{min}}</span> 分
            <span>{{second}}</span> 秒
          </div>
        </div>
        <div class="sellgorup">
          <div v-for="(item,i) in shop.sellRight.shellSmall[1]" :key="i" class="sell" @click="sellClick(item)">
            <div class="s_img">
              <a href="javascript:;">
                <img :src="item.src" width="185" height="155" />
              </a>
            </div>
            <div class="s_price">
              ￥
              <span>{{item.price}}</span>
            </div>
            <div class="s_name">
              <h2>
                <a href="javascript:;">{{item.title}}</a>
              </h2>倒计时：
              <span>{{day}}</span> 天
              <span>{{hour}}</span> 时
              <span>{{min}}</span> 分
              <span>{{second}}</span> 秒
            </div>
          </div>
        </div>
        <div class="sell_b" @click="sellClick(shop.sellRight.shellBig[1])">
          <div class="sb_img">
            <a href="javascript:;">
              <img :src="shop.sellRight.shellBig[1].src" width="242" height="356" />
            </a>
          </div>
          <div class="s_price">
            ￥
            <span>{{shop.sellRight.shellBig[1].price}}</span>
          </div>
          <div class="s_name">
            <h2>
              <a href="javascript:;">{{shop.sellRight.shellBig[1].title}}</a>
            </h2>倒计时：
            <span>{{day}}</span> 天
            <span>{{hour}}</span> 时
            <span>{{min}}</span> 分
            <span>{{second}}</span> 秒
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rotationChart from "components/common/rotationChart";
export default {
  name: "flashSale",
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      second: 0,
      min: 0,
      hour:0,
      day:0,
      marginLeft: 0,
      timer: "",
      i: 0,
      //未来时间
      futureTime:this.shop.futureTime?this.shop.futureTime:"2021/1/1"
    };
  },
  components: {
    rotationChart
  },
  computed:{
  },
  methods: {
    sellClick(item) {
      let src = item.src
      let res = src.match(/^http:\/\/localhost:8080\/images\/home(\S*)/)
      let imgsrc = res[1]
      sessionStorage.goods = JSON.stringify(item)
      this.$store.commit("seegoods", item);
      this.$router.push("/purchase"+imgsrc);
    }
  },
  mounted() {
      setInterval(()=>{
            //获取当前时间戳
            let timeing = Date.parse(new Date())
            let time = Date.parse(this.futureTime)
            let timeNumber = time - timeing
            this.day = parseInt(timeNumber/(24*60*60*1000))
            this.hour =("0" + parseInt((timeNumber-this.day*(24*60*60*1000))/(60*60*1000)) ).slice(-2)
            this.min =("0" + parseInt((timeNumber-this.day*(24*60*60*1000)-this.hour*(60*60*1000))/(60*1000)) ).slice(-2)
            this.second =("0" + parseInt((timeNumber-this.day*(24*60*60*1000)-this.hour*(60*60*1000)-this.min*(60*1000))/(1000)) ).slice(-2)
      },1000)
  }
};
</script>
<style scoped>
a {
  color: #f40;
}
.imgs {
  transition: all 0.5s ease;
}
.i_t {
  width: 1179px;
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
.i_mores a {
  color: #555555;
}
.i_mores a:hover {
  color: #ff4e00;
}

.i_sell {
  width: 211px;
  height: 357px;
  overflow: hidden;
  float: left;
}
.sell_right {
  width: 975px;
  height: 356px;
  display: flex;
  overflow: hidden;
  background-color: #fff;
  float: right;
  border: 1px solid #eaeaea;
}
.sell_right .sellgorup {
  width: 244px;
  height: 100%;
}
.sell_right img {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
.sell {
  position: relative;
  width: 244px;
  height: 177px;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
}
.sell:hover img {
  -moz-transform: scale(1.1, 1.1);
  -webkit-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}
.s_img {
  text-align: center;
  overflow: hidden;
  margin-top: 6px;
}
.s_price {
  width: 100%;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  color: #ff4e00;
  font-size: 14px;
  text-indent: 10px;
  position: absolute;
  left: 0;
  top: 10px;
}
.s_price span {
  font-size: 20px;
}
.s_name {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background: url(~assets/images/home/flashsale/common/name.png) repeat-x center top;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
}
.s_name h2 {
  height: 25px;
  width: 80%;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  margin-top: 5px;
}
.s_name h2>a{
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.s_name>span {
  color: #ff4e00;
  font-size: 14px;
}
.s_name>span>.Prescription{
    font-size: 12px;
    margin: 0 1px;
    color: #555555;
}
.sell_b {
  position: relative;
  width: 242px;
  height: 356px;
  overflow: hidden;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
}
.sell_b:hover img {
  -moz-transform: scale(1.1, 1.1);
  -webkit-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}
.sb_img {
  width: 242px;
  height: 356px;
  overflow: hidden;
}

</style>