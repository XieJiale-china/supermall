<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" class="swiper-img" >
    </swiper-item>
  </swiper>
</template>

<script>
  //轮播图
  import {Swiper, SwiperItem} from "@/components/common/swiper/index"

  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .swiper-img{
    width: 100%;
  }
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>