<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" :title="item.title" @load="imageLoad" >
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    //轮播图
    import {Swiper, SwiperItem} from "@/components/common/swiper/index"

    export default {
        name: "HomeSwiper",
        props:{
            banners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data(){
            return {
                isLoad: false,
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods:{
            imageLoad(){
                // console.log('---');
                if(!this.isLoad){
                    this.$emit('swiperImageLoad')
                    this.isLoad = true
                }
            },
        },
    }
</script>

<style scoped>
    img{width: 100%}
</style>