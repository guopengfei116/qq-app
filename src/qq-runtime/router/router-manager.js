import { toArray } from "../lib/util";

// { moduleName: routes{Array<Route>} }
const routeStore = {};

const registerModule = (moduleName, moduleRouters) => {
  routeStore[moduleName] = toArray(moduleRouters);
};

// flat routers
const getRoutes = () =>
  Object.values(routeStore).reduce((all, moduleRouters) => {
    all.push(...moduleRouters);
    return all;
  }, []);

const getRouteModule = moduleName => routeStore[moduleName];

export { registerModule, getRoutes, getRouteModule };
