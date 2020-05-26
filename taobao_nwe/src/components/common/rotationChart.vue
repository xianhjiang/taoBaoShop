<template>
  <div
    class="rotationChart"
    :style="{width:frameSize.width,height:frameSize.height}"
    @mouseenter="rotaMouse"
    @mouseleave="rotaLeave"
  >
    <ul class="panel" :style="{width:panelwidth}">
      <li
        @click="liimgClick(item)"
        v-for="item in picList"
        :style="{transform:paneltranslate}"
        :class="panelLiClass"
        @transitionend="panelLiAnimation"
      >
        <a class="defaultA" href="javascript:;" v-if="Default">
          <img
            :style="{width:item.width || imgSize.width,height:item.height || imgSize.height}"
            :src="item.src"
          />
        </a>
        <slot v-else name="imglists" :data="item"></slot>
      </li>
    </ul>
    <ul class="slider .clearfix" v-if="isSlider">
      <li
        v-for="(item,i) in picListLength"
        :key="i"
        @click="sliderClick(i)"
        :class="sliderIndex==i?'selected':''"
      ></li>
    </ul>
    <!-- <div class="anniu" v-if="isAnniu" v-show="showAnniu">
            <a class="lt" href="javascript:;" @click="ltClick"><span>&lt</span></a>
            <a class="gt" href="javascript:;" @click="gtClick"><span>&gt</span></a>
    </div>-->
    <a v-if="isAnniu" v-show="showAnniu" class="lt" href="javascript:;" @click="ltClick">
      <span>&lt</span>
    </a>
    <a v-if="isAnniu" v-show="showAnniu" class="gt" href="javascript:;" @click="gtClick">
      <span>></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "rotationChart",
  props: {
    //是否使用默认框架
    Default: {
      type: Boolean,
      default: true
    },
    //轮播图图片数组 重要:(src为图片的路径 此项必有) 此项必有 才能有轮播图！！！
    picList: {
      type: Array,
      default: () => []
    },
    //自动播放间隔 interval
    interval: {
      type: Number,
      default: 3000
    },
    //轮播框架的大小 注意:外界父元素确定好了大小 此项可不填
    frameSize: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%"
        };
      }
    },
    //轮播图片大小 注意:此项修改 需谨慎！！！(一般轮播图片大小与轮播框架大小一样 特殊情况除外！)
    imgSize: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%"
        };
      }
    },
    //是否有左右按钮
    isAnniu: {
      type: Boolean,
      default: true
    },
    //是否有滑块指示器
    isSlider: {
      type: Boolean,
      default: true
    }
    //彩蛋:另外 如有需求修改每张轮播执行动画的时长 请修改组件中css的animation值
  },
  data() {
    return {
      //panel的宽度
      panelwidth: "",
      //panel移动的百分比
      paneltranslate: "0",
      //当前轮播图的索引值
      picIndex: 1,
      //当前指示器的索引值
      sliderIndex: 0,
      //图片的个数
      picListLength: this.picList.length,
      //panelLi动画效果class
      panelLiClass: "animation",
      //确定当前动画是否结束，好进行下一次动画
      flag: true,
      //自动轮播的timer
      timer: null,
      //是否显示左右按钮
      showAnniu: false
    };
  },
  watch: {
    sliderIndex: function(newVal, oldVal) {
      this.$emit("obtainindex", newVal);
    }
  },
  components: {},

  computed: {},

  methods: {
    gtClick() {
      if (this.flag) {
        this.picIndex++;
        this.sliderIndex++;
        if (this.picIndex > this.picListLength) {
          this.sliderIndex = 0;
        }
        if (this.picIndex > this.picListLength + 1) {
        } else {
          this.panelLiClass = "animation";
          this.paneltranslate = `translateX(${-this.picIndex * 100}%)`;
        }
        this.flag = false;
      }
    },
    ltClick() {
      if (this.flag) {
        this.picIndex--;
        this.sliderIndex--;
        if (this.sliderIndex < 0) {
          this.sliderIndex = this.picListLength - 1;
        }
        if (this.picIndex < 0) {
          return;
        } else {
          this.panelLiClass = "animation";
          this.paneltranslate = `translateX(${-this.picIndex * 100}%)`;
        }
        this.flag = false;
      }
    },
    sliderClick(i) {
      this.panelLiClass = "animation";
      this.sliderIndex = i;
      this.picIndex = i + 1;
      this.paneltranslate = `translateX(${-(i + 1) * 100}%)`;
    },
    panelLiAnimation() {
      if (this.picIndex > this.picListLength) {
        this.panelLiClass = "";
        this.picIndex = 1;
        this.paneltranslate = `translateX(${-1 * 100}%)`;
      }
      if (this.picIndex <= 0) {
        this.panelLiClass = "";
        this.picIndex = this.picListLength;
        this.paneltranslate = `translateX(${-this.picListLength * 100}%)`;
      }
      this.flag = true;
    },
    rotaMouse() {
      this.showAnniu = true;
      clearInterval(this.timer);
    },
    rotaLeave() {
      this.showAnniu = false;
      this.timer = setInterval(() => {
        this.gtClick()
      }, this.interval);
    },
    //向外面抛出这个数据
    liimgClick(item) {
      this.$emit("currentImg", item);
    }
  },

  mounted() {
    //最后一张
    let picLast = this.picList[0];
    this.picList.push(picLast);
    //第一张
    let picPrev = this.picList[this.picListLength - 1];
    this.picList.unshift(picPrev);
    //设置panel宽度
    let panelWidth = (this.picListLength + 2) * 100 + "%";
    this.panelwidth = panelWidth;
    //设置panel的偏移
    this.paneltranslate = `translate(${-1 * 100}%)`;
    this.timer = setInterval(() => {
      this.gtClick();
    }, this.interval);
  }
};
</script>
<style lang='css' scoped>
ul {
  padding: 0;
  margin: 0;
}
ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.rotationChart {
  overflow: hidden;
  position: relative;
}
.animation {
  transition: all 0.3s;
}
.clearfix:after {
  content: "";
  width: 100%;
  display: block;
  clear: both;
}
.rotationChart .panel {
  display: flex;
  height: 100%;
}
.rotationChart .panel li {
  width: 100%;
  height: 100%;
}
.rotationChart .panel li a.defaultA{
  display: block;
  width: 100%;
  height: 100%;
}
.rotationChart .panel img {
  display: block;
}
.rotationChart .slider {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
.rotationChart .slider li {
  position: relative;
  width: 8px;
  height: 8px;
  float: left;
  border-radius: 50%;
  margin: 4px;
  background-color: rgba(255, 127, 80, 0.5);
  cursor: pointer;
}
.rotationChart .slider li:hover,
.rotationChart .slider li.selected {
  margin: 0;
  top: -1px;
  border: 3px solid rgba(255, 127, 80, 0.5);
  width: 10px;
  height: 10px;
  /* background-color: rgb(255, 127, 80,.5); */
}
.rotationChart .slider li:hover::before,
.rotationChart .slider li.selected::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: seashell;
  border-radius: 50%;
  top: 0;
  left: 0;
}

.rotationChart > a {
  position: absolute;
  top: 50%;
  width: calc(5% - 2vw);
  height: calc(15% - 3vh);
  width: 5%;
  height: 14%;
  text-align: center;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.15);
}
.rotationChart > a:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}
.rotationChart > a > span {
  position: relative;
  display: block;
  top: 50%;
  transform: translateY(-50%);
}
.rotationChart > a.gt {
  right: 0;
}
.rotationChart > a.lt {
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
}
.rotationChart > a.gt {
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
}
</style>