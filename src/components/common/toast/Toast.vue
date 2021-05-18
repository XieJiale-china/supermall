<template>
  <div class="toast" v-show="isShowTip">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        //是否显示
        isShowTip: false,
        //显示的内容
        message: ""
      };
    },
    methods: {
      //以后调用这个就会显示，参数一：提示的文案    参数二：显示的时间，默认1秒
      show(msg, delay = 1000) {
        console.log('调用弹窗');
        this.isShowTip = true;
        this.message = msg;
        //一段延迟后隐藏
        setTimeout(() => {
          this.isShowTip = false;
        }, delay);
      }

    }
  }
</script>

<style scoped>
.toast{
  font-size: 0.8rem;
  text-align: center;
  line-height: 2rem;
  height: 2rem;
  width: 10rem;
  background-color: rgba(128, 128, 128, 0.9);
  border-radius: 0.4rem;
  border: 0.04rem solid rgba(0, 0, 0, 0.4);
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>