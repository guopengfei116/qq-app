import Vue from "vue";
import App from "./App";
import bootstrap from "qq/qq-runtime";

class Mo {
  constructor(modules) {
    bootstrap(modules);
    this.store = bootstrap.createStore();
    this.router = bootstrap.createRouter();
    Mo.vue = this.vue = new Vue({
      store: this.store,
      router: this.router,
      render: h => h(App)
    });
  }

  mount(mountEl) {
    this.vue.$mount(mountEl);
    return (Mo.currentMo = this);
  }

  static getRunVue() {
    return this.vue;
  }

  static getRunStore() {
    return bootstrap.createStore();
  }

  static getRunRouter() {
    return bootstrap.createRouter();
  }
}

export default Mo;
