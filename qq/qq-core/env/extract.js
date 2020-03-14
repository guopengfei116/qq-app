import { appEnvPrefixDict } from "./dict";

const processEnv = process.env;
const { NODE_ENV, VUE_APP_ENV } = processEnv;

// NODE_ENV
export const getNodeEnv = () => NODE_ENV;

// VUE_APP_ENV
export const getAppEnv = () => VUE_APP_ENV;

// VUE_APP_${type}_${name}
export const getVueAppEnv = name => {
  const envName = `${appEnvPrefixDict[VUE_APP_ENV]}${name}`;
  return processEnv[envName];
};

// all
export const getProcessEnv = name => {
  return processEnv[name];
};
