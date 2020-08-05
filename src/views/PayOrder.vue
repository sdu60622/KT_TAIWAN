<template>
  <div id="payorder">
    <!-- Nav -->
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <a id="home" href="#"><span @click="goto('/')"><img src="../../public/img/logo1.png" style="height:50px"></span></a>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <!-- Nav 截止-->

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="col-12 mt-2">
            <h2 class="mb-4" style="color:white">顧客資料 | <span style="color:#E7C46E">Customer</span></h2>
            <div style="border:1px solid white" ></div>
          </div>

          <!-- form -->
          <ValidationObserver ref="form" v-slot="{ invalid }">
          <div class="my-5 row justify-content-center">

            <form class="col-md-6"  @submit.prevent="createOrder">
              <div class="form-group">
                  <label for="useremail">Email</label>
                  <input type="email" class="form-control" name="email" id="useremail" v-model="form.user.email" placeholder="請輸入 Email" required>
                  <span class="text-danger"></span>
              </div>

              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <input type="text" class="form-control" name="name" id="username" v-model="form.user.name" placeholder="輸入姓名">
                  <span class="text-danger">{{ errors[0]}}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="usertel">收件人電話</label>
                  <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                  <span class="text-danger">{{ errors[0]}}</span>
                </div>
              </ValidationProvider>

              <!--
              <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address" placeholder="請輸入地址">
                <span class="text-danger">地址欄位不得留空</span>
              </div> -->

              <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-danger" type="submit" :disabled="invalid">送出訂單</button>
              </div>
            </form>
          </div>
          </ValidationObserver>
          <!-- form 截止-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    goto (link) {
      if (this.$route.path !== link) {
        this.$router.push(link)
      }
    },
    createOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.$http.post(url, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/orderCheck/${response.data.orderId}`)
              console.log('訂單已建立', response)
              vm.isLoading = false
            } else {
              console.log('欄位不完整')
            }
          })
        }
      })
    }
  }

}
</script>
