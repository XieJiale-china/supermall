<template>
  <nav-bar>
    <template #left>
      <div class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" />
      </div>
    </template>
    <template #center>
      <div class="title">
      <div v-for="(index,item) in titles"
            class="title-item"
            :class="{active: currentIndex == item}"
            @click="titleClick(item)">
        {{index}}
      </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";


  export default {
    name: "DetailNavBar",
    components:{
      NavBar,
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex: 0,
      }
    },
    methods:{
      //导航
      titleClick(item){
        this.currentIndex = item;
        this.$emit('titleClick', item);
      },
      //返回按钮
      backClick(){
        this.$router.back()
      },
    },
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 16px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .back img {
    margin-top: 12px;
  }
</style>