new Vue({
  el: ".app",
  data() {
    return {
      cartList: [],
      isSelectAll: false,
    };
  },
  mounted() {
    const cartList = localStorage.getItem("cartList");
    if (cartList !== null) {
      this.cartList = JSON.parse(cartList);
    }
  },
  methods: {
    // 删除购物车子项
    deleteItem(item) {
      this.cartList = this.cartList.filter((value) => {
        return value.id !== item.id;
      });
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
      this.$message({
        type: "success",
        message: "Удалить успешно",
      });
    },
    // 单数减
    numremove(item) {
      this.cartList.forEach((value, index) => {
        if (value.id === item.id) {
          if (value.num !== 1) {
            value.num -= 1;
          }
        }
      });
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
    },
    // 单数加
    numadd(item) {
      this.cartList.forEach((value) => {
        if (value.id === item.id) {
          value.num += 1;
        }
      });
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
    },
    pay() {
      this.$confirm("Предстоящий платеж, продолжение", "Подсказка", {
        confirmButtonText: "Определение",
        cancelButtonText: "Отменить",
        type: "success",
      })
        .then(() => {
          this.cartList = [];
          localStorage.setItem("cartList", JSON.stringify(this.cartList));
          this.$message({
            type: "success",
            message: "Оплата успешно!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Платежи отменены",
          });
        });
    },
  },
  computed: {
    // 计算价格
    allprice() {
      let num = 0;
      this.cartList.forEach((value) => {
        num += value.num * value.price;
      });
      return num;
    },
  },
  watch: {},
});
