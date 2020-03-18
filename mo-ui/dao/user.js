import { createNamespacedHelpers } from "qq/qq-runtime/http";

const request = createNamespacedHelpers("moUi/user");

export const isAdmin = async payload => {
  const res = await request("isAdmin")(payload);
  const isAdmin = res.data.data;

  return isAdmin;
};
