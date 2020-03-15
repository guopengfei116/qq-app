import router from "./router";
import store from "./store";
import api from "./api";
import httpEngine from "./api/engine";

const MODULE_NAME = "crudExample";
export default ({
  registerRouter,
  registerStore,
  registerApi,
  registerHttpEngine
}) => {
  registerRouter(MODULE_NAME, router);
  registerStore(MODULE_NAME, store);
  registerApi(MODULE_NAME, api);
  registerHttpEngine(MODULE_NAME, httpEngine);
};
