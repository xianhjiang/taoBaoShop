<template>
      <div class="bd-sidebar">
        <div class="bd-sidebar-border">
          <a href="#" class="bd-sidebar-top">
            <span class="bd-sidebar-top-date">
              连续
              <em>4</em>期
            </span>
            <img src="~assets/images/purchase/shopleft/sidebar.png" />
          </a>
          <img src="~assets/images/purchase/shopleft/pick.png" id="pick" />
          <div class="bd-sidebar-middle">
            <div class="middle-one">
              <p>
                <strong>
                  <a href="#">混世魔王专卖店</a>
                </strong>
              </p>
              <dl v-for="(middleone,index) in middleList" :key="index">
                <dt>{{middleone.name}}:</dt>
                <dd v-if="index==0" class="i1"></dd>
                <dd v-if="index==1" class="i2">混世魔王</dd>
                <dd v-if="index==2" class="i3"></dd>
                <dd v-if="index==3" class="i4"></dd>
              </dl>
            </div>
            <div class="middle-two">
              <div class="middle-two-a">
                <dl v-for="(twoA , index) in twoaList" :key="index">
                  <dt>{{twoA}}</dt>
                  <dd>
                    <a href="#">4.8</a>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="middle-three">
              <a href="#">进入店铺</a>
              <a href="#">收藏店铺</a>
            </div>
          </div>
        </div>
        <div class="bd-sidebar-bottom">
          <p class="see">看了又看</p>
          <p class="see-right"></p>
          <ul>
            <li class="recommend" v-for="(recommend,index) in recommendList" :key="index">
              <a href="#">
                <img :src="recommend.src" />
              </a>
              <p class="price">
                <b class="yen">¥</b>
                <b>{{recommend.price}}</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
export default {
  name: "shopleft",
  components: {},
  data() {
    return {
      middleList: [
        { name: "信誉" },
        { name: "掌柜" },
        { name: "联系" },
        { name: "资质" }
      ],
      twoaList: ["描述", "服务", "物流"],
      recommendList: [
        {
          src: require("@/assets/images/purchase/shopleft/1.jpg"),
          price: "258"
        },
        {
          src: require("@/assets/images/purchase/shopleft/2.jpg"),
          price: "4499"
        },
        {
          src: require("@/assets/images/purchase/shopleft/3.jpg"),
          price: "5999"
        },
        {
          src: require("@/assets/images/purchase/shopleft/4.jpg"),
          price: "2890"
        },
        {
          src: require("@/assets/images/purchase/shopleft/5.jpg"),
          price: "599"
        },
        {
          src: require("@/assets/images/purchase/shopleft/6.jpg"),
          price: "209"
        }
      ]
    };
  }
};
</script>
<style scoped>
.tb-detail-bd {
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
}
.bd-sidebar {
  width: 199px;
}
.bd-sidebar-border {
  border: 1px solid #ffe2a3;
  position: relative;
}
.bd-sidebar-top {
  height: auto;
  min-height: 45px;
  display: block;
  position: relative;
}
.bd-sidebar-top-date {
  display: block;
  position: absolute;
  top: 10px;
  left: 93px;
  font-size: 10px;
  background: #e54e00;
  color: #fff;
  padding: 0 3px;
  font-weight: 400;
  border-radius: 3px;
}
.bd-sidebar-top-date em {
  color: #ff0;
  font-style: normal;
}
.bd-sidebar img {
  width: 198px;
  height: 60px;
}
#pick {
  position: absolute;
  top: -8px;
  right: 6px;
  width: 48px;
  height: 63px;
}
.bd-sidebar-middle {
  padding: 0 10px 17px 20px;
  width: 168px;
  height: 241px;
  color: #666;
  background: #fff;
}
.bd-sidebar-middle .middle-one {
  margin-bottom: 10px;
  height: 124px;
}
.middle-one p {
  margin: 0 0 5px 0;
  height: 20px;
}
.middle-one dl {
  margin-bottom: 7px;
  height: 168px;
  height: 20px;
}
.middle-one dl dt {
  float: left;
  height: 20px;
  width: 36px;
  margin: 0;
}
.middle-one dl .i1 {
  float: left;
  margin-right: 2px;
  width: 16px;
  height: 16px;
  background-image: url(~assets/images/purchase/shopleft/left.gif);
  cursor: pointer;
}
.middle-one dl .i3 {
  float: left;
  width: 67px;
  height: 20px;
  background-image: url(~assets/images/purchase/shopleft/call.gif);
  cursor: pointer;
}
.middle-one dl .i4 {
  float: left;
  width: 80px;
  height: 18px;
  background: url(~assets/images/purchase/shopleft/1.png) center no-repeat;
  background-size: cover;
  cursor: pointer;
}
.middle-two {
  margin-bottom: 16px;
  padding-top: 13px;
  border-top: dotted 1px #e1e1e1;
  overflow: hidden;
}
.middle-two-a {
  margin: 0 0 0 -28px;
  height: 31px;
}
.middle-two dl {
  float: left;
  padding-left: 14px;
  margin-left: 14px;
  border-left: 1px solid #ebebeb;
}
.middle-two .middle-two-a dl dt {
  line-height: 12px;
  font-size: 12px;
}
.middle-two .middle-two-a dd {
  color: #f40 !important;
  font-weight: 500;
  background-position: right 4px;
}
.middle-two .middle-two-a a {
  padding-right: 12px;
  color: #f40 !important;
  font-weight: 500;
  background-position: right 4px;
  background-image: -webkit-image-set(url(//img.alicdn.com/tfs/TB1LpKmlf6H8KJjy0FjXXaXepXa-400-340.png) 1x,
                                        url(//img.alicdn.com/tfs/TB1PFKmlf6H8KJjy0FjXXaXepXa-800-680.png) 2x);
  background-repeat: no-repeat;
}
.middle-three a {
  float: left;
  margin-right: 5px;
  width: 74px;
  height: 28px;
  text-align: center;
  color: #666;
  line-height: 28px;
  border: 1px solid #ededed;
  border-radius: 2px;
  background: #fafafa;
}
.middle-three a:hover {
  color: #666;
  border-color: #e0e0e0;
  background: #f5f5f5;
}
.bd-sidebar-bottom {
  padding: 17px 12px 0 15px;
  border: 1px solid #e8e8e8;
  height: 358px;
}
.bd-sidebar-bottom .see {
  margin: 0;
  padding: 0 5px 11px;
  height: 16px;
  font-weight: 700;
  color: #535353;
  float: left;
}
.bd-sidebar-bottom .see-right {
  float: right;
  width: 16px;
  height: 16px;
  margin: 4px 7px 0 0;
  cursor: pointer;
  background: url(//img.alicdn.com/tps/i3/T1O57XFPhcXXaSQP_X-16-16.png)
    no-repeat;
}
.bd-sidebar-bottom ul {
  height: 216px;
  width: 172px;
  padding-top: 30px;
}
.recommend {
  width: 80px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
}
.recommend a {
  width: 80px;
  height: 80px;
  line-height: 80px;
  display: block;
  border: 1px solid transparent;
  margin: -1px;
}
.recommend img {
  display: block;
  margin: 0 auto;
  height: 80px;
  width: 80px;
  height: 80px;
}
.recommend p {
  line-height: 21px;
  margin-bottom: 1px;
  color: #ff4805;
  text-align: center;
}
.recommend .price {
  margin: 0;
  cursor: pointer;
}
.recommend .yen {
  font-family: Arial;
  font-weight: 400;
  padding-right: 3px;
  color: #f50;
}
</style>