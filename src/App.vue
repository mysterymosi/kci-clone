<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import "assets/bootstrap/css/bootstrap.min.css";
@import "assets/owlcarousel/owl.carousel.min.css";
@import "assets/owlcarousel/owl.theme.default.min.css";
@import "assets/font-awesome/css/font-awesome.min.css";
@import "assets/animate/animate.min.css";
@import "assets/modal-video/css/modal-video.min.css";
@import "assets/css/style.css";
</style>
