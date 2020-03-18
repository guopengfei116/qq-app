import { kebabCase } from "lodash";
import Vue from "vue";

import "qq/qq-ui/assets/style/reset.less";
import "./plugins/element.js";
import * as QqUi from "qq/qq-ui";
import * as MoUi from "./view";

// QqUi 组件全局注册为 MoUi 组件
Object.keys(QqUi).forEach(name => {
  const kebabName = kebabCase(`mo${name}`);
  Vue.component(kebabName, QqUi[name]);
});

// 全局注册 MoUi 组件
Object.keys(MoUi).forEach(name => {
  const kebabName = kebabCase(`mo${name}`);
  Vue.component(kebabName, MoUi[name]);
});
