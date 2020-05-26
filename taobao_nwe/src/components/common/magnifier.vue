<template>
   <div class='magnifier' @mousemove="move($event)" :style="{width:minimgsize.width,height:minimgsize.height}">
       <div class="originalPicture" 
       :style="{width:minimgsize.width,height:minimgsize.height}"
       
       >
           <a href="#">
               <img :src="img.minimg" alt="">
           </a>
           <div class="moveMongolia" :style="{width:mongoliaSize.width,height:mongoliaSize.height,top:mongoliaPosition.top,left:mongoliaPosition.left}"></div>
       </div>
       <div class="lgPicture" :style="{width:lgpicbox.width,height:lgpicbox.height,top:Position.top,left:Position.left}">
           <a href="#">
               <img :style="{width:maximgsize.width,height:maximgsize.height,top:lgimgPosition.top,left:lgimgPosition.left}" :src="img.maximg" alt="">
           </a>
       </div>
   </div>
</template>

<script>
export default {
   name:'magnifier',
   props:{
       //放入的图片 大图片和小图片
       img:{
           type:Object,
           default:()=>{
               return {
                    minimg:null,
                    maximg:null
               }
           }
       },
       //小图片的大小
       minimgsize:{
           type:Object,
           default:()=>{
               return {
                   width:"400px",
                   height:"400px"
               }
           }
       },
       //放大图片的大小
       maximgsize:{
           type:Object,
           default:()=>{
               return {
                   width:"800px",
                   height:"800px"
               }
           }
       },
       //放大图片框的大小
       lgpicbox:{
           type:Object,
           default:()=>{
               return {
                   width:"400px",
                   height:"400px"
               }
           }
       },
       //放大框的位置
       lgPicPosition:{
           type:Object,
           default:()=>{
               return {

               }
           }
       },
       //蒙层的大小
       mongoliaSize:{
           type:Object,
           default:()=>{
               return{
                   width:"200px",
                   height:"200px"
               }
           }
       }
   },
   data () {
      return {
            //放大框的最终位置
            Position:{
              top: this.lgPicPosition.top == undefined?"0":this.lgPicPosition.top,
              left: 10 + parseInt(this.minimgsize.width) + "px"  
          },
            //鼠标移动之蒙层的位置
            mongoliaPosition:{
                top:0,
                left:0
            },
            //鼠标移动之大图片位置
            lgimgPosition:{
                top:0,
                left:0
            }
      };
   },

   components: {},

   computed: {},

   methods: {
       move(e){
            let Left = e.currentTarget.offsetLeft
            let Top = e.currentTarget.offsetTop   
            let X = e.pageX
            let Y = e.pageY
            //x轴移动最大距离
            let maxmoveX = this.minimgsize.width.replace("px","") - this.mongoliaSize.width.replace("px","")
            //y轴移动最大距离
            let maxmoveY = this.minimgsize.height.replace("px","") - this.mongoliaSize.height.replace("px","")
            //大图片能移动的距离
            let maximgmoveX = this.maximgsize.width.replace("px","") - this.lgpicbox.width.replace("px","")
            let maximgmoveY = this.maximgsize.height.replace("px","") - this.lgpicbox.height.replace("px","")

            let minWidth = parseInt(this.mongoliaSize.width) / 2
            let minHeight = parseInt(this.mongoliaSize.height) / 2
            
            let moveX = X - Left - minWidth
            let moveY = Y - Top - minHeight
            if(moveX<0){
                this.mongoliaPosition.left = 0
                this.lgimgPosition.left = 0
            }
            if(moveY<0){
                this.mongoliaPosition.top = 0
                this.lgimgPosition.top = 0
            }
            if(moveX>=0){
                //大图片移动的距离
                let imgmoveX = -(moveX / maxmoveX)*maximgmoveX + "px"
                this.lgimgPosition.left = imgmoveX
                this.mongoliaPosition.left = moveX + "px"
            }
            if(moveY>=0){
                //大图片移动的距离
                let imgmoveY = -(moveY / maxmoveY)*maximgmoveY + "px"
                this.lgimgPosition.top = imgmoveY
                this.mongoliaPosition.top = moveY + "px"
            }
            if(moveX>=maxmoveX){
                this.lgimgPosition.left = -maximgmoveX + "px"
                this.mongoliaPosition.left = maxmoveX + "px"
            }
            if(moveY>=maxmoveY){
                this.lgimgPosition.top = -maximgmoveY + "px"
                this.mongoliaPosition.top = maxmoveY + "px"
            }
            
        }
   },

   mounted(){
   }
}
</script>
<style lang='css' scoped>
.magnifier{
    position: relative;
}
.magnifier .originalPicture img{
    display: block;
    width: 100%;
    height: 100%;
}
.magnifier .originalPicture:hover>.moveMongolia,
.magnifier:hover .lgPicture{
    display: block;
}
.magnifier .lgPicture{
    position: absolute;
    z-index: 9999;
    overflow: hidden;
    display: none;
}
.magnifier .lgPicture img{
    position: absolute;
}
.magnifier .moveMongolia{
    position: absolute;
    display: none;
    background: url("~assets/images/common/mc.png") repeat;
}
.magnifier .moveMongolia:hover{
    cursor: move;
    display: block;
}
</style>