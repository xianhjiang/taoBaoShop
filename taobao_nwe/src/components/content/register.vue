<template>
<div class="all">
    <div class="soubg">
        <div class="sou">
            <span class="fr">
                <span class="fl">
                    你好，请
                    <a @click="login">登录</a>
                    &nbsp; 
                    <a href="#" style="color:#ff4e00;">免费注册</a>
                    &nbsp; 
                </span>
                <span class="fl">|&nbsp;关注我们：</span>
                <span class="s_sh">
                    <a href="javascript:void(0)" class="sh1">新浪</a>
                    <a href="javascript:void(0)" class="sh2">微信</a>
                </span>
                <span class="fr">|&nbsp;
                    <a href="javascript:void(0)">手机版&nbsp;
                        <img src="~assets/images/login/4.png" align="absmiddle">
                    </a>
                </span>
            </span>
        </div>
    </div>
    <div class="middle">
        <div class="top-banner">
            <img :src="src1">
        </div>

        <div class="title-line">
            <span class="tit" style="font-size: 38px;">{{tit}}</span>
        </div>
        <div class="register-container">
                <div class="one">
                    <img src="~assets/images/login/1.png">
                </div>
                <div class="two">
                    <form class="registerForm">
                <div class="form-group">
                    <div class="el-input">
                        <input type="text" placeholder="昵称" class="el-input_inner" v-model="userInfo.name" @blur="a">
                        <p class="tip">{{tip.t1}}</p>
                    </div>
                </div>
                <div class="form-group">
                    <div class="el-input password">
                        <input type="password"  placeholder="密码（6-16个字符组成，区分大小写）" class="el-input_inner" v-model="userInfo.password" @blur="b">
                        <p class="tip">{{tip.t2}}</p>
                    </div>
                </div>
                <div class="form-group">
                    <div class="el-input local">
                        <select class="contry">
                            <option v-for="(item,i) in items" :key="i">{{item.title}}</option>
                        </select>
                        <input ref="tel" type="text" placeholder="请输入常用手机号" class="number" v-model="userInfo.num" @input="c_1" @blur="c">
                        <p class="tip">{{tip.t3}}</p>
                    </div>
                </div>
                <div class="form-group">
                    <div  class="code-input el-input">
                        <input type="text" placeholder="请输入短信验证码"  class="message" @blur="d" v-model="userInfo.msg">
                        <button type="button" class="el-button yzm-buttom">
                        <span>点击获取</span>
                    </button>
                    <p class="tip" id="tipall">{{tip.t4}}</p>
                    </div>
                </div>
                <label class="register-agree">
                    <label class="check-box checkbox-bwxr" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
                        <input name="agree" type="checkbox" @onclick="click()">
                    </label>
                    默认同意
                    <a target="_blank" href="">《用户使用协议》</a>
                    和
                    <a target="_blank" href="">《隐私政策》</a>
                </label>
                <div class="form-group">
                    <button type="button" class="el-button btn-full" @click="flag" :disabled="btn">
                        <span>注册</span>
                    </button>
                </div>
                <div id="register_pc_direct_login" class="register-hidden-gruop">
                    <a @click="login" class="text-right">已有账号，直接登录&gt;</a>
                </div>
            </form> 
                </div>
            
            
        </div>
            
    </div>
</div>
</template>

<script>
	export default {
	  name: 'register',
      components:{
      },
	  data(){
	  	return{
            btn:false,
      tip:{
        t1:'',
        t2:'',
        t3:'',
        t4:'',
      },
      userInfo:{
        password:'',
        name:'',
        num:'',
        msg:'',
      },
      userArr:[],

	  		src1:require('@/assets/images/login/5.png'),
	  		tit:'注册',
            items:[
            {title:'中国大陆'},
            {title:'中国台湾'},
            {title:'中国香港'},
            {title:'美国'},
            {title:'俄国'},
            {title:'英国'},
            {title:'比利时'},
            {title:'新西兰'},
            {title:'韩国'},
            ],
            bg:require('@/assets/images/login/2.svg'),
            
	  	}
      },
      methods:{
        login(){
            this.$router.push('/login')
          //用户名
        },
      a(){
        this.tip.t1 = '';
        // this.isReturn = false;
        var a=/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;//只能含有汉字、数字、字母、下划线不能以下划线开头和结尾
        if (!this.userInfo.name) 
            this.tip.t1='告诉我你的昵称吧';
        else if(!a.test(this.userInfo.name))
            {
            // this.isReturn = true;
            this.tip.t1="只能含有汉字、数字、字母、下划线不能以下划线开头和结尾";
            }
         },
         b (){
        this.tip.t2 = '';
        this.isReturn = true;
        var p=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; 
        if (!this.userInfo.password) {
          // this.isReturn = true;
          this.tip.t2='密码不能为空';
        }
        else if(!p.test(this.userInfo.password)){
            this.isReturn = true;
            this.tip.t2="密码由6-16个字符组成，要有字母和数字哦";
          }
        },
        c(){
          this.tip.t3 = '';
          // this.isReturn = true;
          var n=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (!this.userInfo.num)
            {
            this.tip.t3='手机号不能为空';  
            // this.isReturn = false;
             }     
        else if (!n.test(this.userInfo.num)) 
            {
            this.tip.t3='手机号码格式不正确';
            // this.isReturn = true;
            }
        },
        c_1(){
            this.$refs.tel.style.color = "#000"
        },
        d(){
          this.tip.t4 = '';
          //this.isReturn = true;
          var m=/^\d{4}$/
        if (!this.userInfo.msg)
            {
            this.tip.t4='请输入验证码';  
            // this.isReturn = true;
             }     
        else if (!m.test(this.userInfo.msg)) 
            {

            this.tip.t4='验证码不正确';
            // this.isReturn = true;
            }
        },
        flag (){
        //alert(1)
        this.tip.t1 = '';
        this.tip.t2 = '';
        this.tip.t3 = '';
        this.tip.t4 = '';
        // this.isReturn = false;
         var a=/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;//只含有汉字、数字、字母、下划线不能以下划线开头和结尾
        if (!this.userInfo.name) 
            this.tip.t1='告诉我你的昵称吧';
        else if(!a.test(this.userInfo.name))
            {
            // this.isReturn = true;
            this.tip.t1="只能含有汉字、数字、字母、下划线不能以下划线开头和结尾";
            }

        var p=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/; 
        if (!this.userInfo.password) {
          // this.isReturn = true;
          this.tip.t2='密码不能为空哦';
        }
        else if(!p.test(this.userInfo.password)){
            // this.isReturn = true;
            this.tip.t2="密码由6-16个字符组成，要有字母哦";
          }
        //手机号
           var n=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (!this.userInfo.num)
            {
            this.tip.t3='手机号不能为空';  
            // this.isReturn = true;
             }     
        else if (!n.test(this.userInfo.num)) 
            {
            this.tip.t3='手机号码格式不正确';
            // this.isReturn = true;
            }
            //验证码
            var m=/^\d{4}$/
        if (!this.userInfo.msg)
            {
            this.tip.t4='请输入验证码';  
            //this.isReturn = true;
             }     
        else if (!m.test(this.userInfo.msg)) 
            {
            this.tip.t4='验证码不正确';
            //this.isReturn = true;
            }
        //同意协议
        if (a.test(this.userInfo.name) && n.test(this.userInfo.num) && p.test(this.userInfo.password) && m.test(this.userInfo.msg) )
            {
                this.btn=false;
                
                this.$axios({
                    method:"get",
                    url:"http://localhost:8080/register",
                    params:{
                        name:this.userInfo.name,
                        password:this.userInfo.password,
                        tel:this.userInfo.num,
                    }

                }).then( res => {
                //    alert(res.msg)
                    if(res.err_code==0){
                        this.$router.push('/login')
                        this.isReturn = true;
                    }else{
                        this.tip.t3 = res.msg  
                        this.$refs.tel.style.color = "#f45d90"
                    }
                })
                

                
                
            }
            else
            {
               this.btn=false;
                alert('注册失败');
                //this.isReturn = true; 
            }
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color:black;
}
a:hover{
    color:#ff4e00;
}
.all{
    padding: 0;
    margin: 0;
    font-family: PingFangSC-Medium;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}
.soubg {
    width: 100%;
    min-width: 1200px;
    height: 35px;
    background-color: #f6f6f6;
    font-family: "宋体";
}
.sou {
    width: 1200px;
    height: 35px;
    line-height: 35px;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.s_sh {
    width: 55px;
    height: 35px;
    overflow: hidden;
    float: left;
}
.s_sh a.sh1 {
    background: url(~assets/images/login/2.png) no-repeat center 8px;
}
.s_sh a {
    width: 20px;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    float: left;
    display: inline;
    margin: 0 3px;
    text-indent: -9999em;
}
.s_sh a.sh2 {
    background: url(~assets/images/login/3.png) no-repeat center center;
}
.top-banner{
    height: 86px;
    margin-bottom: 20px;
    margin-left:200px;
}

.top-banner img{
    border:none;
    margin-top:50px;
}
.title-line{
    width: 980px;
    height: 28px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 28px;
    text-align: center;
}
.title-line .tit{
    height: 56px;
    line-height: 56px;
    margin: 0 auto;
    padding: 0 20px;
    font-size: 40px;
    background:#fff4ef;
    text-align: center;
}
.login-box {
    position: relative;
    width: 980px;
    height:367px;
    margin: 0 auto;
}
.login-box .login-left {
    float: left;
    width: 489px;
}
.middle{
   background-color: #fff4ef;
}

.register-container{
    width: 1215px;
    height: 450px;
    padding: 60px 0;
}
.one{
    width: 611px;
    height: 425px;
    overflow: hidden;
    float: left;
}
.two{
    width:500px;
    height:398px;
    float: left;
}
.registerForm {
    margin-top: 12px;
}
.form-group{
    width: 420px;
    margin: 0 auto;
    font-size: 12px;
    position: relative;
}

.el-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
.el-input_inner{
    width:420px;
    border-radius: 4px;
    border: 1px solid #00a1d6;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
}
.password{
    margin-top:40px;
}
.local{
    margin-top:40px;
}
.contry{
    width:130px;
    height:40px;
    height: 40px;
    line-height: 40px;
    outline: 0;
    color: #606266;
    padding: 0 15px;
    border: 1px solid #00a1d6;
    border-radius: 4px;
}
.number{
    width:290px; 
    height: 40px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    border: 1px solid #00a1d6;
    border-radius: 4px;
}
.message{
     margin-top:40px;
     width:320px;
     height:41px;
    border: 1px solid #00a1d6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    line-height: 40px;
    border-radius: 4px;
}
.el-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #ccc;
    text-align: center;
    outline: 0;
    margin: 0;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    border-color: #dcdfe6;
}
.tip{
    color: #f45d90;
    position: absolute;
    right: -20px;
    top: -6px;
    width: 134px;
    -webkit-transform: translate3d(100%,0,0);
    -moz-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    font-size: 12px;
}
#tipall{
    position: absolute;
    right: -20px;
    top: 35px;

}
.yzm-buttom{
    border-color: #00a1d6;
    vertical-align: -21px;

}
.yzm-buttom:hover{
    background-color: #00a1d6;
}

.btn-full:hover{
    background-color: #00a1d6;

}
.register-agree{
    width:420px;
    height:20px;
    margin:0 auto;
    font-size: 11px;
    display: block;
    padding: 10px 0;
    cursor: pointer;
}
.register-agree .check-box{
    vertical-align: middle;/*设置该元素在竖直方向上的对其方式*/
    margin-bottom: 3px;
}
.checkbox-bwxr{
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    background-position: 50%;
    cursor: pointer;
}
.checkbox-bwxr input{
    display: none;
}
.register-agree{
    font-size: 11px;
    cursor: pointer;
}
.btn-full{
    width: 100%;
    height: 40px;
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
}
.register-hidden-gruop{
    width: 420px;
    height: 40px;
    margin: 0 auto;
     font-size: 11px;
}
.text-right{
    line-height: 40px;
    float:right;
}

</style>