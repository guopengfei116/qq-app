import { createNamespacedHelpers } from "qq/qq-runtime/http";
import menuApiData from "./menus";

const request = createNamespacedHelpers("qqTest/base");

export const getCamelTeam = async payload => {
  const res = await request("getCamelTeam")(payload);
  const data = res.data.data;

  return data;
};

export const getSnakeTeam = async payload => {
  const res = await request("getSnakeTeam")(payload);
  const data = res.data.data;

  return data;
};

export const getKebabTeam = async payload => {
  const res = await request("getKebabTeam")(payload);
  const data = res.data.data;

  return data;
};

export const getNavMenus = async payload => {
  // const res = await request("getNavMenus")(payload);
  // const data = res.data.data;

  // return data;

  return menuApiData.data;
};
