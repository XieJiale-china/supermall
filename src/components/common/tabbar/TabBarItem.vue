<template>
    <div class="tab-bar-item" @click="itemClick" >
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else ><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            //app传递路径
            path: String,
            activeColor:{
                type:String,
                default:'red',
            },
        },
        computed:{
            //是否选中
            isActive(){
                // return this.$route.path.indexOf(this.path);
                //判断当前路径和path值是否一样，来看是否选中
                return this.$route.path == this.path;
            },
            activeStyle(){
                //判断是否选中，选中就返回样式，没选中返回空
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            //点击后，app父传子path，触发点击跳转到对应的路由
            itemClick(){
                this.$router.replace(this.path);
            }
        },

    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item >>> img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>