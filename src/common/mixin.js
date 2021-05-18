//对回到顶部进行抽取
import BackTop from "../components/content/backTop/BackTop";
export const backTopMinxin = {
  //监听位置这个引入不了，需要调用页面补充
  components: {
    BackTop
  },
  data() {
    //回到顶部按钮是否显示
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //返回顶部
    backClick(){
      //console.log('点击返回顶部');
      /*
      * 通过ref获取子组件的的方法 scrollTo ，跳转到指定位置
      * 参数一：x轴
      * 参数二：y轴
      * 参数三：跳转到位置的延迟时间,默认300
      */
      this.$refs.scroll.scrollTo && this.$refs.scroll.scrollTo(0,0,500);
    },
  }
}