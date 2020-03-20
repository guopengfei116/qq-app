import Vue from "vue";
import VueRouter from "vue-router";

import progressHooks from "./hooks/progress";
import { registerModule, getRoutes } from "./router-manager";
import initHook, { registerRouterHook } from "./hook-manager";

let installHook = router => {
  registerRouterHook("qq", progressHooks);
  initHook(router);
};

let getRoute = (config = {}) => {
  Vue.use(VueRouter);

  const routes = [...getRoutes(), ...(config.routes || [])];
  const router = new VueRouter({
    mode: "history",
    base: "",
    ...config,
    routes
  });

  installHook(router);

  getRoute = () => router;

  return router;
};

export { registerModule, registerRouterHook };
export default config => getRoute(config);
