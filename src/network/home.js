import {request} from "./request";

// 获取轮播图和4个推荐
export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
    })
}

//获取综合，精选，这些
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}