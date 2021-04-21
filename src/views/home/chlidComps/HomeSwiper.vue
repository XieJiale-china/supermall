<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" :title="item.title">
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
        components: {
            Swiper,
            SwiperItem
        },
    }
</script>

<style scoped>
    img{width: 100%}
</style>