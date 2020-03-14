import regDict from "./reg-dict";

// 正则表达式转换为test函数
const testerDict = (() => {
  const testerMap = {};
  for (let key in regDict) {
    testerMap[key] = value => regDict[key].test(value);
  }
  return testerMap;
})();

// 验证器
const validatorDict = {
  required(value) {
    return !!value || value === 0;
  },
  length(value, min, max) {
    return value.length > min && value.length < max;
  },
  ...testerDict
};

export default validatorDict;
