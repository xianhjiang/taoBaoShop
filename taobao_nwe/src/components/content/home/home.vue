<template>
  <div class="home">
    <taoheader></taoheader>
    <div class="i_bg bg_color">
      <subject></subject>
      <flashSale class="clearfix" :shop="flashsale"></flashSale>
      <div class="content mar_20">
        <img src="~assets/images/home/mban_1.jpg" width="1200" height="110" />
      </div>
      <center v-for="(item,i) in center" :key="i" :index="i" :shop="item"></center>
    </div>
    <taofooter></taofooter>
  </div>
</template>
<script>
import center from "components/content/home/center";
import flashSale from "components/content/home/flashSale";
import taoheader from "components/content/header/taoheader";
import taofooter from "components/content/footer/taofooter";
import subject from "components/content/home/subject";
export default {
  name: "home",
  data() {
    return {
      price: 100,
      marginLeft: 0,
      flashsale: {},
      center: [],
      refillList: ["100元", "50元", "30元", "10元"],
      numbs: ["100", "50", "30", "10"],
      innewList: [
        { theme: "[ 特惠 ]", description: "掬一轮明月 表无尽惦念" },
        { theme: "[ 公告 ]", description: "好奇金装成长裤新品上市" },
        { theme: "[ 特惠 ]", description: "大牌闪购 · 抢！" },
        { theme: "[ 公告 ]", description: "发福利 买车就抢千元油卡" },
        { theme: "[ 公告 ]", description: "家电低至五折" }
      ]
    };
  },
  components: {
    center,
    flashSale,
    taoheader,
    taofooter,
    subject,
  },
  methods: {
  },
  mounted() {
  },
  created() {
      let home =sessionStorage.home?JSON.parse(sessionStorage.home):{}
      if (home.center&&home.flashsale) {
        this.center = home.center;
        this.flashsale = home.flashsale
      
    }else{
        this.$axios({
        method: "get",
        url: "http://localhost:8080/homeData",
        params:{
            type:["center","flashsale"]
        }
        }).then(res => {
        this.center = res.center;
        this.flashsale = res.flashsale
        let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
        home.center = res.center;
        home.flashsale = res.flashsale
        sessionStorage.home = JSON.stringify(home);
        }).catch(err=>{
            console.log(err);
        })
    }
    
  }
};
</script>
<style scoped>
.clearfix:after {
  content: "";
  width: 100%;
  display: block;
  clear: both;
}
.home {
  background-color: #f6f6f6;
}
.home .subject {
  width: 1190px;
}
.i_bg {
  width: 1190px;
  margin: 0 auto;
}
.bg_color {
  background-color: #f6f6f6;
}

.content {
  width: 1190px;
  overflow: hidden;
}
.mar_20 {
  margin-top: 20px;
}
</style>