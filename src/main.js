import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/index";
import JwPagination from "jw-vue-pagination";

Vue.component("jw-pagination", JwPagination); // https://www.npmjs.com/package/jw-vue-pagination
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    this.$store.dispatch("survey");
  },
  render: (h) => h(App)
}).$mount("#app");
