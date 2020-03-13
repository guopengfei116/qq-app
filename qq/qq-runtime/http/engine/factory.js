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

export default option => {
  return axios.create({ ...baseOption, ...option });
};
