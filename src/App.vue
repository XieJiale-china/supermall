<template>
  <router-view/>
  <main-tab-bar/>
</template>

<script>
  import MainTabBar from "./components/content/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }

</script>

<style>
  @import "~@/assets/css/base.css";
</style>
