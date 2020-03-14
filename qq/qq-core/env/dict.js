export const runtimeEnvDict = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
  TEST: "test"
};

export const appEnvPrefixDict = {
  [runtimeEnvDict.DEVELOPMENT]: "VUE_APP_DEV_",
  [runtimeEnvDict.PRODUCTION]: "VUE_APP_PRO_",
  [runtimeEnvDict.TEST]: "VUE_APP_TEST_"
};
