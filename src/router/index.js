import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    //里面的数据可以自定义，方便外面拿取
    meta: {
      //弄一个这个，判断路由是否缓存
      keepAlive: true,
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
