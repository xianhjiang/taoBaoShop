(function(e){function t(t){for(var n,r,u=t[0],c=t[1],i=t[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,i||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a={app:0},s=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0e2fa518":"ee69df25","chunk-07bca35b":"713fc344","chunk-5af97b60":"a4804d27","chunk-78cba1d0":"7c77c346","chunk-0d7a1fb4":"a0dc5619","chunk-6e96d38e":"e06ed6c7","chunk-4dc24232":"4e8048ed","chunk-4ed2c5b8":"8143a299","chunk-5016f54c":"ebce32a3"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={"chunk-0e2fa518":1,"chunk-07bca35b":1,"chunk-5af97b60":1,"chunk-78cba1d0":1,"chunk-0d7a1fb4":1,"chunk-6e96d38e":1,"chunk-4dc24232":1,"chunk-4ed2c5b8":1,"chunk-5016f54c":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-0e2fa518":"887c1861","chunk-07bca35b":"dd4b60b7","chunk-5af97b60":"03d07bd9","chunk-78cba1d0":"f5cc6f66","chunk-0d7a1fb4":"db6d3b35","chunk-6e96d38e":"977a3d36","chunk-4dc24232":"df467f4c","chunk-4ed2c5b8":"7cfbfe9d","chunk-5016f54c":"8a6b6714"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===n||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],f.parentNode.removeChild(f),o(s)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=s);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("f8a4"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("a133"),o("ed0d"),o("f09c"),o("e117");var n=o("0261"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s={name:"app",beforeMount:function(){this.$store.commit("updataUser")},watch:{$route:function(e,t){this.$store.state.user=localStorage.user?JSON.parse(localStorage.user):sessionStorage.user?JSON.parse(sessionStorage.user):null}}},u=s,c=(o("034f"),o("4023")),i=Object(c["a"])(u,r,a,!1,null,null,null),d=i.exports,l=(o("d497"),o("e18c"),o("1860")),f=(o("3466"),o("ea69"),o("053b"),o("430a")),h=o("e24e"),p=o("ae8c"),g=o("82ae"),m=o.n(g);function b(e){var t=m.a.create({timeout:8e3});return t.interceptors.request.use((function(e){var t=localStorage.token?localStorage.getItem("token"):sessionStorage.getItem("token");return e.headers.Authorization=t,e}),(function(e){})),t.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e.response)})),t(e)}n["a"].use(p["a"]);var S=new p["a"].Store({state:{goods:{},order:[],myorder:[],totalPrice:0,user:null,token:null},mutations:{seegoods:function(e,t){e.goods=t,t.count||(e.goods.count=1)},setgoodsCount:function(e,t){e.goods.count=t;var o=JSON.parse(sessionStorage.goods);o.count=t,sessionStorage.goods=JSON.stringify(o)},ordergoods:function(e){var t=[];void 0==sessionStorage.order||(t=JSON.parse(sessionStorage.order));var o,n=Object(h["a"])(e.order);try{var r=function(){var t=o.value;if(t.title==e.goods.title){t.count=e.goods.count;var n=e.order.findIndex((function(e){return e.title==t.title})),r=JSON.parse(sessionStorage.order);return r[n].count=e.goods.count,sessionStorage.order=JSON.stringify(r),{v:void 0}}};for(n.s();!(o=n.n()).done;){var a=r();if("object"===Object(f["a"])(a))return a.v}}catch(s){n.e(s)}finally{n.f()}null==e.goods.count&&(e.goods.count=1),e.order.push(e.goods),t.push(e.goods),sessionStorage.order=JSON.stringify(t)},setOrder:function(e,t){e.order=t,sessionStorage.order=JSON.stringify(t)},setshopCount:function(e,t){e.order[t.i].count=t.n,sessionStorage.order=JSON.stringify(e.order);var o,n=0,r=Object(h["a"])(e.order);try{for(r.s();!(o=r.n()).done;){var a=o.value;n+=a.count*parseInt(a.price)}}catch(s){r.e(s)}finally{r.f()}e.totalPrice=n},settotalPrice:function(e,t){e.totalPrice=t},deletegoods:function(e,t){e.order.splice(t,1);var o=JSON.parse(sessionStorage.order);o.splice(t,1),sessionStorage.order=JSON.stringify(o);var n,r=0,a=Object(h["a"])(e.order);try{for(a.s();!(n=a.n()).done;){var s=n.value;r+=s.count*parseInt(s.price)}}catch(u){a.e(u)}finally{a.f()}e.totalPrice=r},addmyorder:function(e,t){e.myorder.push(t),e.order=[],sessionStorage.order="[]";var o=sessionStorage.myorder?JSON.parse(sessionStorage.myorder):[];o.unshift(t),sessionStorage.myorder=JSON.stringify(o)},setmyorder:function(e,t){e.myorder=t},addUser:function(e,t){var o=t.isRemember;e.user=t.user,o?localStorage.user=JSON.stringify(t.user):sessionStorage.user=JSON.stringify(t.user)},addToken:function(e,t){var o=t.isRemember;e.token=t.token,o?localStorage.token=t.token:sessionStorage.token=t.token},updataUser:function(e){localStorage.user?(e.user=JSON.parse(localStorage.user),e.token=localStorage.token):sessionStorage.user&&(e.user=JSON.parse(sessionStorage.user),e.token=sessionStorage.token)}},actions:{setshopCount:function(e,t){var o=e.commit,n=e.state;b({method:"get",url:"http://localhost:8080/Verification"}).then((function(e){b({method:"get",url:"http://localhost:8080/changeShopCount",params:{user:n.user,shopCountData:{i:t.i,n:t.n}}}).then((function(e){o("setshopCount",t)})).catch((function(e){console.log(e)}))})).catch((function(e){alert(e.data.msg),C.push("/login")}))},deletegoods:function(e,t){var o=e.commit,n=e.state;o("deletegoods",t),b({method:"get",url:"http://localhost:8080/Verification"}).then((function(e){b({method:"get",url:"http://localhost:8080/deleteShop",params:{user:n.user,shopIndex:t}}).then((function(e){})).catch((function(e){console.log(e)}))})).catch((function(e){alert(e.data.msg),C.push("/login")}))},addmyorder:function(e,t){var o=e.commit,n=e.state;b({method:"post",url:"http://localhost:8080/addmyorder",params:{user:{name:n.user.name,tel:n.user.tel}},data:t}).then((function(e){o("addmyorder",t)})).catch((function(e){console.log(e)}))}},modules:{}}),v=function(){return Promise.all([o.e("chunk-0e2fa518"),o.e("chunk-6e96d38e")]).then(o.bind(null,"4cc4"))},k=function(){return Promise.all([o.e("chunk-0e2fa518"),o.e("chunk-07bca35b"),o.e("chunk-5af97b60")]).then(o.bind(null,"ea46"))},y=function(){return Promise.all([o.e("chunk-0e2fa518"),o.e("chunk-07bca35b"),o.e("chunk-78cba1d0")]).then(o.bind(null,"2f3d"))},O=function(){return Promise.all([o.e("chunk-0e2fa518"),o.e("chunk-0d7a1fb4")]).then(o.bind(null,"272e"))},N=function(){return o.e("chunk-4ed2c5b8").then(o.bind(null,"2519"))},w=function(){return o.e("chunk-5016f54c").then(o.bind(null,"789a"))},J=function(){return o.e("chunk-4dc24232").then(o.bind(null,"19d5"))};n["a"].use(l["a"]);var P=[{path:"",redirect:"home"},{path:"/home",name:"home",component:v},{path:"/purchase/:Mname/:type/:modular/:size/:name",name:"purchase",component:k},{path:"/buycar",name:"buycar",component:y,meta:{requireAuth:!0}},{path:"/myorder",name:"myorder",component:O,meta:{requireAuth:!0}},{path:"/login",name:"login",component:N},{path:"/register",name:"register",component:w},{path:"*",name:"mistake",component:J}],j=new l["a"]({routes:P,mode:"hash"});j.beforeEach((function(e,t,o){e.matched.some((function(e){return e.meta.requireAuth}))?b({url:"http://localhost:8080/Verification",method:"get"}).then((function(e){o()})).catch((function(e){alert(e.data.msg),S.state.user=null,S.state.token=null,S.state.order=[],S.state.goods={},S.state.myorder=[],localStorage.user&&localStorage.removeItem("user"),localStorage.token&&localStorage.removeItem("token"),sessionStorage.user&&sessionStorage.removeItem("user"),sessionStorage.token&&sessionStorage.removeItem("token"),sessionStorage.order&&sessionStorage.removeItem("order"),sessionStorage.goods&&sessionStorage.removeItem("goods"),sessionStorage.myorder&&sessionStorage.removeItem("myorder"),j.push("/login")})):o()}));var I=l["a"].prototype.push;l["a"].prototype.push=function(e){return I.call(this,e).catch((function(e){return e}))};var C=j;n["a"].config.productionTip=!1,n["a"].prototype.$axios=b,new n["a"]({store:S,router:C,render:function(e){return e(d)}}).$mount("#app"),C.beforeEach((function(e,t,o){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,o()}))},f8a4:function(e,t,o){}});
//# sourceMappingURL=app.96784b19.js.map