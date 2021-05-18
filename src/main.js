import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'


//【自定义插件】
//toast弹窗
import toast from "@/components/common/toast/index";

createApp(App).use(store).use(router).use(toast).use(VueLazyLoad).mount('#app')
