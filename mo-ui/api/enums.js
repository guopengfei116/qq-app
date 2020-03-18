export const getTeamList = [
  "get",
  "/api/base/getTeam",
  {
    priority: Infinity
  }
];

export const getApplicationList = [
  "get",
  "/api/application/getApplication",
  {
    priority: Infinity
  }
];

export const getAppByTeam = [
  "get",
  "/api/base/getAppNameByTeamId",
  {
    priority: Infinity
  }
];
