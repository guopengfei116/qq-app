import MainLayout from "qq/qq-test/view/MainLayout";

export default [
  {
    name: "qq",
    path: "/qq",
    component: MainLayout,
    children: [
      {
        name: "qqHttp",
        path: "http",
        component: () =>
          import(/* webpackChunkName: "qqHttp" */ "qq/qq-test/view/HttpMain")
      },
      {
        name: "qqUi",
        path: "ui",
        component: () =>
          import(/* webpackChunkName: "qqUi" */ "qq/qq-test/view/UiMain")
      }
    ]
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "qqNotFound" */ "qq/qq-ui/view/page/404")
  }
];
