import createStore from "./store";
import createRouter from "./router";

import { registerModule as registerStore } from "./store";
import { registerModule as registerRouter, registerRouterHook } from "./router";
import { registerModule as registerApi, registerHttpEngine } from "./http";

function bootstrap(modules) {
  modules.forEach(module => {
    module({
      registerStore,
      registerRouter,
      registerRouterHook,
      registerApi,
      registerHttpEngine
    });
  });
}

bootstrap.createStore = createStore;
bootstrap.createRouter = createRouter;

export default bootstrap;
