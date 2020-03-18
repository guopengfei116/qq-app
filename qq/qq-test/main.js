import store from "./store";
import router from "./router";
import api from "./api";

const MODULE_NAME = "qqTest";

export default ({ registerStore, registerRouter, registerApi }) => {
  registerStore(MODULE_NAME, store);
  registerRouter(MODULE_NAME, router);
  registerApi(MODULE_NAME, api);
};
