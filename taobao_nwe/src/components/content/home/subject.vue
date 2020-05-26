<template>
   <div class='subject clearfix'>
       <tbhService></tbhService>
       <mainInner></mainInner>
       <personal></personal>
   </div>
</template>

<script>
import mainInner from 'components/content/home/mainInner'
import personal from 'components/content/home/personal'
import tbhService from 'components/content/home/tbhService'
export default {
   name:'subject',
   props:{
   },
   data () {
      return {

      };
   },

   components: {
       mainInner,
       personal,
       tbhService,
   },

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
.subject .tbhService{
    float: left;
}
.subject .mainInner{
    float: left;
}
.subject .tbhService{
    float: left;
}
.subject .personal{
    float: right;
}
</style>