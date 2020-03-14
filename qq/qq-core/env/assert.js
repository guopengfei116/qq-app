import { runtimeEnvDict } from "./dict";
import { getAppEnv } from "./extract";

const APP_ENV = getAppEnv();

export const isProduction = () => runtimeEnvDict.PRODUCTION === APP_ENV;
export const isDevelopment = () => runtimeEnvDict.DEVELOPMENT === APP_ENV;
export const isTest = () => runtimeEnvDict.TEST === APP_ENV;
