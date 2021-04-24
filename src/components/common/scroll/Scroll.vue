<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  //引入第三方滚动
  import BScroll from 'better-scroll'


  export default {
    name: "Scroll",
    props:{
      probeType:{
        type: Number,
        default:0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        //用于存放对象
        scroll: null,
      }
    },
    //生命周期函数，dom挂载后执行
    mounted() {
      //加载插件，参数一：挂载标签，参数二：配置
      this.scroll = new BScroll('.wrapper', {
        //按需加载，加了这个才能手动滚
        observeDOM: true,

        //【1.侦测实时位置】
        //0,1都是不检测
        //2：滚动过程中检测
        //3：只要是滚动，都监测
        //这里我们使用外面传递进来的参数，不能写死
        probeType: this.probeType,

        //【2.监听上拉加载】
        pullUpLoad: this.pullUpLoad,

        //【3.click加了才能监听点击，li这些】
        click: true,

      })

      //实时监听位置
      this.scroll.on('scroll',(position)=>{
        //console.log(position);
        // 把数据抛给父组件
        this.$emit('scroll', position)
      })

      //上拉加载更多
      this.scroll.on('pullingUp',()=>{
        //直接执行
        this.$emit('pullingUp')
      })
    },
    methods:{
      //跳转到指定位置，time设置默认跳转延迟
      scrollTo(x, y, time=300){
        /*
            * scroll对象的自带方法 scrollTo ，跳转到指定位置
            * 参数一：x轴
            * 参数二：y轴
            * 参数三：跳转到位置的延迟时间
        */
        this.scroll.scrollTo(x, y, time)
      },
      //封装一下finishPullUp方法，刷新上拉加载
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      //重构下高度
      refresh(){
        this.scroll.refresh()
      }

    }
  }
</script>

<style scoped>

</style>