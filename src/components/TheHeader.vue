<template>
	<header id="header" class="header header-hide">
    <div class="container">

      <div id="logo" class="pull-left">
        <h1><a href="#body" class="scrollto"><span>Cryptan</span>CI</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>-->
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">

          <li>
            <!-- <a v-if="route === 'Home'" href="#hero">Home</a> -->
            <router-link to="/">Home</router-link>
          </li>
          <li><router-link :to="{ name: 'About' }">About</router-link></li>
          <li><router-link to="/investment-packages">Investment Packages</router-link></li>
          <li><router-link to="/cryptocurrency-list">Cryptocurrency List</router-link></li>
          <li><router-link to="/faqs">FAQs</router-link></li>
          <li><router-link to="/testimonies">Testimony</router-link></li>
          <li><router-link to="/support">Support</router-link></li>
          <li><router-link to="/login"><i class="fa fa-user"></i> Login/Register</router-link></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->
</template>

<script>
export default {
  data() {
    return {
      route: this.$route.name
    }
  },

  mounted () {
    console.log("route: ", this.route);
  }
}
</script>