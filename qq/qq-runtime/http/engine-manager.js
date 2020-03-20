import engineFactory from "./engine/factory";

const engineManager = {
  fetch() {
    return engineFactory();
  },

  register(name, optionHook) {
    const prev = this.fetch;
    const engine = engineFactory(optionHook);

    this.fetch = useName => {
      if (name === useName) {
        return engine;
      } else {
        return prev.call(this, useName);
      }
    };
  },

  invade(name, outcast) {
    const prev = this.fetch;
    this.fetch = useName => {
      if (name === useName) {
        return outcast;
      } else {
        return prev.call(this, useName);
      }
    };
  }
};

export const registerHttpEngine = engineManager.register.bind(engineManager);
export const invadeHttpEngine = engineManager.invade.bind(engineManager);
export const getEngine = (...arg) => engineManager.fetch(...arg);

export default engineManager;
