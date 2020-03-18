import { createNamespacedHelpers } from "mo/http";
import { Enums } from "mo/class";

const request = createNamespacedHelpers("moUi/enums");

export const getTeamList = async payload => {
  const res = await request("getTeamList")(payload);
  const teamList = res.data.data || [];

  return Enums.create(teamList, "teamName", "id");
};

export const getApplicationList = async payload => {
  const res = await request("getApplicationList")(payload);
  const appList = res.data.data || [];

  return Enums.create(appList, "applicationName", "applicationId");
};

export const getAppByTeam = async payload => {
  const res = await request("getAppByTeam")(payload);
  let appList = res.data.data || [];

  return Enums.create(appList);
};
