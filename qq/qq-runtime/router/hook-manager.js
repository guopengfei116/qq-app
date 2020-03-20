import { toArray } from "qq/qq-core/object/recombination";

// { moduleName: hook{pointcut, executors} }
const hookStore = {};

const getUid = (() => {
  let uid = 0;
  return name => {
    uid++;
    return name ? `${name}_${uid}` : `auto_${uid}`;
  };
})();

const registerRouterHook = (moduleName, hooks) => {
  hooks = toArray(hooks);
  hooks.forEach(hook => (hookStore[getUid(moduleName)] = hook));
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
