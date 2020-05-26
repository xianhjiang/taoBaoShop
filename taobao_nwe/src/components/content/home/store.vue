<template>
  <div class="tbh-service"  @mouseleave="servicebdUlLeave">
    <ul class="service-bd">
      <li
        v-for="(menu,m) in menuList"
        :key="m"
        @mouseenter="servicebdEnter(m)"
        @mouseleave="servicebdLeave(m)"
        :class="index==m?'active':''"
      >
        <span v-for="(menusmall,s) in menu.titleList" :key="s">
          <a href="#">{{menusmall}}</a>
          <span v-if=" s==0 || s==1 " id="tbh-b">&#47;</span>
        </span>
        <span id="tbh-a">&gt;</span>
      </li>
    </ul>
    <div class="service-float" :class="index>=0?'active':''">
      <div
        class="service-float-item clearfix"
        @mouseenter="servicefloatEnter(a)"
        v-for="(abn,a) in abnList"
        v-if="abnList[a]"
        :key="a"
        v-show="index == a"
      >
        <div class="service-links">
          <div class="service-pannel" v-for="(cbn,s) in abn.cbnList" :key="s">
            <h5>
              <a href="#">{{cbn.topic}}</a>
            </h5>
            <p>
              <a
                href="#"
                :class="cbn.haveH[d]?'h':''"
                v-for="(ebn,d) in cbn.ebnList"
                :key="d"
              >{{ebn}}</a>
            </p>
          </div>
        </div>
        <div class="service-rmd">
          <h3>猜你喜欢</h3>
          <div class="service-rmd-list">
            <a href="#" v-for="(fbn,f) in abn.fbnList" :key="f">
              <div class="img-warpper">
                <img :src="fbn.src" />
              </div>
              <h5>
                <span>{{fbn.description}}</span>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "store",
  data() {
    return {
      //记录当前鼠标滑入事件
      timer: null,
      seen: false,
      navList: [
        { navsmallList: ["天猫", "聚划算", "天猫超市"] },
        {
          navsmallList: ["淘抢购", "电器城", "司法拍卖", "淘宝新选", "兴农脱贫"]
        },
        { navsmallList: ["飞猪旅行", "智能生活", "苏宁易购"] }
      ],
      menuList: [],
      abnList: [],
      index: -1
    };
  },
  methods: {
    servicebdEnter(i) {
      this.timer = setTimeout(() => {
        if (this.timer != null) {
          let home = sessionStorage.home ? JSON.parse(sessionStorage.home) : {};
          if (
            home.subject &&
            home.subject.service &&
            home.subject.service.abnList &&
            home.subject.service.abnList[i]
          ) {
            this.index = i
          } else {
            this.$axios({
              method: "get",
              url: "http://localhost:8080/homeData",
              params: {
                type: "subject",
                options: {
                  type: "service",
                  name: "abnList",
                  i
                }
              }
            }).then(res => {
              this.index = i
              this.abnList[i] = res;
              let home = sessionStorage.home
                ? JSON.parse(sessionStorage.home)
                : {};
              if (
                home.subject &&
                home.subject.service &&
                home.subject.service.abnList &&
                home.subject.service.abnList instanceof Array
              ) {
                home.subject.service.abnList[i] = res;
              } else {
                home.subject = home.subject ? home.subject : {};
                home.subject.service = home.subject.service
                  ? home.subject.service
                  : {};
                home.subject.service.abnList = [];
                home.subject.service.abnList[i] = res;
              }
              sessionStorage.home = JSON.stringify(home);
            });
          }
        }
      }, 150);
    },
    servicebdLeave() {
      clearTimeout(this.timer);
    },
    servicefloatEnter(i) {
      this.index = i;
    },
    servicebdUlLeave(){
        this.index = -1
    }
  },
  mounted() {
    let home = sessionStorage.home ? JSON.parse(sessionStorage.home) : {};
    if (home.subject && home.subject.service && home.subject.service.abnList) {
      this.abnList = home.subject.service.abnList;
    }
    if (home.subject && home.subject.service && home.subject.service.menuList) {
      this.menuList = home.subject.service.menuList;
    } else {
      this.$axios({
        method: "get",
        url: "http://localhost:8080/homeData",
        params: {
          type: "subject",
          options: {
            type: "service",
            name: "menuList"
          }
        }
      }).then(res => {
        this.menuList = res;
        let home = sessionStorage.home ? JSON.parse(sessionStorage.home) : {};
        home.subject = home.subject ? home.subject : {};
        home.subject.service = home.subject.service ? home.subject.service : {};
        home.subject.service.menuList = res;
        sessionStorage.home = JSON.stringify(home);
      });
    }
  }
};
</script>
<style scoped>
.h {
  color: #ff5000 !important;
}
.service-bd li.active {
  background-color: #ffe4dc;
  color: #ff4e00;
}
.service-bd li.active a {
  color: #ff4e00;
}
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
.clearfix:after {
  content: "";
  width: 100%;
  display: block;
  clear: both;
}
.bdSe {
  background-image: -o-linear-gradient(left, #ff9000 0, #ff5000 100%);
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
  background-repeat: repeat-x;
}
.tbh-service {
  position: relative;
  float: left;
  width: 190px;
  background-color: #fff;
  height: 522px;
  font-size: 14px;
  color: #fff;
}
.service-bd {
  border: 1px solid #ff5000;
  border-top: none;
  padding-bottom: 3px;
  padding-top: 5px;
}
.service-bd li {
  overflow: hidden;
  line-height: 32px;
  height: 32px;
  padding-left: 17px;
  padding-right: 8px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  width: 163px;
  color: #666;
  transition: all 0.2s;
}
.service-bd+.service-float.active{
  z-index: 9;
  opacity: 1;
  transition: all 0.5s;
}
.service-float {
  position: absolute;
  opacity: 0;
  left: 188px;
  top: 0;
  background-color: #fff;
  color: #333;
  font-size: 12px;
  z-index: -9;
}

.service-float-item {
  width: 692px;
  height: 518px;
  padding: 0px 0px 0px 18px;
  border: 2px solid rgb(249, 74, 20);
  box-shadow: rgb(220, 218, 219) 2px 2px 0px;
  display: block;
}
.service-links {
  padding-top: 10px;
  width: 415px;
  height: 490px;
  overflow: hidden;
  padding-right: 12px;
  padding-left: 10px;
  float: left;
  margin: 0;
}
.service-panel {
  font-size: 12px;
  margin-bottom: 5px;
}
.service-pannel h5 {
  position: relative;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #333;
}
.service-pannel p {
  height: 104px;
  overflow: hidden;
  padding-bottom: 33px;
  line-height: 26px;
  margin: 0;
}
.service-pannel p a {
  /* color: #ff5000!important; */
  color: #666;
  display: inline-block;
  margin-right: 12px;
  white-space: nowrap;
}
.service-rmd {
  float: left;
  width: 253px;
  border-left: 1px solid #f4f4f4;
  position: relative;
  height: 498px;
  padding-top: 20px;
}
.service-rmd h3 {
  line-height: 18px;
  color: #333;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
}
.service-rmd-list h5 {
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  overflow: hidden;
  font-weight: 400;
  color: #999;
}
.service-rmd-list h5 span:hover {
  color: #ff5000;
}
.service-rmd-list a {
  display: block;
  width: 97px;
  height: 143px;
  padding: 10px 0 0 20px;
  overflow: hidden;
  float: left;
}
.service-rmd-list .img-warpper {
  width: 97px;
  height: 97px;
  overflow: hidden;
  background: #4f4f4f;
}
.img-warpper img {
  display: block;
  width: 98px;
  height: 97px;
  opacity: 0.9;
}
.img-warpper:hover img {
  opacity: 0.8;
}
#tbh-b {
  margin: 0 4px;
}
#tbh-a {
  float: right;
  position: absolute;
  right: 10px;
  font-size: 12px;
  font-family: iconfont !important;
}
</style>