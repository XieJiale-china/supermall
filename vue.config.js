//我们自己来配置一下
const pxtovw = require('postcss-px-to-viewport');
module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css:{
    loaderOptions:{
      sass:{
        //给sass-loader传递选项
      },
      css:{
        //给css-loader传递选项
      },
      postcss:{
        //给postcss-loader传递选项
        plugins:[
          new pxtovw({
            unitToConvert: 'px', //需要转换的单位，默认为"px"；
            viewportWidth: 375, //设计稿的视口宽度
            viewportHeight: 667, //设计稿的视口高度，copy的代码没有，老师的有
            unitPrecision: 5, //单位转换后保留的小数位数
            propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
            viewportUnit: 'vw', //转换后的视口单位，建议vw
            fontViewportUnit: 'vw', //转换后字体使用的视口单位
            selectorBlackList: [], //指定不需要转化的类，['类名1','类名2']，没有.的
            minPixelValue: 1, //设置最小的转换数值,小于等于1px的不转换
            mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
            replace: true, //是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/] //忽略某些文件夹下的文件
          })
        ]
      }
    }
  }
}