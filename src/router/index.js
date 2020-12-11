import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/investment-packages",
    name: "InvestmentPackages",
    component: () =>
      import(/* webpackChunkName: "investmentPackages" */ "../views/InvestmentPackages.vue")
  },
  {
    path: "/cryptocurrency-list",
    name: "CryptocurrencyList",
    component: () =>
      import(/* webpackChunkName: "cryptocurrencyList" */ "../views/CryptocurrencyList.vue")
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/FAQs.vue")
  },
  {
    path: "/testimonies",
    name: "Testimonies",
    component: () =>
      import(/* webpackChunkName: "testimonies" */ "../views/Testimonies.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import(/* webpackChunkName: "testimonies" */ "../views/Support.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/user-wallet",
    name: "UserWallet",
    component: () =>
      import(/* webpackChunkName: "user-wallet" */ "../views/UserWallet.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
