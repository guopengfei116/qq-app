import Vue from "vue";
import Mo from "mo";
import modules from "./modules";

const isProduction = process.env.VUE_APP_ENV === "production";
Vue.config.performance = !isProduction;
Vue.config.devtools = !isProduction;
Vue.config.productionTip = isProduction;

new Mo(modules).mount("#app");
