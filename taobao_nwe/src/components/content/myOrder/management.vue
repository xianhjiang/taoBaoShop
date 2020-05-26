<template>
  <div class="m_left">
    <div class="left_n">管理中心</div>
    <div class="left_m" v-for="(mancenter ,index) in manList" :key="index">
      <div class="left_m_t" :class="clcenter[index]" @click="clickItem(mancenter)" >{{mancenter.title}}</div>
      <ul class="showUl" :style="{height:mancenter.height}">
        <li v-for="(name,a) in mancenter.singList" :key="a">
          <a :class="(options.title==mancenter.title&&options.childTitle==name)?'active':''" href="#">{{name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "management",
  props: {
    options: {
      title: {
        type: Object,
        defalut: () => {}
      }
    }
  },
  data() {
    return {
      clcenter: ["t_bg1", "t_bg2", "t_bg3", "t_bg4"],
      manList: [
        {
          title: "订单中心",singList: ["我的订单", "收货地址", "缺货登记", "跟踪订单"], show: true,
		  height:'0'
        },
        {
		  title: "会员中心",  singList: [ "用户信息", "我的收藏", "我的留言", "推广链接", "我的评论"], show: true, 
		  height:'0'
        },
        {
          title: "账户中心",  singList: ["账户安全", "我的红包", "资金管理"],  show: true,
			  height:'0'
        },
        {
          title: "分销中心",singList: ["我的会员", "我的业绩", "我的佣金", "申请提现"],show: true,height:'0'
        }
      ]
    };
  },
  components: {},
  methods: {
    clickItem(mancenter) {
      mancenter.show = !mancenter.show;
      let height = mancenter.singList.length * 28 + "px"
	   	mancenter.height = mancenter.show?height:"0"
    }
  },
  mounted(){
    this.manList.map(item =>{
        item.height = item.singList.length * 28 + "px"
    })
    
  }
};
</script>
<style scoped>
.m_left {
  width: 211px;
  overflow: hidden;
  padding: 5px;
  float: left;
}
.left_n {
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  background: url(~assets/images/management/m_t.png) no-repeat 31px center;
  background-color: #ff4e00;
  color: #fff;
  font-size: 14px;
  text-indent: 68px;
  margin-bottom: 10px;
}
.left_m {
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 5px #e0e0e0;
}
.left_m .showUl{
	transition: all 1s;
}

.left_m_t {
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  color: #3e3e3e;
  font-size: 14px;
  text-indent: 68px;
  border-bottom: 1px solid #e2e2e2;
  cursor: pointer;
}
.t_bg1 {
  background: url(~assets/images/management/m_i_1.png) no-repeat 31px center;
}
.t_bg2 {
  background: url(~assets/images/management/m_i_2.png) no-repeat 31px center;
}
.t_bg3 {
  background: url(~assets/images/management/m_i_3.png) no-repeat 31px center;
}
.t_bg4 {
  background: url(~assets/images/management/m_i_4.png) no-repeat 31px center;
}

.left_m ul li {
  height: 28px;
  line-height: 28px;
  overflow: hidden;
  color: #3e3e3e;
  text-indent: 68px;
}
.left_m ul li a {
  color: #3e3e3e;
}
.left_m ul li a:hover,
.left_m ul li a.now {
  color: #ff4e00;
}
.left_m ul li a.active {
  color: #ff4e00;
}
</style>