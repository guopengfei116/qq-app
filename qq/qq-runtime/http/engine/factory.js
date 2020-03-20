import axios from "axios";

const baseOption = {
  baseURL: "/",
  timeout: 20000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  },
  validateStatus: status => (status >= 200 && status < 300) || status === 304
};

export default optionHook => {
  let option = {};

  if (typeof optionHook === "function") {
    option = optionHook(baseOption);
  } else {
    option = { ...baseOption, ...(optionHook || {}) };
  }

  return axios.create(option);
};
