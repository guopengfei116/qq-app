import store from "./store";
import router from "./router";

const MODULE_NAME = "qqUi";

export default ({ registerStore, registerRouter }) => {
  registerStore(MODULE_NAME, store);
  registerRouter(MODULE_NAME, router);
};
