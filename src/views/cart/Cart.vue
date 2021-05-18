<template>
    <!--导航-->
    <nav-bar class="nav-bar">
        <template #center>
            购物车({{cartLength}})
        </template>
    </nav-bar>

    <!--内容-->
    <cart-list></cart-list>

    <!--结尾-->
    <cart-total></cart-total>
</template>

<script>
    //顶部固定
    import NavBar from "@/components/common/navbar/NavBar";
    //中间
    import CartList from "./chlidComps/CartList";
    //下面
    import CartTotal from "./chlidComps/CartTotal";


    export default {
        name: "Cart",
        components: {
            NavBar,
            CartList,
            CartTotal
        },
        computed: {
            cartLength(){
                return this.$store.state.cartList.length
            }
        }
    }
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: white;
}
</style>