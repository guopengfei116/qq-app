import Vue from "vue";
import App from "./App";
import modules from "./modules";
import registerModule, { createStore, createRouter } from "@/qq-runtime";

registerModule(modules);

const isProduction = process.env.VUE_APP_ENV === "production";
Vue.config.performance = !isProduction;
Vue.config.devtools = !isProduction;
Vue.config.productionTip = isProduction;
Vue.config.productionTip = false;

new Vue({
  store: createStore(),
  router: createRouter(),
  render: h => h(App)
}).$mount("#app");
