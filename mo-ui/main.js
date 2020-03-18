import "./register";
import api from "./api";

const MODULE_NAME = "moUi";
export default ({ registerApi }) => {
  registerApi(MODULE_NAME, api);
};
