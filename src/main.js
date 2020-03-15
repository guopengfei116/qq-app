import "qq/qq-ui/assets/style/reset.less";
import Vue from "vue";
import App from "./App";
import QBootstrap from "qq/qq-runtime";
import modules from "./modules";

QBootstrap(modules);

const isProduction = process.env.VUE_APP_ENV === "production";
Vue.config.performance = !isProduction;
Vue.config.devtools = !isProduction;
Vue.config.productionTip = isProduction;
Vue.config.productionTip = false;

new Vue({
  store: QBootstrap.createStore(),
  router: QBootstrap.createRouter(),
  render: h => h(App)
}).$mount("#app");
