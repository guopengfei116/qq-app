export default {
  getXxxList: [
    "get",
    "/api/Xxx",
    {
      priority: Infinity,
      engine: "crudExample"
    }
  ],

  addXxx: [
    "post",
    "/api/Xxx",
    {
      engine: "crudExample"
    }
  ],

  updateXxx: [
    "post",
    "/api/Xxx",
    {
      engine: "crudExample"
    }
  ],

  deleteXxx: [
    "delete",
    "/api/Xxx",
    {
      engine: "crudExample"
    }
  ]
};
