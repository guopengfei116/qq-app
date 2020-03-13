export default {
  name: "qqUi",
  path: "/qq/ui",
  component: () => import(/* webpackChunkName: "qqUi" */ "qq/qq-ui/view/Main")
};
