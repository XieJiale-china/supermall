<template>
  <div class="cart">
    <scroll class="content">
      <cart-list-item
        v-for="(item, index) in $store.state.cartList"
        :key="index"
        :item="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem.vue";
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    }
  }
</script>

<style scoped>

  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>