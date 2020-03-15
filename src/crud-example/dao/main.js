import { createNamespacedHelpers } from "qq/qq-runtime/http";

const request = createNamespacedHelpers("crudExample/main");

export const getXxxList = async payload => {
  const res = await request("getXxxList")(payload);
  const xxxList = res.data.results;

  return xxxList;
};

export const getXxx = async payload => {
  const res = await request("getXxx")(payload);
  const data = res.data.data;

  return data;
};

export const addXxx = async payload => {
  const res = await request("addXxx")(payload);
  const data = res.data.data;

  return data;
};

export const updateXxx = async payload => {
  const res = await request("updateXxx")(payload);
  const data = res.data.data;

  return data;
};

export const deleteXxx = async payload => {
  const res = await request("deleteXxx")(payload);
  const data = res.data.data;

  return data;
};
