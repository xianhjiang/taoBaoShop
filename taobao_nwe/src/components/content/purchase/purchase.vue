<template>
    <div class="purchase">
    	<topheader :isHome="false"></topheader>
        <topsearch :isShopping="false"></topsearch>
        <purchasenav></purchasenav>
        <div class="detail">
            <div class="shopleft">
                <shopleft></shopleft>
            </div>
            <div class="shoppingDetails">
                <shop></shop>
            </div>
        </div>
        <discuss></discuss>
      	<taofooter></taofooter>

    </div>
</template>
<script>
	import shop from 'components/content/purchase/shop'
    import topheader from 'components/content/header/topheader'
    import topsearch from "components/content/header/topsearch"
    import taofooter from "components/content/footer/taofooter"
    import shopleft from "components/content/purchase/shopleft"
    import purchasenav from "components/content/header/purchasenav"
    import discuss from "components/content/purchase/discuss"
    export default {
        name:'purchase',
        data() {
            return { 
               
            }
        },
        components: {
            shop,
            topheader,
            topsearch,
            taofooter,
            shopleft,
            purchasenav,
            discuss
        },
        methods:{
        },
        computed:{
        }
    }
</script>
<style scoped>
.purchase .detail{
    margin: 10px auto 0;
    width: 1140px;
    height: 700px;
    color: #3C3C3C;
    /* background-color: red; */
}
.purchase .detail .shoppingDetails{
    width: 940px;
    height: 698px;
    background-color: #fff;
    border: 1px solid #E8E8E8;
}
.purchase .detail .shopleft{
    float: right;
}
.purchase .publish{
    margin-top: 15px;
}
</style>