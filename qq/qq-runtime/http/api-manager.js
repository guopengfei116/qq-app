// { moduleName: Api{Object} }
const apiStore = {};

const registerModule = (moduleName, api) => {
  apiStore[moduleName] = { ...(apiStore[moduleName] || {}), ...api };
};

const unregisterModule = moduleName => {
  if (Array.isArray(moduleName)) {
    moduleName.forEach(item => unregisterModule(item));
  } else {
    delete apiStore[moduleName];
  }
};

const getModule = moduleName => apiStore[moduleName];

const getApi = namespace => {
  const names = namespace.split("/");

  let i = 0;
  let api = apiStore;
  while (api[names[i]]) {
    api = api[names[i]];
    i++;
  }

  if (!api || i < names.length) {
    const errorMsg = `api "${namespace}" is not found!`;
    console.error(errorMsg);
  }

  return api;
};

export { registerModule, unregisterModule, getModule, getApi };
