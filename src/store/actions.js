export default {
  //添加购物车,参数一是上面state，参数二是等会调用时传进来的
  addCart(contexr, payload){
    //返回一个Promise用于判断是否执行成功
    return new Promise((resolve, reject) => {

      //1.创建一个值，记录数组是否有改商品
      let oldProduct = null;

      //2.es6新语法，item为值，遍历state.cartList
      for (let item of contexr.state.cartList){
        //判断是否重复
        if(item.iid === payload.iid){
          //oldProduct变成了对应的数组
          oldProduct = item;
        }
      }

      //3.判断oldProduct是否有值
      if(oldProduct){
        //有值，把对应的产品数量+1，上面已经对oldProduct赋值了
        oldProduct.count += 1;

        //调用resolve执行下一步
        resolve('商品数量+1')
      } else {
        //没值，push到数组
        payload.count = 1
        contexr.state.cartList.push(payload)

        //调用resolve执行下一步
        resolve('添加到购物车成功')
      }
    })


  }

}