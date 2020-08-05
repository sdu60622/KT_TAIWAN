<template>
  <div id="carttable">
    <div>
      <Nav></Nav>
    </div>
    <loading :active.sync="isLoading" ></loading>

    <div class="banner">
      <div class="top">
        <img src="../../public/img/banner.jpg">
      </div>
      <div class="text">
        <h1>訂單確認</h1>
        <h2>Check</h2>
      </div>
    </div>

    <div class="container">
      <div class="row mt-4">
        <div class="col-12 mt-3">
          <h2 class="mb-4" style="color:white">訂單確認 | <span style="color:#E7C46E">Check</span></h2>
        </div>
      </div>

      <div class="col-12">
        <table class="table mt-3">
          <thead>
            <tr>

              <th scope="col"></th>
              <th scope="col">品名</th>
              <th scope="col">數量</th>
              <th scope="col">單價</th>
              <th scope="col">總價</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartData" :key="item.id">

              <td style="width:150px"><div style="height: 100px; width:100px;background-size: cover; background-position: center " :style="{backgroundImage : `url(${item.product.imageUrl})`}"></div></td>
              <td>{{item.product.title}}</td>
              <td>{{item.qty}} / {{item.product.unit}}</td>
              <td>$.{{item.product.price}}</td>
              <td>$.{{item.qty *item.product.price}}</td>
              <td><button type="button" class="btn btn-danger btn-sm" @click="removeCartItem(item.id)">刪除</button></td>
            </tr>
            <tr>

              <td></td>
              <td></td>
              <td></td>
              <td>總計</td>
              <td>$.{{cartTotalPrice}}</td>
              <td><div><button type="button" class="btn btn-danger btn" style="float:right" @click="goto('/payorder')">結帳去</button></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: {
    Nav
  },
  data () {
    return {
      products: [],
      isLoading: false,
      product: {},
      id: '',
      cartData: {},
      cartTotalPrice: ''

    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
      const vm = this
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        vm.isLoading = false
        this.cartData = response.data.data.carts
        this.cartTotalPrice = response.data.data.total
      })
    },
    removeCartItem (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.isLoading = true
      this.$http.delete(url).then((response) => {
        console.log(response)
        vm.getCart()
        vm.isLoading = false
      })
    },
    handlePlus: function (item) {
      console.log(item)
      item.product.num++
    },
    goto (link) {
      if (this.$route.path !== link) {
        this.$router.push(link)
      }
    }

  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
