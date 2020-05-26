<template>
   <div class='mobileModule' :style="{width:mobileModuleSize.width,height:mobileModuleSize.height}">
       <ul class="title">
           <li v-for="(item,i) in titleList" :key="i" @mouseenter="titlemove(i)" @mouseleave="titleleave">
               <a :class="i==index?'selected':''" v-if="!item.src" href="#">{{item}}</a>
               <slot name="littleLogo"></slot>
           </li>
       </ul>
       <div class="template" :style="{width:moveliSize.width}">
            <ul class="move" :style="{width:moveWidth}">
                <li v-for="(item,i) in moveList" :key="i" :style="{width:moveliSize.width,height:moveliSize.height,transition:moveLitransition,transform:moveLitranslate}">
                    <slot name="content" :data="item"></slot>
                </li>
            </ul>
       </div>
   </div>
</template>

<script>
export default {
   name:'mobileModule',
   props:{
       //标题
       titleList:{
           type:Array,
           default:()=>[]
       },
       //mobileModule模板的大小
       mobileModuleSize:{
           type:Object,
           default:()=>{
               return {
                   width:"100%",
                   height:"100%"
               }
           }
       },
       //每个移动li的大小
       moveliSize:{
           type:Object,
           default:()=>{
               return {
                   width:"100%",
                   height:"100%"
               }
           }
       },
       //move的数组
       moveList:{
           type:Array,
           default:()=>[]
       },
       //超过多少时间才切换下一个
       time:{
           type:Number,
           default:500
       },
       //移动的动画 在多久完成
       moveLitransition:{
           typr:String,
           default:"all 0s"
       }
   },
   data () {
      return {
          //当前的索引值
          index:0,
          //move的宽度
          moveWidth:"",
          //记录当前切换事件
          timer:null,
          //move要移动的距离
          moveLitranslate:""
      };
   },

   components: {},

   computed: {},

   methods: {
       move(i){
            this.index = i
            this.moveLitranslate = "translateX(" + -i*100 + "%)"
       },
       titlemove(i){
            this.timer = setTimeout(()=>{
               if(this.timer!=null){
                   this.move(i)
               }else{
                   return
               }
            },this.time)
       },
       titleleave(){
           clearTimeout(this.timer)
       }
   },
   mounted(){
        let width = this.titleList.length * 100 + "%"
        this.moveWidth = width
   }
}
</script>
<style lang='css' scoped>
ul{
    padding: 0;
}
ul li{
    list-style: none;
}
.mobileModule .template{
    overflow: hidden;
}
.mobileModule ul{
    display: flex;
}
.mobileModule ul li{
    width: 100%;
    text-align: center;
    
}
.mobileModule ul li a{
    color: #3C3C3C;
    padding: 0 4px;

}
.mobileModule ul.title li a:hover{
    color: #F40;
    font-weight: 700;
}
.mobileModule ul.title li a.selected{
    font-weight: 700;
    border-bottom: 2px solid #F40;
}
.mobileModule .template{
    margin: 0 auto;
    padding: 10px 0;
}
</style>