<template>
  <div id="orderlist">
    <loading :active.sync="isLoading"></loading>

    <!-- 分頁 -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled':!pagination.has_pre}">
          <a class="page-link" href="#" aria-label="Previous"  @click.prevent="getOrders(pagination.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active':pagination.current_page==page}">
          <a class="page-link" href="#" @click.prevent="getOrders(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="getOrders(pagination.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- 分頁 -->

    <table class="table mt-3 table-striped">
      <thead class="bg-light">
        <tr>
          <th width="200" scope="col">建立時間</th>
          <th scope="col">訂單明細</th>
          <th width="100" scope="col">應付金額</th>
          <th width="100" scope="col">狀態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{order.create_at | time}}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">{{product.product.title}} x {{product.qty}}</li>
            </ul>
          </td>
          <td>$.{{order.total | currencyFilter}}</td>
          <td>
            <span v-if="order.is_paid" class="text-primary">已付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </td>
          <td class="text-center">
            <button class="btn btn-primary" @click="openModal(order)">查看</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- https://github.com/handred800/my-shop-demo/blob/master/src/components/admin/OrderList.vue -->

    <!-- 訂單詳情-->
    <b-modal ref="my-modal" size="xl" hide-footer title="訂單詳情">
      <div class="d-block text-center" >
        <table class="table " >
          <thead v-for="item in tempOrder.products" :key="item.id">
            <tr>
              <td><p>{{item.product.title}}</p></td>
              <td><p>x{{item.qty}}</p></td>
              <td><p>$.{{item.total}}</p></td>
            </tr>
          </thead>
          <tbody >
            <tr scope="row">
              <td></td>
              <td>總計:</td>
              <th><p>$.{{tempOrder.total}}</p></th>
            </tr>
          </tbody>
        </table>
        <p>備註:{{tempOrder.message}}</p>
      </div>
    </b-modal>
    <!-- 訂單詳情-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagination: {},
      tempOrder: {},
      orders: [],
      isLoading: false
    }
  },
  components: { },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
        vm.isLoading = false
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.$refs['my-modal'].show()
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
