export default {
  getNavMenus: [
    "get",
    "/api/menus",
    {
      engine: "crudExample"
    }
  ],

  // 最简配置
  getXXX: ["get", "/api/xxx"],

  // 复杂配置
  upXXX: [
    // Method
    "post",
    // Path: 可使用参数表达式
    "/api/xxx/:id",
    // 高级配置
    {
      // 使用的ajax引擎，不配置使用默认引擎
      engine: "xxx",
      // 请求优先级，并发多请求时大的优先发送
      priority: Infinity,
      // 是否需要query参数，默认情况下post、put采用body形式发送数据，这里可以把指定参数转为query
      queries: ["not"],
      request: {
        // 数据格式转为“蛇形”发送: { prop_exam: "snake" }
        dataStyle: "snake"
      },
      response: {
        // 数据格式转为“驼峰形”使用: { propExam: "camel" }
        dataStyle: "camel"
      }
    }
  ]
};
