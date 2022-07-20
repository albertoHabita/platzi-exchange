import Vue from "vue";
import Router from "vue-router";

import HomeView from "@/views/Home";
import ErrorView from "@/views/Error";
import AboutView from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },

    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },

    {
      path: "*",
      name: "error",
      component: ErrorView,
    },
  ],
});
