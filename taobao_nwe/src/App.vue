<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default { 
    name:"app",
    beforeMount(){
        this.$store.commit("updataUser")
    },
    watch:{
    $route(to,from){
        this.$store.state.user = localStorage.user?JSON.parse(localStorage.user):(sessionStorage.user?JSON.parse(sessionStorage.user):null)
        }
    },

}
</script>

<style>
@charset "utf-8";
/* CSS Document */

body{
    margin:0;
    padding:0; 
    font-size:12px; 
    font-family:"Microsoft YaHei";
    /* line-height:25px; */
    color:#555555;
}
:focus{
    outline: none;
}
table{
    margin:0 auto;
}
a{
    /* color:#555555;  */
    text-decoration:none; 
    cursor:pointer;
}
/* a:hover{
    color:#ff4e00; 
    text-decoration:none; 
    cursor:pointer;
} */
img{
    border:0;
}
ul,li,dl,dt,dd{
    list-style:none;
    margin:0; padding:0;
}
input,io,select,checkbox{
    vertical-align:middle;
}
h1,h2,h3,h4,h5,h6{
    padding:0; margin:0 auto;
}
input{
    outline: none;
}
.fl{
    float:left;
}
.fr{
    float:right;
}
form{
    margin:0; padding:0;
}
.none{
    display:none;
}
.clearfix:after {
  content: "";
  width: 100%;
  display: block;
  clear: both;
}
</style>
