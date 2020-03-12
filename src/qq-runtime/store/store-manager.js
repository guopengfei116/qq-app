// { moduleName: store }
const rStore = {};

const registerModule = (moduleName, store) => {
  rStore[moduleName] = store;
};

const getStore = () => rStore;

const getStoreModule = moduleName => rStore[moduleName];

export { registerModule, getStore, getStoreModule };

export default store => {
  Object.entries(rStore).forEach(([moduleName, moduleStore]) => {
    store.registerModule(moduleName, moduleStore);
  });
};
