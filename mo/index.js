import Vue from "vue";
import App from "./App";
import bootstrap from "qq/qq-runtime";

class Mo {
  constructor(modules) {
    bootstrap(modules);
    this.vue = new Vue({
      store: bootstrap.createStore(),
      router: bootstrap.createRouter(),
      render: h => h(App)
    });
  }

  mount(mountEl) {
    this.vue.$mount(mountEl);
    return (Mo.currentMo = this);
  }

  getVue() {
    return this.vue;
  }

  getStore() {
    return bootstrap.createStore();
  }

  getRouter() {
    return bootstrap.createRouter();
  }
}

export default Mo;
