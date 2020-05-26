<template>
   <div class='tbhService'>
      <store></store>
   </div>
</template>

<script>
import store from "components/content/home/store"
export default {
   name:'tbhService',
   props:{
   },
   data () {
      return {

      };
   },

   components: {
      store
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
.tbhService{
    width: 190px;
    height: 522px;
    background-color:red;
}
</style>