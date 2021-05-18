<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @title-click="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
      <br><br><br>
    </scroll>
    <back-top v-show="isShowBackTop" @click="backClick"/>
    <detail-bot-bar @addEvent="addToCart" />
    <toast ref="toast"></toast>
  </div>

</template>

<script>
  //顶部固定
  import DetailNavBar from "./chlidComps/DetailNavBar";
  //轮播图
  import DetailSwiper from "./chlidComps/DetailSwiper";
  //商品信息
  import DetailBaseInfo from "./chlidComps/DetailBaseInfo";
  //商品信息下面、
  import DetailShopInfo from "./chlidComps/DetailShopInfo";
  //详情页
  import DetailGoodsInfo from "./chlidComps/DetailGoodsInfo";
  //商品参数
  import DetailParamInfo from "./chlidComps/DetailParamInfo";
  //滚动
  import Scroll from "../../components/common/scroll/Scroll";
  //评论
  import DetailCommentInfo from "./chlidComps/DetailCommentInfo";
  //商品推荐
  import GoodsList from "../../components/content/goods/GoodsList";
  //底部悬浮
  import DetailBotBar from "./chlidComps/DetailBotBar";
  //引入mixin封装好的跳转顶部
  import {backTopMinxin} from '@/common/mixin.js';
  //引入弹窗
  import Toast from "../../components/common/toast/Toast";

  //网络请求
  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail";
  import BackTop from "../../components/content/backTop/BackTop";


  export default {
    name: "Detail",

    components:{
      BackTop,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBotBar,
      Toast,
      Scroll
    },

    data(){
      return {
        //1.请求数据用
        iid: null,

        //2.保存请求到的数据
        //2.1轮播图
        topImages: [],

        //保存商品数据
        goods: {},

        shop: {},

        detailInfo: {},

        paramInfo: {},

        commentInfo: [],

        recommend: [],

        //记住导航栏滚动到的位置
        themeTopYs: [],

        //滚动时，监听滚到哪个导航标签要用
        currentIndex: 0,


      }
    },

    created() {
      //根据路由传递的参数赋值iid
      this.iid = this.$route.params.iid;

      //根据iid请求数据
      getDetail(this.iid).then(res => {
        //console.log(res);
        const data = res.result;
        //1.对轮播图进行赋值
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //6.获取评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list
        }

        this.$nextTick(() => {
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.param.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
          this.themeTopYs.push(Number.MAX_VALUE);
          // console.log(this.themeTopYs);
        })

      }).catch(err => {
        console.log(err);
      })

      //获取请求数据
      getRecommend().then(res => {
        //console.log(res);
        this.recommend = res.data.list
      }).catch(err => {
        console.log(err);
      })

    },
    mixins:[backTopMinxin],
    methods: {
      //监听最上面导航的点击
      titleClick(index){
        //获取各属性的位置，下面跳转用
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        this.themeTopYs.push(Number.MAX_VALUE);
        console.log(this.themeTopYs);

        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);

      },

      //监听滚动的位置
      contentScroll(position){
        // console.log(position.y);
        // console.log('isShowBackTop的值：'+this.isShowBackTop);
        this.isShowBackTop = position.y < -1000;
        const positionY = -(position.y);
        let _lenth = this.themeTopYs.length;
        for(let i=0; i<_lenth-1; i++){
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
            console.log(i);
          }
        }

      },

      //监听到添加购物车
      addToCart(){
        const obj = {
          iid: this.iid,
          desc: this.goods.desc,
          price: this.goods.realPrice,
          title: this.goods.title,
          img: this.topImages[0]
        };
        //console.log(obj);
        this.$store.dispatch('addCart',obj)
          .then(res => {
            //执行函数里面的方法
            this.$refs.toast.show(res);
          })
          .catch(err => {
            console.log("添加失败");
          })

        //console.log(this.$store.state.cartList);
      }

    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: 100vh;
  }
</style>