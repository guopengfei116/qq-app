import { createNamespacedHelpers } from "qq/qq-runtime/http";

const request = createNamespacedHelpers("crudExample/enums");

export const getNavMenus = async payload => {
  const res = await request("getNavMenus")(payload);
  const data = res.data.data;

  return data;
};
