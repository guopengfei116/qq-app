export default {
  name: "qqUi",
  path: "/qq/ui",
  component: () => import(/* webpackChunkName: "qqUi" */ "@/qq-ui/view/Main")
};
