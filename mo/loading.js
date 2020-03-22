import { Loading } from "element-ui";

const LOADING_STYLE = {
  target: ".app_container_main",
  spinner: "el-icon-loading",
  background: "rgba(255, 255, 255, 0.7)"
};

const loadingSingle = {
  instance: null,
  open(target = ".app_container_main") {
    const option = { ...LOADING_STYLE, target };
    return (loadingSingle.instance = Loading.service(option));
  },
  close() {
    loadingSingle.instance && loadingSingle.instance.close();
  }
};

export default loadingSingle;
