//【说明】封装成插件，调用更方便

//引入Toast
import Toast from "./Toast";

//创建一个对象，等会导出对象
const obj = {}

//默认会执行install方法
obj.install = function (Vue) {
  //不知道怎么挂载上，提示函数不存在，弃用这个功能
}

//导出对象
export default obj

//引入时，可以自定义名称
// import toast from "@/components/common/toast/index.js";