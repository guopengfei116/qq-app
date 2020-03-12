import Vue from "vue";
import VueRouter from "vue-router";

import { registerModule, getRoutes } from "./router-manager";
import initHook, { registerRouterHook } from "./hook-manager";

import progressHooks from "./hooks/progress";
export { registerModule, registerRouterHook };

let installHook = router => {
  registerRouterHook(progressHooks);
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

export default config => getRoute(config);
