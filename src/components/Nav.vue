<template>
<div id="nav">

  <b-navbar toggleable="lg" type="dark" class="nav">
    <b-navbar-brand ><a id="home" href="#"><span @click="goto('/')"><img src="../../public/img/logo1.png"></span></a></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >

      <b-navbar-nav>
        <b-nav-item><a  href="#"><span @click="goto('/about')"><font-awesome-icon :icon="['fas', 'home']" class="fa-1x mr-1"></font-awesome-icon> 關於我們</span></a></b-nav-item>
        <b-nav-item><a  href="#"><span @click="goto('/menu')"><font-awesome-icon :icon="['fas', 'heart']" class="fa-1x mr-1"></font-awesome-icon>精選菜單</span></a></b-nav-item>
        <b-nav-item><a  href="#"><span @click="goto('/contact')"><font-awesome-icon :icon="['fas', 'flag']" class="fa-1x mr-1"></font-awesome-icon>加盟專區</span></a></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">CH</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">TW</b-dropdown-item>
          <b-dropdown-item href="#">TH</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item right><span @click="goto('/login')">店家登入</span></b-nav-item>
        <!-- <b-nav-item><a  href="#"><span @click="goto('/cart')">購物車</span></a></b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>

</div>
</template>

<script>

export default {
  components: {
    // Register your component
  },
  methods: {
    goto (link) {
      if (this.$route.path !== link) {
        this.$router.push(link)
      }
    }
  }
}

</script>
