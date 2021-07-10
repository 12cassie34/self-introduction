import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";

Vue.config.productionTip = false;
Vue.use(axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
