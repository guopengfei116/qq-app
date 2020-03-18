import Vue from "vue";
import Vuex from "vuex";
import initModule, { registerModule } from "./store-manager";

let getStore = (config = {}) => {
  Vue.use(Vuex);

  const store = new Vuex.Store({
    ...config
  });

  initModule(store);

  getStore = () => store;

  return store;
};

export { registerModule };
export default config => getStore(config);
