<template>
  <div class="all">
    <div class="soubg">
      <div class="sou">
        <span class="fr">
          <span class="fl">
            你好，请
            <a href="#">登录</a>
            &nbsp;
            <a @click="register" style="color:#ff4e00;">免费注册</a>
            &nbsp;
          </span>
          <span class="fl">|&nbsp;关注我们：</span>
          <span class="s_sh">
            <a href="javascript:void(0)" class="sh1">新浪</a>
            <a href="javascript:void(0)" class="sh2">微信</a>
          </span>
          <span class="fr">
            |&nbsp;
            <a href="javascript:void(0)">
              手机版&nbsp;
              <img src="~assets/images/login/4.png" align="absmiddle" />
            </a>
          </span>
        </span>
      </div>
    </div>
    <div class="middleone">
      <div class="top-banner">
        <img :src="src1" />
      </div>
      <div class="title-line">
        <span class="tit" style="font-size: 38px;">登录</span>
      </div>
      <div class="onemall">
        <div class="one">
          <img src="~assets/images/login/1.png" />
        </div>
        <div class="login-box">
          <div class="login-right">
            <div class="form-login">
              <div class="input-box">
                <ul>
                  <li class="item username status-box">
                    <input
                      type="text"
                      placeholder="你的手机号/邮箱"
                      id="login-username"
                      autocomplete="off"
                      v-model="userInfo.num"
                      @blur="a"
                    />
                    <span class="mip">{{ mip.s1 }}</span>
                  </li>
                  <li class="item password status-box">
                    <input
                      type="password"
                      placeholder="密码"
                      id="login-passwd"
                      v-model="userInfo.password"
                      @blur="b"
                    />
                    <span class="mip">{{ mip.s2 }}</span>
                    <span class="status"></span>
                    <div class="text clearfix">
                      <p class="tips"></p>
                    </div>
                  </li>
                  <li class="item gc clearfix"></li>
                  <li class="remember">
                    <label>
                      <input type="checkbox" v-model="userInfo.checkbox" />
                      记住我
                    </label>
                    <span>不是自己的电脑上不要勾选此项</span>
                    <a class="forget-password">忘记密码?</a>
                    <a class="not-checkout">无法验证?</a>
                  </li>
                  <li class="btn-box">
                    <a href="#" class="btn btn-login" id="login" @click="flag" :disabled="btn">登录</a>
                    <a @click="register" class="btn btn-reg" id="reg">注册</a>
                  </li>
                  <li class="sns">
                    <a class="btn weibo">
                      <img v-bind:src="logo1" />
                      微博账号登录
                    </a>
                    <a class="btn qq">
                      <img v-bind:src="logo2" />
                      QQ账号登录
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="alltop">
      登录即代表你同意
      <a target="_blank" href>用户协议</a>
      和
      <a target="_blank" href>隐私政策</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      isReturn: false,
      btn: false,
      mip: {
        s1: "",
        s2: ""
      },
      userInfo: {
        num: "",
        password: "",
        checkbox:false
      },
      userArr: [],
      src1: require("@/assets/images/login/5.png"),
      logo1: require("@/assets/images/login/weibo.png"),
      logo2: require("@/assets/images/login/QQ.png")
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    a() {
      this.mip.s1 = "";
      //this.isReturn = false;
      var n = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!this.userInfo.num) {
        this.mip.s1 = "请输入注册时用的手机号呀";
        this.isReturn = true;
      } else if (!n.test(this.userInfo.num)) {
        this.mip.s1 = "手机号码格式不正确哦！";
        this.isReturn = true;
      }
    },
    //密码
    b() {
      this.mip.s2 = "";
      this.isReturn = true;
      var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (!this.userInfo.password) {
        //this.isReturn = true;
        this.mip.s2 = "喵，你没有输入密码么？";
      } else if (!p.test(this.userInfo.password)) {
        // this.isReturn = true;
        this.mip.s2 = "密码由6-16个字符组成，区分大小写";
      }
    },

    flag() {
      //alert(1)
      this.mip.s1 = "";
      this.mip.s2 = "";
      this.isReturn = false;
      var n = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!this.userInfo.num) {
        this.mip.s1 = "请输入注册时用的者手机号呀";
        // this.isReturn = true;
      } else if (!n.test(this.userInfo.num)) {
        this.mip.s1 = "手机号码格式不正确哦！";
        // this.isReturn = true;
      }
      //字母开头 ，由字母+数字组成
      var p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (!this.userInfo.password) {
        // this.isReturn = true;
        this.mip.s2 = "喵，你没有输入密码么？";
      } else if (!p.test(this.userInfo.password)) {
        //this.isReturn = true;
        this.mip.s2 = "密码由6-16个字符组成，区分大小写";
      }
      //手机号

      //同意协议
      if (n.test(this.userInfo.num) && p.test(this.userInfo.password)) {
        this.btn = false;
        this.$axios({
          method: "get",
          url: "http://localhost:8080/login",
          params: {
            tel: this.userInfo.num,
            password: this.userInfo.password
          }
        }).then(res => {
          alert(res.msg);
          if (res.err_code === 0) {
            this.$store.commit("addUser", {user:res.user,isRemember:this.userInfo.checkbox});
            this.$router.push("/home");
            this.isReturn = true;
            this.$store.commit("addToken", {token:res.token,isRemember:this.userInfo.checkbox});
          }
        });
      } else {
        this.btn = false;
        alert("登录失败");
        //this.isReturn = true;
      }

      //如果有这些提示就return
      // if (this.tiShi.tishi || this.tiShi.tishi2 )
      //    return;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #00a1d6;
}
.topall {
  width: 100%;
  min-width: 1200px;
  height: 35px;
  background-color: #f6f6f6;
  font-family: "宋体";
}

a:hover {
  color: blue;
}
p,
ul,
li {
  display: block;
  list-style: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
ul {
  list-style: none;
  text-align: -webkit-match-parent;
}
input,
select {
  outline: none;
}
.all {
  padding: 0;
  margin: 0;
  font-family: PingFangSC-Medium;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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
  margin: 0 3px;
  text-indent: -9999em;
}
.s_sh a.sh2 {
  background: url(~assets/images/login/3.png) no-repeat center center;
}
.top-banner {
  height: 86px;
  margin-bottom: 20px;
  margin-left: 200px;
}

.top-banner img {
  border: none;
  margin-top: 50px;
}
.middleone {
  height: 600px;
  width: 100%;
  background-color: #fff4ef;
}
.title-line {
  width: 980px;
  height: 28px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 28px;
  text-align: center;
}
.title-line .tit {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: #fff4ef;
  text-align: center;
}
.login-box {
  width: 490px;
  height: 367px;
  float: left;
  margin-left: 50px;
}

.qrcode-login {
  position: relative;
  width: 480px;
}
.qrcode-login .qrcode-con {
  padding-top: 72px;
}
.qrcode-login .qrcode-con .tv-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 160px;
  top: 10px;
}

.qrcode-login .qrcode-con .qrcode-box {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  background: #ddd;
  position: relative;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-tips {
  z-index: 10;
  position: absolute;
  width: 480px;
  height: 192px;
  top: -50px;
  left: 50%;
  margin-left: -240px;
  background-size: cover;
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.5s;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-img {
  width: 140px;
  height: 140px;
}
.qrcode-login .qrcode-footer {
  width: 480px;
  height: 155px;
}
.qrcode-login .qrcode-footer .status-txt {
  padding-top: 20px;
  text-align: center;
  color: #222;
  font-size: 18px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.qrcode-login .qrcode-footer .app-link,
.qrcode-login .qrcode-footer .suc-txt {
  text-align: center;
  color: #717171;
  font-size: 14px;
}

.login-box .line {
  float: left;
  border-right: 1px solid #ddd;
  height: 300px;
  margin-top: 28px;
}
.onemall {
  width: 1300px;
  height: 500px;
  margin: auto 0;
}
.one {
  margin-left: 100px;
  width: 611px;
  height: 425px;
  overflow: hidden;
  float: left;
}
.one img {
  width: 611px;
  height: 425px;
}
.login-box .login-right {
  position: relative;
  padding-left: 45px;
  width: 490px;
  float: left;
  margin-top: 30px;
  box-sizing: border-box;
}
.form-login {
  position: relative;
}
.form-login .input-box {
  margin-top: 50px;
  width: 414px;
}
.input-box input {
  width: 388px;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #aaa;
  font-size: 14px;
  padding: 10px;
  height: 18px;
  vertical-align: middle;
  border-radius: 4px;
}
.input-box .password {
  margin-top: 30px;
}
.mip {
  color: #f66495;
  float: left;
  font-size: 12px;
}
/*.input-box .item input.error{
    border-color: #f66495;
}*/
.status-box .status.error {
  display: block;
  background-position: -37px -38px;
}
.status-box .status {
  display: none;
  position: absolute;
  top: 8px;
  right: -25px;
  width: 20px;
  height: 20px;
}
.form-login .input-box .text {
  margin: 6px 0;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
}
.input-box .text .tips {
  color: #f66495;
  float: left;
}
.clearfix {
  width: 414px;
}
.input-box .remember {
  margin: 10px 0;
  color: #717171;
  width: 410px;
  font-size: 12px;
}
.input-box .remember input {
  width: 13px;
  height: 13px;
}
.input-box .remember label {
  width: 234px;
  height: 20px;
}
.input-box .remember .forget-password {
  float: right;
}
.input-box .remember .not-checkout {
  margin-right: 10px;
  float: right;
}
.form-login .input-box .remember span {
  color: #bbb;
  margin-left: 10px;
}
.form-login .input-box .btn-box .btn-login {
  border: 1px solid #0381aa;
  color: #fff;
  background-color: #00a1d6;
}
.input-box .btn-box .btn {
  color: #555;
  display: inline-block;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 184px;
  line-height: 38px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}

.input-box .btn-box .btn-reg {
  margin-left: 34px;
}
#login:hover {
  background-color: #00a7de;
}
#reg:hover {
  background-color: #f5f5f5;
}
.input-box .sns {
  padding: 12px 0;
  font-size: 12px;
}
.input-box .sns .btn {
  color: #717171;
}
.sns .qq {
  margin-left: 20px;
}
.sns img {
  vertical-align: middle;
  margin-right: 5px;
  width: 21px;
  height: 21px;
}
.alltop {
  margin: 24px auto 0;
  width: 980px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
  line-height: 16px;
  margin-bottom: 20px;
}
</style>