import { clone } from "lodash";
import {
  keyCamelify,
  keySnakeify,
  keyKebabify
} from "qq/qq-core/object/mutation";

const styleDict = {
  camel: keyCamelify,
  snake: keySnakeify,
  kebab: keyKebabify
};

export const beautifyData = (data, style) => {
  if (!style) {
    return clone(data);
  }

  if (!styleDict[style]) {
    const errorMsg = `
      未知的数据转换风格: ${style}
      数据源: ${JSON.stringify(data)}
    `;
    console.error(errorMsg);
  }

  return styleDict[style](data);
};

const pathParamsReg = /\/:([\w-]+)/g;
export const setParams = (uri, data) => {
  return uri.replace(pathParamsReg, (matched, name) => {
    const param = data[name];

    if (!param) {
      const errorMsg = `
        未匹配路径参数: ${name}
        问题uri: ${uri},
        数据源: ${JSON.stringify(data)}
      `;
      console.error(errorMsg);
    }

    data[name] = null;
    return `/${param}`;
  });
};

export const extractQuery = (queries = [], data = {}) => {
  const query = {};

  queries.forEach(name => {
    const value = data[name];

    if (!value) {
      const errorMsg = `
        未匹配查询参数: ${name}
        数据源: ${JSON.stringify(data)}
      `;
      console.error(errorMsg);
    }

    query[name] = value;
    data[name] = null;
  });

  return query;
};

const bodyMethods = ["post", "put", "patch"];
export function getPayloadConfig(method, data, query) {
  return bodyMethods.includes(method)
    ? { data, params: query }
    : { params: { ...data, ...query } };
}
