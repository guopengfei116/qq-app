import Vue from "vue";
import Vuex from "vuex";

import initModule, { registerModule } from "./store-manager";
export { registerModule };

let getStore = (config = {}) => {
  Vue.use(Vuex);

  const store = new Vuex.Store({
    ...config
  });

  initModule(store);

  getStore = () => store;

  return store;
};

export default config => getStore(config);
