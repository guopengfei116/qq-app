import Vue from "vue";
import App from "./App";
import "qq/qq-ui/assets/style/reset.less";
import "./plugins/element.js";
import QqBootstrap from "qq/qq-runtime";
import modules from "./modules";

QqBootstrap(modules);

const isProduction = process.env.VUE_APP_ENV === "production";
Vue.config.performance = !isProduction;
Vue.config.devtools = !isProduction;
Vue.config.productionTip = isProduction;

new Vue({
  store: QqBootstrap.createStore(),
  router: QqBootstrap.createRouter(),
  render: h => h(App)
}).$mount("#app");
