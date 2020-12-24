import vueRouter from "vue-router";

import UserMain from "./components/UserMain";
import UserAuth from "./components/UserAuth";
import SearchProduct from "./components/SearchProduct";
import SearchClient from "./components/SearchClient";
import App from "./App";

const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "root",
      component: App
    },
    {
      path: "/user/:username",
      name: "user_main",
      component: UserMain
    },
    {
      path: "/user/auth",
      name: "user_auth",
      component: UserAuth
    },
    {
      path: "/user/product",
      name: "search_product",
      component: SearchProduct
    },
    {
      path: "/user/client",
      name: "search_client",
      component: SearchClient
    }
  ]
});

export default router;
