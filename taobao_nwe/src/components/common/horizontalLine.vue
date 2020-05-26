<template>
    <div class='horizontalLine'>
        <div class="title  clearfix">
            <slot name="title" :data="title"></slot>
            <strong>
                <i>{{index+1}}</i>
                <span>/{{length}}</span>
            </strong>
        </div>
        <ul class="tmall-nav">
                <li :class="(item-1) == index?'selected':''" v-for="item in length" :key="item"></li>
        </ul>
    </div>
</template>

<script>
export default {
   name:'horizontalLine',
   props:{
       length:{
           type:Number,
           default:0
       },
       index:{
           type:Number,
           default:0
       },
       title:{
           type:Object,
           default:()=>{
               return {}
           }
       }
   },
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
.clearfix:after{
    content: "";
    width: 100%;
    display: block;
    clear: both;
}
.horizontalLine .tmall-nav{
    display: flex;
    height: 3px;
    justify-content: center;
}
.horizontalLine .tmall-nav li.selected{
    background-color: #000;
}
.horizontalLine .tmall-nav li{
    width: 100%;
    background-color: #ff1648;
}
.horizontalLine strong{
    float: right;
}
.horizontalLine strong i {
    font-style: normal;
    color: #ff1648;
}
</style>