<template>

</template>

<script>
  import mitt from "mitt";

  export default {
    name: "Bus",
    data() {
      return {
        //储存实例
        bus: null,
      }
    },
    //生命周期函数
    mounted(){
      //创建mitt实例
      this.bus = new mitt()
      this.bus.on('testmitt', data => {
        console.log('this.bus.on');
        this.$emit('monitor',data)
      })

    },
    methods:{
      //自己封装一下发射事件
      //参数一：事件名
      //参数二：传递数据
      emit(type, data) {
        this.bus.emit(type, data)
      },
      //监听事件开启
      //参数一：事件名
      //用法：组件创建后，在生命周期函数调用一下监听
      //还需要引用一下标签，接收自带$emit发射的monitor事件
      //testmitt
      monitor(type){
        console.log('来到mon监听');
        // this.bus.on(type, data => {
        //   console.log('this.bus.on');
        //   this.$emit('monitor',data)
        // })
      }

    }
  }
</script>

<style scoped>

</style>

