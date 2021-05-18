<template>
  <div class="cart_total">
  <div id="cart_total">
    <div @click="checkClick" style="display: flex;">
      <cart-check-button :isChecked="checkAll" ref="checkButtonRef" />全选
    </div>
    <div class="calc">总计：￥{{ totalDecimal }}</div>
    <div class="buy" @click="buySth">去购买({{ totalLength }})</div>
  </div>
  </div>
</template>

<script>
  //按钮
  import CartCheckButton from "./CartCheckButton.vue";

  export default {
    name: "CartTotal",
    components: {
      CartCheckButton
    },
    //计算属性
    computed: {
      //1、获取vuex的cartList
      cartList() {
        return this.$store.state.cartList;
      },
      //2、高阶filter获取为true选中的数组
      checkedItem() {
        return this.cartList.filter((item, index) => item.checked == true);
      },
      //3、选中数组的长度
      totalLength() {
        return this.checkedItem.length;
      },
      //4、高阶reduce累加，计算总价
      totalPrice() {
        return this.checkedItem.reduce(
          (pre, curr) => pre + curr.count * curr.price,
          0
        );
      },
      //5、对上面的总数取整
      totalDecimal() {
        return Math.round(this.totalPrice * 100) / 100;
      },

      //6、判断多少个已选中的，根据情况给全选或者全不选
      checkAll() {
        if (this.cartList.length == 0) {
          return false;
        } else {
          //every把某一项全都设置一个值
          //every()是对数组中每一项运行给定函数，如果该函数对【每一项】返回true,则返回true。
          //some()是对数组中每一项运行给定函数，如果该函数对【任一项】返回true，则返回true。
          return this.cartList.every(value => value.checked == true);
        }
      }
    },
    methods: {
      //点击全选或者全不选
      checkClick() {
        /* if (this.checkAll == true) {
          this.cartList.forEach(item => item.checked = false);
        } else {
          this.cartList.forEach(item => item.checked = true);
        } */
        //吧现在的状态取反，赋值给下面,把某一项全都设置一个值
        let checkFlag = !this.checkAll;
        this.cartList.forEach(item => (item.checked = checkFlag));
      },
      //点击去购买按钮
      buySth() {
        if (this.totalLength == 0) {
          this.$toast.show("请选择要购买的商品");
        } else {
          //====>购买界面，确认信息
          alert("跳转到购买页面...");
        }
      }
    }
  }
</script>

<style scoped>
  #cart_total {
    font-size: 0.7rem;
    height: 1.9rem;
    display: flex;
    background-color: rgb(228, 228, 228);
    line-height: 1.9rem;
    text-align: center;
  }
  .calc {
    flex: 1;
  }
  .buy {
    width: 5rem;
    background-color: #f03;
    color: white;
  }
  .cart_total{
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>