<template>
   <div v-if="flag" class='mongolia'>
       <div @transitionend="outActive" :class="flagOut?'outActive':''" class="main" :style="{width:mainSize.width,height:mainSize.height}">
           <a href="#" @click="cancel" class="cancel">X</a>
           <h1 class="title">
               <a href="#">
                   <img src="~assets/images/common/pay.svg" alt="">
               </a>
               <span>{{title}}</span>
           </h1>
           <slot name="content" :Data="Data"></slot>
       </div>
   </div>
</template>

<script>
export default {
   name:'mongolia',
   props:{
       //蒙层是否显示
       flag:{
           type:Boolean,
           default:false
       },
       //退出的动画效果
       flagOut:{
           type:Boolean,
           default:false
       },
       //蒙层主要内容的大小
       mainSize:{
           type:Object,
           default:()=>{
               return {
                   width:"600px",
                   height:"400px"
               }
           }
       },
       //展示的主题
       title:{
           type:String,
           default:"恭喜你！结算成功"
       },
       //展示的数据
       Data:{
           type:Object,
           default:()=>{}
       }
   },
   data () {
      return {
      };
   },

   components: {},

   computed: {

   },

   methods: {
       cancel(){
           //退出的动画效果
           this.$emit("outActive")
       },
       outActive(){
           //把此方法抛出让父组件改变传入的flag变为false
           this.$emit("cancel")
       }
   },

   mounted(){
       
   },
}
</script>
<style lang='css' scoped>
.mongolia{
    position: fixed;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    top: 0;
    left: 0;
}
.mongolia::before{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background-color:rgba(255,255,255,.3);
    filter: blur(2px);
}
.mongolia .main{
    position: absolute;
    border-radius: 10px;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0 2px 10px rgba(255,255,255,.3);
    animation: active 1s;
}
@keyframes active{
    0%{
        transform: translateY(-200%);
        opacity: 0;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }
}
.mongolia .main.outActive{
    transform: translateY(-200%);
    transition: all .5s;
}
.mongolia .main .cancel{
    position: absolute;
    text-align: center;
    color: #000;
    width: 16px;
    height: 16px;
    top: 4px;
    right: 4px;
}
.mongolia .main .cancel:hover{
    color: #fff;
    background-color: red;
}
.mongolia .main .title{
    margin-top: 20px;
    text-align: center;
}
.mongolia .main .title span{
    vertical-align: top;
    margin-left: 30px;
}
    

</style>