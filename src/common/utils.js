//这个是防抖函数；参数一：函数；参数二：时间
export function debounce(func, delay) {
  //创建一个变量放计时器
  let timer = null
  return function (...args) {
    //判断计时器是否存在，存在就清零，下面重新赋值
    if (timer) clearTimeout(timer)
    //设置定时器
    timer = setTimeout(() => {
      //时间到了，执行传递进来的函数
      func.apply(this, args)
    }, delay)
  }
}

//对时间戳进行处理
export function formatDate(date, fmt) {

  if (/(y+)/.test(fmt)) {

    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }

  let o = {

    'M+': date.getMonth() + 1,

    'd+': date.getDate(),

    'h+': date.getHours(),

    'm+': date.getMinutes(),

    's+': date.getSeconds()

  };

  for (let k in o) {

    if (new RegExp(`(${k})`).test(fmt)) {

      let str = o[k] + '';

      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));

    }

  }

  return fmt;

}
//时间格式化要用
function padLeftZero (str) {

  return ('00' + str).substr(str.length);

};