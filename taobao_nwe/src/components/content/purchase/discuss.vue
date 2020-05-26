<template>
  <div class="publish">
    <div class="publish-one clearfix">
      <h1 class="publish-title">发表评论</h1>
      <textarea placeholder="请写下您的评论..."></textarea>
      <div class="button">
        <button class="one">发表</button>
        <button class="two">取消</button>
      </div>
    </div>
    <div class="publish-two">
      <h1 class="publish-title">宝贝评论</h1>
      <div class="publish-impression">
        <h3>大家印象:</h3>
        <ul>
          <li
            v-for="(critic,index) in crList"
            :key="index"
            :class="activeClass == index  ? 'current':''"
            @click="changeClass(index)"
          >
            <a href="javascript:void(0)" :class="index==6 || index==8 ? 'curentone':'' ">{{critic}}</a>
          </li>
        </ul>
      </div>
      <div class="publish-seleted">
        <ul class="publish-seleted-one">
          <li v-for="(selected,i) in seList" :key="i">
            <input :checked="i==0" type="radio" name="评论" />
            {{selected}}
          </li>
        </ul>
        <ul class="publish-seleted-two">
          <li class="seleted-recommend">
            <span>推荐顺序</span>
            <span class="selected-down-two">&#9660;</span>
          </li>
          <li>
            <img src="~assets/images/purchase/shopleft/2.png" />
            <span>推荐顺序</span>
          </li>
          <li>
            <img src="~assets/images/purchase/shopleft/3.png" />
            <span>最近评价</span>
          </li>
        </ul>
      </div>
      <ul class="publish-critic">
        <li class="publish-critic-all" v-for="(crtitcall,index) in crtitcList" :key="index">
          <span class="publish-critic-left">
            <img :src="crtitcall.src1" class="headimg" />
            <span class="name">{{crtitcall.name}}</span>
            <img :src="crtitcall.src2" class="grade" />
          </span>
          <span class="publish-critic-right">
            <span class="critic-word">{{crtitcall.word}}</span>
            <ul class="critic-img" v-if="index==0 || index==3">
              <li v-for="(crimg,index) in crtitcall.crimgList" :key="index">
                <img :src="crimg.src" />
              </li>
            </ul>
            <span class="critic-date">{{crtitcall.datename}}</span>
            <span class="critic-click">
              有用
              <span>(0)</span>
            </span>
          </span>
        </li>
      </ul>
      <ul class="crtitc-bottom">
        <li
          v-for="(bottom,k) in bottomList"
          :key="k"
          :class="activeClassbottom == k  ? 'pgcurrent':''"
          @click="changeClassbottom(k)"
        >{{bottom}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "discuss",
  data() {
    return {
      activeClass: -1,
      activeClassbottom: -1,
      crList: [
        "颜色很漂亮(109)",
        "款式很新颖(87)",
        "材质很好(234)",
        "性价比高(498)",
        "码很准(66)",
        "做工精细(33)",
        "尺寸有偏差(44)",
        "价格实惠(322)",
        "与图片有很大偏差(8)"
      ],
      seList: [
        "全部",
        "图片(100)",
        "追评(18)",
        "好评(390)",
        "中评(80)",
        "差评(1)"
      ],
      crtitcList: [
        {
          src1: require("@/assets/images/purchase/discuss/1.jpg"),
          name: "胡**费",
          src2: require("@/assets/images/purchase/discuss/1.gif"),
          word: "这个价位买到这一套超级值",
          crimgList: [
            { src: require("@/assets/images/purchase/discuss/1-1.jpg") },
            { src: require("@/assets/images/purchase/discuss/1-2.jpg") }
          ],
          datename: "2020年01月03日 01:54"
        },
        {
          src1: require("@/assets/images/purchase/discuss/2.jpg"),
          name: "混世魔王",
          word: "只是想表达我的激动之情嘿嘿嘿，客服小姐姐也很好呀",
          src2: require("@/assets/images/purchase/discuss/2.gif"),
          datename: "2019年12月15日 01:59"
        },
        {
          src1: require("@/assets/images/purchase/discuss/3.jpg"),
          name: "(匿名)",
          word: "此用户没有填写评价。",
          src2: require("@/assets/images/purchase/discuss/3.gif"),
          datename: "2019年12月15日 08:44"
        },
        {
          src1: require("@/assets/images/purchase/discuss/3.jpg"),
          name: "(匿名)",
          word: "此用户没有填写评价。",
          src2: require("@/assets/images/purchase/discuss/3.gif"),
          datename: "2019年12月15日 12:33"
        },
        {
          src1: require("@/assets/images/purchase/discuss/3.jpg"),
          name: "(匿名)",
          word: "此用户没有填写评价。",
          src2: require("@/assets/images/purchase/discuss/3.gif"),
          datename: "2019年11月4日 10:23"
        },
        {
          src1: require("@/assets/images/purchase/discuss/3.jpg"),
          name: "(匿名)",
          word: "此用户没有填写评价。",
          src2: require("@/assets/images/purchase/discuss/3.gif"),
          datename: "2019年10月25日 07:45"
        },
        {
          src1: require("@/assets/images/purchase/discuss/3.jpg"),
          name: "(匿名)",
          word: "此用户没有填写评价。",
          src2: require("@/assets/images/purchase/discuss/3.gif"),
          datename: "2019年2月15日 23:04"
        }
      ],
      bottomList: ["上一页", "1", "2", "3", "下一页"]
    };
  },
  components: {},
  methods: {
    changeClass(index) {
      this.activeClass = index;
    },
    changeClassbottom(k) {
      this.activeClassbottom = k;
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
:focus{
    outline: none;
}
.publish {
  margin: 0 auto;
  width: 950px;
  border: 1px solid #e5e5e5;
}
.publish-one {
  margin-bottom: 16px;
}
.publish-title {
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 10px;
}
.publish textarea {
  height: 64px;
  width: 866px;
  margin: 10px 23px 0 23px;
  font-size: 13px;
  border: 1px solid #eee;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #fafafa;
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}
.publish .button {
  margin: 10px 40px 0 746px;
  height: 30px;
  width: 160px;
}
.publish .button button {
  margin-right: 10px;
  border-radius: 50px;
  border: 0;
  width: 70px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  padding-right: 10px;
}
.button button::after {
  clear: both;
}
.button .one {
  background-color: rgb(241, 128, 87);
}
.button .two {
  background-color: #e5e5e5;
}
.publish-two {
  border-top: 1px solid #e5e5e5;
}
.publish .publish-impression {
  height: 62px;
  width: 850px;
  border: 1px solid #e5e5e5;
  margin: 0 24px;
  padding: 24px 24px;
}
.publish .publish-impression h3 {
  width: 90px;
  color: #000;
  text-align: right;
  font-weight: 400;
  margin: 3px 10px 0 0;
  float: left;
}
.publish .publish-impression ul {
  width: 600px;
  height: 62px;
  overflow: hidden;
}
.publish .publish-impression ul li {
  margin: 0 5px 5px 0;
  position: relative;
  white-space: nowrap;
  float: left;
}
.publish .publish-impression ul li a {
  background-color: #f88c19;
  height: 22px;
  line-height: 22px;
  padding: 0 8px;
  float: left;
  color: #fff;
  border: 2px solid #f88916;
}

.publish .publish-impression ul li .curentone {
  background-color: #a4a4a4;
  background-repeat: repeat-x;
  border-color: #a1a1a1;
}
.publish .publish-impression ul li .curentone:hover {
  text-decoration: none;
  background: #fff;
  filter: none;
  color: #404040;
}
.publish .publish-impression ul li a:hover,
.publish .publish-impression li.current a {
  text-decoration: none;
  background: #fff;
  filter: none;
  color: #404040;
}
.publish-seleted {
  width: 878px;
  height: 24px;
  border: 1px solid #e5e5e5;
  margin: 20px 24px;
  padding: 10px;
}
.publish-seleted .publish-seleted-one {
  margin-right: 15px;
  float: left;
}
.publish-seleted .publish-seleted-two {
  float: right;
  width: 80px;
  overflow: hidden;
  height: 24px;
}
.publish-seleted ul li {
  float: left;
  margin: 2px 10px 2px 0;
  text-align: left;
  font-size: 12px;
}
.publish-seleted .publish-seleted-two li {
  cursor: pointer;
  float: right;
  width: 78px;
  height: 22px;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  position: relative;
  overflow: hidden;
  line-height: 22px;
  margin: 0;
}
.publish-seleted .seleted-recommend span {
  padding: 0 5px;
}
.publish-seleted .seleted-recommend span.selected-down-two {
  border-left: 1px solid #ccc;
  height: 22px;
  padding: 0px 3px;
}
.publish-seleted .publish-seleted-two:hover {
  overflow: visible;
}
.publish-seleted-two li:nth-child(2) {
  margin-top: -1px;
}
.publish-seleted-two li:nth-child(3) {
  margin-top: -1px;
}
.publish-seleted li img {
  vertical-align: middle;
  height: 12px;
}
.publish-seleted li:nth-child(2) span:hover {
  opacity: 0.5;
}
.publish-seleted li:nth-child(3) span:hover {
  opacity: 0.5;
}
.publish-two .publish-critic {
  width: 900px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
}
.publish-two .publish-critic .publish-critic-all {
  height: 115px;
  margin: 20px;
  border-bottom: 1px solid #d4d4d4;
}
.publish-two .publish-critic .publish-critic-all .publish-critic-left {
  display: block;
  width: 100px;
  height: 75px;
  float: left;
  text-align: center;
  line-height: 1.5;
  overflow: hidden;
}
.publish-critic-left img {
  display: inline;
  vertical-align: middle;
}
.publish-critic-left .headimg {
  height: 40px;
  width: 40px;
}
.publish-critic-left .name {
  display: block;
}
.publish-two .publish-critic .publish-critic-all .publish-critic-right {
  display: block;
  width: 760px;
  height: 90px;
  float: right;
}
.publish-critic-right span {
  display: block;
}
.publish-critic-right .critic-word {
  font-size: 14px;
  line-height: 1.4;
  color: #3f3f3f;
  word-wrap: break-word;
}
.publish-critic-right .critic-img {
  margin-top: 10px;
  height: 48px;
}
.publish-critic-right .critic-img li {
  float: left;
  border: 2px solid #f0f0f0;
  padding: 2px;
  margin-right: 6px;
  position: relative;
  background-color: #fff;
  cursor: pointer;
}
.publish-critic-right .critic-img li img {
  display: block;
  width: 40px;
  height: 40px;
  background-color: #fcfcfc;
}
.publish-critic-right .critic-date {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #b0b0b0;
}
.publish-critic-right .critic-click {
  float: right;
  margin-top: 10px;
  padding: 0 9px;
  color: #36c;
  cursor: pointer;
}
.critic-click > span {
  display: inline-block;
  color: #aaa;
  cursor: text;
}
.crtitc-bottom {
  margin-left: 714px;
  margin-top: 1.5em;
  display: inline-block;
  height: 26px;
  width: 215px;
}
.crtitc-bottom > li {
  color: #333;
  line-height: 24px;
  margin-left: 3px;
  border: 1px solid #eee;
  padding: 0 9.6px;
  box-sizing: border-box;
  float: left;
  cursor: pointer;
  position: relative;
  transition: all ease 400ms;
}
.crtitc-bottom li:hover {
  color: #f40;
  border-color: #f40;
}
.crtitc-bottom li.pgcurrent:not(:first-child):not(:last-child) {
  color: #fff;
  background-color: #f40;
  border-color: #f40;
}
</style>