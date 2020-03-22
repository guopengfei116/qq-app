import { clone } from "lodash";
import { registerHttpEngine, getEngine } from "./engine-manager";
import { registerModule, getApi } from "./api-manager";
import {
  beautifyData,
  setParams,
  extractQuery,
  getPayloadConfig
} from "./api/data";

/**
 * 创建api执行器
 * @return Function api executor
 * */
function executorFactory(namespace) {
  const api = getApi(namespace);
  const [method, url, other = {}] = api;
  const { engine, priority, request, response } = other;

  // executor
  return (data, config) => {
    data = clone(data);
    let { queries = [] } = other;
    const urlI = setParams(url, data);

    // data pre-processing
    data = beautifyData(data, request && request.style);
    queries = beautifyData(queries, request && request.style);
    const queryI = extractQuery(queries, data);
    const configI = getPayloadConfig(method, data, queryI);
    const engineI = getEngine(engine);

    const result = engineI({
      method,
      url: urlI,
      ...config,
      ...configI
    });

    // data post-processing
    return result.then(rsp => {
      rsp.data = beautifyData(rsp.data, response && response.style);
      return rsp;
    });
  };
}

/**
 * 创建api执行器，但是绑定了命名空间
 * @return Function api executor
 * */
const createNamespacedHelpers = prePath => sufPath => {
  const fullPath = [prePath, sufPath].filter(Boolean).join("/");
  return executorFactory(fullPath);
};

export {
  registerModule,
  registerHttpEngine,
  getEngine as getHttpEngine,
  createNamespacedHelpers
};

export default executorFactory;
