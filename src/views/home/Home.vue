<template>
  <div id="home">
      <nav-bar class="home-nav">
          <template #center >购物街</template>
      </nav-bar>
      <home-swiper :banners="banners" ></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
  </div>
</template>

<script>
//最上面的购物街
import NavBar from "../../components/common/navbar/NavBar";
//网络请求
import {getHomeMultidata} from "../../network/home";
//封装的轮播图
import HomeSwiper from './chlidComps/HomeSwiper';
//推荐视图
import RecommendView from "./chlidComps/RecommendView";

export default {
    name: 'Home',
    data(){
      return {
          //把请求的数据存起来
          banners: null,
          recommends: null,
      }
    },
    components: {
      RecommendView,
        NavBar,
        HomeSwiper,
    },
    //生命周期函数，创建组件时执行
    created() {
        //调用封装的网络请求方法
        getHomeMultidata().then(res => {
            console.log(res);
            //把请求到的数据存储起来
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        }).catch(err => {
            console.log(err);
        })
    },
}
</script>

<style>
    .home-nav{
        /*这里使用之前base设置的变量*/
        background: var(--color-tint);
        color: white;
        font-size: 18px;
    }
</style>