export default {
  getCamelTeam: [
    "get",
    "/:patha/base/getTeam",
    {
      engine: "lala",
      priority: Infinity,
      queries: ["a", "b"],
      request: {
        style: "kebab"
      },
      response: {
        style: "camel"
      }
    }
  ],
  getSnakeTeam: [
    "get",
    "/api/:pathb/getTeam",
    {
      engine: "lala",
      priority: Infinity,
      queries: ["a", "b"],
      request: {
        style: "camel"
      },
      response: {
        style: "snake"
      }
    }
  ],
  getKebabTeam: [
    "get",
    "/api/base/:pathc",
    {
      engine: "lala",
      priority: Infinity,
      queries: ["a", "b"],
      request: {
        style: "snake"
      },
      response: {
        style: "kebab"
      }
    }
  ],
  getNavMenus: ["get", "/api/menu/list"]
};
