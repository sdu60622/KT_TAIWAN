
<template>
  <div id="app">

        <!-- <vue-page-transition name="fade"> -->

            <router-view class="h-100 w-100"></router-view>

        <!-- </vue-page-transition> -->

    </div>
</template>

<script>

export default {
  components: {
  },
  created () {
    // const api = 'https://vue-course-api.hexschool.io/api/kt_taiwan/products'
    // const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`
    // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH)
    // this.$http.get(api).then((response) => {
    //   console.log(response.data)
    // })
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
