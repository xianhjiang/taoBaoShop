(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ed2c5b8"],{2519:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"all"},[e("div",{staticClass:"soubg"},[e("div",{staticClass:"sou"},[e("span",{staticClass:"fr"},[e("span",{staticClass:"fl"},[s._v(" 你好，请 "),e("a",{attrs:{href:"#"}},[s._v("登录")]),s._v(" "),e("a",{staticStyle:{color:"#ff4e00"},on:{click:s.register}},[s._v("免费注册")])]),e("span",{staticClass:"fl"},[s._v("| 关注我们：")]),s._m(0),s._m(1)])])]),e("div",{staticClass:"middleone"},[e("div",{staticClass:"top-banner"},[e("img",{attrs:{src:s.src1}})]),s._m(2),e("div",{staticClass:"onemall"},[s._m(3),e("div",{staticClass:"login-box"},[e("div",{staticClass:"login-right"},[e("div",{staticClass:"form-login"},[e("div",{staticClass:"input-box"},[e("ul",[e("li",{staticClass:"item username status-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userInfo.num,expression:"userInfo.num"}],attrs:{type:"text",placeholder:"你的手机号/邮箱",id:"login-username",autocomplete:"off"},domProps:{value:s.userInfo.num},on:{blur:s.a,input:function(t){t.target.composing||s.$set(s.userInfo,"num",t.target.value)}}}),e("span",{staticClass:"mip"},[s._v(s._s(s.mip.s1))])]),e("li",{staticClass:"item password status-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"密码",id:"login-passwd"},domProps:{value:s.userInfo.password},on:{blur:s.b,input:function(t){t.target.composing||s.$set(s.userInfo,"password",t.target.value)}}}),e("span",{staticClass:"mip"},[s._v(s._s(s.mip.s2))]),e("span",{staticClass:"status"}),s._m(4)]),e("li",{staticClass:"item gc clearfix"}),e("li",{staticClass:"remember"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userInfo.checkbox,expression:"userInfo.checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.userInfo.checkbox)?s._i(s.userInfo.checkbox,null)>-1:s.userInfo.checkbox},on:{change:function(t){var e=s.userInfo.checkbox,a=t.target,i=!!a.checked;if(Array.isArray(e)){var n=null,r=s._i(e,n);a.checked?r<0&&s.$set(s.userInfo,"checkbox",e.concat([n])):r>-1&&s.$set(s.userInfo,"checkbox",e.slice(0,r).concat(e.slice(r+1)))}else s.$set(s.userInfo,"checkbox",i)}}}),s._v(" 记住我 ")]),e("span",[s._v("不是自己的电脑上不要勾选此项")]),e("a",{staticClass:"forget-password"},[s._v("忘记密码?")]),e("a",{staticClass:"not-checkout"},[s._v("无法验证?")])]),e("li",{staticClass:"btn-box"},[e("a",{staticClass:"btn btn-login",attrs:{href:"#",id:"login",disabled:s.btn},on:{click:s.flag}},[s._v("登录")]),e("a",{staticClass:"btn btn-reg",attrs:{id:"reg"},on:{click:s.register}},[s._v("注册")])]),e("li",{staticClass:"sns"},[e("a",{staticClass:"btn weibo"},[e("img",{attrs:{src:s.logo1}}),s._v(" 微博账号登录 ")]),e("a",{staticClass:"btn qq"},[e("img",{attrs:{src:s.logo2}}),s._v(" QQ账号登录 ")])])])])])])])])]),s._m(5)])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"s_sh"},[e("a",{staticClass:"sh1",attrs:{href:"javascript:void(0)"}},[s._v("新浪")]),e("a",{staticClass:"sh2",attrs:{href:"javascript:void(0)"}},[s._v("微信")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"fr"},[s._v(" | "),a("a",{attrs:{href:"javascript:void(0)"}},[s._v(" 手机版 "),a("img",{attrs:{src:e("2a75"),align:"absmiddle"}})])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"title-line"},[e("span",{staticClass:"tit",staticStyle:{"font-size":"38px"}},[s._v("登录")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"one"},[a("img",{attrs:{src:e("89af")}})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"text clearfix"},[e("p",{staticClass:"tips"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",{staticClass:"alltop"},[s._v(" 登录即代表你同意 "),e("a",{attrs:{target:"_blank",href:""}},[s._v("用户协议")]),s._v(" 和 "),e("a",{attrs:{target:"_blank",href:""}},[s._v("隐私政策")])])}],n={name:"login",components:{},data:function(){return{isReturn:!1,btn:!1,mip:{s1:"",s2:""},userInfo:{num:"",password:"",checkbox:!1},userArr:[],src1:e("dcae"),logo1:e("3720"),logo2:e("5d6b")}},methods:{register:function(){this.$router.push("/register")},a:function(){this.mip.s1="";var s=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;this.userInfo.num?s.test(this.userInfo.num)||(this.mip.s1="手机号码格式不正确哦！",this.isReturn=!0):(this.mip.s1="请输入注册时用的手机号呀",this.isReturn=!0)},b:function(){this.mip.s2="",this.isReturn=!0;var s=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;this.userInfo.password?s.test(this.userInfo.password)||(this.mip.s2="密码由6-16个字符组成，区分大小写"):this.mip.s2="喵，你没有输入密码么？"},flag:function(){var s=this;this.mip.s1="",this.mip.s2="",this.isReturn=!1;var t=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;this.userInfo.num?t.test(this.userInfo.num)||(this.mip.s1="手机号码格式不正确哦！"):this.mip.s1="请输入注册时用的者手机号呀";var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;this.userInfo.password?e.test(this.userInfo.password)||(this.mip.s2="密码由6-16个字符组成，区分大小写"):this.mip.s2="喵，你没有输入密码么？",t.test(this.userInfo.num)&&e.test(this.userInfo.password)?(this.btn=!1,this.$axios({method:"get",url:"http://localhost:8080/login",params:{tel:this.userInfo.num,password:this.userInfo.password}}).then((function(t){alert(t.msg),0===t.err_code&&(s.$store.commit("addUser",{user:t.user,isRemember:s.userInfo.checkbox}),s.$router.push("/home"),s.isReturn=!0,s.$store.commit("addToken",{token:t.token,isRemember:s.userInfo.checkbox}))}))):(this.btn=!1,alert("登录失败"))}}},r=n,c=(e("3cb0"),e("4023")),o=Object(c["a"])(r,a,i,!1,null,"582e1b3e",null);t["default"]=o.exports},"2a75":function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDE0NUE2ODlDOEExMUU1QTI4NEE1OTgzQTRGMzU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDE0NUE2OTlDOEExMUU1QTI4NEE1OTgzQTRGMzU2RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0MTQ1QTY2OUM4QTExRTVBMjg0QTU5ODNBNEYzNTZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0MTQ1QTY3OUM4QTExRTVBMjg0QTU5ODNBNEYzNTZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/XLHzAAAANVJREFUeNrskj0KwkAQhWdjBG0sFNTCi3gGwRNYJ3gCO1tbCxVzCBG8hBcJIhHFH/AHY+IbfIEoKbR34Ftm982b7E+M4zgFERmArrxiCS7Mi6DJfAj6FoYyaIED8EEANiTgmmptULEx5MAedCja8h4haICRaioa8ABrz/NWkhGu69qsMZb8GH/DN6H3G/Px6rjvkE0MddUi1VgTJ4YqWIA7C09cL3GeB9fEIHTXmB9Bj1+ZpEx+cgZ98tvHVqOM7Z+1Vg07MEv90tpxCsap7qrNwfYpwAD9FjOtDGbEYgAAAABJRU5ErkJggg=="},3720:function(s,t){s.exports="data:image/png;base64,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"},"3cb0":function(s,t,e){"use strict";var a=e("eaaa"),i=e.n(a);i.a},"5d6b":function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAECklEQVRIicVXW28TRxT+xmuvN7bBtpymiVHDpQmIlJeGq0olniq1T62KFAn1iR9XkJDoHygvSC1EuATUB9pUXERoEscQO8WX+LKe5ZxZ72ay63V4cJUjj9e7853zncvMnLVwSHAIEjsMUpa4fnO7VMbPjzbx4MUOaq3eWAjyqQS++jyHny7N4MbF6TDx3ZUt3PnzHVbqEs3JLDCmCjSFUDYTZNs0BK4vfrqf+HZpA8tVG2VBj9ImFWE8VehKic3dLpYruzCIwyP2rd9f3UaVby0iJS9VxOMYbItssm3m8MSPeLvRhVNgIMaWZl8ER+4ojhAxHAnQR43/Q+SAI0zsuBMR0Qo4yCRiuDidwpdTE/gk5aq+bdl4QvUrlVto9CShxHDigG1tOw0mZJDYUZ+cFcPilIWbX+Rw9VgaM5mEmt1s9PD7ehOCFtEKOVBrS7dcQQcUaVTE0glHTPeCxnw2iZvncrhxNo+YZvNE1sTsUVNFVH9s41Fr111QwcADtv1VLZy+IlCAwDDI0/lsAt+dyu4j9Y3QM56bI0ycoxpiQ6gA+mHiyO1AKcxRXqYnDGQtI8w6EJ6bIQxjWSfSXohYeTrMW4npVAyfHYnDEBELh4TnGMPYKDt6jbWIA14yuC9hCYmFQhILk1YkqSeMYSzrsK5fV38MIRaOtqrlXpqLaQPfzuVx7VT+QGLGMJZ1/HRr9sQwYvcA0UafFkLfxg9n8licySDxEWc3Yxj7/em80lU2dJvRxIGakOJ5MjSbOzjNnjD2fDGjkepRDyOG3E/ONSKvtxttPN96jzfV5oGkjGFslXTciGWAdMgBIkKLyyW+VXqNpy9NfHNmCrOFkyOJHzyv4NfVCp5td11ibrF8kgy63Yga6wvLUQ4+eb2Df8p1tLr2yKbFc4xhLOu4DccJLLChR6YesZ8HdKhUXRodWyrD6WQcb9/vYuVVRQWyeHIKk0cm1BxjFJYPKGOw56VKZ2g7BZrEoDXCI6eECAPleg/3nm2hVm/DigvUmm38tV5VWgvHtpBLW2jbDh6/+U9hWUfpOp4tMarGepPwiIWq09pOG2uVDfxSeunWTvP87h9rhCESg0zFafWbKdpXlqvrEQP+eR2daqm/CQjXaIyNJt1HMXvvlcYrLv/2MHxlHY/YDyQi1YVMEjU66jq8/4R+WFDaYgl1UV9KOUDsOchRM1bhvDn3alKd8xkzTHxtoYjf/u1go9OCw+nCwGvVWw2394no7uQmyHAdUNvHc0xC9FoomF18fbYYJl66ehr2w1dYXmvgXcdGr6/tHUer/WjmgaN7XYzfpSeTEpdnM1i6ciJM/OPlOXR7ffTaf+Ph6jp2mp0DSD5OjmYsXDhexNKl47h+ZX7PxcP60/YBlSCh1frYmJwAAAAASUVORK5CYII="},"89af":function(s,t,e){s.exports=e.p+"img/1.6422bd98.png"},dcae:function(s,t,e){s.exports=e.p+"img/5.4e4cf709.png"},eaaa:function(s,t,e){}}]);
//# sourceMappingURL=chunk-4ed2c5b8.8143a299.js.map