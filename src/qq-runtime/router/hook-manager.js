import { toArray } from "../lib/util";

// { name: hook{name, pointcut, executors} }
const hookStore = {};

const registerRouterHook = hooks => {
  hooks = toArray(hooks);
  hooks.forEach(hook => (hookStore[hook.name] = hook));
};

const getHooks = () => Object.values(hookStore);

const getHook = name => hookStore[name];

export { registerRouterHook, getHooks, getHook };

export default router => {
  getHooks().forEach(({ pointcut, executors }) => {
    executors = toArray(executors);
    executors.forEach(executor => router[pointcut](executor));
  });
};
