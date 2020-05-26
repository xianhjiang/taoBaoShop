<template>
   <div class='movemenu'>
       <ul class="title" :style="{width:contentsize.width,height:contentsize.height}">
           <li v-for="(item,i) in titleList" :key="i" @mouseenter="titleLimove(i)" @mouseleave="titleLileave">
               <slot name="title" :data="item"></slot>
               <slot name="content" :data="item" v-if="index == i"></slot>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
   name:'movemenu',
   props:{
       //移入的目标
       titleList:{
           type:Array,
           default:()=>[]
       },
       //显示内容的尺寸
       contentsize:{
           type:Object,
           default:()=>{
               return {
                   width:"260px",
                   height:"50px"
               }
           }
       }
       
   },
   data () {
      return {
          //显示当前的内容索引
          index:-1
      };
   },

   components: {},

   computed: {},

   methods: {
       titleLimove(i){
           this.index = i
       },
       titleLileave(){
           this.index = -1
       }
   }
}
</script>
<style lang='css' scoped>
.movemenu ul.title{
    display: flex;
}
.movemenu ul.title li{
    position: relative;
    width: 100%;
    text-align: center;
}
.movemenu ul.title li .content{
    position: absolute;
    z-index: 999;
    border: 1px solid #dedede;
}
</style>