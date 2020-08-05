<template>
  <div id="dashboard">
    <div>
        <NavBack></NavBack>
      </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <Products></Products>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import NavBack from '../components/NavBack.vue'

export default {
  components: {
    Products,
    NavBack
  },
  methods: {
    goto (link) {
      if (this.$route.path !== link) {
        this.$router.push(link)
      }
    },
    signout () {
      const api = 'https://vue-course-api.hexschool.io/logout'
      // const api = `${process.env.VUE_APP_APIPATH}/signin`
      const vm = this
      this.$http.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/')
        }
      })
    }
  }
}
</script>
