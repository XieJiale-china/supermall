<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" />
  </div>
</template>

<script>
  //引入小组件
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goods:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>