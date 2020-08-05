<template>
  <div id="orderlist">
    <loading :active.sync="isLoading"></loading>

    <!-- 頁碼 -->
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
    <!-- 頁碼 -->

    <table class="table mt-3">
      <thead class="bg-light">
        <tr>
          <th width="200">訂單編號</th>
          <th>訂單明細</th>
          <th width="100">應付金額</th>
          <th width="100">狀態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{order.create_at}}</td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="product in order.products"
                :key="product.id"
              >{{product.product.title}} x {{product.qty}}</li>
            </ul>
          </td>
          <td>{{order.total}}</td>
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

    <!-- 商品彈窗 -->
    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center" v-for="item in tempOrder.products" :key="item.id">
        <h3>{{item.product.title}}</h3>
      </div>
    </b-modal>

    <!-- <div class="modal fade"  ref="orderModal" id="orderModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">訂單內容</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form v-if="tempOrder.total" action @submit.prevent="updateProduct">
            <div class="modal-body">
              <div class="form-row">
                <div class="col-md-4 form-group">
                  <label for>建立時間</label>
                  <p>{{tempOrder.create_at }}</p>
                </div>
                <div class="col-md-4 form-group">
                  <label for>付款狀態</label>
                  <p>
                    <span v-if="tempOrder.is_paid" class="text-primary">已付款</span>
                    <span v-else class="text-danger">尚未付款</span>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <label for>訂單明細</label>
                <table class="table">
                  <thead class="bg-light">
                    <tr>
                      <th>商品</th>
                      <td>數量</td>
                      <th width="100">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tempOrder.products" :key="item.id">
                      <td>{{item.product.title}}</td>
                      <td>{{item.qty}}</td>
                      <td class="text-right">{{item.final_total}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" class="text-right">總計：{{tempOrder.total}}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="form-group">
                <label for>姓名</label>
                <p>{{tempOrder.user.name}}</p>
              </div>
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <label for>Email</label>
                  <p>{{tempOrder.user.email}}</p>
                </div>
                <div class="col-md-6 form-group">
                  <label for>連絡電話</label>
                  <p>{{tempOrder.user.tel}}</p>
                </div>
              </div>
              <div class="form-group">
                <label for>備註</label>
                <p>{{tempOrder.message}}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> -->
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
