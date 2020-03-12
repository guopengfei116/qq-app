import createStore, { registerModule as registerStore } from "./store";
import createRouter, {
  registerModule as registerRouter,
  registerRouterHook
} from "./router";
export { createStore, createRouter };

export default modules => {
  modules.forEach(module => {
    module({ registerStore, registerRouter, registerRouterHook });
  });
};
