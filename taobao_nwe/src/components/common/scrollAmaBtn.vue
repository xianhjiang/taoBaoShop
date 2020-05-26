<template>
   <div class='scrollAmaBtn' :style="{width:scrollAmaBtnWidth}">
        <a :style="{width:buttonSize.width,height:buttonSize.height}" href="javascript:;" :class="number==1?'Prohibit':''" class="reduce" @click="reduce">
            <img v-if="btnImg.src1" :src="btnImg.src1" alt="">
            <span v-else>-</span>
        </a>
        <input :style="{width:inputOption.width,height:inputOption.height,fontSize:inputOption.fs}" v-model="number" @input="numberChange" type="text">
        <a :style="{width:buttonSize.width,height:buttonSize.height}" href="javascript:;" class="plus" @click="add">
            <img v-if="btnImg.src1" :src="btnImg.src2" alt="">
            <span v-else>+</span>
        </a>
        <span :style="{width:inputOption.width,height:inputOption.height,top:addspanPosition.span1.top,left:addspanPosition.span1.left,lineHeight:inputLH}" class="current" v-if="currentList&&flag=='add'">
            <span :style="{top:i+1==currentList.length?upTop:'0',fontSize:inputOption.fs}" v-for="(item,i) in currentList" :key="i">{{item}}</span>
        </span>
        <span :style="{width:inputOption.width,height:inputOption.height,top:reducespanPosition.span1.top,left:reducespanPosition.span1.left,lineHeight:inputLH}" class="current" v-if="currentList&&flag=='reduce'">
            <span :style="{top:i+1==currentList.length?downTop:'0',fontSize:inputOption.fs}" v-for="(item,i) in currentList" :key="i">{{item}}</span>
        </span>
        
        <span :style="{width:inputOption.width,height:inputOption.height,top:addspanPosition.span2.top,left:addspanPosition.span2.left,lineHeight:inputLH}" :class="flag=='add'?'up':'down'" class="Final" v-if="finalList&&flag=='add'">
            <span :style="{top:i+1==finalList.length?upTop:'',fontSize:inputOption.fs}" v-for="(item,i) in finalList" :key="i">{{item}}</span>
        </span>
        <span :style="{width:inputOption.width,height:inputOption.height,top:reducespanPosition.span2.top,left:reducespanPosition.span2.left,lineHeight:inputLH}" :class="flag=='add'?'up':'down'" class="Final" v-if="finalList&&flag=='reduce'">
            <span :style="{top:i+1==finalList.length?downTop:'',fontSize:inputOption.fs}" v-for="(item,i) in finalList" :key="i">{{item}}</span>
        </span>
   </div>
</template>

<script>
export default {
   name:'scrollAmaBtn',
   props:{
       //按钮组的大小
       buttonSize:{
           type:Object,
           default:()=>{
               return {
                   width:"30px",
                   height:"30px"
               }
           }
       },
       //输入框的尺寸及字体大小
       inputOption:{
           type:Object,
           default:()=>{
               return {
                   width:"48px",
                   height:"30px",
                   fs:"18px"
               }
           }
       },
       //按钮里面的img
       btnImg:{
           type:Object,
           default:()=>{
               return {
                   src1:null,
                   src2:null
               }
           }
       },
       //当前商品的数量
       shopNumber:{
        //    type:Number,
           default:1
       }

   },
   data () {
      return {
        //购买物品的数量
        number:1,
        //当前的值
        currentList:null,
        //更新后的值
        finalList:null,
        //判断当前是加还是减
        flag:null,
        //向上移动多少
        upTop:0,
        //向下移多少
        downTop:0,
        //当前是否过度完
        clickflag:true,
        //最外面的div的宽度
        scrollAmaBtnWidth:null,
        //输入框的行高
        inputLH:0,
        //减操作两个上下移动框对应的位置
        reducespanPosition:{
            span1:{},
            span2:{}
        },
        //加操作两个上下移动框对应的位置
        addspanPosition:{
            span1:{},
            span2:{}
        }
      };
   },

   components: {},

   computed: {
   },
    watch:{
        number(){
           this.$emit("getnumber",this.number)
       },
       shopNumber(newVal,oldVal){ 
           this.number = newVal
       }
    },
   methods: {
       reduce(){
           if(this.clickflag&&this.number>1){
            //当前不可点击
            this.clickflag = false
            //当前为减少状态
            this.flag = 'reduce'
            //让number1等于当前的number值
            let number1 = this.number
            //再把输入框中的制空
            this.number=""
            //让两个都存在
            this.currentList = []
            this.finalList = []

             
            //把number1的值变化为字符串
            let numberArr = number1.toString()
            //给currentList赋值当前对应的值
            for(let i = 0;i<numberArr.length;i++){
                this.currentList[i] = numberArr[i]
            }
            number1--
            let numberArr1 = number1.toString()
            //给finalList赋值最后对应的值
            for(let i = 0;i<numberArr1.length;i++){
                this.finalList[i] = numberArr1[i]
            }
            //给移动的元素设置移动距离
            setTimeout(()=>{
                this.downTop = this.inputOption.height
            },20)
            //0.1s以后还原原始状态
            setTimeout(()=>{
                    this.number = number1
                    this.downTop = 0
                    this.finalList=null
                    this.currentList=null
                    this.clickflag = true
            },100)
        }
          
       },
       add(){
           if(this.clickflag){
            //当前不可点击
            this.clickflag = false
            //当前为增加状态
            this.flag = 'add'
            //让number1等于当前的number值
            let number1 = this.number
            //再把输入框中的制空
            this.number=""
            //让两个都存在
            this.currentList = []
            this.finalList = []
            //把number1的值变化为字符串
            let numberArr = number1.toString()
            //给currentList赋值当前对应的值
            for(let i = 0;i<numberArr.length;i++){
                this.currentList[i] = numberArr[i]
            }
            number1++
            let numberArr1 = number1.toString()
            //给finalList赋值最后对应的值
            for(let i = 0;i<numberArr1.length;i++){
                this.finalList[i] = numberArr1[i]
            }
            //给移动的元素设置移动距离
            setTimeout(()=>{
                this.upTop = "-" + this.inputOption.height
            },20)
            //0.1s以后还原原始状态
            setTimeout(()=>{
                    this.number = number1
                    this.upTop = 0
                    this.finalList=null
                    this.currentList=null
                    this.clickflag = true
            },100)
        }
           
           
           
       },
       numberChange(){
            this.number = this.number.replace(/\D/g,"").replace(/^[0]+[0-9]*$/gi,"")
       }
   },

   mounted(){
       //让当前的数量等于传入的商品数量
       this.number = this.shopNumber

       this.scrollAmaBtnWidth = 2*parseInt(this.buttonSize.width) + parseInt(this.inputOption.width) + "px"
       this.reducespanPosition.span1.top = 0
       this.reducespanPosition.span1.left = this.buttonSize.width
       this.addspanPosition.span1.top = 0
       this.addspanPosition.span1.left = this.buttonSize.width

       this.reducespanPosition.span2.top = "-" + this.inputOption.height
       this.reducespanPosition.span2.left = this.buttonSize.width
       this.addspanPosition.span2.top = this.inputOption.height
       this.addspanPosition.span2.left = this.buttonSize.width

       this.inputLH = parseInt(this.inputOption.height) - 8 + "px"
   },
}
</script>
<style lang='css' scoped>
.scrollAmaBtn{
    position: relative;
    overflow: hidden;
}
.scrollAmaBtn .reduce{
    border-right: none;
}
.scrollAmaBtn .reduce>span,
.scrollAmaBtn .plus>span{
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
}
.scrollAmaBtn .plus{
    border-left: none;
}
.scrollAmaBtn .number>span{
   vertical-align: middle;
}
.scrollAmaBtn a{
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #ededed;
    box-sizing: border-box;
}
.scrollAmaBtn a img{
    position: relative;
    width: 80%;
    height: 80%;
    top: 50%;
    transform: translateY(-50%);
}
.scrollAmaBtn input{
    box-sizing: border-box;
    border: 1px solid #ccc;
    text-align: center;
    padding: 3px;
    font-size: 18px;
    color: #666;
}

/* .scrollAmaBtn input::-webkit-outer-spin-button,
.scrollAmaBtn input::-webkit-inner-spin-button{
    -webkit-appearance: none !important; 
} */
.scrollAmaBtn a.Prohibit{
    color: #ccc;
    cursor: not-allowed;
    background-color: #ccc;
}
.scrollAmaBtn>span{
    position: absolute;
    box-sizing: border-box;
    font: 400 18px Arial;
    text-align: center;
    padding: 4px;
    font-size: 18px;
    color: #666;
}
.scrollAmaBtn .current{
    top: 0;
    left: 30px;
}
/* .scrollAmaBtn span.Final.up{
    top: 30px;
    left: 30px;
} */
.scrollAmaBtn>span>span{
    position: relative;
    transition: all .1s;
    top: 0;
}
/* .scrollAmaBtn>span.Final.down{
    top:-30px;
    left: 30px;
} */

</style>