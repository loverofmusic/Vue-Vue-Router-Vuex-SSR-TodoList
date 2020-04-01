import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./app.vue";

import createRouter from "./router";
import createStore from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);

// import "lib-flexible/flexible.js";
import "./assets/styles/global.styl";

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}