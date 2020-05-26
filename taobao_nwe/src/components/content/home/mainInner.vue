<template>
  <div class="mainInner clearfix">
        <div class="core">
            <rotationChart v-if="picList.length" :picList="picList" :frameSize="{width:'520px',height:'280px'}">
            </rotationChart>
            <div v-if="picList1.length" class="tbh-tmall clearfix">
                <horizontalLine :index="picList1Index" :length="picList1.length-2" :title="picList1Title">
                    <template #title="{data}">
                        <img :src="data.src" alt="">
                        <span class="hlTitle">{{data.title}}</span>
                    </template>
                </horizontalLine>
                <rotationChart class="rotationChart1" :Default="false" :picList="picList1" :isSlider="false" :frameSize="{width:'520px',height:'200px'}" @obtainindex="changIndex">
                    <template #imglists="{ data }">
                        <div class="imgGroup">
                            <a href="#" class="imglists" v-for="src in data.srcList" :key="src">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        
                    </template>
                </rotationChart>
            </div>   
        </div>
        <div class="sub-column">
            <a href="#" class="pic1">
                <img :src="bestSellers.src1" alt="">
            </a>
            <h5>{{bestSellers.title}}</h5>
            <a href="#" class="pic2">
                <img :src="bestSellers.src2" alt="">
            </a>
        </div>   
  </div>
</template>

<script>
    import rotationChart from 'components/common/rotationChart'
    import horizontalLine from 'components/common/horizontalLine'
    export default {
        name:"mainInner",
        data(){
            return{
                picList:[],
                picList1:[],
                picList1Index:0,
                picList1Title:{src:require("@/assets/images/home/rotationChart1/logo.png"),title:"理想生活上天猫"},
                bestSellers:{
                    title:"今日热卖",
                    src1:require("@/assets/images/home/main/1.webp"),
                    src2:require("@/assets/images/home/main/2.png")
                }
            }
        },
        computed:{
        },
        components:{
            rotationChart,
            horizontalLine
        },
        methods:{
            changIndex(i){
                this.picList1Index = i
                
            }
        },
        mounted(){
            let home = sessionStorage.home?JSON.parse(sessionStorage.home):{}
            if(home.subject&&home.subject.main){
                this.picList = home.subject.main.rotationChart
                this.picList1 = home.subject.main.rotationChart1
            }else{
                this.$axios({
                method:"get",
                url:"http://localhost:8080/homeData",
                params:{
                    type:"subject",
                    options:{
                        type:"main",
                    }
                }
                }).then(res=>{
                    this.picList = res.rotationChart
                    this.picList1 = res.rotationChart1
                    if(home.subject){
                        home.subject.main = res
                        sessionStorage.home = JSON.stringify(home)
                    }
                })
            }
            
        }
    }
</script>

<style>
.mainInner{
    width: 710px;
    height: 522px;
    padding-top: 10px;
    background-color: #f4f4f4;
    /* background-color: red; */
}
.clearfix:after{
    content: "";
    width: 100%;
    display: block;
    clear: both;
}
.mainInner .core{
    float: left;
    margin-left: 10px;
}
.mainInner .imgGroup{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    top: 50%;
    transform: translateY(-50%);
}
.mainInner .horizontalLine {
    margin-top: 12px;
}
.mainInner .horizontalLine img{
    vertical-align: middle;
}
.mainInner .horizontalLine .hlTitle{
    margin-left: 10px;
}
.mainInner .rotationChart{
    background-color: #fff;
}
.mainInner .rotationChart1 .panel li:nth-child(3) img{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 150px;
}
.mainInner .sub-column{
    float: right;
    width: 160px;
    height: 512px;
    margin-right: 10px;
}
.mainInner .sub-column a{
    display: inline-block;
    width: 160px;
}
.mainInner .sub-column a.pic1{
    height: 280px;
}
.mainInner .sub-column a.pic2{
    height: 200px;
}
.mainInner .sub-column h5{
    font-size: 12px;
    font-weight: 400;
    background: #f1f1f1;
    color: #a1a1a1;
    padding-top: 6px;
    line-height: 25px;
}
   
</style>